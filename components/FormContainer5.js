import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer5 = ({
  nameInputEmailInput,
  propTextAlign,
  propJustifyContent,
  propWidth,
}) => {
  const nomeStyle = useMemo(() => {
    return {
      ...getStyleValue("textAlign", propTextAlign),
      ...getStyleValue("justifyContent", propJustifyContent),
      ...getStyleValue("width", propWidth),
    };
  }, [propTextAlign, propJustifyContent, propWidth]);

  return (
    <View style={styles.campoNome}>
      <Text style={[styles.nome, nomeStyle]}>{nameInputEmailInput}</Text>
      <View style={styles.component}>
        <View style={styles.componentChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nome: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.regular12,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 58,
    height: 33,
    position: "absolute",
  },
  componentChild: {
    height: "101.92%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-1.92%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_100,
    borderBottomWidth: 1,
    opacity: 0.75,
    position: "absolute",
  },
  component: {
    top: 33,
    left: 1,
    width: 412,
    height: 52,
    position: "absolute",
  },
  campoNome: {
    width: 414,
    height: 85,
    marginTop: 20,
  },
});

export default FormContainer5;
