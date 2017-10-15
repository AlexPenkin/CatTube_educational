import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styles from './TwoColumns.css';
import ColumnItem from './ColumnItem';
import cat1 from './images/cat1.png';
import cat2 from './images/cat2.png';
import cat3 from './images/cat3.png';
import cat4 from './images/cat4.png';
import cat5 from './images/cat5.png';
import cat6 from './images/cat6.png';

// import logo from './cat_logo_128.png';


const TwoColumns = () =>
    (
        <div className={styles.formWrap}>
            <div className={styles.aboutColumn}>
                <ColumnItem
                    text="Best cats in the whole world"
                    image={cat1}
                />
                <ColumnItem
                    text="Meow Meow"
                    image={cat5}
                />
                <ColumnItem
                    text="Gigabytes of cats"
                    image={cat3}
                />
            </div>
            <div className={styles.slideColumn}>
                <ColumnItem
                    text="Best cats in the whole world"
                    image={cat4}
                />
                <ColumnItem
                    text="Meow Meow"
                    image={cat2}
                />
                <ColumnItem
                    text="Gigabytes of cats"
                    image={cat6}
                />
            </div>
        </div>
    );

export default TwoColumns;
