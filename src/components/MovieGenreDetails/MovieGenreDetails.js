import React from 'react';

const MovieGenreDetails = ({genre}) => {

    return (
        <div>
            <div> id : {genre.id} </div>
            <div> name: {genre.name} </div>
        </div>
    );
};

export {MovieGenreDetails};