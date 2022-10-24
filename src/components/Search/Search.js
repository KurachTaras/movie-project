import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {SearchCard} from "../SearchCard/SearchCard";

const Search = () => {

const params = useParams();
const location = useLocation();
console.log(location.state.results);

console.log(params.data);

    return (
        <div className={'movies_page'}>
            <div className={'movies'}>
                {
                    location.state.results.map(search => <SearchCard key={search.id} search={search} />)
                }
            </div>
            
        </div>
    );
};

export {Search};