import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCard = ({
  buttonText,
  iconImageUrl,
  propTop,
  propWidth,
  propWidth1,
}) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const groupView2Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const ajudaStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  return (
    <View
      style={[
        styles.backgroundParent,
        styles.backgroundLayout,
        groupView1Style,
      ]}
    >
      <View style={[styles.background, styles.ajudaPosition]} />
      <View style={[styles.ajudaWrapper, styles.ajudaLayout, groupView2Style]}>
        <Text style={[styles.ajuda, styles.ajudaLayout, ajudaStyle]}>
          {buttonText}
        </Text>
      </View>
      <Image
        style={styles.image18Icon}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <Image
        style={styles.image22Icon}
        contentFit="cover"
        source={iconImageUrl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundLayout: {
    height: 50,
    width: 368,
    position: "absolute",
  },
  ajudaPosition: {
    left: 0,
    top: 0,
  },
  ajudaLayout: {
    height: 23,
    width: 106,
    position: "absolute",
  },
  background: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorCrimson_100,
    height: 50,
    width: 368,
    position: "absolute",
  },
  ajuda: {
    fontSize: FontSize.semibold18_size,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.neutral10,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    left: 0,
    top: 0,
  },
  ajudaWrapper: {
    left: 46,
    top: 13,
  },
  image18Icon: {
    left: 334,
    width: 24,
    height: 24,
    top: 13,
    position: "absolute",
  },
  image22Icon: {
    top: 10,
    width: 30,
    height: 30,
    left: 11,
    position: "absolute",
  },
  backgroundParent: {
    top: 349,
    left: 11,
  },
});

export default SectionCard;
