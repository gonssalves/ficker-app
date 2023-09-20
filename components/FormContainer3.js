import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const FormContainer3 = () => {
  return (
    <View style={[styles.logoFicker, styles.logoFickerLayout]}>
      <Image
        style={[styles.logomarcaParaUmAplicativoDIcon, styles.logoFickerLayout]}
        contentFit="cover"
        source={require("../assets/logomarca-para-um-aplicativo-de-rastreamento-de-despesas-em-png--usando-a-cor-vermelho-como-principal-a-logomarca-deve-conter-um-cofrinho-de-porco-feliz-com-um---desenhado-em-seu-corpo-1.png")}
      />
      <View style={styles.fickerWrapper}>
        <Text style={styles.ficker}>Ficker</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoFickerLayout: {
    width: 141,
    position: "absolute",
  },
  logomarcaParaUmAplicativoDIcon: {
    top: 0,
    left: 0,
    height: 126,
  },
  ficker: {
    fontSize: FontSize.size_29xl,
    fontFamily: FontFamily.cuteFontRegular,
    color: Color.colorCrimson_100,
    textAlign: "left",
  },
  fickerWrapper: {
    top: 89,
    left: 19,
    width: 102,
    height: 75,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    alignItems: "center",
    position: "absolute",
  },
  logoFicker: {
    top: 43,
    left: 125,
    height: 164,
  },
});

export default FormContainer3;
