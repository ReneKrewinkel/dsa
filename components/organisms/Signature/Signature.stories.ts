import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SignatureSrc from './Signature'
import { SignatureInterface  } from './Signature.interface'
import { SignatureMock } from './Signature.mock'

/// TODO: Adapt Signature Stories
const SignatureMeta: Meta<typeof SignatureSrc> = {
    title: "organisms/Signature",
    component: SignatureSrc,
    tags: ['autodocs'],
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof SignatureSrc>
export const Signature: Story = {
    args: { ...SignatureMock }
}

export default SignatureMeta
