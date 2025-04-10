import { useEffect, useState } from 'react';
import { Switch } from 'react-native';
import { useTheme } from '../NavigationThemeProvider/index.web';

export default function () {
  const { theme: colorScheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <Switch
      value={colorScheme == 'dark'}
      onValueChange={() => setTheme(colorScheme === 'dark' ? 'light' : 'dark')}
    />
  );
}
