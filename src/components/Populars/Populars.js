import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {Popular} from "../Popular/Popular";

const Populars = () => {

    const dispatch = useDispatch();
    const {trending} = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getTrending())
    }, [])
    
    console.log(trending);
    
    return (
        <div>
            <div className={'movies'}>
                {trending.map(trend => <Popular key={trend.id} trend={trend}/>)}
            </div>
        </div>
    );
};

export {Populars};