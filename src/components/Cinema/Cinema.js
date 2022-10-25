import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import Pagination from "react-js-pagination";

import {movieActions} from "../../redux";
import {CinemaCard} from "../CinemaCard/CinemaCard";
import './Cinema.css'

const Cinema = () => {

    const dispatch = useDispatch();
    const [playingQuery, setPlayingQuery] = useSearchParams({page: '1'})
    const {nowPlaying, nowPlayingDates} = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getNowPlaying({page: playingQuery.get('page')}))
    }, [playingQuery])


    const handlePageChange = (pageNumber) => {
        setPlayingQuery({page: `${pageNumber}`})
    }

    console.log(nowPlayingDates);

    return (

            <div className={'movieDetails_card'}>
                <div className={'movie_details_container'}>
                    <div className={'movie_details-container_info_d'}>
                        <div className={'movie_details_dates'}>
                            Available from : <span className={'dates_span'}>{nowPlayingDates?.minimum}</span> to
                            <span className={'dates_span'}>{nowPlayingDates?.maximum}</span>
                        </div>
                    </div>
                    <div className={'movies_container'}>
                        <div className={'movies'}>
                            {
                                nowPlaying?.map(playing => <CinemaCard key={playing.id} playing={playing} />)
                            }
                        </div>
                    </div>
                    <div className={'pagination'}>
                        <Pagination onChange={handlePageChange}
                                    totalItemsCount={500}
                                    itemClass={'pagin_li'}
                                    firstPageText={1}
                                    pageRangeDisplayed={5}
                                    activePage={playingQuery.get('page')}
                                    lastPageText={500}
                                    activeClass={'active'}
                        />
                    </div>
                </div>
            </div>
    );
};

export{Cinema};