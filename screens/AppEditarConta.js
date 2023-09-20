import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AppEditarConta = () => {
  return (
    <View style={styles.appEditarConta}>
      <View style={styles.ttuloDaPgina}>
        <Text style={styles.entrar}>Editar Conta</Text>
      </View>
      <View style={styles.campoEMail}>
        <Text style={[styles.nome, styles.senhaTypo]}>NOME</Text>
        <View style={[styles.component, styles.componentLayout]}>
          <View style={styles.componentChild} />
        </View>
      </View>
      <View style={[styles.campoEMail1, styles.campoLayout]}>
        <Text style={[styles.email, styles.senhaTypo]}>EMAIL</Text>
        <View style={[styles.component1, styles.componentLayout]}>
          <View style={styles.componentChild} />
        </View>
      </View>
      <View style={[styles.campoEMail2, styles.campoLayout]}>
        <Text style={[styles.novaSenha, styles.senhaTypo]}>NOVA SENHA</Text>
        <View style={[styles.component1, styles.componentLayout]}>
          <View style={styles.componentChild} />
        </View>
      </View>
      <View style={[styles.campoEMail3, styles.campoLayout]}>
        <Text style={[styles.confirmarSenha, styles.senhaTypo]}>
          CONFIRMAR SENHA
        </Text>
        <View style={[styles.component1, styles.componentLayout]}>
          <View style={styles.componentChild} />
        </View>
      </View>
      <View style={[styles.botoEntrar, styles.botoEntrarLayout]}>
        <View style={[styles.background, styles.botoEntrarLayout]} />
        <Text style={styles.entrar1}>entrar</Text>
      </View>
      <Text style={[styles.kanyeEast, styles.kanyeEastTypo]}>Kanye East</Text>
      <Text style={[styles.stilllovekimkimyecom, styles.kanyeEastTypo]}>
        stilllovekim@kimye.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  senhaTypo: {
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
  componentLayout: {
    height: 52,
    width: 317,
    left: 2,
    position: "absolute",
  },
  campoLayout: {
    height: 85,
    width: 319,
    position: "absolute",
  },
  botoEntrarLayout: {
    height: 48,
    position: "absolute",
  },
  kanyeEastTypo: {
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
  nome: {
    width: 57,
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
    top: 35,
  },
  campoEMail: {
    top: 145,
    height: 87,
    width: 319,
    left: 33,
    position: "absolute",
  },
  email: {
    width: 62,
  },
  component1: {
    top: 33,
  },
  campoEMail1: {
    top: 250,
    left: 33,
    height: 85,
  },
  novaSenha: {
    width: 118,
  },
  campoEMail2: {
    top: 353,
    left: 36,
  },
  confirmarSenha: {
    width: 158,
  },
  campoEMail3: {
    top: 456,
    left: 38,
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
    top: 583,
    left: 42,
    width: 303,
  },
  kanyeEast: {
    top: 196,
    width: 77,
  },
  stilllovekimkimyecom: {
    top: 299,
    width: 167,
  },
  appEditarConta: {
    backgroundColor: Color.neutral10,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default AppEditarConta;
