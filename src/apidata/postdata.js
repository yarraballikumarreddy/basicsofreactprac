import React, { Component } from 'react';

import axios from 'axios';
class Postlist extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
componentDidMount(){
    axios.get('http://localhost:8081/RetriveingData')
    .then(response =>{
        console.log(response)
        this.setState({posts: response.data})
    })
    .catch(console.error()
    )
}



    render() {
        const {posts} =this.state
        return <h1>
            Class Component........
            {
                posts.length ? 
                posts.map(post => <div key={post.id}>{posts.title}</div>):null
            }

        </h1>
    }

}
export default Postlist;