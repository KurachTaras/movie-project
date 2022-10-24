import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {BsSearch} from "react-icons/bs"

import './Header.css'
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

const Header = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const {account} = useSelector(state => state.movieReducer);

    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        dispatch(movieActions.getAccount())
    }, [])

    const searchMovie = async(e)=>{
        e.preventDefault();
        console.log("Searching");
        try{
            const url=`https://api.themoviedb.org/3/search/movie?api_key=7cf9b0f30126c3f31e4009979a376a0f&query=${search}`;
            const res= await fetch(url);
            const data= await res.json();
            setData(data);
            navigate(`/search`, {state: {...data}})
        }
        catch(e){
            console.log(e);
        }

    }

    return (
        <div>
            <div className={'header'}>
                <div className={'logo'}>
                    Logo
                </div>
                <ul className={'navbar'}>
                    <li><NavLink to={'/movies'}>Movies</NavLink></li>
                    <li><NavLink to={'/tvShow'}>TVShow</NavLink></li>
                    <li><NavLink to={'/cinema'}>Cinema</NavLink></li>
                </ul>
                <div className={'header_form'}>
                    <input className={'header_form_input'}
                            id={'search'}
                            type={'text'}
                            placeholder={'What are we looking for ?'}
                            value={search}
                            onChange={handleSearch}
                        />
                        <BsSearch className={'BsSearch'} onClick={searchMovie}/>

                </div>
                    <img  className={'header_avatar'} src={'https://image.tmdb.org/t/p/w500/' + account?.avatar?.tmdb?.avatar_path}
                          onClick={() => navigate('/user', {state: {...account}})} alt=""/>
            </div>

        </div>
    );
};

export {Header};