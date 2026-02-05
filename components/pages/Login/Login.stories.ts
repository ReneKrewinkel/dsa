import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import LoginSrc from './Login'
import { LoginInterface } from './Login.interface'
import { LoginMock } from './Login.mock'

/// TODO: Adapt Login Stories
const LoginMeta: Meta<typeof LoginSrc> = {
  title: 'pages/Login',
  component: LoginSrc,
  tags: ['autodocs'],
  argTypes: {
    testID: { table: { disable: true } }
  }
}

type Story = StoryObj<typeof LoginSrc>
export const Login: Story = {
  args: { ...LoginMock }
}

export default LoginMeta
