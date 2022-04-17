import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/main-page/MainPage'
import DetailPost from './pages/detail-post/DetailPost'

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} exact />
        <Route path="/post/:postId" element={<DetailPost />} />
      </Routes>
    </div>
  );
}

export default App;
