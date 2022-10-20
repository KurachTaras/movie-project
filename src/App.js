import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import {MovieDetailsPage, MoviesPage, PopularsPage, SimilarPage, TvShowsPage} from "./pages";
import {MainLayout} from "./layouts";
import {MovieGenresPage} from "./pages";

function App() {
  return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                {/*<Route path={'movies/:id/:id'} element={<SimilarPage/>}/>*/}
                <Route path={'genres'} element={<MovieGenresPage/>}/>
                <Route path={'tvShow'} element={<TvShowsPage/>}/>
                <Route path={'popular'} element={<PopularsPage/>}/>
            </Route>
        </Routes>
  );
}

export default App;
