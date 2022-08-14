import React from 'react'
import { Message } from 'semantic-ui-react'

const WarningMessage = () => (
  <Message negative>
    <Message.Header>Important!</Message.Header>
    <p>Your symptoms are concerning. Please go to the nearest A&E department as soon as you can.</p>
  </Message>
)

export default WarningMessage
