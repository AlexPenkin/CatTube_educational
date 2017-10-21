import React from 'react';
import PropTypes from 'prop-types';
import {dropdownCaret, userSectionWrap, avatar, avatarPic} from './userSection.css';
import defaultAvatar from './cat_logo_128.png';


const UserSection = ({tooglePane}) => (
    <div className={userSectionWrap}>
        <div
            className={avatar}
            onClick={tooglePane}
        >
            <img className={avatarPic} src={defaultAvatar} alt="" />
        </div>
        <span
            className={dropdownCaret}
            onClick={tooglePane}
        />
    </div>
);

UserSection.propTypes = {
    tooglePane: PropTypes.func
};

UserSection.defaultProps = {
    tooglePane: () => undefined
};

export default UserSection;
