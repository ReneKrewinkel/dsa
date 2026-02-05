import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ShowCameraSrc from './ShowCamera'
import { ShowCameraInterface  } from './ShowCamera.interface'
import { ShowCameraMock } from './ShowCamera.mock'

/// TODO: Adapt ShowCamera Stories
const ShowCameraMeta: Meta<typeof ShowCameraSrc> = {
    title: "organisms/ShowCamera",
    component: ShowCameraSrc,
    tags: ['autodocs'],
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof ShowCameraSrc>
export const ShowCamera: Story = {
    args: { ...ShowCameraMock }
}

export default ShowCameraMeta
