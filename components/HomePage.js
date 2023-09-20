import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NotifyOverlay from "./NotifyOverlay";
import CardContainer from "./CardContainer";
import ContainerCard from "./ContainerCard";
import RentPropertiesContainer from "./RentPropertiesContainer";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const HomePage = () => {
  const [notification1IconVisible, setNotification1IconVisible] =
    useState(false);
  const navigation = useNavigation();

  const openNotification1Icon = useCallback(() => {
    setNotification1IconVisible(true);
  }, []);

  const closeNotification1Icon = useCallback(() => {
    setNotification1IconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.homePage}>
        <CardContainer
          onComponent11Press={() => navigation.navigate("ExpensesPage")}
          onComponent4Press={() => navigation.navigate("IncomePage")}
          onComponent14Press={() => navigation.navigate("ExpensesPage")}
          onComponent12Press={() => navigation.navigate("SavingPage")}
          onComponent13Press={() => navigation.navigate("AnalyticsPage")}
          onComponent15Press={() => navigation.navigate("MyProfilePage")}
        />
        <Text style={[styles.olHawkinsMaru, styles.r195000Clr]}>
          Olá, Hawkins Maru!
        </Text>
        <Text
          style={[styles.deMaro, styles.oramentoTypo]}
        >{`01 de Março - 31 de Março `}</Text>
        <ContainerCard onNotification1Press={openNotification1Icon} />
        <View style={[styles.propertiesForSale, styles.propertiesLayout]}>
          <View style={styles.frameParentFlexBox}>
            <View style={styles.oramentoPlanejadoParent}>
              <Text style={[styles.oramentoPlanejado, styles.oramentoTypo]}>
                Orçamento Planejado
              </Text>
              <Text style={[styles.r195000, styles.r195000Clr]}>
                R$ 1.950,00
              </Text>
            </View>
            <Image
              style={[styles.edit1Icon, styles.edit1IconLayout]}
              contentFit="cover"
              source={require("../assets/edit-1.png")}
            />
          </View>
        </View>
        <View style={[styles.propertiesForRentuihut, styles.propertiesLayout]}>
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
              <Text style={[styles.r195000, styles.r195000Clr]}>
                R$ 1477,00
              </Text>
            </View>
          </View>
        </View>
        <RentPropertiesContainer priceText="R$ 473,00" />
        <View style={styles.propertyReferralsUihut}>
          <View style={styles.propertyReferralsUihutInner}>
            <View>
              <View style={styles.frameWrapper}>
                <View>
                  <Text style={[styles.cofrinho, styles.cofrinhoTypo]}>
                    Cofrinho
                  </Text>
                </View>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.frameView}>
                  <View style={styles.frameParentFlexBox}>
                    <Image
                      style={styles.frameChild}
                      contentFit="cover"
                      source={require("../assets/ellipse-148.png")}
                    />
                    <Text style={styles.viajem}>Viajem</Text>
                  </View>
                  <Text style={[styles.r79600, styles.oramentoTypo]}>
                    R$796,00
                  </Text>
                </View>
                <View style={styles.frameParent1}>
                  <View style={styles.frameParentFlexBox}>
                    <Image
                      style={styles.frameChild}
                      contentFit="cover"
                      source={require("../assets/ellipse-149.png")}
                    />
                    <Text style={styles.viajem}>Reserva de Emergência</Text>
                  </View>
                  <Text style={[styles.r24300, styles.oramentoTypo]}>
                    R$ 243,00
                  </Text>
                </View>
                <View style={styles.frameParent2}>
                  <View
                    style={[styles.ellipseContainer, styles.r1256800Position]}
                  >
                    <Image
                      style={styles.frameChild}
                      contentFit="cover"
                      source={require("../assets/ellipse-150.png")}
                    />
                    <Text style={styles.viajem}>Carro Novo</Text>
                  </View>
                  <Text style={[styles.r1256800, styles.r1256800Position]}>
                    R$ 12.568,00
                  </Text>
                </View>
                <View style={styles.frameParent1}>
                  <View style={styles.frameParentFlexBox}>
                    <Image
                      style={styles.frameChild}
                      contentFit="cover"
                      source={require("../assets/ellipse-151.png")}
                    />
                    <Text style={styles.viajem}>Reforma da Casa</Text>
                  </View>
                  <Text style={[styles.r32400, styles.oramentoTypo]}>
                    R$ 324,00
                  </Text>
                </View>
                <View style={styles.frameParent1}>
                  <View style={styles.frameParentFlexBox}>
                    <Image
                      style={styles.frameChild}
                      contentFit="cover"
                      source={require("../assets/ellipse-152.png")}
                    />
                    <Text style={styles.viajem}>Casamento</Text>
                  </View>
                  <Text style={[styles.r784500, styles.oramentoTypo]}>
                    R$ 7.845,00
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.iconsMenu, styles.edit1IconLayout]}
            onPress={() => navigation.navigate("FormNewSavingNewOb")}
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
    </>
  );
};

