import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TransactionCard = () => {
  return (
    <View style={styles.componentParent}>
      <View style={styles.component}>
        <View style={styles.componentChild} />
      </View>
      <View style={[styles.lineParent, styles.lineGroupLayout]}>
        <View style={styles.groupChild} />
        <Text style={[styles.uber, styles.uberTypo]}>Uber</Text>
        <Text style={[styles.r2250, styles.uberTypo]}>R$ 22,50</Text>
      </View>
      <View style={[styles.lineGroup, styles.lineGroupLayout]}>
        <View style={styles.groupChild} />
        <Text style={[styles.tranferncia, styles.uberTypo]}>Tranferência</Text>
        <Text style={[styles.r2250, styles.uberTypo]}>R$ 50,00</Text>
      </View>
      <View style={[styles.lineContainer, styles.lineGroupLayout]}>
        <View style={styles.groupChild} />
        <Text style={[styles.uber, styles.uberTypo]}>Ifood</Text>
        <Text style={[styles.r2250, styles.uberTypo]}>R$ 21,50</Text>
      </View>
      <View style={[styles.groupView, styles.lineGroupLayout]}>
        <View style={styles.groupChild} />
        <Text style={[styles.uber, styles.uberTypo]}>Uber eats</Text>
        <Text style={[styles.r2250, styles.uberTypo]}>R$ 30,00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineGroupLayout: {
    height: 30,
    width: 326,
    left: 8,
    position: "absolute",
  },
  uberTypo: {
    textAlign: "justify",
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.text_size,
    top: 0,
    position: "absolute",
  },
  componentChild: {
    height: "100.57%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-0.57%",
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
    left: 0,
    borderRadius: Border.br_31xl,
    width: 255,
    top: 0,
    height: 176,
    position: "absolute",
  },
  groupChild: {
    top: 29,
    left: -1,
    borderStyle: "dashed",
    borderColor: Color.colorBlack,
    borderRadius: 0.001,
    borderTopWidth: 2,
    width: 240,
    height: 2,
    position: "absolute",
  },
  uber: {
    width: 85,
    left: 8,
    textAlign: "justify",
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.text_size,
  },
  r2250: {
    left: 169,
    width: 157,
  },
  lineParent: {
    top: 8,
  },
  tranferncia: {
    width: 102,
    left: 8,
    textAlign: "justify",
    color: Color.colorBlack,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.text_size,
  },
  lineGroup: {
    top: 48,
  },
  lineContainer: {
    top: 88,
  },
  groupView: {
    top: 128,
  },
  componentParent: {
    top: 215,
    left: 68,
    width: 334,
    height: 176,
    position: "absolute",
  },
});

export default TransactionCard;
