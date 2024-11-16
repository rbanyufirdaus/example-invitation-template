import type { Meta, StoryObj } from '@storybook/react';

import { MinimalLeafyPurpleTemplate } from '../src/template';
import React from 'react';
import { HeroSection } from '../src/sections/hero';
import { GreetingSection } from '../src/sections/greeting';
import { CountdownSection } from '../src/sections/countdown';

const meta: Meta<typeof MinimalLeafyPurpleTemplate> = {
	title: 'Template/Minimal Leafy Purple',
  component: MinimalLeafyPurpleTemplate,
};

export default meta;
type Story = StoryObj<typeof MinimalLeafyPurpleTemplate>;

export const Primary: Story = {
  args: {},
  render: _ => (
    <MinimalLeafyPurpleTemplate>
      <HeroSection />
      <GreetingSection />
      <CountdownSection />
    </MinimalLeafyPurpleTemplate>
  )
};