const styles = StyleSheet.create({
  r195000Clr: {
    color: Color.textPrimaryColor,
    textAlign: "left",
  },
  oramentoTypo: {
    color: Color.ndTextColor,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    fontSize: FontSize.sRegular_size,
  },
  propertiesLayout: {
    paddingHorizontal: Padding.p_3xl,
    height: 108,
    width: 266,
    backgroundColor: Color.whiteColor,
    top: 160,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  edit1IconLayout: {
    height: 18,
    width: 18,
  },
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  cofrinhoTypo: {
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    fontSize: FontSize.semibold18_size,
  },
  r1256800Position: {
    top: 0,
    position: "absolute",
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
    color: Color.textPrimaryColor,
    top: 98,
    position: "absolute",
  },
  deMaro: {
    left: 1232,
    textAlign: "left",
    top: 98,
    color: Color.ndTextColor,
    position: "absolute",
  },
  oramentoPlanejado: {
    width: 167,
    textAlign: "left",
  },
  r195000: {
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
  propertiesForSale: {
    left: 841,
    paddingVertical: Padding.p_5xl,
  },
  oramentoReal: {
    alignSelf: "stretch",
    textAlign: "left",
  },
  oramentoRealParent: {
    flex: 1,
  },
  propertiesForRentuihutInner: {
    alignSelf: "stretch",
  },
  propertiesForRentuihut: {
    left: 1132,
    paddingVertical: Padding.p_lg,
  },
  cofrinho: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  frameWrapper: {
    width: 311,
    flexDirection: "row",
  },
  frameChild: {
    width: 12,
    height: 12,
  },
  viajem: {
    marginLeft: 10,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    fontSize: FontSize.sRegular_size,
    textAlign: "left",
    color: Color.textPrimaryColor,
  },
  r79600: {
    textAlign: "right",
    marginLeft: 196,
  },
  frameView: {
    flexDirection: "row",
  },
  r24300: {
    marginLeft: 85,
    textAlign: "left",
  },
  frameParent1: {
    marginTop: 20,
    flexDirection: "row",
  },
  ellipseContainer: {
    left: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  r1256800: {
    left: 241,
    color: Color.ndTextColor,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    fontSize: FontSize.sRegular_size,
    textAlign: "left",
  },
  frameParent2: {
    width: 326,
    height: 19,
    marginTop: 20,
  },
  r32400: {
    marginLeft: 127,
    textAlign: "left",
  },
  r784500: {
    marginLeft: 151,
    textAlign: "left",
  },
  frameContainer: {
    marginTop: 22,
  },
  propertyReferralsUihutInner: {
    width: 325,
    flexDirection: "row",
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
    borderRadius: Border.br_mini,
    left: 275,
    position: "absolute",
  },
  homePage: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 1440,
    height: 1024,
    overflow: "hidden",
  },
});

export default HomePage;
