import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import GeneralSrc from './General'
import { GeneralInterface } from './General.interface'
import { GeneralMock } from './General.mock'

/// TODO: Adapt General Stories
const GeneralMeta: Meta<typeof GeneralSrc> = {
  title: 'organisms/General',
  component: GeneralSrc,
  tags: ['autodocs'],
  argTypes: {
    testID: { table: { disable: true } }
  }
}

type Story = StoryObj<typeof GeneralSrc>
export const General: Story = {
  args: { ...GeneralMock }
}

export default GeneralMeta
