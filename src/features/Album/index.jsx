import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            title: 'album 1',
            url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/e/3/2/de320c7f69ddf70a91f62aec66085422.jpg'
        },
        {
            id: 2,
            title: 'album 2',
            url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/d/6/5/1d65f6c8e858e604076af048606782eb.jpg'
        },
        {
            id: 3,
            title: 'album 3',
            url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/5/6/0/05609750506ec1bdb603e91706253766.jpg'
        }
    ]
    return (
        <div>
            <h2>Chill</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;