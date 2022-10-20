import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import {Movie} from "../Movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import Pagination from "react-js-pagination";
// import {Pagination} from "react-headless-pagination"

import './Movies.css'
import {axiosService, movieService} from "../../services";


const Movies = () => {

    const [query, setQuery] = useSearchParams({page: '1'})
    const dispatch = useDispatch();
    const {movies, siblingCount, totalPages, pageRange, genres, movieId} = useSelector(state => state.movieReducer)

    const [data, setData] = useState([])
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const searchMovie = async(e)=>{
        e.preventDefault();
        console.log("Searching");
        try{
            // const url1= movieService.SearchMovie({search}).then(({data}) => setData(data));
            // await url1;
            const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${search}`;
            const res= await fetch(url);
            const data= await res.json();
            setData(data);
        }
        catch(e){
            console.log(e);
        }
    }

    console.log(data);
    console.log(movieId);

    console.log(search);

    useEffect(() => {
        dispatch(movieActions.getMovies({page: query.get('page')}))
    }, [query])

    useEffect(()=> {
        dispatch(movieActions.getMGenres())
    }, [])

    console.log(genres);

    const nextPage = () => {
        const nextPage = +query.get('page') + 1;
        setQuery({page: `${nextPage}`})
    }

    const prevPage = () => {
        const prevPage = +query.get('page') - 1;
        setQuery({page: `${prevPage}`})
    }

    const handlePageChange = (pageNumber) => {
        setQuery({page: `${pageNumber}`})
    }
    console.log(query.get('page'));

    return (
        <div>
            <div className={'movies'}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}  />)}
            </div>
            <button onClick={prevPage}>Prev</button>
            
            <Pagination onChange={handlePageChange}
                        totalItemsCount={500}
                        pageRangeDisplayed={5}
                        activePage={query.get('page')}
            />
            <button onClick={nextPage}>Next</button>

            <form onSubmit={searchMovie}>
                <input
                    id={'search'}
                    type={'text'}
                    placeholder={'Search'}
                    value={search}
                    onChange={handleSearchChange}
                />
                <input
                    type={'submit'}
                    value={'Submit'}
                />
            </form>

        </div>


    );
};


export {Movies};