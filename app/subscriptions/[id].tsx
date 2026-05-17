import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Link, useLocalSearchParams } from 'expo-router';
import { usePostHog } from 'posthog-react-native';

const SubscriptionDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>()
    const posthog = usePostHog();

    useEffect(() => {
        posthog.capture('subscription_detail_viewed', { subscription_id: id });
    }, [id, posthog]);
  return (
    <View>
      <Text>Subscription Details for {id}</Text>
      <Link href="/" className="mt-4 rounded bg-primary text-white px-4 py-2">
        Go Back
      </Link>
    </View>
  )
}

export default SubscriptionDetails