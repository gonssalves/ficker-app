import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const AppLandingPage = () => {
  return (
    <View style={styles.appLandingPage}>
      <View style={styles.topBar}>
        <View style={[styles.topBarInner, styles.wrapperFlexBox]}>
          <View style={[styles.logouihutWrapper, styles.wrapperFlexBox]}>
            <View style={styles.logouihut}>
              <Image
                style={styles.logomarcaParaUmAplicativoDIcon}
                contentFit="cover"
                source={require("../assets/logomarca-para-um-aplicativo-de-rastreamento-de-despesas-em-png--usando-a-cor-vermelho-como-principal-a-logomarca-deve-conter-um-cofrinho-de-porco-feliz-com-um---desenhado-em-seu-corpo-12.png")}
              />
              <View style={[styles.fickerWrapper, styles.wrapperFlexBox]}>
                <Text style={styles.ficker}>Ficker</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.landing, styles.landingLayout]}>
        <View style={[styles.background, styles.landingLayout]} />
      </View>
      <Image
        style={styles.manageMoneyPana1}
        contentFit="cover"
        source={require("../assets/manage-moneypana-1.png")}
      />
      <View style={[styles.botaoSignIn, styles.botaoFlexBox]}>
        <Text style={[styles.entrar, styles.entrarTypo]}>entrar</Text>
      </View>
      <View style={[styles.botaoSignUp, styles.botaoFlexBox]}>
        <Text style={[styles.cadastrarSe, styles.entrarTypo]}>
          cadastrar-se
        </Text>
      </View>
      <View style={[styles.financialDataBro1Parent, styles.bro1ParentFlexBox]}>
        <Image
          style={styles.financialDataBro1}
          contentFit="cover"
          source={require("../assets/financial-databro-1.png")}
        />
        <Text
          style={[styles.obtenhaInformaesValiosas, styles.planejeEAlcanceTypo]}
        >
          Obtenha informações valiosas sobre sua saúde financeira com os
          recursos abrangentes de relatórios.
        </Text>
      </View>
      <Text style={[styles.assumaOControle, styles.assumaOControleLayout]}>
        Assuma o controle de suas finanças com o Ficker, a solução completa para
        gerenciar suas despesas.
      </Text>
      <View style={[styles.piggyBankBro1Parent, styles.bro1ParentFlexBox]}>
        <Image
          style={styles.financialDataBro1}
          contentFit="cover"
          source={require("../assets/piggy-bankbro-1.png")}
        />
        <Text style={[styles.planejeEAlcance, styles.planejeEAlcanceTypo]}>
          Planeje e alcance suas metas financeiras com facilidade.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  landingLayout: {
    height: 462,
    width: 390,
    left: 0,
    position: "absolute",
  },
  botaoFlexBox: {
    paddingVertical: Padding.p_mid,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  entrarTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.sRegular_size,
  },
  bro1ParentFlexBox: {
    height: 138,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  planejeEAlcanceTypo: {
    marginLeft: 8,
    color: Color.colorGray_100,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
  },
  assumaOControleLayout: {
    height: 108,
    display: "flex",
    alignItems: "center",
  },
  logomarcaParaUmAplicativoDIcon: {
    width: 49,
    height: 41,
  },
  ficker: {
    fontSize: FontSize.size_29xl,
    fontFamily: FontFamily.cuteFontRegular,
    textAlign: "left",
    color: Color.colorCrimson_100,
  },
  fickerWrapper: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginLeft: 2,
    flex: 1,
  },
  logouihut: {
    width: 173,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  logouihutWrapper: {
    width: 338,
    height: 37,
  },
  topBarInner: {
    alignSelf: "stretch",
  },
  topBar: {
    top: 2,
    backgroundColor: Color.whiteColor,
    height: 51,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    alignItems: "center",
    width: 390,
    left: 0,
    position: "absolute",
  },
  background: {
    top: 0,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  landing: {
    top: 65,
  },
  manageMoneyPana1: {
    top: 146,
    left: 61,
    width: 264,
    height: 176,
    position: "absolute",
    overflow: "hidden",
  },
  entrar: {
    color: Color.colorCrimson_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.sRegular_size,
  },
  botaoSignIn: {
    top: 415,
    left: 143,
    width: 102,
    height: 26,
    paddingHorizontal: Padding.p_64xl,
    backgroundColor: Color.neutral10,
  },
  cadastrarSe: {
    color: Color.neutral10,
  },
  botaoSignUp: {
    top: 459,
    left: 130,
    backgroundColor: Color.colorCrimson_100,
    width: 129,
    height: 27,
    paddingHorizontal: Padding.p_63xl,
  },
  financialDataBro1: {
    width: 150,
    height: 150,
    overflow: "hidden",
  },
  obtenhaInformaesValiosas: {
    width: 198,
    height: 108,
    display: "flex",
    alignItems: "center",
  },
  financialDataBro1Parent: {
    top: 545,
    width: 356,
    left: 0,
    height: 138,
  },
  assumaOControle: {
    top: 314,
    left: 91,
    width: 204,
    color: Color.colorGray_100,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.regular12_size,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    position: "absolute",
  },
  planejeEAlcance: {
    width: 199,
  },
  piggyBankBro1Parent: {
    top: 679,
    left: 1,
    width: 357,
  },
  appLandingPage: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutral10,
  },
});

export default AppLandingPage;
