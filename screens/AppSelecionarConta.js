import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AppSelecionarConta = () => {
  return (
    <View style={styles.appSelecionarConta}>
      <Text style={styles.selecioneSuaConta}>Selecione sua Conta</Text>
      <View style={[styles.pesquisa, styles.pesquisaLayout]}>
        <View style={[styles.component, styles.pesquisaLayout]}>
          <View style={[styles.componentChild, styles.childBorder]} />
        </View>
        <Image
          style={[styles.image12Icon, styles.bancoLayout]}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
        <Text style={[styles.pesquisar, styles.nubankTypo]}>Pesquisar</Text>
      </View>
      <View style={[styles.banco, styles.bancoLayout]}>
        <Text style={[styles.nubank, styles.nubankTypo]}>Nubank</Text>
        <View style={[styles.bancoChild, styles.childBorder]} />
      </View>
      <View style={[styles.banco1, styles.bancoPosition]}>
        <Text style={[styles.nubank, styles.nubankTypo]}>Inter</Text>
        <View style={[styles.bancoChild, styles.childBorder]} />
      </View>
      <View style={[styles.banco2, styles.bancoPosition]}>
        <Text style={[styles.nubank, styles.nubankTypo]}>Caixa</Text>
        <View style={[styles.bancoChild, styles.childBorder]} />
      </View>
      <View style={[styles.banco3, styles.bancoLayout]}>
        <Text style={[styles.nubank, styles.nubankTypo]}>Santander</Text>
        <View style={[styles.bancoChild, styles.childBorder]} />
      </View>
      <View style={[styles.banco4, styles.bancoLayout]}>
        <Text style={[styles.nubank, styles.nubankTypo]}>Pic Pay</Text>
        <View style={[styles.bancoChild, styles.childBorder]} />
      </View>
      <View style={[styles.banco5, styles.bancoPosition]}>
        <Text style={[styles.nubank, styles.nubankTypo]}>Itaú</Text>
        <View style={[styles.bancoChild, styles.childBorder]} />
      </View>
      <View style={[styles.banco6, styles.bancoPosition]}>
        <Text style={[styles.nubank, styles.nubankTypo]}>Banco do Brasil</Text>
        <View style={[styles.bancoChild, styles.childBorder]} />
      </View>
      <View style={[styles.banco7, styles.bancoPosition]}>
        <Text style={[styles.nubank, styles.nubankTypo]}>Bradesco</Text>
        <View style={[styles.bancoChild, styles.childBorder]} />
      </View>
      <View style={[styles.botoEntrar, styles.botoEntrarLayout]}>
        <View style={[styles.background, styles.botoEntrarLayout]} />
        <Text style={styles.conectarConta}>conectar conta</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pesquisaLayout: {
    height: 52,
    position: "absolute",
  },
  childBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  bancoLayout: {
    height: 30,
    position: "absolute",
  },
  nubankTypo: {
    width: 280,
    textAlign: "justify",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  bancoPosition: {
    left: 37,
    height: 30,
    width: 317,
    position: "absolute",
  },
  botoEntrarLayout: {
    height: 48,
    position: "absolute",
  },
  selecioneSuaConta: {
    top: 65,
    left: 31,
    fontSize: FontSize.size_16xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorCrimson_100,
    textAlign: "left",
    width: 305,
    position: "absolute",
  },
  componentChild: {
    height: "101.92%",
    top: "0%",
    right: "0%",
    bottom: "-1.92%",
    left: "0%",
    backgroundColor: Color.colorGainsboro_100,
    borderColor: Color.colorAliceblue_100,
    borderBottomWidth: 1,
    opacity: 0.75,
    borderRadius: Border.br_xs,
    width: "100%",
  },
  component: {
    width: 317,
    left: 0,
    top: 0,
  },
  image12Icon: {
    left: 9,
    width: 30,
    top: 11,
  },
  pesquisar: {
    left: 48,
    top: 11,
  },
  pesquisa: {
    top: 186,
    width: 328,
    left: 36,
  },
  nubank: {
    left: 0,
    top: 0,
  },
  bancoChild: {
    top: 5,
    left: 297,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 20,
    height: 20,
    backgroundColor: Color.neutral10,
  },
  banco: {
    top: 289,
    width: 317,
    left: 36,
  },
  banco1: {
    top: 334,
  },
  banco2: {
    top: 379,
  },
  banco3: {
    top: 424,
    width: 317,
    left: 36,
  },
  banco4: {
    top: 469,
    width: 317,
    left: 36,
  },
  banco5: {
    top: 514,
  },
  banco6: {
    top: 559,
  },
  banco7: {
    top: 604,
  },
  background: {
    left: 67,
    backgroundColor: Color.colorCrimson_100,
    width: 170,
    borderRadius: Border.br_xs,
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
    width: 303,
    left: 0,
    position: "absolute",
  },
  botoEntrar: {
    top: 694,
    left: 43,
    width: 303,
  },
  appSelecionarConta: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral10,
  },
});

export default AppSelecionarConta;
