import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'

import { HeaderOption } from '../../components'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'




import './Header.css'

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="LinkedIn" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>            
            <div className="header__right">
                <HeaderOption Icon={HomeIcon } title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />  
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            </div>
            <div className="header__rightLogout">
                {user && <HeaderOption
                    avatar
                    src
                    title="me"
                    onClick={logoutOfApp}
                />}
            </div>  
        </div>
    )
}

export default Header
