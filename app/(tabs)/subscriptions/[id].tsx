import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router';

const SubscriptionDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>()
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