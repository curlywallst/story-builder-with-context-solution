import React, { useState, useEffect } from 'react'

const MyContext = React.createContext();

export default MyContext;

const MyProvider = (props) => {
    const [stories, setStories] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/stories")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setStories(data)
        })
    }, [])

    const addStory = (story) => {
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
            console.log(data)
            setStories([...stories, data])
        })
    }

    return (<MyContext.Provider value={{
            stories: stories, 
            addStory: addStory
        }}>{props.children}
        </MyContext.Provider>)
    
}

const MyConsumer = MyContext.Consumer

export  { MyProvider, MyConsumer };
