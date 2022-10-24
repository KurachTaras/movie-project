import React, {useEffect, useState} from 'react';

import {Movie} from "../Movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import Pagination from "react-js-pagination";

import './Movies.css'
import {movieService} from "../../services";
import StarRatings from "react-star-ratings/build/star-ratings";

const Movies = () => {

    const [movie, setMovie] = useState()
    const [query, setQuery] = useSearchParams({page: '1'})
    const dispatch = useDispatch();
    const {movies, siblingCount, totalPages, pageRange, genres, movieId, trending} = useSelector(state => state.movieReducer)

    const navigate = useNavigate();
    const newTrending = Math.floor(Math.random() * trending?.length)

    const filteredGenres = movie?.genre_ids.reduce((acc, id) => {
        const mathedGenre = genres.find(genre => genre.id === id);
        if (mathedGenre) {
            acc.push(mathedGenre)
        }
        return acc;
    }, []);
    console.log(filteredGenres);

    useEffect(() => {
        movieService.getTrending().then((res) => {
            console.log(res.data.results);
            const newMovie = Math.floor(Math.random()* res.data.results.length + 1)
            setMovie(res.data.results[newMovie])
        })
    }, [])
    
    console.log(movie);

    useEffect(() => {
        dispatch(movieActions.getMovies({page: query.get('page')}))
    }, [query])
    

    useEffect(()=> {
        dispatch(movieActions.getMGenres())
    }, [])


    console.log(genres);
    console.log(trending);

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
        <div className={'movies_page'}>
            {/*// genreList*/}
                <div>
                    <div className={'trending'} style={{
                        backgroundImage: `url(${"https://image.tmdb.org/t/p/w500" + movie?.backdrop_path })`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div className={'trending_container'}>
                            <div className={'trending_title'}>
                                {movie?.title}
                            </div>
                            <div className={'trending_rating'}>
                                <StarRatings name={'trending_rating_star'}
                                    rating={movie?.vote_average}
                                    starRatedColor={"yellow"}
                                    numberOfStars={5}
                                    starDimension={"20px"}
                                />
                            </div>
                            <div className={'trending_genres'}>
                                {filteredGenres?.map((genre) => (
                                    <div className={'trending_genre'} key={genre.id}> {genre?.name }</div>
                                ))}
                            </div>
                            <p className={'trending_overview'} >
                                {movie?.overview}
                            </p>
                            <button className={'watch'} onClick={()=> {
                                if (movie?.media_type === "movie"){
                                    navigate(movie?.id.toString(), {state: {...movie}})
                                } else {
                                    navigate(`/tvShow/${movie.id}`)
                                }
                            }}>
                                Watch Now
                            </button>
                            <img className={'trending_poster'} src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path} alt="" />
                        </div>

                    </div>

                    {/*//movieList*/}
                    <div className={'movies_container'}>
                        <div className={'movies'}>
                            {
                                movies?.map(movie => <Movie key={movie.id} movie={movie}  />)
                            }
                        </div>
                    </div>


                    <div className={'pagination'}>
                        <Pagination onChange={handlePageChange}
                                    itemClass={'pagin_li'}
                                    firstPageText={1}
                                    totalItemsCount={500}
                                    pageRangeDisplayed={5}
                                    activePage={query.get('page')}
                                    lastPageText={500}
                                    activeClass={'active'}
                        />
                    </div>
                </div>

        </div>

    );
};


export {Movies};