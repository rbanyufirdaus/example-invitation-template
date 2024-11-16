import type { Meta, StoryObj } from '@storybook/react';

import { CountdownSection } from '../../src/sections/countdown';

const meta: Meta<typeof CountdownSection> = {
	title: 'Sections/Countdown',
  component: CountdownSection,
};

export default meta;
type Story = StoryObj<typeof CountdownSection>;

export const Primary: Story = {
  args: {},
};