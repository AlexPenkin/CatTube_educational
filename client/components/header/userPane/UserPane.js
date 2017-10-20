import React from 'react';
import PropTypes from 'prop-types';
import {userPaneUsername, userPaneLink, userPaneButton} from './UserPane.css';

const UserPane = ({ username, isOpen }) => (
    <div>
        <div className={userPaneUsername} >
            You signed in as {username}
        </div>
        <a className={userPaneLink}>Your Profile</a>
        <a className={userPaneLink}>Favorites</a>
        <a className={userPaneLink}>Settings</a>
        {username !== 'Guest' && <button className={userPaneButton}>Log Out</button>}
    </div>
);

UserPane.propTypes = {
    username: PropTypes.string,
    isOpen: PropTypes.bool
};

UserPane.defaultProps = {
    username: 'Guest',
    isOpen: false
};

export default UserPane;
