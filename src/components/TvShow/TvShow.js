import React from 'react';
import {useNavigate} from "react-router-dom";

const TvShow = ({popular}) => {

    let navigate = useNavigate();

    return (
        <div className={'movie_card'}>
            <div className={'movie_poster'}>
                <img className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + popular.poster_path } alt="" />
            </div>
            <div>title: {popular.name}</div>
        </div>
    );
};

export {TvShow};