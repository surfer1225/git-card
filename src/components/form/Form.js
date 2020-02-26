import React from "react";

class Form extends React.Component {
    state = {
        username: ""
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="GitHub Username"
                    onChange={event => this.setState({ username: event.target.value })}
                    value={this.state.username}
                    required
                />
                <button>Add Card</button>
            </form>
        );
    }
}

export default Form
