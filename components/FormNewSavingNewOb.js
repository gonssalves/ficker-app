import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const FormNewSavingNewOb = ({ onClose }) => {
  return (
    <View style={[styles.formNewSavingNewOb, styles.newLayout]}>
      <Text style={styles.novaTransaoNo}>Nova Transação no Cofrinho</Text>
      <View style={styles.buttons}>
        <View style={styles.buttonLayout}>
          <View style={styles.adicionarNovaWrapper}>
            <Text style={[styles.adicionarNova, styles.cancelarTypo]}>
              Adicionar nova
            </Text>
          </View>
        </View>
        <View style={[styles.buttonCancel, styles.buttonLayout]}>
          <View style={styles.cancelarWrapper}>
            <Text style={[styles.cancelar, styles.cancelarTypo]}>Cancelar</Text>
          </View>
        </View>
      </View>
      <View style={styles.campoObjetivoParent}>
        <View>
          <View>
            <Text style={[styles.objetivo, styles.objetivoTypo]}>Objetivo</Text>
            <View style={[styles.frameWrapper, styles.frameWrapperBorder]}>
              <View style={styles.novoParent}>
                <Text style={[styles.novo, styles.novoTypo]}>Novo</Text>
                <Image
                  style={styles.setaParaBaixo1Icon}
                  contentFit="cover"
                  source={require("../assets/setaparabaixo-1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.campoDescrioParent}>
          <View>
            <Text style={[styles.descrioDoObjetivo, styles.novoTypo]}>
              Descrição do Objetivo
            </Text>
            <View style={styles.searchBorder} />
          </View>
          <View style={styles.campoCor}>
            <Text style={[styles.cor, styles.objetivoTypo]}>Cor</Text>
            <View style={[styles.searchBaruihut1, styles.frameWrapperBorder]} />
          </View>
        </View>
        <View style={styles.campoData}>
          <View style={styles.dataParent}>
            <Text style={[styles.descrioDoObjetivo, styles.novoTypo]}>
              Data
            </Text>
            <View style={[styles.searchBaruihut2, styles.searchBorder]}>
              <View style={styles.searchBaruihutInner}>
                <View style={styles.ddmmaaaaParent}>
                  <Text style={[styles.ddmmaaaa, styles.novoTypo1]}>
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
        <View style={styles.campoData}>
          <View>
            <Text style={[styles.objetivo, styles.objetivoTypo]}>Valor</Text>
            <View style={styles.rWrapper}>
              <Text style={[styles.r, styles.rTypo]}>R$</Text>
            </View>
            <Text style={[styles.saldoDisponvel47300, styles.rTypo]}>
              Saldo disponível: 473,00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newLayout: {
    overflow: "hidden",
    borderRadius: Border.br_xs,
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
  objetivoTypo: {
    display: "flex",
    fontFamily: FontFamily.regular12,
    alignItems: "center",
  },
  frameWrapperBorder: {
    marginTop: 6,
    borderBottomWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  novoTypo: {
    width: 185,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  searchBorder: {
    width: 192,
    marginTop: 6,
    borderBottomWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
  },
  novoTypo1: {
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    lineHeight: 18,
  },
  rTypo: {
    fontFamily: FontFamily.regular12,
    textAlign: "left",
  },
  novaTransaoNo: {
    top: 29,
    textAlign: "left",
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    color: Color.textPrimaryColor,
    fontSize: FontSize.semibold18_size,
    left: 26,
    position: "absolute",
  },
  adicionarNova: {
    color: Color.neutral10,
  },
  adicionarNovaWrapper: {
    backgroundColor: Color.pefitra,
    justifyContent: "center",
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: 0,
    left: 0,
    top: 0,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    width: 110,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  cancelar: {
    color: Color.colorCrimson_200,
  },
  cancelarWrapper: {
    backgroundColor: Color.colorWhitesmoke_100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: 0,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    width: 110,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
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
  objetivo: {
    width: 100,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  novo: {
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    lineHeight: 18,
  },
  setaParaBaixo1Icon: {
    width: 18,
    height: 18,
    marginLeft: 34,
  },
  novoParent: {
    width: 118,
    flexDirection: "row",
  },
  frameWrapper: {
    width: 257,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_mid,
    overflow: "hidden",
    borderRadius: Border.br_xs,
  },
  descrioDoObjetivo: {
    display: "flex",
    fontFamily: FontFamily.regular12,
    alignItems: "center",
  },
  cor: {
    width: 77,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  searchBaruihut1: {
    width: 80,
    borderRadius: Border.br_5xs,
    marginTop: 6,
  },
  campoCor: {
    marginLeft: 142,
  },
  campoDescrioParent: {
    marginTop: 18,
    flexDirection: "row",
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
  searchBaruihut2: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_mid,
  },
  dataParent: {
    alignItems: "center",
  },
  campoData: {
    marginTop: 18,
  },
  r: {
    fontFamily: FontFamily.regular12,
    color: Color.textPrimaryColor,
    fontSize: FontSize.semibold18_size,
  },
  rWrapper: {
    width: 412,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_smi,
    marginTop: 4,
    borderBottomWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: Border.br_xs,
  },
  saldoDisponvel47300: {
    fontSize: FontSize.size_2xs,
    color: Color.ndTextColor,
    marginTop: 4,
    lineHeight: 18,
    fontFamily: FontFamily.regular12,
  },
  campoObjetivoParent: {
    top: 86,
    left: 26,
    position: "absolute",
  },
  formNewSavingNewOb: {
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
  },
});

export default FormNewSavingNewOb;
