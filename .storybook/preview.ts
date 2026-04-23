import type { Preview } from '@storybook/nextjs-vite'
import { withThemeByClassName } from '@storybook/addon-themes'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import '../styles/globals.css'

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      defaultTheme: 'light',
      parentSelector: 'html',
      themes: {
        light: '',
        dark: 'dark',
      },
    }),
  ],
  parameters: {
    layout: 'centered',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
    options: {
      storySort: {
        order: [
          'Guide',
          ['Welcome', 'Principles', 'Foundations', 'Layout density', 'Fonts', 'Logos', 'Content', 'Accessibility', 'Components', 'Reference'],
          'Components',
          ['Buttons and links', 'Navigation', 'Forms', 'Choices', 'Data display', 'Feedback and overlays', 'Layouts', 'Page patterns'],
          'Examples',
          ['German Vocabulary', 'Marketing page', 'Sign in'],
        ],
      },
    },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      disable: true,
    },
  },
  initialGlobals: {
    viewport: {
      value: 'desktop',
      isRotated: false,
    },
  },
  tags: ['autodocs'],
}

export default preview