import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import TabBarSrc from './TabBar'
import { TabBarInterface } from './TabBar.interface'
import { TabBarMock } from './TabBar.mock'

/// TODO: Adapt TabBar Stories
const TabBarMeta: Meta<typeof TabBarSrc> = {
  title: 'molecules/TabBar',
  component: TabBarSrc,
  tags: ['autodocs'],
  argTypes: {
    testID: { table: { disable: true } }
  }
}

type Story = StoryObj<typeof TabBarSrc>
export const TabBar: Story = {
  args: { ...TabBarMock }
}

export default TabBarMeta
