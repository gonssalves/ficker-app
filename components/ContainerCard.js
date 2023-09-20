import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const ContainerCard = ({ onNotification1Press }) => {
  return (
    <View style={styles.topBar}>
      <View style={[styles.frameParent, styles.profileWrapperFlexBox]}>
        <View style={[styles.logouihutWrapper, styles.profileWrapperFlexBox]}>
          <View style={[styles.logouihut, styles.profileWrapperFlexBox]}>
            <Image
              style={styles.logoImageIcon}
              contentFit="cover"
              source={require("../assets/piechart-1.png")}
            />
            <View style={[styles.fickerWrapper, styles.profileWrapperFlexBox]}>
              <Text style={[styles.ficker, styles.fickerFlexBox]}>Ficker</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.profileNotificationuihut,
            styles.profileWrapperFlexBox,
          ]}
        >
          <Pressable
            style={styles.notification1}
            onPress={onNotification1Press}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/notification-1.png")}
            />
          </Pressable>
          <View style={[styles.profile, styles.profileWrapperFlexBox]}>
            <View style={styles.profileImage}>
              <Image
                style={[styles.profileImageIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/profile-image.png")}
              />
            </View>
            <View style={styles.profileInner}>
              <View style={[styles.frameParent, styles.profileWrapperFlexBox]}>
                <Text style={[styles.hawkinsMaru, styles.fickerFlexBox]}>
                  Hawkins Maru
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  fickerFlexBox: {
    textAlign: "left",
    color: Color.textPrimaryColor,
    flex: 1,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  logoImageIcon: {
    width: 36,
    height: 36,
  },
  ficker: {
    fontSize: FontSize.bold25_size,
    fontWeight: "700",
    fontFamily: FontFamily.bold28,
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
  notification1: {
    width: 25,
    height: 25,
  },
  profileImageIcon: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  hawkinsMaru: {
    fontSize: FontSize.sRegular_size,
    fontWeight: "600",
    fontFamily: FontFamily.semibold18,
  },
  frameParent: {
    alignSelf: "stretch",
  },
  profileInner: {
    marginLeft: 10,
    flex: 1,
  },
  profile: {
    marginLeft: 20,
    flex: 1,
  },
  profileNotificationuihut: {
    width: 264,
    marginLeft: 476,
  },
  topBar: {
    top: 0,
    left: 0,
    backgroundColor: Color.whiteColor,
    width: 1440,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    position: "absolute",
  },
});

export default ContainerCard;
