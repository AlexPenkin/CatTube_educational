import React from 'react';
import PropTypes from 'prop-types';
import {dropdownCaret, userSectionWrap, avatar} from './userSection.css';
import defaultAvatar from './cat_logo_128.png';


const UserSection = () => (
    <div className={userSectionWrap}>
        <div className={avatar}>
            <img src={defaultAvatar} alt="" />
        </div>
        <span className={dropdownCaret} />
    </div>
);

UserSection.propTypes = {

};

UserSection.defaultProps = {

};

export default UserSection;
