import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";

import HomeSvg from "@assets/home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileSvg from "@assets/profile.svg";

import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";

type AppRoutes = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: undefined;
}

export type AppNavigationRoutesProp = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { tokens } = gluestackUIConfig
  const iconSize = tokens.space["6"]
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.colors.green500,
        tabBarInactiveTintColor: tokens.colors.gray200,
        tabBarStyle: {
          backgroundColor: tokens.colors.gray600,
          borderTopWidth: 0,
          height: Platform.OS === "ios" ? 96 : "auto",
          paddingBottom: tokens.space["10"],
          paddingTop: tokens.space["6"],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen
        name="exercise"
        component={Exercise}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { display: "none"}
        }}
      />
    </Navigator>
  )
}

