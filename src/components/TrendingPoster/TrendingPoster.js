import React from 'react';

const TrendingPoster = ({trend}) => {
    return (


        <div className={'trending'}>
            <div className={'trending_title'}>
                {trend.title}
            </div>
        </div>
    );
};

export {TrendingPoster};