import type { Config } from 'tailwindcss';
// @ts-expect-error - no types
import nativewind from 'nativewind/preset';
import baseConfig, { content } from './utils/base-config';

export default {
  content,
  presets: [baseConfig, nativewind],
} satisfies Config;
