import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Alina',
    brandImage: '/full-human-logo.svg',
    brandTarget: '_self',
  }),
})