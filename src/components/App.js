import React from 'react';
import './App.scss'
import CardList from './card/CardList';
import Form from './form/Form';

class App extends React.Component {
  testData = [
    {
      name: "Dan Abramov",
      avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
      company: "@facebook"
    },
    {
      name: "Sophie Alpert",
      avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
      company: "Humu"
    },
    {
      name: "Sebastian Markbåge",
      avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
      company: "Facebook"
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      profiles: this.testData
    };
  }
  
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
