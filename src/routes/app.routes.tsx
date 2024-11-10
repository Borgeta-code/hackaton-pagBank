import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Header } from "@components/header";
import { Home } from "@screens/home";
import { SignIn } from "@screens/signIn";
import { HeaderSignIn } from "@components/headerSignIn";
import { HomeIcon, ShoppingCartIcon, CreditCardIcon, SettingsIcon } from "lucide-react-native";

type AppRoutes = {
  home: undefined;
  sales: undefined;
  cards: undefined;
  services: undefined;
  signIn: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

const SalesScreen = () => null;
const CardsScreen = () => null;
const ServicesScreen = () => null;

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        header: () => (route.name === "signIn" && <HeaderSignIn />),
        tabBarActiveTintColor: "#FFD13A",
        tabBarInactiveTintColor: "#a1a1aa",
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingTop: 8,
          height: 68,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          position: "absolute",
          bottom: 0,
          display: route.name === "signIn" ? "none" : "flex",
        },
      })}
    >
      <Screen
        name="signIn"
        component={SignIn}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
        }}
      />
      <Screen
        name="sales"
        component={SalesScreen}
        options={{
          tabBarLabel: "Vendas",
          tabBarIcon: ({ color }) => <ShoppingCartIcon size={24} color={color} />,
        }}
      />
      <Screen
        name="cards"
        component={CardsScreen}
        options={{
          tabBarLabel: "Cartões",
          tabBarIcon: ({ color }) => <CreditCardIcon size={24} color={color} />,
        }}
      />
      <Screen
        name="services"
        component={ServicesScreen}
        options={{
          tabBarLabel: "Serviços",
          tabBarIcon: ({ color }) => <SettingsIcon size={24} color={color} />,
        }}
      />
    </Navigator>
  );
}
