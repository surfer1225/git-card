import React from 'react';
import './App.scss'
import CardList from './card/CardList';
import Form from './form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  }

  addNewCard = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewCard}/>
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
