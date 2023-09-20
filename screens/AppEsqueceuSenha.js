import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import FormContainer3 from "../components/FormContainer3";
import EmailField from "../components/EmailField";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const AppEsqueceuSenha = () => {
  return (
    <View style={styles.appEsqueceuSenha}>
      <FormContainer3 />
      <View style={[styles.ttuloDaPgina, styles.entrarLayout]}>
        <Text style={[styles.entrar, styles.entrarFlexBox]}>
          Recuperar Senha
        </Text>
      </View>
      <EmailField userEmail="EMAIL" />
      <View style={[styles.botoEntrar, styles.botoEntrarLayout]}>
        <View style={[styles.background, styles.botoEntrarLayout]} />
        <Text style={[styles.entrar1, styles.entrarFlexBox]}>entrar</Text>
      </View>
      <Text style={[styles.digiteSeuEmail, styles.entrarFlexBox]}>
        Digite seu email que enviaremos uma link para redefinir sua senha
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  entrarLayout: {
    height: 67,
    width: 313,
  },
  entrarFlexBox: {
    textAlign: "center",
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
    color: Color.colorBlack,
    left: 0,
    textAlign: "center",
    top: 0,
    height: 67,
    width: 313,
  },
  ttuloDaPgina: {
    top: 221,
    left: 38,
    position: "absolute",
    width: 313,
  },
  background: {
    left: 93,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorCrimson_100,
    width: 111,
    top: 0,
  },
  entrar1: {
    top: 9,
    fontSize: FontSize.semibold18_size,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.neutral10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 31,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    width: 303,
    left: 0,
    textAlign: "center",
  },
  botoEntrar: {
    top: 462,
    left: 43,
    width: 303,
  },
  digiteSeuEmail: {
    top: 274,
    left: 77,
    fontSize: FontSize.sRegular_size,
    fontFamily: FontFamily.dMSansRegular,
    color: Color.colorGray_100,
    width: 236,
  },
  appEsqueceuSenha: {
    backgroundColor: Color.neutral10,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AppEsqueceuSenha;
