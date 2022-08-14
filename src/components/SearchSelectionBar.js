 import React from 'react';
 import YesNo from './YesNo';
 import { Dropdown, Button } from 'semantic-ui-react';

// class based component because you're using state for user input

const symptomOptions = [
  { key: 'cp', value: 'cp', text: 'Chest pain' },
  { key: 'gi', value: 'loc', text: 'Fainting / Loss of consciousness' },
  { key: 'ha', value: 'ha', text: 'Headache' },
  { key: 'sp', value: 'sp', text: 'Stomach pain' },
]

// class SearchSelectionBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//   }

//   // handleSelect = (e) => {
//   //   console.log(e);
//   // }

//     handleChange = (e) => {
//       this.setState({value: e.target.value});
//       console.log('current state is ' + this.state.value)
//     } 

//     handleSubmit = (e) => {
//       alert('You chose ' + this.state.value);
//       e.preventDefault();
//   }

//   render() {
//     return (
//     <div>
//       <Dropdown
//         placeholder='Select your main symptom'
//         fluid
//         search
//         selection
//         options={symptomOptions}
//         value={this.state.symptomOptions}
//         onChange={this.handleChange}
//       />
//     <br></br>
//     <Button primary onClick={this.handleSubmit}> Submit </Button>
//     </div>
//   );
//   }
// }


class SearchSelectionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please select a symptom',
      hasredflag: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit button clicked');
    alert('Your main symptom is: ' + this.state.value);
  }

  
  
  render() {
    let redflags;
    if (this.state.value === "chest pain") {
      redflags = 
        <div>
          <YesNo question= "Do you have a history of coronary artery disease or heart attacks?" />
          <br></br>
          <YesNo question= "Does anyone in your family have a history of coronary artery disease or heart attacks?" />
          <br></br>
          <YesNo question= "Is your pain a crushing pain in the centre of your chest?" />
          <br></br>
          <YesNo question= "Does your pain travel to your left arm, right shoulder, both arms, or your jaw?" />
          <br></br>
          <YesNo question= "Have you been feeling breathless or difficulty breathing since the chest pain started?" />
          <br></br>
          <YesNo question= "Does your pain feel like a sharp, tearing pain?" />
          <br></br>
          <YesNo question= "Does your pain travel straight to your back as if someone has stabbed you with a knife?" />
          <br></br>
          <YesNo question= "Have you had severe vomiting in the past 24 hours?" />
        </div>
          }
    
    if (this.state.value === "fainting") {
      redflags = 
        <div>
          <YesNo question= "Do you have a history of epilepsy or seizures?" />
          <br></br>
          <YesNo question= "When you fainted did anyone notice that your arms or legs were jerking, that your eyes rolled upwards or that you were biting your tongue?" />
          <br></br>
          <YesNo question= "After waking up, did anyone notice that you were confused for some time?" />
          <br></br>
          <YesNo question= "Do you have any underlying heart problems (e.g. coronary artery disease, missed heartbeats)?" />
          <br></br>
           <YesNo question= "Has anyone in your family passed away suddenly before the age of 40 or from sudden cardiac death?" />
          <br></br>
          <YesNo question= "Before you fainted, did you have chest pain or feel your heart beating very fast (palpitations)?" />
          <br></br>
          <YesNo question= "Did you faint during exercise or other forms of exertion?" />
          <br></br>
          <YesNo question= "Did you faint while lying down?" />
          <br></br>
          <YesNo question= "Before you fainted, did you have stomach pain or a headache?" />
          <br></br>
          <YesNo question= "Do you have weakness or numbness in one side of your face, one arm or one leg?" />
          <br></br>
          <YesNo question= "Are you feeling breathless or having difficulty breathing?" />
        </div>
    }
    
    if (this.state.value === "headache") {
      redflags = 
        <div>
          <YesNo question= "Is this the worst headache in your life?" />
          <br></br>
          <YesNo question= "Do you have weakness or numbness in one side of your face, one arm or one leg?" />
          <br></br>
          <YesNo question= "Have you been losing your balance (tripping or walking unsteadily)?" />
          <br></br>
          <YesNo question= "Have you had a fall recently (in the past 1-2 weeks)?" />
          <br></br>
          <YesNo question= "Are you pregnant or have just given birth?" />
          <br></br>
          <YesNo question= "Are you taking birth control pills (oral contraceptives)?" />
          <br></br>
          <YesNo question= "Do you have a fever above 40&deg;C?" />
          <br></br>
          <YesNo question= "Are you having nausea or vomiting?" />
          <br></br>
          <YesNo question= "Do you have a stiff neck (difficulty touching your chin to your neck)?" />
          <br></br>
          <YesNo question= "Are your eyes unusually sensitive to light?" />
          <br></br>
          <YesNo question= "Are you above the age of 40 and this is the first time you are having such a bad headache?" />
          <br></br>
          <YesNo question= "Have you noticed changes to your vision (e.g. difficulty seeing or double vision) or pain in your eyes?" />
          <br></br>
          <YesNo question= "Do you have a known history of cancer?" />
          <br></br>
          <YesNo question= "Do you have a known history of HIV?" />
          <br></br>
          <YesNo question= "Is your headache worse in the morning?" />
          <br></br>
          <YesNo question= "Does your headache wake you up from sleep?" />
          <br></br>
          <YesNo question= "If you are able to measure your blood pressure, is your systolic blood pressure (top number) above 160 or your diastolic blood pressure (bottom number) above 110?" />
           <br></br>
          <YesNo question= "Have you recently gone for a neck massage or had a sharp, tearing pain in your neck?" />
        </div>
    }

    return (
      <div> 
        <form className="ui form" onSubmit={this.handleSubmit} >
          <label> 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="cough">Cough</option>
              <option value="chest pain">Chest pain</option>
              <option value="fainting">Fainting / Loss of consciousness</option>
              <option value="headache">Headache</option>
              <option value="loss of weight">Loss of weight</option>
              <option value="runny nose">Runny nose</option>
              <option value="stomach pain">Stomachache / Tummy pain</option>
            </select>
          </label>
          
          <br></br>
          {redflags}
          <br></br>
          {/* <input className="ui button primary" type="submit" value="Submit" /> */}
        </form>

        Please check that you have filled in all the questions. If you have answered "No" to all the questions above, you do not need to go to the A&E urgently. Please visit your nearest GP for further care.

        
       
      </div>

      

    );
  }
}

export default SearchSelectionBar;



