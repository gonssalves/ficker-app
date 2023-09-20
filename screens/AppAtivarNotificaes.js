import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color } from "../GlobalStyles";

const AppAtivarNotificaes = () => {
  return (
    <View style={styles.appAtivarNotificaes}>
      <View style={[styles.ttuloDaPgina, styles.entrarLayout]}>
        <Text style={[styles.entrar, styles.entrarLayout]}>
          Ativar notificações
        </Text>
      </View>
      <Image
        style={styles.image24Icon}
        contentFit="cover"
        source={require("../assets/image-24.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  entrarLayout: {
    height: 67,
    width: 337,
    position: "absolute",
  },
  entrar: {
    top: 0,
    left: 0,
    fontSize: 30,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorCrimson_100,
    textAlign: "left",
  },
  ttuloDaPgina: {
    top: 90,
    left: 26,
  },
  image24Icon: {
    top: 91,
    left: 315,
    width: 49,
    height: 49,
    position: "absolute",
  },
  appAtivarNotificaes: {
    backgroundColor: Color.neutral10,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AppAtivarNotificaes;
