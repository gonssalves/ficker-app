import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const CardContainer1 = ({ onFramePressablePress }) => {
  return (
    <View style={styles.component16}>
      <Pressable style={styles.despesas1Parent} onPress={onFramePressablePress}>
        <Image
          style={styles.despesas1Icon}
          contentFit="cover"
          source={require("../assets/despesas-12.png")}
        />
        <Text style={styles.incio}>Início</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  despesas1Icon: {
    width: 25,
    height: 25,
  },
  incio: {
    flex: 1,
    fontSize: FontSize.sRegular_size,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.medium14,
    color: Color.ndTextColor,
    textAlign: "left",
    marginLeft: 8,
  },
  despesas1Parent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  component16: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.whiteColor,
    width: 188,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_5xs,
  },
});

export default CardContainer1;
