import React, { Component } from 'react'

class Word extends Component {
    state = {
        word: "",
        definition: "",
        pronunciation: ""
    }

    handleClick = () => {
        fetch("https://random-words-api.vercel.app/word")
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            this.setState({
                    word: data[0].word,
                    definition: data[0].definition,
                    pronunciation: data[0].pronunciation
            })
            this.props.changeTheWord(this.state.word, this.state.definition, this.state.pronunciation)
        })
    }

    render() {
        if (this.state.word === "") {
            this.handleClick()
        }
        
        return (
            <div>
                <h1>Your word is {this.state.word}</h1>
                <h3>Definition: {this.state.definition}</h3>
                <h3>Pronunciation: {this.state.pronunciation}</h3>
                <button onClick={this.handleClick}>Try a different Word</button>
                <hr /> 
            </div>
        )
    }
}

export default Word