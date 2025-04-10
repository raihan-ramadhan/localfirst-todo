import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { Switch } from 'react-native';

export default function () {
  const { colorScheme } = useColorScheme();

  const toggleDarkMode = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
  };

  useEffect(() => {
    // Set default mode
    document.documentElement.classList.add('dark');
  }, []);

  return <Switch value={colorScheme == 'dark'} onValueChange={toggleDarkMode} />;
}
