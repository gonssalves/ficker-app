import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const FormEditExpense = ({ onClose }) => {
  return (
    <View style={styles.formEditExpense}>
      <Text style={styles.editarSada}>Editar Saída</Text>
      <View style={[styles.campoData, styles.campoLayout1]}>
        <Text style={[styles.data, styles.dataTypo]}>Data</Text>
        <View style={[styles.searchBaruihut, styles.searchSpaceBlock]}>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>01/03/2023</Text>
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
        <View
          style={[styles.campoValorChild, styles.campoValorChildPosition]}
        />
        <Text style={[styles.text1, styles.rTypo]}>950.00</Text>
        <Text style={[styles.r, styles.rTypo]}>R$</Text>
      </View>
      <View style={[styles.campoCategoria, styles.campoLayout1]}>
        <Text style={[styles.valor, styles.dataTypo]}>Categoria</Text>
        <View style={[styles.searchBaruihut1, styles.campoValorChildPosition]}>
          <View style={styles.casaParent}>
            <Text style={[styles.casa, styles.textTypo]}>Casa</Text>
            <Image
              style={[styles.setaParaBaixo1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/setaparabaixo-1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.campoDescrio, styles.campoLayout]}>
        <Text style={[styles.valor, styles.dataTypo]}>Descrição</Text>
        <View
          style={[styles.campoValorChild, styles.campoValorChildPosition]}
        />
        <Text style={[styles.r, styles.rTypo]}>Aluguel</Text>
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
  campoLayout1: {
    height: 80,
    position: "absolute",
  },
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
  searchSpaceBlock: {
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
  },
  textTypo: {
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    lineHeight: 18,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
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
  campoValorChildPosition: {
    left: 1,
    borderBottomWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    top: 28,
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
  editarSada: {
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
    width: 116,
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
    borderBottomWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    top: 28,
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  campoData: {
    top: 184,
    width: 194,
    left: 26,
  },
  valor: {
    width: 100,
  },
  campoValorChild: {
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
    top: 380,
    left: 28,
  },
  casa: {
    width: 64,
  },
  casaParent: {
    flexDirection: "row",
  },
  searchBaruihut1: {
    width: 138,
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
  },
  campoCategoria: {
    top: 282,
    left: 27,
    width: 139,
  },
  campoDescrio: {
    top: 86,
    left: 26,
  },
  buttonSaveChild: {
    backgroundColor: Color.pefitra,
    width: 110,
    borderRadius: Border.br_5xs,
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
  formEditExpense: {
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

export default FormEditExpense;
