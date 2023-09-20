import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const ContainerCard1 = ({ onLogoUIHUTPress }) => {
  return (
    <View style={styles.topBar}>
      <View style={[styles.topBarInner, styles.logouihutWrapperFlexBox]}>
        <View style={[styles.logouihutWrapper, styles.logouihutWrapperFlexBox]}>
          <Pressable
            style={[styles.logouihut, styles.logouihutWrapperFlexBox]}
            onPress={onLogoUIHUTPress}
          >
            <Image
              style={styles.pieChart1Icon}
              contentFit="cover"
              source={require("../assets/piechart-1.png")}
            />
            <View
              style={[styles.fickerWrapper, styles.logouihutWrapperFlexBox]}
            >
              <Text style={styles.ficker}>Ficker</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logouihutWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  pieChart1Icon: {
    width: 36,
    height: 36,
  },
  ficker: {
    fontSize: FontSize.bold25_size,
    fontWeight: "700",
    fontFamily: FontFamily.bold28,
    color: Color.textPrimaryColor,
    textAlign: "left",
    flex: 1,
  },
  fickerWrapper: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginLeft: 2,
    flex: 1,
  },
  logouihut: {
    width: 173,
    justifyContent: "center",
  },
  logouihutWrapper: {
    flex: 1,
  },
  topBarInner: {
    alignSelf: "stretch",
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.whiteColor,
    width: 1440,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
  },
});

export default ContainerCard1;
