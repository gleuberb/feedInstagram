import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    state = {
        image: null,
        place: '',
        description: '',
        hashtags: '',
    };

    handleSubmit = async e =>{
        e.preventDefault();

        this.props.history.push('/Feed');
    }

    handleChange = e =>{
        this.setState({ [e.target.name]: e.target.value });
    }

    handleImageChange = e =>{
        this.setState({ image: e.target.files[0] });
    }

    render(){
        return(
            <form id="new-post" onSubmit={this.handleSubmit}>

                <input 
                    type="text"
                    name="author"
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={this.state.author}
                />

                <input 
                    type="password"
                    name="place"
                    placeholder="Senha"
                    onChange={this.handleChange}
                    value={this.state.place}
                />

                <button type="submit">Enviar</button>
            </form>
        )
    }
};

export default Login