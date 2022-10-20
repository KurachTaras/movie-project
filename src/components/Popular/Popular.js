import React from 'react';
import {useNavigate} from "react-router-dom";

const Popular = ({trend}) => {

    const navigate = useNavigate();

    return (
        <div className={'movie_card'}>
            <div className={'movie_poster'}>
                <img className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + trend.poster_path } alt="" />
            </div>
        </div>
    );
};

export {Popular};