import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Cross2Icon} from '@radix-ui/react-icons'

import {IconButton} from './IconButton'

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args: any) => (
  <IconButton {...args}>
    <Cross2Icon />
  </IconButton>
)

export const Default = Template.bind({})

export const Size1 = Template.bind({})
Size1.args = {
  size: 1,
}

export const Size2 = Template.bind({})
Size2.args = {
  size: 2,
}

export const Size3 = Template.bind({})
Size3.args = {
  size: 3,
}

export const Size4 = Template.bind({})
Size4.args = {
  size: 4,
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost',
}

export const Raised = Template.bind({})
Raised.args = {
  variant: 'raised',
}

export const Active = Template.bind({})
Active.args = {
  state: 'active',
}

export const Waiting = Template.bind({})
Waiting.args = {
  state: 'waiting',
}
