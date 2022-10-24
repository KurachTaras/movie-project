import React from 'react';
import {useNavigate} from "react-router-dom";

const SearchCard = ({search}) => {

    const navigate = useNavigate();

    return (
        <div className={'movie_card'}>
            <div className={'movie_poster'}>
                <img  className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + search.poster_path} alt=""/>
            </div>
            <div className={'movie_info'}>
                <button onClick={() => {
                    navigate(`/movies/${search.id}`)
                }}>get id</button>
                <div>title: {search.title}</div>
            </div>
        </div>
    );
};

export {SearchCard};