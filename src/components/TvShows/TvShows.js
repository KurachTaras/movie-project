import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {TvShow} from "../TvShow/TvShow";
import {useSearchParams} from "react-router-dom";
import Pagination from "react-js-pagination";
import './TvShow.css'

const TvShows = () => {
    const [tvQuery, setTvQuery] = useSearchParams({page: '1'})
    const dispatch = useDispatch();
    const {tvPopular, tvGenres} = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getTvPopular({page: tvQuery.get('page')}))
    }, [tvQuery])

    console.log(tvPopular);

    const handlePageChange = (pageNumber) => {
        setTvQuery({page: `${pageNumber}`})
    }


    return (
        <div>

            <div className={'tvShow_popular'}>
                Some popular Tv
            </div>

            <div className={'movies_container'}>
                <div className={'movies'}>
                    {tvPopular.map(popular => <TvShow key={popular.id} popular={popular} />)}
                </div>
            </div>

            <div className={'pagination'}>
                <Pagination onChange={handlePageChange}
                            totalItemsCount={5000}
                            itemClass={'pagin_li'}
                            firstPageText={1}
                            pageRangeDisplayed={5}
                            activePage={tvQuery.get('page')}
                            lastPageText={500}
                            activeClass={'active'}
                />
            </div>
        </div>

    );
};

export {TvShows};