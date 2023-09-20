import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={styles.component10}>
      <View style={styles.settings1Parent}>
        <Image
          style={styles.settings1Icon}
          contentFit="cover"
          source={require("../assets/settings-1.png")}
        />
        <Text style={styles.configuraes}>Configurações</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settings1Icon: {
    width: 25,
    height: 25,
  },
  configuraes: {
    flex: 1,
    fontSize: FontSize.sRegular_size,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.medium14,
    color: Color.ndTextColor,
    textAlign: "left",
    marginLeft: 8,
  },
  settings1Parent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  component10: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.whiteColor,
    width: 188,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_5xs,
  },
});

export default FormContainer;
