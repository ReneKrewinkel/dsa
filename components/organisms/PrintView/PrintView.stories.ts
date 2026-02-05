import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import PrintViewSrc from './PrintView'
import { PrintViewInterface  } from './PrintView.interface'
import { PrintViewMock } from './PrintView.mock'

/// TODO: Adapt PrintView Stories
const PrintViewMeta: Meta<typeof PrintViewSrc> = {
    title: "organisms/PrintView",
    component: PrintViewSrc,
    tags: ['autodocs'],
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof PrintViewSrc>
export const PrintView: Story = {
    args: { ...PrintViewMock }
}

export default PrintViewMeta
