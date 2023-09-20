import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BonusContainer = ({
  transactionDetails,
  transactionDate,
  transactionAmount,
  propMarginTop,
  propColor,
}) => {
  const tableCellRowStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const amountStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.tableCellRow, tableCellRowStyle]}>
      <View style={styles.tableCell}>
        <Image
          style={styles.edit1Icon}
          contentFit="cover"
          source={require("../assets/edit-11.png")}
        />
      </View>
      <View style={[styles.tableCellName, styles.tableSpaceBlock]}>
        <Text style={[styles.name, styles.nameTypo]}>{transactionDetails}</Text>
      </View>
      <View style={[styles.tableCellName, styles.tableSpaceBlock]}>
        <Text style={[styles.name, styles.nameTypo]}>{transactionDate}</Text>
      </View>
      <View style={[styles.tableCellAmount, styles.tableSpaceBlock]}>
        <Text style={[styles.amount, styles.nameTypo, amountStyle]}>
          {transactionAmount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableSpaceBlock: {
    marginLeft: 12,
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.neutral10,
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  edit1Icon: {
    width: 18,
    height: 18,
  },
  tableCell: {
    paddingHorizontal: Padding.p_18xl,
    paddingVertical: Padding.p_4xl,
    backgroundColor: Color.neutral10,
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  name: {
    color: Color.neutral90,
  },
  tableCellName: {
    width: 419,
  },
  amount: {
    color: Color.colorTeal,
  },
  tableCellAmount: {
    width: 118,
  },
  tableCellRow: {
    marginTop: 5,
    flexDirection: "row",
  },
});

export default BonusContainer;
