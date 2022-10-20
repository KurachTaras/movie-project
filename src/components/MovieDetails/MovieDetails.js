import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import YouTube from "react-youtube";
import {Similar} from "../Similar/Similar";

const MovieDetails = () => {

    const dispatch = useDispatch();
    const {videos, similar, movieId} = useSelector(state => state.movieReducer);

    let {id} = useParams();
    // let {id: movieId} = useParams();

    let [data, setdata] = useState({});
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id && movieId}?api_key=7cf9b0f30126c3f31e4009979a376a0f`)
            .then(value => value.json())
            .then(value => {
                setdata({...value})
            })
    }, [id, movieId])
    
    console.log(movieId);

    useEffect(() => {
        if (id || movieId) {
            dispatch(movieActions.getVideo({id: id}))
            dispatch(movieActions.getSimilar({id: id}))
        } if (movieId) {
            dispatch(movieActions.getVideo({id: movieId}))
            dispatch(movieActions.getSimilar({id: movieId}))
        }

    }, [id, movieId])

    console.log(videos);

    console.log(data);
    console.log(similar);

    console.log(videos.key);
    return (

        <div>
            <div> <img src={"https://image.tmdb.org/t/p/w500/" + data?.poster_path } alt="" /> </div>
            <div> title: {data.title} </div>
            <div>
                <YouTube
                    videoId={videos.key}
                    className={"youtube amru"}
                    containerClassName={"youtube-container amru"}
                />
            </div>
            <div className={'movies'}>
                {
                    similar?.map(similarOne => <Similar key={similarOne.id} similarOne={similarOne} />)
                }
            </div>
        </div>
    );
};

export {MovieDetails};