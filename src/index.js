import React from "react";
import ReactDOM from "react-dom";
// import App from './components/App';
import { Container, Header } from "semantic-ui-react";
import SearchSelectionBar from "./components/SearchSelectionBar";
import SubmitButton from "./components/Button";


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {value: ''};

  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  

  render() {
    
    return (
  <Container style={{ margin: 20 }}>
    <Header as="h1">Do I need to go to the A&E?</Header>
    <Header as="h3">What brings you here today?</Header>
    <SearchSelectionBar />
    <br/>
  </Container>
);
  }
}



// handleSubmit = (e) => {
//     e.preventDefault();
//     this.setState((prevState) => ({
//       guessedLetters: [...this.state.formInput, ...prevState.guessedLetters],
//       value: ""
//       // formInput[0]
//       // guessedLetters: prevState.state.guessedLetters.concat(this.state.formInput),
//     }));
//     console.log(this.state.guessedLetters);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/ >
  // <SearchSelectionBar />
  // <br/>
  // <SubmitButton/>
  // </App>
);



