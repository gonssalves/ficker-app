import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const AppConectarBanco = () => {
  return (
    <View style={styles.appConectarBanco}>
      <Text style={[styles.conecteSuasContas, styles.obtenhaUmaVisoPosition]}>
        Conecte suas contas do banco
      </Text>
      <Text style={[styles.obtenhaUmaViso, styles.obtenhaUmaVisoPosition]}>
        Obtenha uma visão completa de suas finanças com todas as suas contas em
        um só lugar.
      </Text>
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.botoEntrar, styles.botoEntrarLayout]}>
        <View style={[styles.background, styles.botoEntrarLayout]} />
        <Text style={styles.conectarConta}>conectar conta</Text>
      </View>
      <View style={[styles.coins1, styles.coinsLayout]}>
        <Image
          style={[styles.image3Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={[styles.image5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <Image
          style={[styles.image7Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
      </View>
      <View style={[styles.coins2, styles.coinsLayout]}>
        <Image
          style={[styles.image11Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={[styles.image9Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <Image
          style={[styles.image10Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  obtenhaUmaVisoPosition: {
    color: Color.colorCrimson_100,
    left: 31,
    position: "absolute",
  },
  botoEntrarLayout: {
    height: 48,
    position: "absolute",
  },
  coinsLayout: {
    width: 80,
    position: "absolute",
  },
  iconLayout1: {
    height: 46,
    width: 46,
    left: 34,
    position: "absolute",
  },
  iconLayout: {
    height: 28,
    width: 28,
    position: "absolute",
  },
  conecteSuasContas: {
    top: 65,
    fontSize: FontSize.size_16xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    width: 305,
  },
  obtenhaUmaViso: {
    top: 217,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "justify",
    width: 280,
  },
  image6Icon: {
    top: 379,
    left: 69,
    width: 228,
    height: 228,
    position: "absolute",
  },
  background: {
    left: 67,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorCrimson_100,
    width: 170,
    top: 0,
  },
  conectarConta: {
    top: 9,
    fontSize: FontSize.semibold18_size,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.neutral10,
    textAlign: "center",
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
    left: 0,
    width: 303,
    position: "absolute",
  },
  botoEntrar: {
    top: 694,
    left: 43,
    width: 303,
  },
  image3Icon: {
    top: 0,
  },
  image5Icon: {
    top: 26,
    left: 0,
  },
  image7Icon: {
    top: 64,
    left: 20,
  },
  coins1: {
    top: 383,
    height: 92,
    left: 41,
  },
  image11Icon: {
    top: 39,
  },
  image9Icon: {
    top: 38,
    left: 0,
  },
  image10Icon: {
    left: 41,
    top: 0,
  },
  coins2: {
    top: 579,
    left: 271,
    height: 85,
  },
  appConectarBanco: {
    backgroundColor: Color.neutral10,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AppConectarBanco;
