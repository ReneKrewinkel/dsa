import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import UserDropdownSrc from './UserDropdown'
import { UserDropdownInterface  } from './UserDropdown.interface'
import { UserDropdownMock } from './UserDropdown.mock'

/// TODO: Adapt UserDropdown Stories
const UserDropdownMeta: Meta<typeof UserDropdownSrc> = {
    title: "molecules/UserDropdown",
    component: UserDropdownSrc,
    tags: ['autodocs'],
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof UserDropdownSrc>
export const UserDropdown: Story = {
    args: { ...UserDropdownMock }
}

export default UserDropdownMeta
