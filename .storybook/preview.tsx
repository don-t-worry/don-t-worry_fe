import React from 'react'
import type { Preview } from '@storybook/react'
import { nanumBarunGothic } from '../src/app/fonts'
import '@/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className={`${nanumBarunGothic.variable} font-nanumBarunGothic`}>
        <Story />
      </div>
    ),
  ],
}

export default preview
