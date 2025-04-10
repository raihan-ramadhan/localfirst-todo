import { useColorScheme } from 'nativewind';
import { Switch } from 'react-native';

export default function () {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return <Switch value={colorScheme == 'dark'} onValueChange={toggleColorScheme} />;
}
