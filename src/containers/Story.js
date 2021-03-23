import React, { Component } from 'react'

class Story extends Component {
    state = {
        story: {
            word: "",
            definition: "",
            pronunciation: "",
            title: "",
            summary: "",
            body: ""
        }
    }

    componentDidMount() {
        if (this.state.story.title === "") {
            fetch(`http://localhost:3001/stories/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    story: data
                })
            })
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.story.title}</h2>
                <h4>Seed Word: {this.state.story.word}</h4>
                <h5>Definition: {this.state.story.definition}</h5>
                <h5>Pronunciation: {this.state.story.pronunciation}</h5>

                <hr />
                <h3>Summary:</h3>
                <h3>{this.state.story.summary}</h3>
                <br />
                <h4>Body:</h4>
                <h4>{this.state.story.body}</h4>
            </div>
        )
    }
}

export default Story