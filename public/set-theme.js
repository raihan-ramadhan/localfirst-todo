(function () {
  try {
    const theme = localStorage.getItem('expo-theme') || 'system';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const appliedTheme = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme;
    document.documentElement.classList.add(appliedTheme);
  } catch (e) {
    console.error('Failed to apply theme early', e);
  }
})();
