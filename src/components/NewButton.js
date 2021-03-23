import React from 'react'
import { Link } from 'react-router-dom'


const NewButton = () => {
        return (
             <Link to={`/stories/new`}>
                <button>Click the button to start a new story!!</button>
            </Link>
        )
    } 

export default NewButton

