import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {MagnifyingGlassIcon} from '@radix-ui/react-icons'

import {Icon} from './Icon'

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args: any) => (
  <Icon {...args}>
    <MagnifyingGlassIcon />
  </Icon>
)

export const Default = Template.bind({})

export const Size1 = Template.bind({})
Size1.args = {
  size: '1',
}

export const Size2 = Template.bind({})
Size2.args = {
  size: '2',
}
