import React from 'react';
import {useLocation} from "react-router-dom";

import './UserInfo.css'
import StarRatings from "react-star-ratings/build/star-ratings";

const UserInfo = () => {

    const location = useLocation();
    console.log(location);
    console.log(location?.state?.name);

    return (
        <div className={'user_card'}>
            <div className={'user_card_info'}>
                <div className={'user_card_photo'}>
                    <img className={'user_photo'} src={'https://image.tmdb.org/t/p/w500/' + location?.state.avatar?.tmdb?.avatar_path} alt=""/>
                </div>
                <div className={'user_card_name'}>
                    <div className={'user_name'}>
                        Name : {location?.state.name}
                    </div>
                    <div className={'user_card_id'}>
                        Id : {location?.state.id}
                    </div>
                    <div className={'user_username'}>
                        Username : {location?.state.username}
                    </div>
                </div>
            </div>
        </div>
    );
};

export {UserInfo};