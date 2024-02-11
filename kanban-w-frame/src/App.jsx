


import React, { useState } from 'react';
import './App.css';


const quotesList = [
  "I'm convinced that about half of what separates the successful entrepreneurs from the nonsuccessful ones is pure perseverance.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "The best way to predict the future is to invent it.",
  "Stay hungry, stay foolish.",
  "You can't just ask customers what they want and then try to give that to them. By the time you get it built, they'll want something new.",
  "People think focus means saying yes to the thing you've got to focus on. It means saying no to the hundred other good ideas that there are. You have to pick carefully.",
  "“We’re here to put a dent in the universe. Otherwise why else even be here?”"
];


function App() {


   
    const initialQuote = getRandomQuote(quotesList);
    const [quote, setQuote] = useState(initialQuote);
  
    
    function getRandomQuote(quotes) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }
  
   
    // function updateQuote() {
    //   const newQuote = getRandomQuote(quotesList);
    //   setQuote(newQuote);
    // }


  



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
          {/* TODO:jsjjjss */}

          <div className='adding-Task'>Task adder</div>
          <div className='doing-Task'>doing task</div>
          <div className='done-Task'> done Task</div>
          
         
        </div>
      </main>
      <footer className="footer">
        <div className="legal-section">
        
          <p>Mention légale et droit d'auteur</p>
        </div>
      </footer>
    </div>
  );
}

export default App;


