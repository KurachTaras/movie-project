import {urls} from "../configs";
import {axiosService} from "./axios.service";

const movieService = {
    getAllMovies: (page=1)=> axiosService.get(urls.movie, {params:{page}}),
    getAllGenres: ()=> axiosService.get(urls.genres),
    SearchMovie: (search)=> axiosService.get(`${urls.search}${search}`),
    getPoster: (poster_path)=> axiosService.get(urls.poster, poster_path),
    getMovieById: (id)=> axiosService.get(`${urls.movieById}/${id}`),
    getTvPopular: ()=> axiosService.get(urls.tvPopular),
    getTvPopularById: (id)=> axiosService.get(`${urls.tvPopularById}${id}`),
    getTvGenreList: ()=> axiosService.get(urls.tvGenres),
    getTrending: ()=> axiosService.get(urls.trending),
    getNowPlaying: ()=> axiosService.get(urls.nowPlaying),
    getSimilar: (id)=> axiosService.get(`${urls.similar}/${id}/similar`),
    getVideo: (id)=> axiosService.get(`${urls.video}${id}/videos`),
    getUpcoming: ()=> axiosService.get(urls.upcoming),
}

export {
    movieService
}