import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NotifyOverlay from "./NotifyOverlay";
import CardContainer1 from "./CardContainer1";
import FormContainer2 from "./FormContainer2";
import FormContainer1 from "./FormContainer1";
import FormContainer from "./FormContainer";
import ContainerCard from "./ContainerCard";
import ProfileForm from "./ProfileForm";
import FormSenha from "./FormSenha";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const MyProfilePage = () => {
  const navigation = useNavigation();
  const [notification1IconVisible, setNotification1IconVisible] =
    useState(false);

  const openNotification1Icon = useCallback(() => {
    setNotification1IconVisible(true);
  }, []);

  const closeNotification1Icon = useCallback(() => {
    setNotification1IconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.myProfilePage}>
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
            <FormContainer1
              dimensionCode={require("../assets/perfil-1-11.png")}
              transactionCode="Meu Perfil"
              propBackgroundColor="#e32d40"
              propColor="#fff"
            />
            <FormContainer />
          </View>
        </View>
        <ContainerCard onNotification1Press={openNotification1Icon} />
        <Image
          style={styles.profileImageIcon}
          contentFit="cover"
          source={require("../assets/profile-image1.png")}
        />
        <Text style={styles.meuPerfil}>Meu Perfil</Text>
        <ProfileForm userImageUrl="Nome" contactName="Hawkins Maru" />
        <ProfileForm
          userImageUrl="E-mail"
          contactName="hawkinsmaru@gmail.com"
          propTop={265}
        />
        <FormSenha passwordInputLabel="Senha" />
        <FormSenha
          passwordInputLabel="Confirma senha"
          propTop={476}
          propWidth={121}
        />
        <View style={[styles.buttonAdd, styles.buttonLayout1]}>
          <View style={[styles.buttonAddChild, styles.buttonLayout]} />
          <Text style={[styles.salvar, styles.salvarTypo]}>Salvar</Text>
        </View>
        <View style={[styles.buttonAdd1, styles.buttonLayout1]}>
          <View style={[styles.buttonAddItem, styles.buttonLayout]} />
          <Text style={[styles.cancelar, styles.salvarTypo]}>Cancelar</Text>
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
    </>
  );
};

const styles = StyleSheet.create({
  buttonLayout1: {
    height: 38,
    width: 110,
    top: 598,
    position: "absolute",
  },
  buttonLayout: {
    borderRadius: Border.br_5xs,
    left: 0,
    height: 38,
    width: 110,
    top: 0,
    position: "absolute",
  },
  salvarTypo: {
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.regular12_size,
    top: 9,
    left: 0,
    width: 110,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
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
    backgroundColor: Color.neutral10,
    flexDirection: "row",
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_79xl,
    paddingRight: Padding.p_23xl,
    paddingBottom: Padding.p_79xl,
    top: 0,
    position: "absolute",
    height: 1024,
  },
  profileImageIcon: {
    top: 137,
    left: 799,
    borderRadius: Border.br_xl,
    width: 100,
    height: 100,
    position: "absolute",
  },
  meuPerfil: {
    top: 98,
    left: 275,
    fontSize: FontSize.semibold18_size,
    color: Color.textPrimaryColor,
    textAlign: "left",
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    position: "absolute",
  },
  buttonAddChild: {
    backgroundColor: Color.pefitra,
  },
  salvar: {
    color: Color.neutral10,
  },
  buttonAdd: {
    left: 318,
  },
  buttonAddItem: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  cancelar: {
    color: Color.colorCrimson_200,
  },
  buttonAdd1: {
    left: 441,
  },
  myProfilePage: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 1440,
    overflow: "hidden",
    height: 1024,
  },
});

export default MyProfilePage;
