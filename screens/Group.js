import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.image20Wrapper}>
        <Image
          style={styles.image20Wrapper}
          contentFit="cover"
          source={require("../assets/image-20.png")}
        />
      </View>
      <View style={[styles.kanyeEastParent, styles.kanyeLayout]}>
        <Text style={[styles.kanyeEast, styles.kanyeEastPosition]}>
          <Text style={styles.text}>{`**** **** **** 1254
`}</Text>
          <Text style={styles.text1}>{`     01/22
`}</Text>
          <Text style={styles.kanyeEast1}>Kanye East</Text>
        </Text>
        <Text style={[styles.validThru, styles.kanyeEastPosition]}>{`VALID 
THRU`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kanyeLayout: {
    height: 49,
    width: 163,
  },
  kanyeEastPosition: {
    textAlign: "justify",
    color: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  image20Wrapper: {
    width: 295,
    left: 0,
    top: 0,
    position: "absolute",
    height: 205,
  },
  text: {
    fontFamily: FontFamily.songMyungRegular,
  },
  text1: {
    fontFamily: FontFamily.dMSansRegular,
  },
  kanyeEast1: {
    fontFamily: FontFamily.droidSans,
  },
  kanyeEast: {
    fontSize: FontSize.semibold18_size,
    height: 49,
    width: 163,
    top: 0,
    textAlign: "justify",
    color: Color.colorBlack,
  },
  validThru: {
    top: 16,
    fontSize: FontSize.size_5xs,
    width: 34,
    height: 19,
    fontFamily: FontFamily.dMSansRegular,
  },
  kanyeEastParent: {
    top: 90,
    left: 25,
    width: 163,
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 205,
  },
});

export default Group;
