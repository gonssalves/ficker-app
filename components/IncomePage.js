import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NotifyOverlay from "./NotifyOverlay";
import CardContainer1 from "./CardContainer1";
import FormContainer1 from "./FormContainer1";
import FormContainer2 from "./FormContainer2";
import FormContainer from "./FormContainer";
import ContainerCard from "./ContainerCard";
import FormEditIncome from "./FormEditIncome";
import BonusContainer from "./BonusContainer";
import FormContainer4 from "./FormContainer4";
import FormNewIncome from "./FormNewIncome";
import ContainerPaginationBar from "./ContainerPaginationBar";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const IncomePage = () => {
  const navigation = useNavigation();
  const [notification1IconVisible, setNotification1IconVisible] =
    useState(false);
  const [edit1IconVisible, setEdit1IconVisible] = useState(false);
  const [buttonAddContainerVisible, setButtonAddContainerVisible] =
    useState(false);

  const openNotification1Icon = useCallback(() => {
    setNotification1IconVisible(true);
  }, []);

  const closeNotification1Icon = useCallback(() => {
    setNotification1IconVisible(false);
  }, []);

  const openEdit1Icon = useCallback(() => {
    setEdit1IconVisible(true);
  }, []);

  const closeEdit1Icon = useCallback(() => {
    setEdit1IconVisible(false);
  }, []);

  const openButtonAddContainer = useCallback(() => {
    setButtonAddContainerVisible(true);
  }, []);

  const closeButtonAddContainer = useCallback(() => {
    setButtonAddContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.incomePage}>
        <View style={[styles.component12Wrapper, styles.searchBaruihutBg]}>
          <View>
            <CardContainer1
              onFramePressablePress={() => navigation.navigate("HomePage")}
            />
            <FormContainer1
              dimensionCode={require("../assets/bolsadedinheiro-12.png")}
              transactionCode="Entradas"
            />
            <FormContainer2
              iconImageUrl={require("../assets/despesas-11.png")}
              operationLabels="Saídas"
              onComponent3Press={() => navigation.navigate("ExpensesPage")}
            />
            <FormContainer2
              iconImageUrl={require("../assets/cofrinho-1.png")}
              operationLabels="Cofrinho"
              onComponent3Press={() => navigation.navigate("SavingPage")}
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
            <View style={styles.tableCellRow}>
              <View style={styles.tableCell}>
                <Pressable style={styles.edit1} onPress={openEdit1Icon}>
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/edit-11.png")}
                  />
                </Pressable>
              </View>
              <View style={[styles.tableCellName, styles.tableSpaceBlock]}>
                <Text style={[styles.name, styles.nameTypo]}>Salário</Text>
              </View>
              <View style={[styles.tableCellName, styles.tableSpaceBlock]}>
                <Text style={[styles.name, styles.nameTypo]}>01 Mar, 2023</Text>
              </View>
              <View style={[styles.tableCellAmount, styles.tableSpaceBlock]}>
                <Text style={[styles.amount, styles.nameTypo]}> R$1827.90</Text>
              </View>
            </View>
            <BonusContainer
              transactionDetails="Bônus"
              transactionDate="08 Feb, 2023"
              transactionAmount=" R$268.90"
            />
          </View>
          <FormContainer4 componentDescription="Descrição" />
        </View>
        <Text style={styles.entradas}>Entradas</Text>
        <View style={[styles.searchBaruihut, styles.searchBaruihutBg]}>
          <View style={styles.swmIconsOutlineSearchParent}>
            <Image
              style={styles.swmIconsOutlineSearch}
              contentFit="cover"
              source={require("../assets/swm-icons--outline--search.png")}
            />
            <Text style={styles.procurePorDescrio}>Procure por descrição</Text>
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
          iconId={require("../assets/iconarrowdoubleleft2.png")}
          iconImageUrl={require("../assets/iconarrowdoubleright1.png")}
        />
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

      <Modal animationType="fade" transparent visible={edit1IconVisible}>
        <View style={styles.edit1IconOverlay}>
          <Pressable style={styles.edit1IconBg} onPress={closeEdit1Icon} />
          <FormEditIncome onClose={closeEdit1Icon} />
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
          <FormNewIncome onClose={closeButtonAddContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  searchBaruihutBg: {
    backgroundColor: Color.neutral10,
    position: "absolute",
  },
  tableSpaceBlock: {
    marginLeft: 12,
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    backgroundColor: Color.neutral10,
  },
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  buttonLayout: {
    height: 38,
    width: 110,
    position: "absolute",
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
    top: 0,
    height: 1024,
  },
  edit1IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  edit1IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  edit1: {
    width: 18,
    height: 18,
  },
  tableCell: {
    paddingHorizontal: Padding.p_18xl,
    paddingVertical: Padding.p_4xl,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    backgroundColor: Color.neutral10,
  },
  name: {
    color: Color.neutral90,
  },
  tableCellName: {
    width: 419,
  },
  amount: {
    color: Color.colorTeal,
  },
  tableCellAmount: {
    width: 118,
  },
  tableCellRow: {
    flexDirection: "row",
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
    width: 1170,
    height: 202,
    position: "absolute",
    overflow: "hidden",
  },
  entradas: {
    top: 98,
    left: 275,
    fontSize: FontSize.semibold18_size,
    color: Color.textPrimaryColor,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  swmIconsOutlineSearch: {
    width: 16,
    height: 16,
  },
  procurePorDescrio: {
    color: Color.ndTextColor,
    marginLeft: 8,
    lineHeight: 18,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    flex: 1,
  },
  swmIconsOutlineSearchParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  searchBaruihut: {
    right: 174,
    width: 209,
    padding: Padding.p_3xs,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    top: 90,
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
    left: 0,
    top: 0,
  },
  adicionarNova: {
    top: 9,
    color: Color.neutral10,
    textAlign: "center",
    width: 110,
    lineHeight: 18,
    fontSize: FontSize.regular12_size,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  buttonAdd: {
    left: 1305,
    top: 90,
  },
  incomePage: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 1440,
    overflow: "hidden",
    height: 1024,
  },
});

export default IncomePage;
