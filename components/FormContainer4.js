import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const FormContainer4 = ({ componentDescription }) => {
  return (
    <View style={styles.tableHead}>
      <View style={styles.tableHeaderEdit}>
        <Text style={styles.edit}>Editar</Text>
      </View>
      <View style={[styles.tableHeaderName, styles.tableBorder]}>
        <Text style={styles.edit}>{componentDescription}</Text>
      </View>
      <View style={[styles.tableHeaderName, styles.tableBorder]}>
        <Text style={styles.edit}>Data</Text>
      </View>
      <View style={[styles.tableHeaderAmount, styles.tableBorder]}>
        <Text style={styles.edit}>Valor</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableBorder: {
    marginLeft: 12,
    padding: Padding.p_base,
    borderBottomWidth: 2,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  edit: {
    flex: 1,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.medium14,
    color: Color.neutral100,
    textAlign: "left",
  },
  tableHeaderEdit: {
    width: 93,
    padding: Padding.p_base,
    borderBottomWidth: 2,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  tableHeaderName: {
    width: 419,
  },
  tableHeaderAmount: {
    width: 118,
  },
  tableHead: {
    position: "absolute",
    top: 0,
    left: 43,
    flexDirection: "row",
  },
});

export default FormContainer4;
