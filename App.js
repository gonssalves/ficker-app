const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppAtivarNotificaes from "./screens/AppAtivarNotificaes";
import AppAlterarSenha from "./screens/AppAlterarSenha";
import AppEditarConta from "./screens/AppEditarConta";
import AppPerfil from "./screens/AppPerfil";
import AppGastosMensais from "./screens/AppGastosMensais";
import AppInserirDadosBancrios from "./screens/AppInserirDadosBancrios";
import AppSelecionarConta from "./screens/AppSelecionarConta";
import AppConectarBanco from "./screens/AppConectarBanco";
import AppEsqueceuSenha from "./screens/AppEsqueceuSenha";
import AppCadastro from "./screens/AppCadastro";
import AppLogin from "./screens/AppLogin";
import AppLoading from "./screens/AppLoading";
import AppLandingPage from "./screens/AppLandingPage";
import PageCadastro from "./components/PageCadastro";
import Landing from "./components/Landing";
import PageEntrar from "./components/PageEntrar";
import PageEsqueceuASenha from "./components/PageEsqueceuASenha";
import HomePage from "./components/HomePage";
import FormNewSavingNewOb from "./components/FormNewSavingNewOb";
import NotifyOverlay from "./components/NotifyOverlay";
import MyProfilePage from "./components/MyProfilePage";
import AnalyticsPage from "./components/AnalyticsPage";
import SavingPage from "./components/SavingPage";
import FormNewSaving from "./components/FormNewSaving";
import ExpensesPage from "./components/ExpensesPage";
import FormNewExpense from "./components/FormNewExpense";
import FormEditExpense from "./components/FormEditExpense";
import IncomePage from "./components/IncomePage";
import FormNewIncome from "./components/FormNewIncome";
import FormEditIncome from "./components/FormEditIncome";
import HomePageEmpity from "./components/HomePageEmpity";
import Group from "./screens/Group";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "SongMyung-Regular": require("./assets/fonts/SongMyung-Regular.ttf"),
    "CuteFont-Regular": require("./assets/fonts/CuteFont-Regular.ttf"),
    "Manrope-Light": require("./assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-SemiBold": require("./assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AppAtivarNotificaes"
              component={AppAtivarNotificaes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppAlterarSenha"
              component={AppAlterarSenha}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppEditarConta"
              component={AppEditarConta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppPerfil"
              component={AppPerfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppGastosMensais"
              component={AppGastosMensais}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppInserirDadosBancrios"
              component={AppInserirDadosBancrios}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppSelecionarConta"
              component={AppSelecionarConta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppConectarBanco"
              component={AppConectarBanco}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppEsqueceuSenha"
              component={AppEsqueceuSenha}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppCadastro"
              component={AppCadastro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppLogin"
              component={AppLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppLoading"
              component={AppLoading}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppLandingPage"
              component={AppLandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
