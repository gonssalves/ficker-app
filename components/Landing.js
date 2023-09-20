import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const Landing = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.landing}>
      <View style={styles.infoGroup}>
        <View style={[styles.walletBro1Parent, styles.bro1ParentFlexBox]}>
          <Image
            style={styles.walletBro1Icon}
            contentFit="cover"
            source={require("../assets/walletbro-1.png")}
          />
          <Text style={[styles.assumaOControle, styles.assumaTypo]}>
            Assuma o controle de seus gastos e fique por dentro do seu
            orçamento.
          </Text>
        </View>
        <View style={styles.revenueBro1Parent}>
          <Image
            style={styles.walletBro1Icon}
            contentFit="cover"
            source={require("../assets/revenuebro-1.png")}
          />
          <Text style={[styles.assumaOControle, styles.assumaTypo]}>
            Acompanhe seus ganhos e assuma o controle de seu futuro.
          </Text>
        </View>
        <View style={[styles.piggyBankBro1Parent, styles.bro1ParentFlexBox]}>
          <Image
            style={styles.walletBro1Icon}
            contentFit="cover"
            source={require("../assets/piggy-bankbro-11.png")}
          />
          <Text style={[styles.assumaOControle, styles.assumaTypo]}>
            Planeje e alcance suas metas financeiras com facilidade.
          </Text>
        </View>
        <View style={[styles.financialDataBro1Parent, styles.topBarPosition]}>
          <Image
            style={styles.walletBro1Icon}
            contentFit="cover"
            source={require("../assets/financial-databro-1.png")}
          />
          <Text style={[styles.assumaOControle, styles.assumaTypo]}>
            Obtenha informações valiosas sobre sua saúde financeira com os
            recursos abrangentes de relatórios.
          </Text>
        </View>
      </View>
      <View style={styles.landing1Position}>
        <View style={[styles.background, styles.landing1Position]} />
        <Text style={[styles.assumaOControle1, styles.assumaTypo]}>
          Assuma o controle de suas finanças com o Ficker, a solução completa
          para gerenciar suas despesas.
        </Text>
        <View style={[styles.topBar, styles.topBarPosition]}>
          <View style={[styles.topBarInner, styles.bro1ParentFlexBox]}>
            <View style={styles.wrapperFlexBox}>
              <View style={[styles.logouihut, styles.entrarFlexBox]}>
                <Image
                  style={styles.pieChart1Icon}
                  contentFit="cover"
                  source={require("../assets/piechart-1.png")}
                />
                <View style={[styles.fickerWrapper, styles.wrapperFlexBox]}>
                  <Text style={styles.ficker}>Ficker</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.manageMoneyPana1}
        contentFit="cover"
        source={require("../assets/manage-moneypana-11.png")}
      />
      <Pressable
        style={[styles.botaoSignIn, styles.botaoPosition]}
        onPress={() => navigation.navigate("PageEntrar")}
      >
        <Text style={[styles.entrar, styles.entrarTypo]}>Entrar</Text>
      </Pressable>
      <Pressable
        style={[styles.botaoSignUp, styles.botaoPosition]}
        onPress={() => navigation.navigate("PageCadastro")}
      >
        <Text style={[styles.cadastrarSe, styles.entrarTypo]}>
          Cadastrar-se
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bro1ParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  assumaTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.regular12,
  },
  topBarPosition: {
    top: 0,
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  landing1Position: {
    height: 1024,
    top: 0,
    left: 0,
    position: "absolute",
    width: 1440,
  },
  entrarFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperFlexBox: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  botaoPosition: {
    paddingVertical: Padding.p_mid,
    borderRadius: Border.br_xs,
    top: 403,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  entrarTypo: {
    textAlign: "center",
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    fontSize: FontSize.bold25_size,
  },
  walletBro1Icon: {
    width: 150,
    height: 150,
    overflow: "hidden",
  },
  assumaOControle: {
    fontSize: FontSize.size_base,
    width: 333,
    height: 107,
    marginLeft: 8,
  },
  walletBro1Parent: {
    left: 542,
    alignItems: "center",
    position: "absolute",
    top: 293,
  },
  revenueBro1Parent: {
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    top: 293,
    position: "absolute",
  },
  piggyBankBro1Parent: {
    top: 1,
    left: 542,
    alignItems: "center",
    position: "absolute",
  },
  financialDataBro1Parent: {
    flexDirection: "row",
  },
  infoGroup: {
    top: 1283,
    left: 225,
    width: 1033,
    height: 443,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.colorWhitesmoke_200,
  },
  assumaOControle1: {
    top: 326,
    fontSize: FontSize.size_xl,
    width: 607,
    height: 57,
    left: 686,
    position: "absolute",
  },
  pieChart1Icon: {
    width: 36,
    height: 36,
  },
  ficker: {
    fontWeight: "700",
    fontFamily: FontFamily.bold28,
    color: Color.textPrimaryColor,
    fontSize: FontSize.bold25_size,
    flex: 1,
    textAlign: "left",
  },
  fickerWrapper: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginLeft: 2,
  },
  logouihut: {
    width: 173,
    flexDirection: "row",
  },
  topBarInner: {
    alignSelf: "stretch",
  },
  topBar: {
    backgroundColor: Color.whiteColor,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    width: 1440,
  },
  manageMoneyPana1: {
    top: 252,
    left: 212,
    width: 400,
    height: 267,
    position: "absolute",
    overflow: "hidden",
  },
  entrar: {
    color: Color.colorCrimson_100,
    display: "flex",
    width: 81,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoSignIn: {
    paddingHorizontal: Padding.p_64xl,
    left: 686,
    backgroundColor: Color.neutral10,
  },
  cadastrarSe: {
    color: Color.neutral10,
  },
  botaoSignUp: {
    left: 971,
    backgroundColor: Color.colorCrimson_100,
    paddingHorizontal: Padding.p_63xl,
  },
  landing: {
    height: 2048,
    overflow: "hidden",
    width: 1440,
    backgroundColor: Color.neutral10,
  },
});

export default Landing;
