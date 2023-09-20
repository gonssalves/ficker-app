import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const FormNewSaving = ({ onClose }) => {
  return (
    <View style={styles.formNewSaving}>
      <Text style={styles.novaTransaoNo}>Nova Transação no Cofrinho</Text>
      <View style={styles.campoObjetivoParent}>
        <View>
          <View>
            <Text style={[styles.ao, styles.aoFlexBox]}>Ação</Text>
            <View style={styles.frameWrapper}>
              <View style={styles.guardarParent}>
                <Text style={[styles.guardar, styles.dataTypo]}>Guardar</Text>
                <Image
                  style={styles.setaParaBaixo1Icon}
                  contentFit="cover"
                  source={require("../assets/setaparabaixo-1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.campoObjetivo1}>
          <View>
            <Text style={[styles.ao, styles.aoFlexBox]}>Objetivo</Text>
            <View style={styles.frameWrapper}>
              <View style={styles.guardarParent}>
                <Text style={[styles.guardar, styles.dataTypo]}>Viajem</Text>
                <Image
                  style={styles.setaParaBaixo1Icon}
                  contentFit="cover"
                  source={require("../assets/setaparabaixo-1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.campoObjetivo1}>
          <View style={styles.dataParent}>
            <Text style={[styles.data, styles.dataTypo]}>Data</Text>
            <View style={styles.searchBaruihut}>
              <View style={styles.searchBaruihutInner}>
                <View style={styles.ddmmaaaaParent}>
                  <Text style={[styles.ddmmaaaa, styles.guardarTypo]}>
                    dd/mm/aaaa
                  </Text>
                  <Image
                    style={styles.setaParaBaixo1Icon}
                    contentFit="cover"
                    source={require("../assets/setaparabaixo-11.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.campoObjetivo1}>
          <View>
            <Text style={[styles.ao, styles.aoFlexBox]}>Valor</Text>
            <View style={styles.rWrapper}>
              <Text style={styles.r}>R$</Text>
            </View>
            <Text style={styles.saldoDisponvel47300}>
              Saldo disponível: 473,00
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonLayout}>
          <View style={[styles.adicionarNovaWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.adicionarNova, styles.cancelarTypo]}>
              Adicionar nova
            </Text>
          </View>
        </View>
        <View style={[styles.buttonCancel, styles.buttonLayout]}>
          <View style={[styles.cancelarWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.cancelar, styles.cancelarTypo]}>Cancelar</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aoFlexBox: {
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.regular12,
  },
  dataTypo: {
    width: 185,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  guardarTypo: {
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    lineHeight: 18,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: 0,
    left: 0,
    top: 0,
    width: 110,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  cancelarTypo: {
    textAlign: "center",
    fontSize: FontSize.regular12_size,
    lineHeight: 18,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
  },
  buttonLayout: {
    height: 36,
    width: 110,
  },
  novaTransaoNo: {
    top: 29,
    textAlign: "left",
    color: Color.textPrimaryColor,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    fontSize: FontSize.semibold18_size,
    left: 26,
    position: "absolute",
  },
  ao: {
    width: 100,
    alignItems: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  guardar: {
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    lineHeight: 18,
  },
  setaParaBaixo1Icon: {
    width: 18,
    height: 18,
    marginLeft: 34,
  },
  guardarParent: {
    width: 118,
    flexDirection: "row",
  },
  frameWrapper: {
    width: 257,
    paddingHorizontal: Padding.p_6xs,
    marginTop: 6,
    paddingVertical: Padding.p_mid,
    borderBottomWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    overflow: "hidden",
    borderRadius: Border.br_xs,
  },
  campoObjetivo1: {
    marginTop: 18,
  },
  data: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.regular12,
  },
  ddmmaaaa: {
    width: 116,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  ddmmaaaaParent: {
    flexDirection: "row",
  },
  searchBaruihutInner: {
    width: 226,
    flexDirection: "row",
  },
  searchBaruihut: {
    width: 192,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    marginTop: 6,
    paddingVertical: Padding.p_mid,
    borderBottomWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  dataParent: {
    alignItems: "center",
  },
  r: {
    fontFamily: FontFamily.regular12,
    textAlign: "left",
    color: Color.textPrimaryColor,
    fontSize: FontSize.semibold18_size,
  },
  rWrapper: {
    width: 412,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_smi,
    marginTop: 4,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    overflow: "hidden",
    borderRadius: Border.br_xs,
  },
  saldoDisponvel47300: {
    fontSize: FontSize.size_2xs,
    color: Color.ndTextColor,
    marginTop: 4,
    lineHeight: 18,
    fontFamily: FontFamily.regular12,
    textAlign: "left",
  },
  campoObjetivoParent: {
    top: 86,
    left: 26,
    position: "absolute",
  },
  adicionarNova: {
    color: Color.neutral10,
  },
  adicionarNovaWrapper: {
    backgroundColor: Color.pefitra,
  },
  cancelar: {
    color: Color.colorCrimson_200,
  },
  cancelarWrapper: {
    backgroundColor: Color.colorWhitesmoke_100,
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: 0,
    left: 0,
    top: 0,
  },
  buttonCancel: {
    marginLeft: 13,
  },
  buttons: {
    top: 509,
    left: 29,
    flexDirection: "row",
    position: "absolute",
  },
  formNewSaving: {
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
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: Border.br_xs,
  },
});

export default FormNewSaving;
