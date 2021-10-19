import React from 'react'
import MyContext from './MyContext';

const Story = (props) => {
    return (
        <MyContext.Consumer>
        {context => {
            if (context.stories.length === 0 ) {
                return (
                    <h5>Loading....</h5>
                )
            } else {
                const story = context.stories.find(s => `${s.id}` === props.match.params.id)
    
                return (
                    <div>
                        <h2>{story.title}</h2>
                        <h4>Seed Word: {story.word}</h4>
                        <h5>Definition: {story.definition}</h5>
                        <h5>Pronunciation: {story.pronunciation}</h5>
    
                        <hr />
                        <h3>Summary:</h3>
                        <h3>{story.summary}</h3>
                        <br />
                        <h4>Body:</h4>
                        <h4>{story.body}</h4>
                    </div>
                )
            }
        }}
        </MyContext.Consumer>
    )
}

export default Story