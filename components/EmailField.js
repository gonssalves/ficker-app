import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EmailField = ({ userEmail, propTop, propLeft, propWidth }) => {
  const campoEMailStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const eMAILStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.campoEMail, campoEMailStyle]}>
      <Text style={[styles.email, eMAILStyle]}>{userEmail}</Text>
      <View style={styles.component}>
        <View style={styles.componentChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  email: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_base,
    letterSpacing: 0.8,
    fontFamily: FontFamily.dMSansRegular,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 57,
    height: 34,
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
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_100,
    borderBottomWidth: 1,
    opacity: 0.75,
    position: "absolute",
  },
  component: {
    top: 35,
    left: 2,
    width: 317,
    height: 52,
    position: "absolute",
  },
  campoEMail: {
    top: 347,
    left: 36,
    width: 319,
    height: 87,
    position: "absolute",
  },
});

export default EmailField;
