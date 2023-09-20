import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ContainerPaginationBar = ({ iconId, iconImageUrl }) => {
  return (
    <View style={[styles.paginationBar, styles.menubuttonFlexBox]}>
      <View style={styles.paginator}>
        <Text style={[styles.itensPorPgina, styles.textTypo]}>
          Itens por página:
        </Text>
        <View style={[styles.menubutton, styles.menubuttonFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>10</Text>
          <Image
            style={styles.iconarrowDropdown}
            contentFit="cover"
            source={require("../assets/iconarrowdropdown.png")}
          />
        </View>
      </View>
      <Text style={[styles.of23, styles.textTypo]}>1 -10 of 23</Text>
      <View style={styles.paginationIcons}>
        <Image
          style={styles.iconarrowLayout}
          contentFit="cover"
          source={iconId}
        />
        <Image
          style={[styles.iconarrowLeft, styles.iconarrowLayout]}
          contentFit="cover"
          source={require("../assets/iconarrowleft.png")}
        />
        <Image
          style={[styles.iconarrowLeft, styles.iconarrowLayout]}
          contentFit="cover"
          source={require("../assets/iconarrowright.png")}
        />
        <Image
          style={[styles.iconarrowLeft, styles.iconarrowLayout]}
          contentFit="cover"
          source={iconImageUrl}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menubuttonFlexBox: {
    justifyContent: "center",
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    color: Color.neutral90,
    lineHeight: 20,
    fontSize: FontSize.sRegular_size,
  },
  iconarrowLayout: {
    height: 32,
    width: 32,
    overflow: "hidden",
  },
  itensPorPgina: {
    fontFamily: FontFamily.regular12,
    color: Color.neutral90,
    lineHeight: 20,
    fontSize: FontSize.sRegular_size,
  },
  text: {
    flex: 1,
    fontFamily: FontFamily.regular12,
    color: Color.neutral90,
    lineHeight: 20,
    fontSize: FontSize.sRegular_size,
  },
  iconarrowDropdown: {
    width: 16,
    height: 16,
    marginLeft: 4,
    overflow: "hidden",
  },
  menubutton: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.neutral10,
    shadowColor: "rgba(16, 24, 40, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderWidth: 1,
    width: 72,
    padding: Padding.p_xs,
    marginLeft: 16,
  },
  paginator: {
    alignItems: "center",
    flexDirection: "row",
  },
  of23: {
    fontFamily: FontFamily.sRegular,
    transform: [
      {
        rotate: "-0.03deg",
      },
    ],
    marginLeft: 32,
    color: Color.neutral90,
    lineHeight: 20,
    fontSize: FontSize.sRegular_size,
  },
  iconarrowLeft: {
    marginLeft: 18,
  },
  paginationIcons: {
    marginLeft: 32,
    flexDirection: "row",
  },
  paginationBar: {
    position: "absolute",
    top: 951,
    left: 251,
    backgroundColor: Color.colorWhitesmoke_100,
    borderTopWidth: 1,
    width: 1189,
    paddingHorizontal: Padding.p_45xl,
    paddingVertical: Padding.p_sm,
  },
});

export default ContainerPaginationBar;
