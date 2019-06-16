import React, { Component } from 'react';
import './feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

import api from '../services/api';

class Feed extends Component {


    constructor(props) {
        super(props);

        this.state = {
            feed: []
        }

    }



    async componentDidMount() {
        const { data } = await api.get('posts')

        this.setState({ feed: data })
    }


    render() {

        const { feed } = this.state

        return (
            <section id="post-list">

                {
                    feed.map(post => (
                        <article>
                            <header>
                                <div className="user-info">
                                    <span>{post.author}</span>
                                    <span className="place">
                                        {post.place}
                                    </span>
                                </div>
                                <img src={more} alt="Mais" />
                            </header>
                            <img src={`http://localhost:3333/files/${post.image}`} />
                            <footer>
                                <div className="actions">
                                    <img src={like} />
                                    <img src={comment} />
                                    <img src={send} />
                                </div>
                                <strong>{post.likes}</strong>
                                <p>
                                    {post.description}
                                    <span>{post.hashtags}</span>
                                </p>
                            </footer>
                        </article>
                    ))
                }

            </section>
        );
    }
}

export default Feed;