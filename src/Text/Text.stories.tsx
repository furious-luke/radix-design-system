import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Text} from './Text'

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args: any) => <Text {...args}>Hello world</Text>

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

export const Crimson = Template.bind({})
Crimson.args = {
  variant: 'crimson',
}

export const GradientCrimson = Template.bind({})
GradientCrimson.args = {
  variant: 'crimson',
  gradient: true,
}
