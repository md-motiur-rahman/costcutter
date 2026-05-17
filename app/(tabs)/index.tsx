
import { Link } from "expo-router";
import { Text} from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5" >
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
          pathname: "/subscriptions/[id]",
          params: {
            id: "Claude",
          },
        }}
        className="mt-4 rounded bg-primary text-white px-4 py-2"
      >
        View Claude Subscription
      </Link>
    </SafeAreaView>
  );
}
