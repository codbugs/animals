// services
import AnimalsProvisioning from '../services/provisioning/animals.js';
import Database from '../services/data.js';
import QuestionsEngine from '../services/questions.js';
import QuestionsProvisioning from '../services/provisioning/questions.js';


// components
import HtmlHead from 'next/head';
import Head from '../components/Head.js';
import Deck from '../components/Deck.js';
import StartButton from '../components/StartButton.js';
import QuestionsSet from '../components/QuestionsSet.js';

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
    <Head />
    {hasGameStarted === false &&
      <>
        <section className={'section'}>
          <Deck />
        </section>
        <section className={'section'}>
          <div className={'container'}>
            <StartButton launch={() => setHasGameStarted(true)} />
          </div>
        </section>
      </>
    }
    {hasGameStarted &&
      <section className={'section'}>
        <div className={'container'}>
          <QuestionsSet />
        </div>
      </section>
    }
  </>;
}