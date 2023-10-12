import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss'

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired
};

function AlbumList({ albumList }) {
    return (
        <ul className='album-list'>
            {albumList.map(al => (
                <li key={al.id}>
                    <Album album={al} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;