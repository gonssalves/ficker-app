import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TransactionCard from "../components/TransactionCard";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AppGastosMensais = () => {
  return (
    <View style={styles.appGastosMensais}>
      <View style={[styles.dezembroParent, styles.dezembroLayout]}>
        <Text style={[styles.dezembro, styles.dezembroTypo]}>Dezembro</Text>
        <Image
          style={[styles.image18Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-181.png")}
        />
      </View>
      <Text style={[styles.gastosDesseMs, styles.r80000Position]}>
        Gastos desse mês
      </Text>
      <Text style={[styles.ltimasTransaes, styles.r80000Position]}>
        Últimas transações
      </Text>
      <Text style={[styles.r80000, styles.r80000Clr]}>R$ 800,00</Text>
      <Image
        style={[styles.image19Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-191.png")}
      />
      <TransactionCard />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.image20Wrapper, styles.groupParentLayout]}>
          <Image
            style={[styles.image20Wrapper, styles.groupParentLayout]}
            contentFit="cover"
            source={require("../assets/image-20.png")}
          />
        </View>
        <View style={[styles.kanyeEastParent, styles.kanyeLayout]}>
          <Text style={[styles.kanyeEast, styles.kanyeLayout]}>
            <Text style={styles.text}>{`**** **** **** 1254
`}</Text>
            <Text style={styles.text1}>{`     01/22
`}</Text>
            <Text style={styles.kanyeEast1}>Kanye East</Text>
          </Text>
          <Text style={[styles.validThru, styles.r80000Clr]}>{`VALID 
THRU`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dezembroLayout: {
    width: 111,
    position: "absolute",
  },
  dezembroTypo: {
    textAlign: "justify",
    color: Color.colorCrimson_100,
    fontFamily: FontFamily.poppinsRegular,
  },
  iconLayout: {
    width: 16,
    position: "absolute",
  },
  r80000Position: {
    width: 171,
    fontSize: FontSize.size_base,
    left: 18,
    position: "absolute",
  },
  r80000Clr: {
    color: Color.colorBlack,
    textAlign: "justify",
  },
  groupParentLayout: {
    height: 205,
    width: 295,
    position: "absolute",
  },
  kanyeLayout: {
    height: 49,
    width: 163,
    position: "absolute",
  },
  dezembro: {
    fontSize: FontSize.semibold18_size,
    left: 0,
    top: 0,
    width: 111,
    position: "absolute",
  },
  image18Icon: {
    top: 8,
    left: 95,
    height: 16,
  },
  dezembroParent: {
    top: 24,
    left: 134,
    height: 27,
  },
  gastosDesseMs: {
    top: 92,
    textAlign: "justify",
    color: Color.colorCrimson_100,
    fontFamily: FontFamily.poppinsRegular,
  },
  ltimasTransaes: {
    top: 170,
    textAlign: "justify",
    color: Color.colorCrimson_100,
    fontFamily: FontFamily.poppinsRegular,
  },
  r80000: {
    top: 123,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 171,
    fontSize: FontSize.size_base,
    left: 18,
    position: "absolute",
  },
  image19Icon: {
    top: 27,
    left: 311,
    height: 22,
  },
  image20Wrapper: {
    left: 0,
    top: 0,
    height: 205,
    width: 295,
  },
  text: {
    fontFamily: FontFamily.songMyungRegular,
  },
  text1: {
    fontFamily: FontFamily.dMSansRegular,
  },
  kanyeEast1: {
    fontFamily: FontFamily.droidSans,
  },
  kanyeEast: {
    color: Color.colorBlack,
    textAlign: "justify",
    fontSize: FontSize.semibold18_size,
    left: 0,
    top: 0,
  },
  validThru: {
    top: 16,
    fontSize: FontSize.size_5xs,
    width: 34,
    height: 19,
    fontFamily: FontFamily.dMSansRegular,
    left: 0,
    position: "absolute",
    color: Color.colorBlack,
  },
  kanyeEastParent: {
    top: 90,
    left: 25,
  },
  groupParent: {
    top: 447,
    left: 48,
  },
  appGastosMensais: {
    backgroundColor: Color.neutral10,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AppGastosMensais;
