
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

// import Checkbox from './checkbox';
import './checkbox.css'
import Checkbox, { CheckboxProps } from './checkbox';

export default{
    title: 'Atoms/Checkbox',
    component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args}/>;

export const checkbox1= Template.bind({});
checkbox1.args={
    type: 'checkbox',
    // level: 'Checkout Me:'
};