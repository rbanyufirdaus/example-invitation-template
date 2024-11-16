import type { Meta, StoryObj } from '@storybook/react';

import { HeroSection } from '../../src/sections/hero';

const meta: Meta<typeof HeroSection> = {
	title: 'Sections/Hero',
  component: HeroSection,
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Primary: Story = {
  args: {},
};