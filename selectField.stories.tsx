
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
// import Checkbox from './checkbox';
import './select.css'
import S, { selectProps } from './selectField';

export default{
    title: 'Atoms/SelectField',
    component: S,
} as Meta;

const Template: Story<selectProps> = (args) => <S {...args}/>;

export const select= Template.bind({});
select.args={
    type: 'text',
    level: 'Text Content'
};