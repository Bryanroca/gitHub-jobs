import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import '../App.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Pagina1 from './pagina1';
import Pagina2 from './pagina2';
import Pagina3 from './pagina3';
import Pagina4 from './pagina4';
import Information from './information'
export default function App() {

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/2" element={<Pagina2 />} />
          <Route path="/3" element={<Pagina3 />} />
          <Route path="/4" element={<Pagina4 />} />
          <Route exact path="/information" element={<Information />} />
        </Routes>
      </div>
    </>
  );
}