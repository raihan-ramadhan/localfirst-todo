import Head from 'expo-router/head';
import { Text, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import SwitchTheme from '@/components/Theme/SwitchTheme';

export default function HomeScreen() {
  return (
    <>
      <Head>
        <title>Local First Todo</title>
        <meta name="description" content="home page of local first todo." />
      </Head>
      <View className="flex-1 items-center justify-center bg-background">
        <HelloWave />
        <View className="flex-row items-center">
          <Text className="text-2xl font-bold  text-primary">Dark Mode</Text>
          <SwitchTheme />
        </View>
      </View>
    </>
  );
}
