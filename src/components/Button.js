import React from 'react'
import { Button } from 'semantic-ui-react'


class SubmitButton extends React.Component {
//  constructor(props) {
//     super(props);
//     // this.state = {value: ''};

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit clicked")
  }

  render() {
    return <Button primary onClick={this.handleSubmit}> Submit </Button>;
  }
  
}

export default SubmitButton;