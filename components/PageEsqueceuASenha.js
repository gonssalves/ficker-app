import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContainerCard1 from "./ContainerCard1";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const PageEsqueceuASenha = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pageEsqueceuASenha}>
      <View style={styles.formEsqueceuASenha}>
        <View style={styles.ttuloDaPgina}>
          <Text style={styles.entrar}>Esqueceu a senha?</Text>
        </View>
        <View style={styles.campoEMail}>
          <Text style={[styles.eMail, styles.eMailFlexBox]}>E-mail</Text>
          <View style={styles.campoEMailChild} />
        </View>
        <View style={styles.botoEnviar}>
          <View style={styles.background} />
          <Text style={[styles.enviar, styles.eMailFlexBox]}>Enviar</Text>
        </View>
      </View>
      <ContainerCard1 onLogoUIHUTPress={() => navigation.navigate("Landing")} />
    </View>
  );
};

const styles = StyleSheet.create({
  eMailFlexBox: {
    height: 33,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  entrar: {
    fontSize: FontSize.bold25_size,
    textAlign: "center",
    left: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    top: 0,
    height: 67,
    width: 313,
    position: "absolute",
  },
  ttuloDaPgina: {
    height: 67,
    width: 313,
  },
  eMail: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.regular12,
    width: 58,
    color: Color.colorBlack,
    height: 33,
    justifyContent: "center",
    display: "flex",
    top: 0,
  },
  campoEMailChild: {
    top: 33,
    left: 1,
    backgroundColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_100,
    borderBottomWidth: 1,
    width: 412,
    height: 53,
    opacity: 0.75,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  campoEMail: {
    width: 414,
    height: 85,
    marginTop: 20,
  },
  background: {
    left: 11,
    backgroundColor: Color.colorCrimson_100,
    width: 291,
    height: 52,
    top: 0,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  enviar: {
    top: 8,
    fontSize: FontSize.semibold18_size,
    color: Color.neutral10,
    height: 33,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    width: 313,
  },
  botoEnviar: {
    height: 52,
    marginTop: 20,
    width: 313,
  },
  formEsqueceuASenha: {
    top: 130,
    left: 492,
    backgroundColor: Color.neutral10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 455,
    height: 315,
    paddingHorizontal: Padding.p_53xl,
    paddingVertical: Padding.p_14xl,
    alignItems: "center",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  pageEsqueceuASenha: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 1440,
    height: 1024,
    overflow: "hidden",
  },
});

export default PageEsqueceuASenha;
