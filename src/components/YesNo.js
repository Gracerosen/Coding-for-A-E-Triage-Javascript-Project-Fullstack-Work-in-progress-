 import React from 'react';
 import PopUp from "./PopUp"; 

class YesNo extends React.Component {
  // when clicked, toggle colour to blue and show an alert to go to the ED
  constructor(props) {
    super(props);
    this.state = {
      yesbutton: '',
      nobutton: '',
      seen: false
    };

    this.handleYesClick = this.handleYesClick.bind(this);
    this.handleNoClick = this.handleNoClick.bind(this);
  }

  togglePop = () => {
   this.setState({
    seen: !this.state.seen
   });
  };

  handleYesClick(event) {
    this.state.yesbutton === '' ? this.setState({yesbutton: 'primary', nobutton:'', seen: true}) : this.setState({nobutton: ''});
    
  }

  handleNoClick(event) {
    this.state.nobutton === '' ? this.setState({nobutton: 'primary', yesbutton:''}) : this.setState({yesbutton: ''});
  }



  render() {
    const { active } = this.state

    return (
      <div>
        <div> {this.props.question} </div>
        <div className="ui buttons">
          <button type='button' className={`ui button ${this.state.yesbutton}`} onClick={this.handleYesClick}>Yes</button>
          <div className="or"></div>
          <button type='button' className={`ui button ${this.state.nobutton}`} onClick={this.handleNoClick}>No</button>
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
      
    );
  }
}

export default YesNo;