import Head from 'expo-router/head';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <Head>
        <title>Explore</title>
        <meta name="description" content="explore page of local first todo." />
      </Head>
      <View className="flex-1 items-center justify-center bg-background">
        <View className="flex-row items-center">
          <Text className="text-2xl font-bold  text-primary">EXPLORE PAGE</Text>
        </View>
      </View>
    </>
  );
}
