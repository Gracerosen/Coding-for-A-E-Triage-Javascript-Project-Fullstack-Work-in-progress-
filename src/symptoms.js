import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const symptoms = [
  { key: 'headache', text: 'headache' },
  // { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }
]

const DropdownExampleSearchSelection = () => (
  <Dropdown
    placeholder='Select symptom'
    fluid
    selection
    options={symptoms}
  />
)

export default DropdownExampleSearchSelection