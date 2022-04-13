import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Button} from './Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args}>Hello world</Button>

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

export const Gray = Template.bind({})
Gray.args = {
  variant: 'gray',
}

export const Blue = Template.bind({})
Blue.args = {
  variant: 'blue',
}

export const Green = Template.bind({})
Green.args = {
  variant: 'green',
}

export const Red = Template.bind({})
Red.args = {
  variant: 'red',
}

export const Active = Template.bind({})
Active.args = {
  state: 'active',
}

export const Waiting = Template.bind({})
Waiting.args = {
  state: 'waiting',
}

export const GrayGhost = Template.bind({})
GrayGhost.args = {
  variant: 'gray',
  ghost: true,
}

export const BlueGhost = Template.bind({})
BlueGhost.args = {
  variant: 'blue',
  ghost: true,
}

export const GreenGhost = Template.bind({})
GreenGhost.args = {
  variant: 'green',
  ghost: true
}

export const RedGhost = Template.bind({})
RedGhost.args = {
  variant: 'red',
  ghost: true,
}
