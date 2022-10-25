import {createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
    movies: [],
    genres: [],
    movieById: {},
    tvPopular: [],
    tvPopularById: {},
    tvGenres: [],
    trending: [],
    nowPlaying: [],
    nowPlayingDates: {},
    similar: [],
    videos: [],
    upcoming: [],
    tvRecommendations: [],
    upcomingDates: {},
    movieList: [],
    account: {},
    person: {},
    favoriteMovies: [],
    tvShowVideo: [],
    currentMovie: null,
    loading: false,
    error: null,
    pages: null,
    next: null,
    prev: null,
    currentPages: null,
    totalPages: 500,
    siblingCount:  1,
    pageRange: 5000,
    movieId: '',

}


const getPerson = createAsyncThunk(
    'moviesSlice/getPerson',
    async ({id}, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getPerson(id)
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const getTvRecommendations = createAsyncThunk(
    'moviesSlice/getTvRecommendations',
    async ({id}, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getTvRecommendations(id)
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const getMovieList = createAsyncThunk(
    'moviesSlice/getMovieList',
    async (_, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getLists();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getAccount = createAsyncThunk(
    'moviesSlice/getAccount',
    async (_, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getAccount();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getFavoriteMovies = createAsyncThunk(
    'movies/Slice/getFavoriteMovies',
    async (_, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getFavorite();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async ({page}, {rejectedWithValue, dispatch, getState}) => {
        console.log(getState());
        try {
            const {data} = await movieService.getAllMovies(page);
            // return data.results
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
}
);

const getMovieById = createAsyncThunk(
    'moviesSlice/getMovieById',
    async ({id}, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getMovieById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getTvPopular = createAsyncThunk(
    'moviesSlice/getTvPopular',
    async ({page}, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getTvPopular(page);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getTvPopularById = createAsyncThunk(
    'moviesSlice/getTvPopularById',
    async ({id}, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getTvPopularById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getTvGenreList = createAsyncThunk(
    'moviesSlice/getTvGenreList',
    async (_, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getTvGenreList();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);


const getTrending = createAsyncThunk(
    'moviesSlice/getTrending',
    async (_, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getTrending();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getNowPlaying = createAsyncThunk(
    'moviesSlice/getNowPlaying',
    async ({page}, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getNowPlaying(page);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getUpcoming = createAsyncThunk(
    'moviesSlice/getUpcoming',
    async (_, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getUpcoming();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);


const getSimilar = createAsyncThunk(
    'moviesSlice/getSimilar',
    async ({id}, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getSimilar(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getVideo = createAsyncThunk(
    'moviesSlice/getVideo',
    async ({id}, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getVideo(id );
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getTvVideo = createAsyncThunk(
    'moviesSlice/getTvVideo',
    async ({id}, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getTvVideo(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);


const getMGenres = createAsyncThunk(
    'moviesSlice/getGenres',
    async (_, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getAllGenres();
            return data
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_, {rejectedWithValue, dispatch, getState}) => {

    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        nextPage: (state, action) => {
            state.nextPage = state.page + 1
        },
        setId: (state, action) => {
            state.movieId = action.payload
        },
        addMovie: (state, action) => {
            state.watchList = action.payload
        },
        removeMovie: (state, action) => {
            state.watchList = state.watchList.filter(movie => movie.id !== action.payload)
        },
        markWatched: (state, action) => {
            state.watchList = state.watchList.filter(movie => movie.id !== action.payload)
            state.watched = action.payload
        },
        moveToWatchList: (state, action) => {
            state.watched = state.watched.filter(movie => movie.id !== action.payload)
            state.watchList = action.payload
        },
        removeWatched: (state, action) => {
            state.watched = state.watched.filter(data => data.id !== action.payload)
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.movies = results
                state.pages = page
                // state.movies = action.payload
                // state.loading = false
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movieById = action.payload
            })
            .addCase(getTvPopular.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.tvPopular = results
            })
            .addCase(getMovies.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getMGenres.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genres = genres
            })
            .addCase(getTvPopularById.fulfilled, (state, action) => {

            })
            .addCase(getTvGenreList.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.tvGenres = genres
            })
            .addCase(getTrending.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.trending = results
            })
            .addCase(getNowPlaying.fulfilled, (state, action) => {
                const {page, dates, results} = action.payload
                state.nowPlaying = results
                state.nowPlayingDates = dates
            })
            .addCase(getSimilar.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.similar = results
            })
            .addCase(getVideo.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.videos = results[0]
            })
            .addCase(getUpcoming.fulfilled, (state, action) => {
                const {page, dates, results} = action.payload
                state.upcoming = results
                state.upcomingDates = dates
            })
            .addCase(getMovieList.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.movieList = results
            })
            .addCase(getAccount.fulfilled, (state, action) => {
               state.account = action.payload
            })
            .addCase(getFavoriteMovies.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.favoriteMovies = results
            })
            .addCase(getTvVideo.fulfilled, (state, action) => {
                const {id, results} = action.payload
                state.tvShowVideo = results
            })
            .addCase(getPerson.fulfilled, (state, action) => {
                state.person = action.payload
            })
            .addCase(getTvRecommendations.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.tvRecommendations = results
            })
})

const {reducer: movieReducer, actions: {nextPage, setId, addMovie, removeMovie, markWatched, moveToWatchList, removeWatched}} = movieSlice;

const movieActions = {
    getGenres,
    getMovies,
    getMGenres,
    getMovieById,
    getTvPopular,
    getTvPopularById,
    getTvGenreList,
    getTrending,
    getNowPlaying,
    getSimilar,
    getVideo,
    getUpcoming,
    getAccount,
    getFavoriteMovies,
    getMovieList,
    nextPage,
    setId,
    addMovie,
    removeMovie,
    markWatched,
    moveToWatchList,
    removeWatched,
    getTvVideo,
    getTvRecommendations,
    getPerson

}

export {
    movieReducer,
    movieActions
}