import React from 'react'
import MyContext from './MyContext';
import NewButton from './NewButton'
import StoryLink from './StoryLink'

const Stories= () => {
    return (
        <MyContext.Consumer>
        {context => {
                const storiesList = context.stories.map(s => <StoryLink key={s.id} story={s} />)
                return(
                    <div>
                        <h3>My Stories</h3> 
                        <hr/>
                        {storiesList}
                        <br/>
                        <br/>
                        <NewButton />    
                    </div>
                )
            }
        }
        </MyContext.Consumer>
    )
}

export default Stories
