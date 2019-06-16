import React, { Component } from 'react';
import './new.css'
import api from '../services/api';

class New extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: null,
            author: '',
            description: '',
            place: '',
            hashtags: '',
        }
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0] })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { image, author, description, place, hashtags } = this.state
        const { history } = this.props

        const data = new FormData()
        data.append('image', image)
        data.append('author', author)
        data.append('description', description)
        data.append('place', place)
        data.append('hashtags', hashtags)
        
        await api.post('posts', data)
        history.push('/')
    }

    render() {


        return (
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleImageChange} />
                <input type="text" name="author" placeholder="Nome do autor " onChange={this.handleChange} value={this.state.author} />
                <input type="text" placeholder="Local do Post" name="place" onChange={this.handleChange} value={this.state.place} />
                <input type="text" name="description" placeholder="Descrição" onChange={this.handleChange} value={this.state.description} />
                <input type="text" name="hashtags" placeholder="Hashtags" onChange={this.handleChange} value={this.state.hashtags} />
                <button type="submit" >Enviar</button>
            </form>
        );
    }
}

export default New;