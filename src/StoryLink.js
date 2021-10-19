import React from 'react'
import { Link } from 'react-router-dom'

const StoryLink = ({story}) => {
        return (
            <div>
                <Link key={story.id} to={`/stories/${story.id}`}>
                    <li>{story.title}</li>
                </Link>

            </div>
            
        )
    } 

export default StoryLink