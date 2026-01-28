import { useState } from 'react';
import { Route, Switch } from 'wouter';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Categories from './pages/categories';
import CategoryDetail from './pages/category-detail';
import About from './pages/about';
import NotFound from './pages/not-found';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <Switch>
        <Route path="/">
          <Home searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/categories/:slug">
          {(params) => <CategoryDetail slug={params.slug} />}
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}
