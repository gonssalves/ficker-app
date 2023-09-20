import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NotifyOverlay from "./NotifyOverlay";
import CardContainer1 from "./CardContainer1";
import FormContainer2 from "./FormContainer2";
import FormContainer1 from "./FormContainer1";
import FormContainer from "./FormContainer";
import ContainerCard from "./ContainerCard";
import FormEditExpense from "./FormEditExpense";
import FormNewExpense from "./FormNewExpense";
import ContainerPaginationBar from "./ContainerPaginationBar";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const ExpensesPage = () => {
  const navigation = useNavigation();
  const [notification1IconVisible, setNotification1IconVisible] =
    useState(false);
  const [edit1IconVisible, setEdit1IconVisible] = useState(false);
  const [buttonAddContainerVisible, setButtonAddContainerVisible] =
    useState(false);

  const openNotification1Icon = useCallback(() => {
    setNotification1IconVisible(true);
  }, []);

  const closeNotification1Icon = useCallback(() => {
    setNotification1IconVisible(false);
  }, []);

  const openEdit1Icon = useCallback(() => {
    setEdit1IconVisible(true);
  }, []);

  const closeEdit1Icon = useCallback(() => {
    setEdit1IconVisible(false);
  }, []);

  const openButtonAddContainer = useCallback(() => {
    setButtonAddContainerVisible(true);
  }, []);

  const closeButtonAddContainer = useCallback(() => {
    setButtonAddContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.expensesPage}>
        <View style={styles.component12Wrapper}>
          <View>
            <CardContainer1
              onFramePressablePress={() => navigation.navigate("HomePage")}
            />
            <FormContainer2
              iconImageUrl={require("../assets/bolsadedinheiro-1.png")}
              operationLabels="Entradas"
              onComponent3Press={() => navigation.navigate("IncomePage")}
            />
            <FormContainer1
              dimensionCode={require("../assets/despesas-14.png")}
              transactionCode="Saídas"
              propBackgroundColor="#d9d9d9"
              propColor="#fcfcfc"
            />
            <FormContainer2
              iconImageUrl={require("../assets/cofrinho-1.png")}
              operationLabels="Cofrinho"
              onComponent3Press={() => navigation.navigate("SavingPage")}
            />
            <FormContainer2
              iconImageUrl={require("../assets/analise-1.png")}
              operationLabels="Análises"
              onComponent3Press={() => navigation.navigate("AnalyticsPage")}
            />
            <FormContainer2
              iconImageUrl={require("../assets/perfil-1-1.png")}
              operationLabels="Meu Perfil"
              onComponent3Press={() => navigation.navigate("MyProfilePage")}
            />
            <FormContainer />
          </View>
        </View>
        <ContainerCard onNotification1Press={openNotification1Icon} />
        <View style={styles.table}>
          <View style={styles.tableBody}>
            <View style={styles.tableCellRow}>
              <View style={styles.tableCell}>
                <Pressable style={styles.edit1Layout} onPress={openEdit1Icon}>
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/edit-11.png")}
                  />
                </Pressable>
              </View>
              <View style={[styles.tableCellName, styles.tableSpaceBlock]}>
                <Text style={[styles.name, styles.nameTypo]}>Aluguel</Text>
              </View>
              <View style={[styles.tableCellDate, styles.tableLayout2]}>
                <Text style={[styles.name, styles.nameTypo]}>01 Mar, 2023</Text>
              </View>
              <View style={[styles.tableCellStatus, styles.tableLayout1]}>
                <Text style={[styles.name, styles.nameTypo]}>Casa</Text>
              </View>
              <View style={[styles.tableCellAmount, styles.tableLayout]}>
                <Text style={[styles.amount, styles.nameTypo]}> -R$950.00</Text>
              </View>
            </View>
            <View style={styles.tableCellRow1}>
              <View style={styles.tableCell}>
                <Image
                  style={styles.edit1Layout}
                  contentFit="cover"
                  source={require("../assets/edit-11.png")}
                />
              </View>
              <View style={[styles.tableCellName, styles.tableSpaceBlock]}>
                <Text style={[styles.name, styles.nameTypo]}>
                  Presente para minha mãe
                </Text>
              </View>
              <View style={[styles.tableCellDate, styles.tableLayout2]}>
                <Text style={[styles.name, styles.nameTypo]}>19 Mar, 2023</Text>
              </View>
              <View style={[styles.tableCellStatus, styles.tableLayout1]}>
                <Text style={[styles.name, styles.nameTypo]}>Presente</Text>
              </View>
              <View style={[styles.tableCellAmount, styles.tableLayout]}>
                <Text style={[styles.amount, styles.nameTypo]}> -R$70.96</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableHead}>
            <View style={[styles.tableHeaderEdit, styles.tableBorder]}>
              <Text style={[styles.edit, styles.editTypo]}>Editar</Text>
            </View>
            <View style={[styles.tableHeaderName, styles.tableBorder]}>
              <Text style={[styles.edit, styles.editTypo]}>Descrição</Text>
            </View>
            <View style={[styles.tableHeaderDate, styles.tableBorder]}>
              <Text style={[styles.edit, styles.editTypo]}>Data</Text>
            </View>
            <View style={[styles.tableHeaderStatus, styles.tableBorder]}>
              <Text style={[styles.status2, styles.editTypo]}>Categoria</Text>
            </View>
            <View style={[styles.tableHeaderAmount, styles.tableBorder]}>
              <Text style={[styles.edit, styles.editTypo]}>Valor</Text>
            </View>
          </View>
        </View>
        <Text style={styles.sadas}>Saídas</Text>
        <View style={[styles.searchBaruihut, styles.searchPosition]}>
          <View style={styles.categoriaParent}>
            <Text style={styles.categoriaTypo}>Categoria</Text>
            <Image
              style={[styles.setaParaBaixo1Icon, styles.edit1Layout]}
              contentFit="cover"
              source={require("../assets/setaparabaixo-1.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.buttonAdd, styles.buttonLayout]}
          onPress={openButtonAddContainer}
        >
          <View style={[styles.buttonAddChild, styles.buttonLayout]} />
          <Text style={styles.adicionarNova}>Adicionar nova</Text>
        </Pressable>
        <ContainerPaginationBar
          iconId={require("../assets/iconarrowdoubleleft1.png")}
          iconImageUrl={require("../assets/iconarrowdoubleright1.png")}
        />
        <View style={[styles.searchBaruihut1, styles.searchPosition]}>
          <View style={styles.swmIconsOutlineSearchParent}>
            <Image
              style={styles.swmIconsOutlineSearch}
              contentFit="cover"
              source={require("../assets/swm-icons--outline--search.png")}
            />
            <Text style={[styles.procurePorDescrio, styles.categoriaTypo]}>
              Procure por descrição
            </Text>
          </View>
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

      <Modal animationType="fade" transparent visible={edit1IconVisible}>
        <View style={styles.edit1IconOverlay}>
          <Pressable style={styles.edit1IconBg} onPress={closeEdit1Icon} />
          <FormEditExpense onClose={closeEdit1Icon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={buttonAddContainerVisible}
      >
        <View style={styles.buttonAddContainerOverlay}>
          <Pressable
            style={styles.buttonAddContainerBg}
            onPress={closeButtonAddContainer}
          />
          <FormNewExpense onClose={closeButtonAddContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  tableSpaceBlock: {
    marginLeft: 12,
    width: 245,
  },
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  tableLayout2: {
    width: 220,
    marginLeft: 12,
  },
  tableLayout1: {
    width: 361,
    marginLeft: 12,
  },
  tableLayout: {
    width: 118,
    marginLeft: 12,
  },
  tableBorder: {
    padding: Padding.p_base,
    borderBottomWidth: 2,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  editTypo: {
    color: Color.neutral100,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
  },
  searchPosition: {
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    top: 90,
    backgroundColor: Color.neutral10,
    position: "absolute",
  },
  edit1Layout: {
    height: 18,
    width: 18,
  },
  buttonLayout: {
    height: 38,
    width: 110,
    position: "absolute",
  },
  categoriaTypo: {
    color: Color.ndTextColor,
    lineHeight: 18,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    fontFamily: FontFamily.regular12,
    flex: 1,
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
  component12Wrapper: {
    left: 1,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_79xl,
    paddingRight: Padding.p_23xl,
    paddingBottom: Padding.p_79xl,
    flexDirection: "row",
    backgroundColor: Color.neutral10,
    top: 0,
    position: "absolute",
    height: 1024,
  },
  edit1IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  edit1IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  tableCell: {
    paddingHorizontal: Padding.p_18xl,
    paddingVertical: Padding.p_4xl,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    backgroundColor: Color.neutral10,
  },
  name: {
    color: Color.neutral90,
  },
  tableCellName: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    backgroundColor: Color.neutral10,
  },
  tableCellDate: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    backgroundColor: Color.neutral10,
  },
  tableCellStatus: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    backgroundColor: Color.neutral10,
  },
  amount: {
    color: Color.colorCrimson_100,
  },
  tableCellAmount: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    backgroundColor: Color.neutral10,
  },
  tableCellRow: {
    flexDirection: "row",
  },
  tableCellRow1: {
    marginTop: 5,
    flexDirection: "row",
  },
  tableBody: {
    top: 69,
    paddingHorizontal: Padding.p_24xl,
    paddingVertical: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  edit: {
    flex: 1,
    color: Color.neutral100,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
  },
  tableHeaderEdit: {
    width: 93,
  },
  tableHeaderName: {
    marginLeft: 12,
    width: 245,
  },
  tableHeaderDate: {
    width: 220,
    marginLeft: 12,
  },
  status2: {
    width: 267,
  },
  tableHeaderStatus: {
    width: 361,
    marginLeft: 12,
  },
  tableHeaderAmount: {
    width: 118,
    marginLeft: 12,
  },
  tableHead: {
    left: 43,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  table: {
    top: 159,
    left: 251,
    width: 1170,
    height: 202,
    position: "absolute",
    overflow: "hidden",
  },
  sadas: {
    top: 98,
    left: 275,
    fontSize: FontSize.semibold18_size,
    color: Color.textPrimaryColor,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  setaParaBaixo1Icon: {
    marginLeft: 8,
  },
  categoriaParent: {
    width: 90,
    alignItems: "center",
    flexDirection: "row",
  },
  searchBaruihut: {
    right: 174,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_2xl,
    paddingBottom: Padding.p_3xs,
    width: 110,
    justifyContent: "center",
  },
  buttonAddContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonAddContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  buttonAddChild: {
    backgroundColor: Color.pefitra,
    borderRadius: Border.br_5xs,
    height: 38,
    left: 0,
    top: 0,
  },
  adicionarNova: {
    top: 9,
    color: Color.neutral10,
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.regular12_size,
    width: 110,
    fontFamily: FontFamily.semibold18,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  buttonAdd: {
    left: 1305,
    height: 38,
    top: 90,
  },
  swmIconsOutlineSearch: {
    width: 16,
    height: 16,
  },
  procurePorDescrio: {
    marginLeft: 8,
  },
  swmIconsOutlineSearchParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  searchBaruihut1: {
    left: 939,
    width: 209,
    padding: Padding.p_3xs,
  },
  expensesPage: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 1439,
    overflow: "hidden",
    height: 1024,
  },
});

export default ExpensesPage;
