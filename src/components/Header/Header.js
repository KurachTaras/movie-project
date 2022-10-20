import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'/movies'}>Movies</NavLink>
            <NavLink to={'/genres'}>Genres</NavLink>
            <NavLink to={'/popular'}>Popular</NavLink>
            <NavLink to={'/tvShow'}>TVShow</NavLink>
            <NavLink to={'/cinema'}>Cinema</NavLink>
        </div>
    );
};

export {Header};