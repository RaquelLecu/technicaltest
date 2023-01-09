import { render } from '@testing-library/react';
import App from '../App/index'
import React from 'react'

it('render app', () => {
  const { asFragment } = render(<App />)
  
  expect(asFragment(<App />)).toMatchSnapshot()
 })

