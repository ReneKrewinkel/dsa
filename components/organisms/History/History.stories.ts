import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import HistorySrc from './History'
import { HistoryInterface } from './History.interface'
import { HistoryMock } from './History.mock'

/// TODO: Adapt History Stories
const HistoryMeta: Meta<typeof HistorySrc> = {
  title: 'organisms/History',
  component: HistorySrc,
  tags: ['autodocs'],
  argTypes: {
    testID: { table: { disable: true } }
  }
}

type Story = StoryObj<typeof HistorySrc>
export const History: Story = {
  args: { ...HistoryMock }
}

export default HistoryMeta
