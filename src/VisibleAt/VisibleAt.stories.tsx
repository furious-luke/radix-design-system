import * as React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {VisibleAt} from './VisibleAt'

export default {
  title: 'VisibleAt',
  component: VisibleAt,
} as ComponentMeta<typeof VisibleAt>

const Template: ComponentStory<typeof VisibleAt> = (args: any) => <VisibleAt {...args}>Hello world</VisibleAt>

export const Default = Template.bind({})

export const InitialOnly = Template.bind({})
InitialOnly.args = {
  showAt: 'initial',
  hideAt: 'bp1',
}

export const Bp1Only = Template.bind({})
Bp1Only.args = {
  showAt: 'bp1',
  hideAt: 'bp2',
}

export const Bp2Only = Template.bind({})
Bp2Only.args = {
  showAt: 'bp2',
  hideAt: 'bp3',
}

export const Bp3Only = Template.bind({})
Bp3Only.args = {
  showAt: 'bp3',
  hideAt: 'bp4',
}

export const Bp4Only = Template.bind({})
Bp4Only.args = {
  showAt: 'bp4',
}

export const Bp1AndBp2 = Template.bind({})
Bp1AndBp2.args = {
  showAt: 'bp1',
  hideAt: 'bp3',
}
