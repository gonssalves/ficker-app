import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const FormNewExpense = ({ onClose }) => {
  return (
    <View style={styles.formNewExpense}>
      <Text style={styles.novaSada}>Nova Saída</Text>
      <View style={[styles.campoData, styles.campoLayout1]}>
        <Text style={[styles.data, styles.dataTypo]}>Data</Text>
        <View style={[styles.searchBaruihut, styles.searchSpaceBlock]}>
          <View style={styles.ddmmaaaaParent}>
            <Text style={[styles.ddmmaaaa, styles.comidaTypo]}>dd/mm/aaaa</Text>
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
        <View
          style={[styles.campoValorChild, styles.campoValorChildPosition]}
        />
        <Text style={styles.r}>R$</Text>
      </View>
      <View style={[styles.campoCategoria, styles.campoLayout1]}>
        <Text style={[styles.valor, styles.dataTypo]}>Categoria</Text>
        <View style={[styles.searchBaruihut1, styles.campoValorChildPosition]}>
          <View style={styles.comidaParent}>
            <Text style={[styles.comida, styles.comidaTypo]}>Comida</Text>
            <Image
              style={styles.setaParaBaixo1Icon}
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
      <Text style={styles.saldoDisponvel47300}>Saldo disponível: 473,00</Text>
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
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    fontFamily: FontFamily.regular12,
    textAlign: "left",
    position: "absolute",
  },
  searchSpaceBlock: {
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
  },
  comidaTypo: {
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    lineHeight: 18,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
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
  novaSada: {
    top: 29,
    textAlign: "left",
    color: Color.textPrimaryColor,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    fontSize: FontSize.semibold18_size,
    position: "absolute",
    left: 26,
  },
  data: {
    width: 185,
  },
  ddmmaaaa: {
    width: 116,
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
    top: 380,
    left: 28,
  },
  comida: {
    width: 64,
  },
  comidaParent: {
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
  buttonAddChild: {
    backgroundColor: Color.pefitra,
    width: 110,
    borderRadius: Border.br_5xs,
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
  saldoDisponvel47300: {
    top: 461,
    fontSize: FontSize.size_2xs,
    color: Color.ndTextColor,
    left: 29,
    lineHeight: 18,
    fontFamily: FontFamily.regular12,
    textAlign: "left",
    position: "absolute",
  },
  formNewExpense: {
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

export default FormNewExpense;
