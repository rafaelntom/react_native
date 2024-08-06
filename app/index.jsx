import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { CustomButton } from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    // The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="items-center justify-center px-4">
          <Image
            source={images.logo}
            className="h-[100px] w-[130px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="h-[380px] w-full max-w-[380px]"
            resizeMode="contain"
          />
        </View>
        <View className="px-4">
          <Text className="text-2xl font-pbold text-center text-white px-5 mt-2">
            Discover Endeless Possibilities With{" "}
            <Text className="text-secondary-200">Aora</Text>
          </Text>
          <CustomButton
            title={`Continue With Email`}
            handlePress={() => {}}
            containerStyles={`w-full mt-7`}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
