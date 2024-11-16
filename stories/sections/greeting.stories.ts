import type { Meta, StoryObj } from '@storybook/react';

import { GreetingSection } from '../../src/sections/greeting';

const meta: Meta<typeof GreetingSection> = {
	title: 'Sections/Greeting',
  component: GreetingSection,
};

export default meta;
type Story = StoryObj<typeof GreetingSection>;

export const Primary: Story = {
  args: {},
};