


import React, { useState } from 'react';
import './App.css';


const quotesList = [
  "Your time is limited, so don’t waste it living someone else’s life.",
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "The best way to predict the future is to invent it.",
  "Stay hungry, stay foolish.",
];


function App() {


    // Choix initial de la citation aléatoire lors du chargement du composant
    const initialQuote = getRandomQuote(quotesList);
    const [quote, setQuote] = useState(initialQuote);
  
    // Fonction pour choisir aléatoirement une citation dans la liste
    function getRandomQuote(quotes) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }
  
    // Fonction pour mettre à jour la citation avec une nouvelle citation aléatoire
    function updateQuote() {
      const newQuote = getRandomQuote(quotesList);
      setQuote(newQuote);
    }


  



  return (
    <div className="app">
      <header className="header">
        <div className="quote-section">
         
          <h2>Daily Quote:</h2>
          <p className='quotes'>{quote}</p>
        </div>
      </header>
      <main className="main">
        <div className="todo-list">

          <div className='adding-Task'>Task adder</div>
          <div className='doing-Task'>doing task</div>
          <div className='done-Task'> done Task</div>
          
         
        </div>
      </main>
      <footer className="footer">
        <div className="legal-section">
          {/* Section pour la mention légale et le droit d'auteur */}
          <p>Mention légale et droit d'auteur</p>
        </div>
      </footer>
    </div>
  );
}

export default App;


