import { useTheme } from 'next-themes';

import MoonIcon from '../../public/static/icons/moon.svg';
import SunIcon from '../../public/static/icons/sun.svg';

const ThemeSwitchButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === 'dark';
  const DarkModeSwitchIcon = isDarkTheme ? SunIcon : MoonIcon;

  return (
    <button
      aria-label={`Switch to ${theme} theme`}
      onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
      className="p-2 dark:text-gray-200 text-gray-700 bg-gray-200 dark:bg-gray-700 rounded-md"
    >
      <DarkModeSwitchIcon className="fill-current" />
    </button>
  );
};

export default ThemeSwitchButton;
