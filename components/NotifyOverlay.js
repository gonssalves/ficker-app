import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const NotifyOverlay = ({ onClose }) => {
  return (
    <View style={[styles.notifyOverlay, styles.component16Layout]}>
      <Text style={styles.notificaes}>Notificações</Text>
      <View style={[styles.component16, styles.component16Layout]}>
        <View style={styles.warningSign1Parent}>
          <Image
            style={styles.warningSign1Icon}
            contentFit="cover"
            source={require("../assets/warningsign-1.png")}
          />
          <Text style={styles.suasTransaesDe}>
            Suas transações de saída do mês de março ultrapassaram o seu
            orçamento planejado.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component16Layout: {
    width: 322,
    borderRadius: Border.br_xs,
  },
  notificaes: {
    top: 29,
    left: 26,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: FontFamily.semibold18,
    color: Color.textPrimaryColor,
    textAlign: "left",
    position: "absolute",
  },
  warningSign1Icon: {
    width: 30,
    height: 30,
  },
  suasTransaesDe: {
    fontSize: FontSize.regular12_size,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.medium14,
    color: Color.ndTextColor,
    width: 247,
    marginLeft: 8,
    textAlign: "left",
  },
  warningSign1Parent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  component16: {
    top: 63,
    left: 0,
    backgroundColor: Color.whiteColor,
    height: 59,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_5xs,
    position: "absolute",
  },
  notifyOverlay: {
    backgroundColor: Color.neutral10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 285,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default NotifyOverlay;
