import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { Link, Outlet, useNavigate, useOutlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Pagina1() {
  const [state, setState] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [filterState, setFilterState] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const [inputValue2, setInputValue2] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetchData(inputValue, '', inputValue2);
    }
  };
  const handleChange = (event) => {
    setInputValue2(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(inputValue)
  };
  const inputCheckboxLondon = (event) => {
    event.preventDefault();
    fetchData(inputValue, 'london', '')
  }
  const inputCheckboxAmsterdam = (event) => {
    event.preventDefault();
    fetchData(inputValue, '', 'Amsterdam')
  }
  const inputCheckboxNewyork = (event) => {
    event.preventDefault();
    fetchData(inputValue, 'New york', 'Us')

  }
  const inputCheckboxBerlin = (event) => {
    event.preventDefault();
    fetchData(inputValue, 'Berlin', 'Germany')

  }



  async function fetchData(cargo, country, city) {
    if (cargo === undefined) {
      const cargo = ''
      const country = 'US';
      const city = '';
    }

    const url = `https://jsearch.p.rapidapi.com/search?query=${cargo}%20developer%20in%20${city}%2C%20${country}&page=1&num_pages=3`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5d4b623051msh5b3bdff6a8f9d3dp1f8348jsn1e240779ed67',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const objeto = result.data;

      const formateado = objeto.map(data => {
        return {
          company: data.employer_name,
          profile: data.job_title,
          logo: data.employer_logo,
          schedule: data.job_employment_type,
          country: data.job_country,
          job_city: data.job_city,
          job_description: data.job_description,
          employer_website: data.employer_website,
          job_apply_link: data.job_apply_link,
          job_employment_type: data.job_employment_type,
          id: data.job_id
        }
      });

      setState(formateado)
      const datos = formateado.slice(5, 10)
      setFilterState(datos)

    } catch (error) {
      console.error(error);
    }


  }
  const navigate = useNavigate();

  function Pagina(contenido, titulo, compañia, logo, country, city, web, aplicar, horario) {
    navigate('/information', { state: { id: contenido, titulo: titulo, compañia: compañia, logo: logo, country: country, city: city, web: web, aplicar: aplicar, horario: horario } });
  }

  function inputCheckbox(event) {
    if (event.target.checked) {
      const result = state.filter(datos => datos.schedule === 'FULLTIME');
      const dato = result.slice(5, 10)
      setFilterState(dato)

    }
    else {
      const dato = state.slice(5, 10)
      setFilterState(dato)

    }
  }

  return (
    <>
      <div className='container-title'>
        <h1><span className='title_text'>Github</span> Jobs</h1>
      </div>
      <div className='container-header'>
        <InputGroup className="mb-1">
          <Form.Control
            className="no-border-radius"
            placeholder="Job Title"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleInputChange}
          />
          <div className="button-container">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Search
            </Button>                    </div>
        </InputGroup>
      </div>

      <div className='container-info-trabajos'>
        <div className='container-opciones'>
          <div className="container-check">

            <label>
              <input type="checkbox" onChange={inputCheckbox} />
              Full time
            </label>
          </div>
          <p className='location'>LOCATION</p>
          <div className='container-input-city'>
            <InputGroup className="mb-1">
              <Form.Control
                className="input-city"
                placeholder="City, State, zip code or country"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </InputGroup>
          </div>
          <div className='container-opciones-city'>

          </div>
          <div className='container-trabajos'>
            <div className='container-input'>
              <input className='input' type="radio" name="city" value="London" onChange={inputCheckboxLondon} />
              <span>London</span>
            </div>
            <div className='container-input'>
              <input className='input' type="radio" name="city" value="Amsterdam" onChange={inputCheckboxAmsterdam} />
              <span>Amsterdam</span>
            </div>
            <div className='container-input'>
              <input className='input' type="radio" name="city" value="New York" onChange={inputCheckboxNewyork} />
              <span>New York</span>
            </div>
            <div className='container-input'>
              <input className='input' type="radio" name="city" value="Berlin" onChange={inputCheckboxBerlin} />
              <span>Berlin</span>
            </div>
          </div>

        </div>
        <div className='container-trabajos-targeta'>
          {filterState?.map(data => (
            <div className='inner-div' key={data.job_id}>
              <div>
                <img src={data.logo} alt="not found" />

              </div>
              <div className='second-inner-div'>
                <div>{data.company}</div>
                <div className='link' onClick={() => Pagina(data.job_description, data.profile, data.company, data.logo, data.country, data.job_city, data.employer_website, data.job_apply_link, data.job_employment_type)}>{data.profile}</div>
                <div className='schedule'>{data.schedule}</div>
              </div>
              <div className='third-inner-div'>
                <div>{data.country}</div>
                <div className='space'></div>
                <div>{data.job_city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='botones'>

        <button className='container-button-paginas'>
          <Link to="/">1</Link>
        </button>
        <button className='container-button-paginas'>
          <Link to="/2">2</Link>
        </button>
        <button className='container-button-paginas'>
          <Link to="/3">3</Link>
        </button>
        <button className='container-button-paginas'>
          <Link to="/4">4</Link>
        </button>
        <button className='container-button-paginas'>
          <Link to="/5">5</Link>
        </button>

      </div>

    </>
  )
}


