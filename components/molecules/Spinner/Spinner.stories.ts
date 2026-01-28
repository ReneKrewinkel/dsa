import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SpinnerSrc from './Spinner'
import { SpinnerInterface  } from './Spinner.interface'
import { SpinnerMock } from './Spinner.mock'

/// TODO: Adapt Spinner Stories
const SpinnerMeta: Meta<typeof SpinnerSrc> = {
    title: "molecules/Spinner",
    component: SpinnerSrc,
    tags: ['autodocs'],
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof SpinnerSrc>
export const Spinner: Story = {
    args: { ...SpinnerMock }
}

export default SpinnerMeta
