// services
import AnimalsProvisioning from '../services/provisioning/animals.js';
import Database from '../services/data.js';
import QuestionsEngine from '../services/questions.js';
import QuestionsProvisioning from '../services/provisioning/questions.js';


// components
import HtmlHead from 'next/head';
import Deck from '../components/Deck.js';
import StartButton from '../components/StartButton.js';
import QuestionsSet from '../components/QuestionsSet.js';
import PageTitle from '../components/PageTitle.js';

// react
import { useEffect, useState } from 'react';


export default function Home() {

  // generación de las propiedades y preguntas que pueden tener los animales
  const Questions = new QuestionsEngine();
  
  // creación de los animals
  const Animals = new Database();

  useEffect(() => {
    QuestionsProvisioning(Questions);
    AnimalsProvisioning(Animals);
  }, []);

  const [hasGameStarted, setHasGameStarted] = useState(false);


  return <>
    <HtmlHead>
      <title>Animals</title>
      <link href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.css" rel="stylesheet" />
    </HtmlHead>

    <div className={'columns is-vcentered'}>
          
      <div className={'column is-6'}>
        <div className={'columns'} style={{ height: '100vh' }}>
          {false === hasGameStarted &&
          <div className={'column'}>
            <div className={'section'}>
              <PageTitle />
            </div>
            <div className={'section'}>
              <div className={'container has-text-centered'}>
                <StartButton launch={() => setHasGameStarted(true)} />
              </div>
            </div>
          </div>}

          {hasGameStarted &&
          <div className={'column'}>
            <div className={'section'}>
              <div className={'container'}>
                <QuestionsSet endGame={() => setHasGameStarted(false)}/>
              </div>
            </div>
          </div>}
          
        </div>
      </div>

      <div className={'column is-6'} style={{ height: '100vh' }}>
        <Deck />
      </div>

    </div>
  </>;
}