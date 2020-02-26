import React from "react";
import Axios from "axios";

class Form extends React.Component {
    state = {
        username: ""
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await Axios.get(`https://api.github.com/users/${this.state.username}`);
        this.props.onSubmit(resp.data);
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
