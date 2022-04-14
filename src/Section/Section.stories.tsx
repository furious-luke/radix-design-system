import * as React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Section} from './Section'

export default {
  title: 'Section',
  component: Section,
} as ComponentMeta<typeof Section>

const Template: ComponentStory<typeof Section> = (args: any) => (
  <Section css={{border: '1px solid red'}} {...args}>Hello world</Section>
)

export const Default = Template.bind({})
