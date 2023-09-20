import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import EmailField from "../components/EmailField";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AppAlterarSenha = () => {
  return (
    <View style={styles.appAlterarSenha}>
      <View style={styles.ttuloDaPgina}>
        <Text style={styles.entrar}>Alterar Senha</Text>
      </View>
      <EmailField
        userEmail="SENHA ATUAL"
        propTop={145}
        propLeft={33}
        propWidth={115}
      />
      <View style={[styles.campoEMail, styles.campoLayout]}>
        <Text style={[styles.novaSenha, styles.novaTypo]}>NOVA SENHA</Text>
        <View style={styles.component}>
          <View style={styles.componentChild} />
        </View>
      </View>
      <View style={[styles.campoEMail1, styles.campoLayout]}>
        <Text style={[styles.confirmarNovaSenha, styles.novaTypo]}>
          CONFIRMAR NOVA SENHA
        </Text>
        <View style={styles.component}>
          <View style={styles.componentChild} />
        </View>
      </View>
      <View style={[styles.botoEntrar, styles.botoEntrarLayout]}>
        <View style={[styles.background, styles.botoEntrarLayout]} />
        <Text style={styles.entrar1}>entrar</Text>
      </View>
      <Text style={styles.text}>********</Text>
      <Text style={[styles.text1, styles.textTypo]}>**********</Text>
      <Text style={[styles.text2, styles.textTypo]}>**********</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  campoLayout: {
    height: 85,
    width: 319,
    position: "absolute",
  },
  novaTypo: {
    height: 34,
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansRegular,
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  botoEntrarLayout: {
    height: 48,
    position: "absolute",
  },
  textTypo: {
    width: 167,
    textAlign: "justify",
    fontSize: FontSize.text_size,
    left: 46,
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansRegular,
    position: "absolute",
  },
  entrar: {
    fontSize: FontSize.size_16xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorCrimson_100,
    textAlign: "left",
    left: 0,
    top: 0,
    height: 67,
    width: 313,
    position: "absolute",
  },
  ttuloDaPgina: {
    top: 78,
    left: 35,
    height: 67,
    width: 313,
    position: "absolute",
  },
  novaSenha: {
    width: 109,
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
    top: 250,
    left: 33,
  },
  confirmarNovaSenha: {
    width: 210,
  },
  campoEMail1: {
    top: 353,
    left: 36,
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
    top: 472,
    left: 41,
    width: 303,
  },
  text: {
    top: 196,
    width: 77,
    textAlign: "justify",
    fontSize: FontSize.text_size,
    left: 46,
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansRegular,
    position: "absolute",
  },
  text1: {
    top: 299,
  },
  text2: {
    top: 402,
  },
  appAlterarSenha: {
    backgroundColor: Color.neutral10,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default AppAlterarSenha;
