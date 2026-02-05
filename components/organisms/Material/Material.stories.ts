import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import MaterialSrc from './Material'
import { MaterialInterface } from './Material.interface'
import { MaterialMock } from './Material.mock'

/// TODO: Adapt Material Stories
const MaterialMeta: Meta<typeof MaterialSrc> = {
  title: 'organisms/Material',
  component: MaterialSrc,
  tags: ['autodocs'],
  argTypes: {
    testID: { table: { disable: true } }
  }
}

type Story = StoryObj<typeof MaterialSrc>
export const Material: Story = {
  args: { ...MaterialMock }
}

export default MaterialMeta
