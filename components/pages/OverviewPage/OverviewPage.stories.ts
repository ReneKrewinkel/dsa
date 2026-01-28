import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import OverviewPageSrc from './OverviewPage'
import { OverviewPageInterface  } from './OverviewPage.interface'
import { OverviewPageMock } from './OverviewPage.mock'

/// TODO: Adapt OverviewPage Stories
const OverviewPageMeta: Meta<typeof OverviewPageSrc> = {
    title: "pages/OverviewPage",
    component: OverviewPageSrc,
    tags: ['autodocs'],
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof OverviewPageSrc>
export const OverviewPage: Story = {
    args: { ...OverviewPageMock }
}

export default OverviewPageMeta
