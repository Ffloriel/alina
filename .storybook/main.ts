import type { StorybookConfig } from '@storybook/nextjs-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-themes', '@storybook/addon-vitest'],
  managerHead: (head) => `${head}<title>Alina</title><link rel="icon" type="image/svg+xml" href="/full-human-logo.svg" />`,
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  docs: {
    defaultName: 'Docs',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  viteFinal: async (config, { configType }) => {
    if (configType !== 'PRODUCTION') {
      return config
    }

    return {
      ...config,
      base: '/storybook/',
    }
  },
}

export default config