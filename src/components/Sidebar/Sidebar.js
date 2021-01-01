import React from 'react'
import { Avatar } from '@material-ui/core'

import './Sidebar.css'

const Sidebar = () => {

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
                <Avatar />
                <h2>Alex Kimeu</h2>
                <h4>kimeualexis@gmail.com</h4>
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
