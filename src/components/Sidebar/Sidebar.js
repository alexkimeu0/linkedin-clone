import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core'

import { selectUser } from '../../features/userSlice'

import './Sidebar.css'

const Sidebar = () => {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img className="sidebar__avatar" src="https://media-exp1.licdn.com/dms/image/C4D16AQF2eLjgCq8C4w/profile-displaybackgroundimage-shrink_350_1400/0/1609247555144?e=1614816000&v=beta&t=2sisOe3DBGO3FUYm2iMitwO6yWh_1_0vuFxkhdo8kFI" alt="me" />
                <Avatar src={user?.photoUrl}>{user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>   
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">
                        2,543
                    </p>                    
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('webdevelopment')}
                {recentItem('machinelearning')}
                {recentItem('firebase')}
            </div>
        </div>
    )
}

export default Sidebar
