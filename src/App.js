import './App.css';
//react-router-dom is not included in react library, must import npm i react-router-dom, it allows us to make/use routes in app
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

//page components
//home is the contents of index
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Article from './pages/Article'

function App() {
  return (
    <div className="App">
      {/* BrowserRouter is wrapped around any content that will use routes/links. NavLinks styles internal page links with an "active" class that shows them selected. Use Links for internal page linking without the active class styling. Use anchor link for external links. */}
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Adds paths & routes for navigation. "Routes" surrounds all indiv "Route" paths. This is the updated react-router-dom 6 syntax that doesn't use Switch or the need to specify "exact" match for home routes. */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* to load an article details page dynamically by id, use a route parameter ie '.../:id' where the variable after the colon is whatever you want to call it, usually id*/}
          <Route path='/articles/:id' element={<Article />} />
          {/* to create a redirect catchall for any urls that don't exist use wildcard */}
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
