import React from 'react';
import {Cinema} from "../../components";

const CinemaPage = () => {
    return (
        <div className={'qwe'} style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Cinema/>
        </div>
    );
};

export {CinemaPage};