import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {MagnifyingGlassIcon} from '@radix-ui/react-icons'

import {TextInput} from './TextInput'

export default {
  title: 'TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args: any) => <TextInput value="Hello world" {...args} />

export const Default = Template.bind({})

export const Size1 = Template.bind({})
Size1.args = {
  size: 1,
}

export const Size2 = Template.bind({})
Size2.args = {
  size: 2,
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost',
}

export const Invalid = Template.bind({})
Invalid.args = {
  state: 'invalid',
}

export const Valid = Template.bind({})
Valid.args = {
  state: 'valid',
}

const IconTemplate: ComponentStory<typeof TextInput> = (args: any) => (
  <TextInput value="Hello world" {...args}>
    <TextInput.LeftEnhancer>
      <MagnifyingGlassIcon />
    </TextInput.LeftEnhancer>
  </TextInput>
)

export const LeftEnhancer = IconTemplate.bind({})

export const LeftEnhancerSize2 = IconTemplate.bind({})
LeftEnhancerSize2.args = Size2.args

export const LeftEnhancerColored = IconTemplate.bind({})
LeftEnhancerColored.args = {
  css: {
    color: 'red',
  },
}
