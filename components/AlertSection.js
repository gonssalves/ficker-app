import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AlertSection = ({
  featureIcons,
  dimensionLabel,
  propTop,
  propTop1,
  propHeight,
}) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const image19IconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("height", propHeight),
    };
  }, [propTop1, propHeight]);

  return (
    <View
      style={[styles.backgroundParent, styles.backgroundLayout, groupViewStyle]}
    >
      <View style={[styles.background, styles.alertasPosition]} />
      <View style={[styles.alertasWrapper, styles.alertasLayout]}>
        <Text style={[styles.alertas, styles.alertasLayout]}>
          {featureIcons}
        </Text>
      </View>
      <Image
        style={styles.image18Icon}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <Image
        style={[styles.image19Icon, image19IconStyle]}
        contentFit="cover"
        source={dimensionLabel}
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
  alertasPosition: {
    left: 0,
    top: 0,
  },
  alertasLayout: {
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
  alertas: {
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
  alertasWrapper: {
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
  image19Icon: {
    top: 9,
    left: 12,
    width: 28,
    height: 33,
    position: "absolute",
  },
  backgroundParent: {
    top: 225,
    left: 11,
  },
});

export default AlertSection;
