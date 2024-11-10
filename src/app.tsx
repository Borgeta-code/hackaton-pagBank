import React from "react";

import { SafeAreaView, StatusBar } from "react-native";
import { Routes } from "./routes";
import "./global.css";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </SafeAreaView>
  );
}
