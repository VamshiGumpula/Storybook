
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
// import Checkbox from './checkbox';
import './Text.css'
import T, { TextProps } from './Text';

export default{
    title: 'Atoms/Text',
    component: T,
} as Meta;

const Template: Story<TextProps> = (args) => <T {...args}/>;

export const tc= Template.bind({});
tc.args={
    type: 'text',
    level: 'Text Content'
};