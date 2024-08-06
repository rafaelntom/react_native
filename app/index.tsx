import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-psemibold">This is the index asdasdasdas!</Text>
      <Link
        href="/home"
        className="text-blue-200 font-bold mt-3 p-3 bg-neutral-800 rounded-full"
      >
        Go to the Home Page
      </Link>
    </View>
  );
}
