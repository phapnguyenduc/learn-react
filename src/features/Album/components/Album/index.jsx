import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
    album: PropTypes.object.isRequired
};

function Album({ album }) {
    return (
        <div className='album'>
            <div className="album__thumb">
                <img src={album.url} alt={album.title} />
            </div>
            <p className='album__name'>{album.title}</p>
        </div>
    );
}

export default Album;