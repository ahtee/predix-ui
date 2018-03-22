import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';

import AlertLabel from './';

const typeOptions = {
  info: 'Info',
  error: 'Error',
  important: 'Important',
  healthy: 'Healthy',
  warning: 'Warning',
  success: 'Success'
};

storiesOf('Alert Label', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<AlertLabel
		  label={text('label', 'Info')}
		  type={select('type', typeOptions, 'info', 'alertType')}/>
	))

	.add('error', () => (
		<AlertLabel
		  label='Error'
		  type='error'/>
	))
	.add('important', () => (
		<AlertLabel
		  label='Important'
		  type='important'/>
	))
	.add('healthy', () => (
		<AlertLabel
		  label='Healthy'
		  type='healthy'/>
	))
	.add('warning', () => (
		<AlertLabel
		  label='Warning'
		  type='warning'/>
	))
	.add('unknown', () => (
		<AlertLabel 
  		type='unknown'
  		label='unknown'/>
	))
	;