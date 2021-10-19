import React from 'react'

const Word = ({changeTheWord, storyWord}) => {
    const {word, definition, pronunciation} = storyWord

    return (
        <div>
            <h1>Your word is {word}</h1>
            <h3>Definition: {definition}</h3>
            <h3>Pronunciation: {pronunciation}</h3>
            <button onClick={changeTheWord}>Try a different Word</button>
            <hr /> 
        </div>
    ) 
}

export default Word