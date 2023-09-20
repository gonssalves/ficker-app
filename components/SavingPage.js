import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NotifyOverlay from "./NotifyOverlay";
import CardContainer1 from "./CardContainer1";
import FormContainer2 from "./FormContainer2";
import FormContainer1 from "./FormContainer1";
import FormContainer from "./FormContainer";
import ContainerCard from "./ContainerCard";
import BonusContainer from "./BonusContainer";
import FormContainer4 from "./FormContainer4";
import FormNewSaving from "./FormNewSaving";
import ContainerPaginationBar from "./ContainerPaginationBar";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SavingPage = () => {
  const navigation = useNavigation();
  const [notification1IconVisible, setNotification1IconVisible] =
    useState(false);
  const [buttonAddContainerVisible, setButtonAddContainerVisible] =
    useState(false);

  const openNotification1Icon = useCallback(() => {
    setNotification1IconVisible(true);
  }, []);

  const closeNotification1Icon = useCallback(() => {
    setNotification1IconVisible(false);
  }, []);

  const openButtonAddContainer = useCallback(() => {
    setButtonAddContainerVisible(true);
  }, []);

  const closeButtonAddContainer = useCallback(() => {
    setButtonAddContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.savingPage}>
        <View style={styles.component12Wrapper}>
          <View>
            <CardContainer1
              onFramePressablePress={() => navigation.navigate("HomePage")}
            />
            <FormContainer2
              iconImageUrl={require("../assets/bolsadedinheiro-1.png")}
              operationLabels="Entradas"
              onComponent3Press={() => navigation.navigate("IncomePage")}
            />
            <FormContainer2
              iconImageUrl={require("../assets/despesas-11.png")}
              operationLabels="Saídas"
              onComponent3Press={() => navigation.navigate("ExpensesPage")}
            />
            <FormContainer1
              dimensionCode={require("../assets/cofrinho-11.png")}
              transactionCode="Cofrinho"
              propBackgroundColor="#e32d40"
              propColor="#fff"
            />
            <FormContainer2
              iconImageUrl={require("../assets/analise-1.png")}
              operationLabels="Análises"
              onComponent3Press={() => navigation.navigate("AnalyticsPage")}
            />
            <FormContainer2
              iconImageUrl={require("../assets/perfil-1-1.png")}
              operationLabels="Meu Perfil"
              onComponent3Press={() => navigation.navigate("MyProfilePage")}
            />
            <FormContainer />
          </View>
        </View>
        <ContainerCard onNotification1Press={openNotification1Icon} />
        <View style={styles.table}>
          <View style={styles.tableBody}>
            <BonusContainer
              transactionDetails="Reserva de Emergência"
              transactionDate="07 Mar, 2023"
              transactionAmount=" -R$70.00"
              propMarginTop="unset"
              propColor="#e32d40"
            />
            <BonusContainer
              transactionDetails="Viajem"
              transactionDate="01 Mar, 2023"
              transactionAmount=" R$168.90"
              propMarginTop={5}
              propColor="#08807b"
            />
          </View>
          <FormContainer4 componentDescription="Objetivo" />
        </View>
        <Text style={styles.cofrinho}>Cofrinho</Text>
        <View style={[styles.searchBaruihut, styles.searchPosition]}>
          <View style={styles.objetivoParent}>
            <Text style={styles.objetivoTypo}>Objetivo</Text>
            <Image
              style={styles.setaParaBaixo1Icon}
              contentFit="cover"
              source={require("../assets/setaparabaixo-1.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.buttonAdd, styles.buttonLayout]}
          onPress={openButtonAddContainer}
        >
          <View style={[styles.buttonAddChild, styles.buttonLayout]} />
          <Text style={styles.adicionarNova}>Adicionar nova</Text>
        </Pressable>
        <ContainerPaginationBar
          iconId={require("../assets/iconarrowdoubleleft.png")}
          iconImageUrl={require("../assets/iconarrowdoubleright.png")}
        />
        <View style={[styles.searchBaruihut1, styles.searchPosition]}>
          <View style={styles.swmIconsOutlineSearchParent}>
            <Image
              style={styles.swmIconsOutlineSearch}
              contentFit="cover"
              source={require("../assets/swm-icons--outline--search.png")}
            />
            <Text style={[styles.procurePorObjetivo, styles.objetivoTypo]}>
              Procure por objetivo
            </Text>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={notification1IconVisible}
      >
        <View style={styles.notification1IconOverlay}>
          <Pressable
            style={styles.notification1IconBg}
            onPress={closeNotification1Icon}
          />
          <NotifyOverlay onClose={closeNotification1Icon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={buttonAddContainerVisible}
      >
        <View style={styles.buttonAddContainerOverlay}>
          <Pressable
            style={styles.buttonAddContainerBg}
            onPress={closeButtonAddContainer}
          />
          <FormNewSaving onClose={closeButtonAddContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  searchPosition: {
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    top: 90,
    backgroundColor: Color.neutral10,
    position: "absolute",
  },
  buttonLayout: {
    height: 38,
    width: 110,
    position: "absolute",
  },
  objetivoTypo: {
    color: Color.ndTextColor,
    fontFamily: FontFamily.regular12,
    flex: 1,
    lineHeight: 18,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
  },
  notification1IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  notification1IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  component12Wrapper: {
    left: 1,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_79xl,
    paddingRight: Padding.p_23xl,
    paddingBottom: Padding.p_79xl,
    flexDirection: "row",
    backgroundColor: Color.neutral10,
    top: 0,
    position: "absolute",
    height: 1024,
  },
  tableBody: {
    top: 69,
    paddingHorizontal: Padding.p_24xl,
    paddingVertical: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  table: {
    top: 159,
    left: 251,
    width: 1164,
    height: 202,
    position: "absolute",
    overflow: "hidden",
  },
  cofrinho: {
    top: 98,
    left: 275,
    fontSize: FontSize.semibold18_size,
    color: Color.textPrimaryColor,
    textAlign: "left",
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    position: "absolute",
  },
  setaParaBaixo1Icon: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
  objetivoParent: {
    width: 90,
    alignItems: "center",
    flexDirection: "row",
  },
  searchBaruihut: {
    left: 1156,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_2xl,
    paddingBottom: Padding.p_3xs,
    width: 110,
    justifyContent: "center",
  },
  buttonAddContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonAddContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  buttonAddChild: {
    backgroundColor: Color.pefitra,
    borderRadius: Border.br_5xs,
    height: 38,
    left: 0,
    top: 0,
  },
  adicionarNova: {
    top: 9,
    color: Color.neutral10,
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.regular12_size,
    width: 110,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  buttonAdd: {
    left: 1305,
    height: 38,
    top: 90,
  },
  swmIconsOutlineSearch: {
    width: 16,
    height: 16,
  },
  procurePorObjetivo: {
    marginLeft: 8,
  },
  swmIconsOutlineSearchParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  searchBaruihut1: {
    left: 939,
    width: 209,
    padding: Padding.p_3xs,
  },
  savingPage: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 1440,
    overflow: "hidden",
    height: 1024,
  },
});

export default SavingPage;
