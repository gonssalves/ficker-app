import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const AppLoading = () => {
  return (
    <View style={styles.appLoading}>
      <View
        style={[
          styles.logomarcaParaUmAplicativoDParent,
          styles.logomarcaLayout,
        ]}
      >
        <Image
          style={[
            styles.logomarcaParaUmAplicativoDIcon,
            styles.logomarcaLayout,
          ]}
          contentFit="cover"
          source={require("../assets/logomarca-para-um-aplicativo-de-rastreamento-de-despesas-em-png--usando-a-cor-vermelho-como-principal-a-logomarca-deve-conter-um-cofrinho-de-porco-feliz-com-um---desenhado-em-seu-corpo-11.png")}
        />
        <Text style={styles.ficker}>Ficker</Text>
      </View>
      <Image
        style={styles.loadingGifPng51Icon}
        contentFit="cover"
        source={require("../assets/loadinggifpng5-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logomarcaLayout: {
    width: 175,
    position: "absolute",
  },
  logomarcaParaUmAplicativoDIcon: {
    top: 0,
    left: 0,
    height: 175,
  },
  ficker: {
    top: 129,
    left: 33,
    fontSize: 65,
    fontFamily: FontFamily.cuteFontRegular,
    color: "#f84d51",
    textAlign: "left",
    width: 142,
    height: 92,
    position: "absolute",
  },
  logomarcaParaUmAplicativoDParent: {
    top: 219,
    left: 108,
    height: 221,
  },
  loadingGifPng51Icon: {
    top: 416,
    left: 155,
    width: 81,
    height: 81,
    position: "absolute",
  },
  appLoading: {
    backgroundColor: Color.neutral10,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AppLoading;
