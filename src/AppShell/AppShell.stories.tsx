import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {AppShell} from './AppShell'

export default {
  title: 'AppShell',
  component: AppShell,
} as ComponentMeta<typeof AppShell>

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const Template: ComponentStory<typeof AppShell> = (args: any) => (
  <div style={{height: '90vh'}}>
    <AppShell {...args}>
      <AppShell.Span css={{background: 'blue', color: 'white', ...center}}>Header</AppShell.Span>
      <div style={{background: 'green', color: 'white', ...center}}>Left</div>
      <div style={{...center}}>Main</div>
      <div style={{background: 'green', color: 'white', ...center}}>Right</div>
      <AppShell.Span css={{background: 'blue', color: 'white', ...center}}>Footer</AppShell.Span>
    </AppShell>
  </div>
)

export const Default = Template.bind({})

export const HolyGrail = Template.bind({})
HolyGrail.args = {
  variant: 'holyGrail',
}

const NoHeaderTemplate: ComponentStory<typeof AppShell> = (args: any) => (
  <div style={{height: '90vh'}}>
    <AppShell {...args}>
      <div />
      <div style={{background: 'blue', color: 'white', ...center}}>Header</div>
      <div />
      <div style={{background: 'green', color: 'white', ...center}}>Left</div>
      <div style={{...center}}>Main</div>
      <div style={{background: 'green', color: 'white', ...center}}>Right</div>
      <AppShell.Span css={{background: 'blue', color: 'white', ...center}}>Footer</AppShell.Span>
    </AppShell>
  </div>
)

export const NoHeaderSpan = NoHeaderTemplate.bind({})
