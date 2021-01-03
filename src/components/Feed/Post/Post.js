import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { Avatar, IconButton } from '@material-ui/core'

import { selectUser } from '../../../features/userSlice'
import { db } from '../../../firebase'

import InputOption from '../InputOption/InputOption'

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'





import './Post.css'

const Post = forwardRef(({ name, description, message, photoUrl, timestamp, id }, ref) => {
    const user = useSelector(selectUser)
    
    const handleDelete = (id) => {
        alert("Sure you wanna do this?")
        db.collection("posts").doc(id).delete()
    }

    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl} >{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>  
            
            <div className="post__body">
                <p>{message}</p>
                <p className="post__bodyDate">{new Date(timestamp.toDate()).toUTCString()}</p>
            </div>

            {user.displayName === name ? (
                <div className="post__footer">
                    <IconButton color="primary">
                        <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDelete(id)}>
                        <DeleteIcon className="post__delete" />
                    </IconButton>
                </div>
            ) : null}
            
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    )
})

export default Post
