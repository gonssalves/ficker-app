import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer1 = ({
  dimensionCode,
  transactionCode,
  propBackgroundColor,
  propColor,
}) => {
  const component4Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const entradasStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.component4, component4Style]}>
      <View style={styles.bolsaDeDinheiro1Parent}>
        <Image
          style={styles.bolsaDeDinheiro1Icon}
          contentFit="cover"
          source={dimensionCode}
        />
        <Text style={[styles.entradas, entradasStyle]}>{transactionCode}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bolsaDeDinheiro1Icon: {
    width: 25,
    height: 25,
  },
  entradas: {
    flex: 1,
    fontSize: FontSize.text_size,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.bold28,
    color: Color.whiteColor,
    textAlign: "left",
    marginLeft: 8,
  },
  bolsaDeDinheiro1Parent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  component4: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.pefitra,
    width: 188,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_5xs,
  },
});

export default FormContainer1;
