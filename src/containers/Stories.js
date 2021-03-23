import React, { Component } from 'react'
import NewButton from '../components/NewButton'
import StoryLink from '../components/StoryLink'

class Stories extends Component {
    state = {
        stories: []
    }

    componentDidMount(){
        fetch("http://localhost:3001/stories")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                stories: data
            })
        })
    }

    render() {
        const stories = this.state.stories.map(s => <StoryLink key={s.id} story={s} />)

        return (
            <div>
               <h3>My Stories</h3> 
               <hr/>
               {stories}
               <br/>
               <br/>
               <NewButton />    
            </div>
        )
    }
}

export default Stories
