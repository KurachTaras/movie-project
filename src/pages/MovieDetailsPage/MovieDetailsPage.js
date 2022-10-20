import React from 'react';
import {MovieDetails} from "../../components";
import {Outlet} from "react-router-dom";

const MovieDetailsPage = () => {
    return (
        <div>
            <MovieDetails/>
            {/*<Outlet/>*/}
        </div>
    );
};

export {MovieDetailsPage};