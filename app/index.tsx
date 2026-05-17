import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary text-white px-4 py-2"
      >
        Go On Boarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary text-white px-4 py-2"
      >
        Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary text-white px-4 py-2"
      >
        Sign Up
      </Link>
      <Link
        href="/subscriptions/spotify"
        className="mt-4 rounded bg-primary text-white px-4 py-2"
      >
        View Spotify Subscription
      </Link>
      <Link
        href={{
          pathname: "/(tabs)/subscriptions/[id]",
          params: {
            id: "Claude",
          },
        }}
        className="mt-4 rounded bg-primary text-white px-4 py-2"
      >
        View Claude Subscription
      </Link>
    </View>
  );
}
