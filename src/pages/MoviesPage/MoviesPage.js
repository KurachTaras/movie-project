import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {movieService} from "../../services";
import {Movies} from "../../components";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import './MoviesPage.css'

const MoviesPage = () => {
    //
    // const dispatch = useDispatch();
    // const {page, totalPage} = useSelector(state => state.movieReducer)
    //
    // const [movies, setMovies] = useState([]);
    // const [prev, setPrev] = useState(null);
    // const [next, setNext] = useState(null);
    //
    // const [query, setQuery] = useSearchParams({page:'1'});
    //
    // const prevPage = () => {
    //     setQuery(value=>({page:value.get('page')-1}))
    // }
    // const nextPage = () => {
    //     setQuery(value=>({page:+value.get('page')+1}))
    // }

    return (
        <div className={'movies_pages'}>
            <Movies/>
        </div>
    );
};

export {MoviesPage};