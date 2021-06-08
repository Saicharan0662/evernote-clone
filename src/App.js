import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Favorite from './components/notes/Favorite';
import NoteDetail from './components/notes/NoteDetail';
import EditForm from './components/notes/EditForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/favorites'><Favorite /></Route>
        <Route path='/note/:id'><NoteDetail /></Route>
        <Route path='/editform/:id'><EditForm /></Route>
      </Switch>
    </Router>
  );
}

export default App;
