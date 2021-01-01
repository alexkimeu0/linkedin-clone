import React, { useState } from 'react'
import Post from './Post/Post'

import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/Event'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'

import InputOption from './InputOption/InputOption'

import './Feed.css'

const Feed = () => {
    const [posts, setPosts] = useState([])

    const sendPost = e => {
        e.preventDefault()
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>  
            
            {posts.map(post => <Post />)}

            <Post 
                name="Alex Kimeu" 
                description="Happy New Year" 
                message="The world breaks everyone, & afterwards, many are strong at the broken places."
            />
            <Post 
                name="Alex Kimeu" 
                description="Happy New Year" 
                message="The world breaks everyone, & afterwards, many are strong at the broken places."
            />
            <Post 
                name="Alex Kimeu" 
                description="Happy New Year" 
                message="The world breaks everyone, & afterwards, many are strong at the broken places."
            />
            
        </div>
    )
}

export default Feed
