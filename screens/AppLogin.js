import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FormContainer3 from "../components/FormContainer3";
import EmailField from "../components/EmailField";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const AppLogin = () => {
  return (
    <View style={styles.appLogin}>
      <FormContainer3 />
      <View style={styles.ttuloDaPgina}>
        <Text style={styles.entrar}>Entrar</Text>
      </View>
      <EmailField
        userEmail="EMAIL"
        propTop={302}
        propLeft={36}
        propWidth={57}
      />
      <View style={styles.campoEMail}>
        <Text style={[styles.senha, styles.senhaFlexBox]}>SENHA</Text>
        <View style={styles.component}>
          <View style={styles.componentChild} />
        </View>
      </View>
      <View style={[styles.botoEntrar, styles.botoEntrarLayout]}>
        <View style={[styles.background, styles.botoEntrarLayout]} />
        <Text style={[styles.entrar1, styles.entrar1Typo]}>entrar</Text>
      </View>
      <Text style={[styles.esqueceuASenha, styles.ouEntreComTypo]}>
        Esqueceu a senha?
      </Text>
      <Text style={[styles.aindaNoTemContainer, styles.entrar1Typo]}>
        <Text style={styles.aindaNoTemContainer1}>
          <Text style={styles.aindaNoTem}>{`Ainda não tem conta? `}</Text>
          <Text style={styles.cadastreSe}>Cadastre-se</Text>
        </Text>
      </Text>
      <Text style={[styles.ouEntreCom, styles.ouEntreComTypo]}>{`ou 
entre com`}</Text>
      <View style={[styles.logos, styles.facebookLayout]}>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.facebookLogoFacebookIconTr, styles.facebookLayout]}
          contentFit="cover"
          source={require("../assets/facebooklogofacebookicontransparentfreepng-1.png")}
        />
        <Image
          style={styles.image2Icon}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  senhaFlexBox: {
    justifyContent: "center",
    left: 0,
  },
  botoEntrarLayout: {
    height: 48,
    position: "absolute",
  },
  entrar1Typo: {
    fontSize: FontSize.semibold18_size,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  ouEntreComTypo: {
    height: 33,
    width: 140,
    fontSize: FontSize.text_size,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dMSansRegular,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  facebookLayout: {
    height: 40,
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
    height: 67,
    width: 313,
    left: 39,
    position: "absolute",
  },
  senha: {
    fontSize: FontSize.size_base,
    letterSpacing: 0.8,
    width: 62,
    height: 34,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    fontFamily: FontFamily.dMSansRegular,
    textAlign: "center",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
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
    top: 407,
    width: 319,
    height: 85,
    left: 36,
    position: "absolute",
  },
  background: {
    left: 93,
    backgroundColor: Color.colorCrimson_100,
    width: 111,
    borderRadius: Border.br_xs,
    top: 0,
  },
  entrar1: {
    top: 9,
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
    left: 0,
  },
  botoEntrar: {
    top: 560,
    left: 43,
    width: 303,
  },
  esqueceuASenha: {
    top: 498,
    left: 36,
  },
  aindaNoTem: {
    color: Color.colorBlack,
  },
  cadastreSe: {
    color: Color.colorCrimson_100,
  },
  aindaNoTemContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  aindaNoTemContainer: {
    top: 732,
    left: 48,
    width: 294,
    height: 68,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.semibold18_size,
  },
  ouEntreCom: {
    top: 627,
    left: 126,
  },
  image1Icon: {
    top: 6,
    width: 31,
    height: 32,
    left: 0,
    position: "absolute",
  },
  facebookLogoFacebookIconTr: {
    width: 54,
    top: 0,
    left: 39,
    height: 40,
  },
  image2Icon: {
    top: 2,
    left: 101,
    width: 29,
    height: 36,
    position: "absolute",
  },
  logos: {
    top: 679,
    left: 130,
    width: 130,
  },
  appLogin: {
    backgroundColor: Color.neutral10,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default AppLogin;
