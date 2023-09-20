import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NotifyOverlay from "./NotifyOverlay";
import CardContainer from "./CardContainer";
import ContainerCard from "./ContainerCard";
import RentPropertiesContainer from "./RentPropertiesContainer";
import FormNewSavingNewOb from "./FormNewSavingNewOb";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const HomePageEmpity = () => {
  const [notification1IconVisible, setNotification1IconVisible] =
    useState(false);
  const [iconsMenuContainerVisible, setIconsMenuContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openNotification1Icon = useCallback(() => {
    setNotification1IconVisible(true);
  }, []);

  const closeNotification1Icon = useCallback(() => {
    setNotification1IconVisible(false);
  }, []);

  const openIconsMenuContainer = useCallback(() => {
    setIconsMenuContainerVisible(true);
  }, []);

  const closeIconsMenuContainer = useCallback(() => {
    setIconsMenuContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.homePageEmpity}>
        <CardContainer
          onComponent11Press={() => navigation.navigate("ExpensesPage")}
          onComponent4Press={() => navigation.navigate("IncomePage")}
          onComponent14Press={() => navigation.navigate("ExpensesPage")}
          onComponent12Press={() => navigation.navigate("SavingPage")}
          onComponent13Press={() => navigation.navigate("AnalyticsPage")}
          onComponent15Press={() => navigation.navigate("MyProfilePage")}
        />
        <Text style={[styles.olHawkinsMaru, styles.r000Clr]}>
          Olá, Hawkins Maru!
        </Text>
        <ContainerCard onNotification1Press={openNotification1Icon} />
        <Text
          style={[styles.deMaro, styles.oramentoTypo]}
        >{`01 de Março - 31 de Março `}</Text>
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={styles.oramentoPlanejadoParent}>
            <Text style={[styles.oramentoPlanejado, styles.oramentoTypo]}>
              Orçamento Planejado
            </Text>
            <Text style={[styles.r000, styles.r000Clr]}>R$ 0,00</Text>
          </View>
          <Image
            style={[styles.edit1Icon, styles.edit1IconLayout]}
            contentFit="cover"
            source={require("../assets/edit-1.png")}
          />
        </View>
        <View
          style={[
            styles.propertiesForRentuihut,
            styles.propertiesForRentuihutLayout,
          ]}
        >
          <View
            style={[
              styles.propertiesForRentuihutInner,
              styles.frameParentFlexBox,
            ]}
          >
            <View style={styles.oramentoRealParent}>
              <Text style={[styles.oramentoReal, styles.oramentoTypo]}>
                Orçamento Real
              </Text>
              <Text style={[styles.r000, styles.r000Clr]}>R$ 0,00</Text>
            </View>
          </View>
        </View>
        <RentPropertiesContainer priceText="R$ 0,00" />
        <View
          style={[
            styles.propertyReferralsUihut,
            styles.propertiesForRentuihutLayout,
          ]}
        >
          <View style={styles.propertyReferralsUihutInner}>
            <View>
              <View style={styles.frameContainer}>
                <View>
                  <Text style={[styles.cofrinho, styles.cofrinhoTypo]}>
                    Cofrinho
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.iconsMenu, styles.edit1IconLayout]}
            onPress={openIconsMenuContainer}
          >
            <Pressable
              style={styles.plus1}
              onPress={() => navigation.navigate("FormNewSavingNewOb")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/plus-1.png")}
              />
            </Pressable>
          </Pressable>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={notification1IconVisible}
      >
        <View style={styles.notification1IconOverlay}>
          <Pressable
            style={styles.notification1IconBg}
            onPress={closeNotification1Icon}
          />
          <NotifyOverlay onClose={closeNotification1Icon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={iconsMenuContainerVisible}
      >
        <View style={styles.iconsMenuContainerOverlay}>
          <Pressable
            style={styles.iconsMenuContainerBg}
            onPress={closeIconsMenuContainer}
          />
          <FormNewSavingNewOb onClose={closeIconsMenuContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  r000Clr: {
    color: Color.textPrimaryColor,
    textAlign: "left",
  },
  oramentoTypo: {
    color: Color.ndTextColor,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    fontSize: FontSize.sRegular_size,
    textAlign: "left",
  },
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  edit1IconLayout: {
    height: 18,
    width: 18,
  },
  propertiesForRentuihutLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  cofrinhoTypo: {
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    fontSize: FontSize.semibold18_size,
  },
  notification1IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  notification1IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  olHawkinsMaru: {
    textAlign: "left",
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    fontSize: FontSize.semibold18_size,
    left: 275,
    top: 98,
    position: "absolute",
  },
  deMaro: {
    left: 1232,
    top: 98,
    position: "absolute",
  },
  oramentoPlanejado: {
    width: 167,
  },
  r000: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.bold28,
    marginTop: 5,
    alignSelf: "stretch",
    textAlign: "left",
  },
  oramentoPlanejadoParent: {
    width: 191,
  },
  edit1Icon: {
    marginLeft: 13,
  },
  frameParent: {
    top: 184,
    left: 863,
    position: "absolute",
  },
  oramentoReal: {
    alignSelf: "stretch",
  },
  oramentoRealParent: {
    flex: 1,
  },
  propertiesForRentuihutInner: {
    alignSelf: "stretch",
  },
  propertiesForRentuihut: {
    top: 160,
    left: 1132,
    backgroundColor: Color.whiteColor,
    width: 266,
    height: 108,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_lg,
  },
  cofrinho: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  frameContainer: {
    width: 311,
    flexDirection: "row",
  },
  propertyReferralsUihutInner: {
    width: 325,
    flexDirection: "row",
  },
  iconsMenuContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  iconsMenuContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  plus1: {
    left: "-94.44%",
    top: "16.67%",
    right: "111.11%",
    bottom: "0%",
    width: "83.33%",
    height: "83.33%",
    position: "absolute",
  },
  iconsMenu: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
    marginLeft: 35,
    overflow: "hidden",
  },
  propertyReferralsUihut: {
    top: 365,
    backgroundColor: Color.neutral10,
    width: 418,
    padding: Padding.p_xl,
    flexDirection: "row",
    left: 275,
  },
  homePageEmpity: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 1440,
    height: 1024,
    overflow: "hidden",
  },
});

export default HomePageEmpity;
