import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProfileForm = ({ userImageUrl, contactName, propTop }) => {
  const campoNomeStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.campoNome, campoNomeStyle]}>
      <Text style={[styles.label, styles.labelTypo]}>{userImageUrl}</Text>
      <View style={styles.component}>
        <View style={styles.componentChild} />
      </View>
      <Text style={[styles.hawkinsMaru, styles.labelTypo]}>{contactName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  label: {
    top: 0,
    left: 0,
    fontFamily: FontFamily.regular12,
    color: Color.colorBlack,
    display: "flex",
    alignItems: "center",
    width: 58,
    height: 33,
  },
  componentChild: {
    height: "101.92%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-1.92%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.neutral10,
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
  hawkinsMaru: {
    top: 48,
    left: 26,
    fontWeight: "500",
    fontFamily: FontFamily.medium14,
    color: Color.ndTextColor,
  },
  campoNome: {
    top: 160,
    left: 318,
    width: 414,
    height: 85,
    position: "absolute",
  },
});

export default ProfileForm;
