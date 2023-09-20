import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const RentPropertiesContainer = ({ priceText }) => {
  return (
    <View style={styles.propertiesForRentuihut}>
      <View style={styles.frameParent}>
        <View style={styles.saldoParent}>
          <Text style={styles.saldo}>Saldo</Text>
          <Text style={styles.r000}>{priceText}</Text>
        </View>
        <Image
          style={styles.hide1Icon}
          contentFit="cover"
          source={require("../assets/hide-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  saldo: {
    fontSize: FontSize.sRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.medium14,
    color: Color.ndTextColor,
    textAlign: "left",
    alignSelf: "stretch",
  },
  r000: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.bold28,
    color: Color.textPrimaryColor,
    width: 121,
    marginTop: 5,
    textAlign: "left",
  },
  saldoParent: {
    flex: 1,
  },
  hide1Icon: {
    width: 25,
    height: 25,
    marginLeft: 8,
  },
  frameParent: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  propertiesForRentuihut: {
    position: "absolute",
    top: 160,
    left: 275,
    borderRadius: Border.br_mini,
    backgroundColor: Color.whiteColor,
    width: 266,
    height: 108,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_lg,
  },
});

export default RentPropertiesContainer;
