import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import AlertSection from "../components/AlertSection";
import SectionCard from "../components/SectionCard";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AppPerfil = () => {
  return (
    <View style={styles.appPerfil}>
      <View style={styles.backgroundParent}>
        <View style={styles.background} />
        <View style={styles.kanyeEastParent}>
          <Text style={[styles.kanyeEast, styles.kanyeEastLayout]}>
            Kanye East
          </Text>
          <Text style={[styles.meusDados, styles.kanyeEastLayout]}>
            Meus dados
          </Text>
        </View>
        <Image
          style={styles.image15Icon}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
        <Image
          style={styles.image18Icon}
          contentFit="cover"
          source={require("../assets/image-18.png")}
        />
      </View>
      <AlertSection
        featureIcons="Alertas"
        dimensionLabel={require("../assets/image-19.png")}
      />
      <AlertSection
        featureIcons="Segurança"
        dimensionLabel={require("../assets/image-21.png")}
        propTop={287}
        propTop1={11}
        propHeight={28}
      />
      <SectionCard
        buttonText="Ajuda"
        iconImageUrl={require("../assets/image-22.png")}
      />
      <SectionCard
        buttonText="Adicionar novo cartão"
        iconImageUrl={require("../assets/image-23.png")}
        propTop={411}
        propWidth={205}
        propWidth1={205}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  kanyeEastLayout: {
    height: 23,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.neutral10,
    width: 106,
    left: 0,
    position: "absolute",
  },
  background: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorCrimson_100,
    left: 0,
    top: 0,
    height: 50,
    width: 368,
    position: "absolute",
  },
  kanyeEast: {
    fontSize: FontSize.semibold18_size,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    top: 0,
    height: 23,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.neutral10,
  },
  meusDados: {
    top: 16,
    fontSize: FontSize.regular12_size,
    fontFamily: FontFamily.dMSansRegular,
  },
  kanyeEastParent: {
    top: 5,
    left: 46,
    height: 40,
    width: 106,
    position: "absolute",
  },
  image15Icon: {
    top: 11,
    left: 13,
    width: 27,
    height: 27,
    position: "absolute",
  },
  image18Icon: {
    top: 13,
    left: 334,
    width: 24,
    height: 24,
    position: "absolute",
  },
  backgroundParent: {
    top: 163,
    left: 11,
    height: 50,
    width: 368,
    position: "absolute",
  },
  appPerfil: {
    backgroundColor: Color.neutral10,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AppPerfil;
