import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const FormNewIncome = ({ onClose }) => {
  return (
    <View style={styles.formNewIncome}>
      <Text style={styles.novaEntrada}>Nova Entrada</Text>
      <View style={styles.campoData}>
        <Text style={[styles.data, styles.dataTypo]}>Data</Text>
        <View style={[styles.searchBaruihut, styles.searchBaruihutPosition]}>
          <View style={styles.ddmmaaaaParent}>
            <Text style={styles.ddmmaaaa}>dd/mm/aaaa</Text>
            <Image
              style={styles.setaParaBaixo1Icon}
              contentFit="cover"
              source={require("../assets/setaparabaixo-12.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.campoValor, styles.campoLayout]}>
        <Text style={[styles.valor, styles.dataTypo]}>Valor</Text>
        <View style={[styles.campoValorChild, styles.searchBaruihutPosition]} />
        <Text style={styles.r}>R$</Text>
      </View>
      <View style={[styles.campoDescrio, styles.campoLayout]}>
        <Text style={[styles.valor, styles.dataTypo]}>Descrição</Text>
        <View style={[styles.campoValorChild, styles.searchBaruihutPosition]} />
      </View>
      <View style={[styles.buttonAdd, styles.buttonChildLayout]}>
        <View style={[styles.buttonAddChild, styles.buttonChildLayout]} />
        <Text style={[styles.adicionarNova, styles.cancelarTypo]}>
          Adicionar nova
        </Text>
      </View>
      <View style={[styles.buttonCancel, styles.buttonChildLayout]}>
        <View style={[styles.buttonCancelChild, styles.buttonChildLayout]} />
        <Text style={[styles.cancelar, styles.cancelarTypo]}>Cancelar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dataTypo: {
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.regular12,
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
  campoLayout: {
    width: 414,
    height: 80,
    left: 26,
    position: "absolute",
  },
  buttonChildLayout: {
    height: 38,
    width: 110,
    position: "absolute",
  },
  cancelarTypo: {
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
  novaEntrada: {
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
  ddmmaaaa: {
    fontWeight: "300",
    fontFamily: FontFamily.manropeLight,
    width: 116,
    lineHeight: 18,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  setaParaBaixo1Icon: {
    width: 18,
    height: 18,
    marginLeft: 34,
  },
  ddmmaaaaParent: {
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
  r: {
    top: 42,
    left: 15,
    fontFamily: FontFamily.regular12,
    textAlign: "left",
    color: Color.textPrimaryColor,
    fontSize: FontSize.semibold18_size,
    position: "absolute",
  },
  campoValor: {
    top: 282,
  },
  campoDescrio: {
    top: 86,
  },
  buttonAddChild: {
    backgroundColor: Color.pefitra,
    borderRadius: Border.br_5xs,
    width: 110,
    left: 0,
    top: 0,
  },
  adicionarNova: {
    color: Color.neutral10,
  },
  buttonAdd: {
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
  formNewIncome: {
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

export default FormNewIncome;
