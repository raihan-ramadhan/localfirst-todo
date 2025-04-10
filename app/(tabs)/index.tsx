import { Text, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import SwitchTheme from '@/components/SwitchTheme';

export default function HomeScreen() {
  return (
    <View className=" flex-1 items-center justify-center">
      <HelloWave />
      <View className="flex-row items-center">
        <Text className="text-2xl font-bold  text-primary">Dark Mode</Text>
        <SwitchTheme />
      </View>
    </View>
  );
}
