
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
// import Checkbox from './checkbox';
import './input.css'
import In, { InputProps } from './input';

export default{
    title: 'Atoms/Input',
    component: In,
} as Meta;

const Template: Story<InputProps> = (args) => <In {...args}/>;

export const InputField= Template.bind({});
InputField.args={
    type: 'text',
    level: 'Enter sth'
};