import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import {userPaneUsername, userPaneUsernameBold, userPaneLink, userPaneButton, userPane, separator} from './UserPane.css';
import {dropdownCaret, userSectionWrap, avatar, avatarPic} from '../userSection/userSection.css';

class UserPane extends React.Component {

    constructor(props) {
        super(props);
        this.outsideClickhandler = this.outsideClickhandler.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.outsideClickhandler);
    }

    outsideClickhandler(e) {
        if (this.props.isOpen &&
            e.target.className !== userPane &&
            e.target.className !== dropdownCaret &&
            e.target.className !== userPaneUsernameBold &&
            e.target.className !== userPaneUsername &&
            e.target.className !== userSectionWrap &&
            e.target.className !== avatar &&
            e.target.className !== avatarPic
        ) {
            this.props.closePane();
        }
    }

    render() {
        const { username, isOpen, logout} = this.props;
        return (
            isOpen &&
                <div className={userPane}>
                    <div className={userPaneUsername} >
                        You signed in as <span className={userPaneUsernameBold}>{username}</span>
                    </div>
                    <div className={separator} />
                    <Link to="/profile" className={userPaneLink}>Your Profile</Link>
                    <Link to="/favorites" className={userPaneLink}>Favorites</Link>
                    <Link to="/settings" className={userPaneLink}>Settings</Link>
                    {username !== 'Guest' && <button onClick={logout} className={userPaneButton}>Log Out</button>}
                </div>
        );
    }
}

UserPane.propTypes = {
    username: PropTypes.string,
    isOpen: PropTypes.bool,
    closePane: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

UserPane.defaultProps = {
    username: 'Guest',
    isOpen: false
};

export default UserPane;
