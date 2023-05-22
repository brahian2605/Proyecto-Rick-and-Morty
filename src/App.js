import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './about/About.jsx'
import { Detail } from './components/Detail/Detail';
import Error404 from './components/Error404/Error404';
import Form from './components/Form/Form';


function App() {
   const [characters, setCharacters] = useState([])


   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if(!characters.find(char => char.id === data.id)){
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         }else{
            alert(`Ya existe el personaje con el id ${id}`)
         }
      }).catch((err) => alert(err.response.data.error) )
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }
   return (
      <div className='App'>
        <Nav onSearch={onSearch}/>
        <Routes>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
         
      </div>
   );
}

export default App;
