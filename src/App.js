import './App.css';
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import PageMain from './components/page/page-main/PageMain';
import Footer from './components/UI/footer/Footer';
import Header from './components/UI/header/Header';
import PageNotFound from './components/page/PageNotFound'
import PageFaq from './components/page/PageFaq'
import PageTarifs from './components/page/PageTarifs'
import PageResult from './components/page/PageResult'
import PageSearch from './components/page/page-search/PageSearch';
import Auth from './components/popup/auth';

import { Context } from './context';

function App() {

  const [login, setLogin] = useState('sf_student9')
  const [pass, setPass] = useState('k%3E%nJF9y')
  const [statusAuth, setStatusAuth] = useState()
  const [infoCount, setInfoCount] = useState()
  const [chekForm, setChekForm] = useState(true)
  const [authForm, setAuthForm] = useState(false)
  const [authDone, setAuthDone] = useState(false)

  const authPopup = () => {
    setAuthForm(!authForm);
  }

  async function getAuth() {
    const url = `https://gateway.scan-interfax.ru/api/v1/account/login`;

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ login: login, password: pass }),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
    })
    let data = await response.json()
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('expire', data.expire);
    if (response.status === 200) {
      getCount(data.accessToken)
      authPopup()
      setAuthDone(!authDone)
    } else setChekForm(!chekForm)
  }

  

  async function getCount(token) {
    const url = `https://gateway.scan-interfax.ru/api/v1/account/info?`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })  

       const data = await response.json()
       return setInfoCount(data)
  }

  const [infoHistograms, setInfoHistograms] = useState('')
  const token = localStorage.getItem('accessToken')

  

  const histogramsBody =
  {
    "issueDateInterval": {
      "startDate": "2018-01-01T00:00:00+03:00",
      "endDate": "2022-08-31T23:59:59+03:00"
    },
    "searchContext": {
      "targetSearchEntitiesContext": {
        "targetSearchEntities": [
          {
            "type": "company",
            "sparkId": null,
            "entityId": null,
            "inn": 7710137066,
            "maxFullness": true,
            "inBusinessNews": null
          }
        ],
        "onlyMainRole": true,
        "tonality": "any",
        "onlyWithRiskFactors": false,
        "riskFactors": {
          "and": [],
          "or": [],
          "not": []
        },
        "themes": {
          "and": [],
          "or": [],
          "not": []
        }
      },
      "themesFilter": {
        "and": [],
        "or": [],
        "not": []
      }
    },
    "searchArea": {
      "includedSources": [],
      "excludedSources": [],
      "includedSourceGroups": [],
      "excludedSourceGroups": []
    },
    "attributeFilters": {
      "excludeTechNews": true,
      "excludeAnnouncements": true,
      "excludeDigests": true
    },
    "similarMode": "duplicates",
    "limit": 10,
    "sortType": "sourceInfluence",
    "sortDirectionType": "desc",
    "intervalType": "month",
    "histogramTypes": [
      "totalDocuments",
      "riskFactors"
    ]
  }

  async function getHistograms() {
    const url = `https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(histogramsBody)
    })
    setInfoHistograms(await response.json());
  }
 
  return (
    <div className="App">
      <Context.Provider value={{
        getAuth, authPopup,
        authForm, setAuthForm, authDone, setAuthDone,
        login, setLogin,
        pass, setPass,
        statusAuth, setStatusAuth,
        infoCount, setInfoCount,
        chekForm, setChekForm,
        getHistograms, histogramsBody,
        infoHistograms, setInfoHistograms,
      }}>
        <Header />
        <Routes>
          <Route path='/' element={<PageMain />} />
          <Route path='/tarifs' element={<PageTarifs />} />
          <Route path='/FAQ' element={<PageFaq />} />
          <Route path='/search' element={<PageSearch />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/search/result' element={<PageResult />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
