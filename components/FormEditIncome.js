import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const FormEditIncome = ({ onClose }) => {
  return (
    <View style={styles.formEditIncome}>
      <Text style={styles.editarEntrada}>Editar Entrada</Text>
      <View style={styles.campoData}>
        <Text style={[styles.data, styles.dataTypo]}>Data</Text>
        <View style={[styles.searchBaruihut, styles.searchBaruihutPosition]}>
          <View style={styles.parent}>
            <Text style={styles.text}>01/03/2023</Text>
            <Image
              style={[styles.setaParaBaixo1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/setaparabaixo-12.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.campoValor, styles.campoLayout]}>
        <Text style={[styles.valor, styles.dataTypo]}>Valor</Text>
        <View style={[styles.campoValorChild, styles.searchBaruihutPosition]} />
        <Text style={[styles.text1, styles.rTypo]}>1.827,90</Text>
        <Text style={[styles.r, styles.rTypo]}>R$</Text>
      </View>
      <View style={[styles.campoDescrio, styles.campoLayout]}>
        <Text style={[styles.valor, styles.dataTypo]}>Descrição</Text>
        <View style={[styles.campoValorChild, styles.searchBaruihutPosition]} />
        <Text style={[styles.r, styles.rTypo]}>Salário</Text>
      </View>
      <View style={[styles.buttonSave, styles.buttonChildLayout]}>
        <View style={[styles.buttonSaveChild, styles.buttonChildLayout]} />
        <Text style={[styles.salvar, styles.salvarTypo]}>Salvar</Text>
      </View>
      <View style={[styles.buttonCancel, styles.buttonChildLayout]}>
        <View style={[styles.buttonCancelChild, styles.buttonChildLayout]} />
        <Text style={[styles.cancelar, styles.salvarTypo]}>Cancelar</Text>
      </View>
      <Image
        style={[styles.bin1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bin-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dataTypo: {
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.regular12,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  searchBaruihutPosition: {
    borderBottomWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    top: 28,
    backgroundColor: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  campoLayout: {
    width: 414,
    height: 80,
    position: "absolute",
  },
  rTypo: {
    top: 42,
    fontFamily: FontFamily.regular12,
    textAlign: "left",
    color: Color.textPrimaryColor,
    fontSize: FontSize.semibold18_size,
    position: "absolute",
  },
  buttonChildLayout: {
    height: 38,
    width: 110,
    position: "absolute",
  },
  salvarTypo: {
    textAlign: "center",
    fontSize: FontSize.regular12_size,
    top: 9,
    width: 110,
    lineHeight: 18,
    left: 0,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    position: "absolute",
  },
  editarEntrada: {
    top: 29,
    textAlign: "left",
    color: Color.textPrimaryColor,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    fontSize: FontSize.semibold18_size,
    left: 26,
    position: "absolute",
  },
  data: {
    width: 185,
  },
  text: {
    fontWeight: "300",
    fontFamily: FontFamily.manropeLight,
    width: 116,
    lineHeight: 18,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  setaParaBaixo1Icon: {
    marginLeft: 34,
  },
  parent: {
    width: 226,
    flexDirection: "row",
  },
  searchBaruihut: {
    left: 2,
    width: 192,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_mid,
    borderRadius: Border.br_5xs,
  },
  campoData: {
    top: 184,
    width: 194,
    height: 80,
    left: 26,
    position: "absolute",
  },
  valor: {
    width: 100,
  },
  campoValorChild: {
    left: 1,
    width: 412,
    height: 53,
    opacity: 0.75,
    borderRadius: Border.br_xs,
  },
  text1: {
    left: 58,
  },
  r: {
    left: 15,
  },
  campoValor: {
    top: 282,
    left: 28,
  },
  campoDescrio: {
    top: 86,
    left: 26,
    width: 414,
  },
  buttonSaveChild: {
    backgroundColor: Color.pefitra,
    borderRadius: Border.br_5xs,
    width: 110,
    left: 0,
    top: 0,
  },
  salvar: {
    color: Color.neutral10,
  },
  buttonSave: {
    left: 29,
    top: 509,
    width: 110,
  },
  buttonCancelChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 110,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  cancelar: {
    color: Color.colorCrimson_200,
  },
  buttonCancel: {
    left: 152,
    top: 509,
    width: 110,
  },
  bin1Icon: {
    top: 518,
    right: 34,
    position: "absolute",
    width: 18,
  },
  formEditIncome: {
    backgroundColor: Color.neutral10,
    shadowColor: "#d9d9d9",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 504,
    height: 565,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_xs,
  },
});

export default FormEditIncome;
