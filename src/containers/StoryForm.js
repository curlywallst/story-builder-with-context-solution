import React, { Component } from 'react'
import Word from './Word'

class StoryForm extends Component {
    state = {
        title: "",
        summary: "",
        body: "",
        word: "",
        definition: "",
        pronunciation: ""
    }

    handleChange = (e) => {
        this.setState(prevState => {
            return {[e.target.name]: e.target.value};
          });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const story = {
            id: "",
            title: this.state.title,
            summary: this.state.summary,
            body: this.state.body,
            word: this.state.word,
            definition: this.state.definition,
            pronunciation: this.state.pronunciation
        }
        console.log("The Story", story)
        fetch("http://localhost:3001/stories", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(story) 
        })
        .then(res => res.json())
        .then(data => {
            console.log("State", this.state)
            this.props.history.push('/stories')
            this.setState({
                word: "",
                definition: "",
                pronunciation: "",
                title: "",
                summary: "",
                body: ""
            })
        })
    }

    changeWord = (word, definition, pronunciation) => {
        this.setState((prevState) => {
            return {...prevState, word: word, definition: definition, pronunciation: pronunciation};
          });
    }

    render() {

        return (
            <div>
                <Word changeTheWord={this.changeWord} />
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label><br />
                    <input name="title" onChange={this.handleChange} value={this.state.title} type="text" /><br />
                    <label>Summary:</label><br />
                    <textarea name="summary" onChange={this.handleChange} value={this.state.summary} /><br />
                    <label>Body:</label><br />
                    <textarea name="body" onChange={this.handleChange} value={this.state.body} /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default StoryForm