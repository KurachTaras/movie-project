const baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '7cf9b0f30126c3f31e4009979a376a0f';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2Y5YjBmMzAxMjZjM2YzMWU0MDA5OTc5YTM3NmEwZiIsInN1YiI6IjYzNDlhMDkyMWIxZjNjMDA3OWU2ZmEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hr6kjV2lRsR7JqwjTdJgIqcs-lhqSyjVFyqc9h1gv4w';


const urls = {
    movies: '/movies',
    movie: '/discover/movie?',
    genres: '/genre/movie/list',
    search: '/search/keyword?query=',
    movieById: '/movie',
    tvPopular: '/tv/popular?',
    tvPopularById: '/tv/',
    tvGenres: '/genre/tv/list?',
    trending: '/trending/all/day?',
    nowPlaying: '/movie/now_playing?',
    similar: '/movie/',
    video: '/movie/',
    upcoming: '/movie/upcoming?',
    account: 'account/',
    addItemList: '/list/8223831/add_item',
    favorite: '/account/',
    tvVideo: '/tv/',
    getPerson: '/person/',
    getTvRecommendations: '/tv/'
}

export {
    baseURL,
    API_KEY,
    API_TOKEN,
    urls
}
