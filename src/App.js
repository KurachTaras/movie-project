import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import {
    CinemaPage,
    MovieDetailsPage,
    MoviesPage, NotFoundPage,
    SearchPage,
    TvShowsPage,
    UserPage
} from "./pages";
import {MainLayout} from "./layouts";
import {TvShowDetailsPage} from "./pages/TvShowDetailsPage/TvShowDetailsPage";

function App() {
  return (
      <div style={{

      }} className={'app_movie'}>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'search'} element={<SearchPage/>}/>
                <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'cinema'} element={<CinemaPage/>}/>
                <Route path={'tvShow'} element={<TvShowsPage/>}/>
                <Route path={'user'} element={<UserPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
                <Route path={'tvShow/:id'} element={<TvShowDetailsPage/>}/>
            </Route>
        </Routes>
      </div>
  );
}

export default App;
