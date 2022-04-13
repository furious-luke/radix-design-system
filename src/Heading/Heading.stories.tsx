import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Heading} from './Heading'

export default {
  title: 'Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args: any) => <Heading {...args}>Hello world</Heading>

export const Default = Template.bind({})

export const Size1 = Template.bind({})
Size1.args = {
  size: '1',
}

export const Size2 = Template.bind({})
Size2.args = {
  size: '2',
}

export const Size3 = Template.bind({})
Size3.args = {
  size: '3',
}

export const Size4 = Template.bind({})
Size4.args = {
  size: '4',
}
