import logo from './logo.svg';

import './App.css';

let isGameStarted = false; //game has not begun. global variable
A
document.addEventListener('keydown', (event) => {
  if (isGameStarted) {
    if (event.code === 'Space') {
      // Handle spacebar press
      console.log('Spacebar pressed during gameplay');
    } else if (event.code === 'KeyQ') {
      // Handle 'Q' key press
      console.log('Q pressed to quit');
      isGameStarted = false; // End the game
    }
  }
});

// Start the game when the "Start" button is clicked
document.getElementById('startButton').addEventListener('click', () => {
  isGameStarted = true;
});

console.log("hi");
const deck = ["SpA", "Sp2", "Sp3", "Sp4", "Sp5", "Sp6", "Sp7", "Sp8", "Sp9", "Sp10", "SpJ", "SpQ", "SpK",
  "HeA", "He2", "He3", "He4", "He5", "He6", "He7", "He8", "He9", "He10", "HeJ", "HeQ", "HeK",
  "DiA", "Di2", "Di3", "Di4", "Di5", "Di6", "Di7", "Di8", "Di9", "Di10", "DiJ", "DiQ", "DiK",
  "ClA", "Cl2", "Cl3", "Cl4", "Cl5", "Cl6", "Cl7", "Cl8", "Cl9", "Cl10", "ClJ", "ClQ", "ClK"];

const shuffledDeck = shuffleDeck(deck);
console.log(shuffledDeck);

function startGame(players, topbottom){//add in values of other combos later?
  let rows = players; //players
  let columns = 52/players; //cards
  let my2DArray = new Array(rows).fill(new Array(columns));

  console.log(my2DArray);
}

function shuffleDeck(deck) {
  for (let i = deck.length-1; i>0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}



function App() {
  return (
    <div>
      <header>
        <p>
          Click to play!
          <img src="file:///Users/vishal/Desktop/DevX/EWar/cardimgs/setting.png" alt="Imae descrition"></img>
          {/* Fix this image thing */}
        </p>
        <a
          className="help-link"
          href="https://www.wikihow.com/Play-War-(Card-Game)#:~:text=Rules%20of%20the%20Card%20Game%20War&text=Everyone%20flips%201%20card%20over,the%20cards%20in%20the%20middle."
          target="_blank"
          rel="noopener noreferrer"
        >
          Don't know how to play? Click here to learn!
        </a>
        <div class="card">
          <div class="card-front">
            <div class="rank">A</div>
            <div class="suit">♠️</div>
          </div>
          <div class="card-back"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
