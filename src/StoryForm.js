import React, { useState, useEffect, useCallback } from 'react'
import MyContext from './MyContext';
import Word from './Word'

const StoryForm = (props) =>{
    const [story, setStory] = useState({
        title: "",
        summary: "",
        body: ""
    }) 
    const [word, setWord] = useState({
        word: "",
        definition: "",
        pronunciation: ""
    })

    const getWord = useCallback(
        () => {
            fetch("https://random-words-app.herokuapp.com/word")
            .then(res => res.json())
            .then(data => {
                console.log("fetched word", data)
                setWord({
                        word: data[0].word,
                        definition: data[0].definition,
                        pronunciation: data[0].pronunciation
                })
            })
        }, []
    )

    useEffect(() => {
        getWord()
    }, [getWord])

    const changeWord = () => {
        getWord()
    }


    return (
        <MyContext.Consumer>
            {context =>  {
                const handleChange = (e) => {
                    setStory(
                        {...story, [e.target.name]: e.target.value}
                    );
                }
            
                const handleSubmit = (e) => {
                    e.preventDefault()
                    const newStory = {
                        title: story.title,
                        summary: story.summary,
                        body: story.body,
                        word: word.word,
                        definition: word.definition,
                        pronunciation: word.pronunciation
                    }
                    context.addStory(newStory)
                    props.history.push('/stories')
                }

                return (
                    <div>
                        <Word changeTheWord={changeWord} storyWord={word}/>
                        <form onSubmit={handleSubmit}>
                            <label>Title:</label><br />
                            <input name="title" onChange={handleChange} value={story.title} type="text" /><br />
                            <label>Summary:</label><br />
                            <textarea name="summary" onChange={handleChange} value={story.summary} /><br />
                            <label>Body:</label><br />
                            <textarea name="body" onChange={handleChange} value={story.body} /><br />
                            <input type="submit" />
                        </form>
                    </div>
                )}
            }
        </MyContext.Consumer>
    )
}

export default StoryForm