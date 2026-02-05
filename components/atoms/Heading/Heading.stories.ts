import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import HeadingSrc from './Heading'
import { HeadingInterface  } from './Heading.interface'
import { HeadingMock } from './Heading.mock'

/// TODO: Adapt Heading Stories
const HeadingMeta: Meta<typeof HeadingSrc> = {
    title: "atoms/Heading",
    component: HeadingSrc,
    tags: ['autodocs'],
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof HeadingSrc>
export const Heading: Story = {
    args: { ...HeadingMock }
}

export default HeadingMeta
