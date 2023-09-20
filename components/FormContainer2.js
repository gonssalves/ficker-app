import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FormContainer2 = ({
  iconImageUrl,
  operationLabels,
  onComponent3Press,
}) => {
  return (
    <Pressable style={styles.component3} onPress={onComponent3Press}>
      <View style={styles.despesas1Parent}>
        <Image
          style={styles.despesas1Icon}
          contentFit="cover"
          source={iconImageUrl}
        />
        <Text style={styles.sadas}>{operationLabels}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  despesas1Icon: {
    width: 25,
    height: 25,
  },
  sadas: {
    flex: 1,
    fontSize: FontSize.sRegular_size,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.medium14,
    color: Color.ndTextColor,
    textAlign: "left",
    marginLeft: 8,
  },
  despesas1Parent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  component3: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.whiteColor,
    width: 188,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_5xs,
  },
});

export default FormContainer2;
