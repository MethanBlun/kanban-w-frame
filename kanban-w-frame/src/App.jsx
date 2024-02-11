


import React from 'react';
import './App.css'; // Assurez-vous d'importer votre fichier CSS pour le style

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="quote-section">
          {/* Partie réservée pour les citations */}
          <h2>Citations</h2>
          <p>Une citation inspirante pourrait être ici.</p>
        </div>
      </header>
      <main className="main">
        <div className="todo-list">
          {/* Section pour la liste des tâches */}
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Ajouter une tâche"
          />
          <button>Ajouter</button>
          <ul>
            {/* Les tâches seront ajoutées ici avec une boucle */}
            <li>Exemple de tâche</li>
          </ul>
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

// import './App.css'

//   export default  function App() {

//     return (
//       <div className="app">
//         <header className="header">
//           <div className="quote-section">
//             {/* Partie réservée pour les citations */}
//             <h2>Citations</h2>
//             <p>Une citation inspirante pourrait être ici.</p>
//           </div>
//         </header>
//         <main className="main">
//           <div className="todo-list">
//             {/* Section pour la liste des tâches */}
//             <h1>Todo List</h1>
//             <input
//               type="text"
//               placeholder="Ajouter une tâche"
//             />
//             <button>Ajouter</button>
//             <ul>
//               {/* Les tâches seront ajoutées ici avec une boucle */}
//               <li>Exemple de tâche</li>
//             </ul>
//           </div>
//         </main>
//         <footer className="footer">
//           <div className="legal-section">
//             {/* Section pour la mention légale et le droit d'auteur */}
//             <p>Mention légale et droit d'auteur</p>
//           </div>
//         </footer>
//       </div>
//     );
// }


