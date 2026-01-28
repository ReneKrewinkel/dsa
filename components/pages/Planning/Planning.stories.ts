import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import PlanningSrc from './Planning'
import { PlanningInterface  } from './Planning.interface'
import { PlanningMock } from './Planning.mock'

/// TODO: Adapt Planning Stories
const PlanningMeta: Meta<typeof PlanningSrc> = {
    title: "pages/Planning",
    component: PlanningSrc,
    tags: ['autodocs'],
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof PlanningSrc>
export const Planning: Story = {
    args: { ...PlanningMock }
}

export default PlanningMeta
