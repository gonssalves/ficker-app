import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import EmailField from "../components/EmailField";
import FormContainer3 from "../components/FormContainer3";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AppCadastro = () => {
  return (
    <View style={styles.appCadastro}>
      <View style={styles.ttuloDaPgina}>
        <Text style={styles.entrar}>Cadastro</Text>
      </View>
      <EmailField userEmail="NOME" propTop={284} propLeft={36} propWidth={57} />
      <View style={[styles.campoEMail, styles.campoLayout]}>
        <Text style={[styles.email, styles.emailTypo]}>EMAIL</Text>
        <View style={styles.component}>
          <View style={styles.componentChild} />
        </View>
      </View>
      <View style={[styles.campoEMail1, styles.campoLayout]}>
        <Text style={[styles.email, styles.emailTypo]}>SENHA</Text>
        <View style={styles.component}>
          <View style={styles.componentChild} />
        </View>
      </View>
      <View style={[styles.campoEMail2, styles.campoLayout]}>
        <Text style={[styles.confirmarSenha, styles.emailTypo]}>
          CONFIRMAR SENHA
        </Text>
        <View style={styles.component}>
          <View style={styles.componentChild} />
        </View>
      </View>
      <View style={[styles.botoEntrar, styles.botoEntrarLayout]}>
        <View style={[styles.background, styles.botoEntrarLayout]} />
        <Text style={styles.entrar1}>entrar</Text>
      </View>
      <FormContainer3 />
    </View>
  );
};

const styles = StyleSheet.create({
  campoLayout: {
    height: 85,
    width: 319,
    position: "absolute",
  },
  emailTypo: {
    height: 34,
    fontFamily: FontFamily.dMSansRegular,
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    left: 0,
    top: 0,
    position: "absolute",
  },
  botoEntrarLayout: {
    height: 48,
    position: "absolute",
  },
  entrar: {
    fontSize: FontSize.size_16xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    color: Color.colorBlack,
    left: 0,
    top: 0,
    height: 67,
    width: 313,
    position: "absolute",
  },
  ttuloDaPgina: {
    top: 217,
    left: 38,
    height: 67,
    width: 313,
    position: "absolute",
  },
  email: {
    width: 62,
  },
  componentChild: {
    height: "101.92%",
    top: "0%",
    right: "0%",
    bottom: "-1.92%",
    left: "0%",
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_100,
    borderBottomWidth: 1,
    opacity: 0.75,
    borderRadius: Border.br_xs,
    position: "absolute",
    width: "100%",
  },
  component: {
    top: 33,
    left: 2,
    width: 317,
    height: 52,
    position: "absolute",
  },
  campoEMail: {
    top: 389,
    left: 36,
  },
  campoEMail1: {
    top: 492,
    left: 39,
  },
  confirmarSenha: {
    width: 158,
  },
  campoEMail2: {
    top: 595,
    left: 41,
  },
  background: {
    left: 93,
    backgroundColor: Color.colorCrimson_100,
    width: 111,
    borderRadius: Border.br_xs,
    top: 0,
    height: 48,
  },
  entrar1: {
    top: 9,
    fontSize: FontSize.semibold18_size,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.neutral10,
    height: 31,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    width: 303,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  botoEntrar: {
    top: 722,
    left: 45,
    width: 303,
  },
  appCadastro: {
    backgroundColor: Color.neutral10,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default AppCadastro;
