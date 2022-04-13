import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Paragraph} from './Paragraph'

export default {
  title: 'Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = (args: any) => <Paragraph {...args}>Hello world</Paragraph>

export const Default = Template.bind({})

export const Size1 = Template.bind({})
Size1.args = {
  size: '1',
}

export const Size2 = Template.bind({})
Size2.args = {
  size: '2',
}
