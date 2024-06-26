import React, { useState, useEffect } from "react";
import c1 from '../assets/1.png';
import c2 from '../assets/2.png';
import '../assets/Game.css';
import a1 from '../assets/sound.mp3';
import a2 from '../assets/evil-laugh.mp3';
import a3 from '../assets/Oh-no-sound-effect.mp3';


const Game = () => {
let scenarios = [
    {
      hackerCard : {
        description : "I set up a fake Wi-Fi station to steal people’s email and track them online.",
        power : 4,
      },
      playerCards : [
        {
          description : "I never use public wifi networks.",
          power : 5,
        },
        {
          description : "I browse the web, but I never do any personal business on a public wifi network.",
          power : 3,
        },
        {
          description : "I connect to any wifi network I can use in public.",
          power : 1,
        }
      ]
    },
    {
      hackerCard : {
        description : "I sent a fake email from your bank asking for your account details.",
        power : 3,
      },
      playerCards : [
        {
          description : "I checked the email address - the message didn’t come from my bank.",
          power : 5,
        },
        {
          description : "I never give out personal information in response to an email.",
          power : 4,
        },
        {
          description : "I sent the details you asked for so you could check on my account.",
          power : 1,
        }
      ]
    },
    {
      hackerCard : {
        description : "I figured out where you live from all the personal information you share on social media.",
        power : 3,
      },
      playerCards : [
        {
          description : "I never share personal information on my social media accounts.",
          power : 5,
        },
        {
          description : "I keep my accounts private so only my friends can see them.",
          power : 4,
        },
        {
          description : "I tag everything so my friends always know what I’m doing.",
          power : 1,
        }
      ]
    },
    {
      hackerCard : {
        description : "I watched you type your password and hacked your account.",
        power : 2,
      },
      playerCards : [
        {
          description : "I use different passwords for all of my other accounts.",
          power : 4,
        },
        {
          description : "I changed my password on all of my accounts because they are the same.",
          power : 3,
        },
        {
          description : "I deleted that account and started a new one. ",
          power : 1,
        }
      ]
    },
    {
      hackerCard : {
        description : "I looked at your browsing history on your phone to see what you do online.",
        power : 2,
      },
      playerCards : [
        {
          description : "I always use a private browser that never keeps my history.",
          power : 4,
        },
        {
          description : "I set my browser to delete my history every time I quit. ",
          power : 3,
        },
        {
          description : "I never clear my browser history because I don’t like typing in big web addresses.",
          power : 1,
        }
      ]
    }, 
  
    {
      hackerCard : {
        description : "I hacked your system and all your data is deleted now.",
        power : 2,
      },
      playerCards : [
        {
          description : "I follow the 3-2-1 backup rule. I have on-site as well as off-site location (cloud storage) backup.",
          power : 4,
        },
        {
          description : "I have my data backed up in local and external hard drive.",
          power : 3,
        },
        {
          description : "I never backed up my data in any way.",
          power : 1,
        }
      ]
    }, 
  
    {
      hackerCard : {
        description : "I provided you my USB for content transfer.",
        power : 2,
      },
      playerCards : [
        {
          description : "I use Anti-Virus Protection & Firewall to protect my system.",
          power : 4,
        },
        {
          description : "I refused to use your USB as my system was not having Anti-Virus Protection & Firewall.",
          power : 3,
        },
        {
          description : "I used your USB as I am not afraid of my system getting corrupted.",
          power : 1,
        }
      ]
    }, 
    {
      hackerCard : {
        description : "I will crash your vulnerable system using ransomware attacks, malware and data breaches.",
        power : 2,
      },
      playerCards : [
        {
          description : "You can't because I have turned on Automatic Updates for my operating system.",
          power : 4,
        },
        {
          description : "I use web browsers such as Chrome or Firefox that receive frequent, automatic security updates.",
          power : 3,
        },
        {
          description : "I don't update my softwares nor do I download security updates.",
          power : 1,
        }
      ]
    },
    {
      hackerCard: {
        description: "I gained access to your online accounts by exploiting weak security questions.",
        power: 3,
      },
      playerCards: [
        {
          description: "I use strong and unique security questions for all my accounts.",
          power: 5,
        },
        {
          description: "I avoid using security questions and opt for other authentication methods.",
          power: 4,
        },
        {
          description: "I use the same simple security questions for all my accounts.",
          power: 1,
        },
      ],
    },
  
    {
      hackerCard: {
        description: "I installed a keylogger on your computer to capture everything you type.",
        power: 2,
      },
      playerCards: [
        {
          description: "I regularly scan my computer for malware and use anti-keylogger software.",
          power: 4,
        },
        {
          description: "I don't worry about keyloggers, my passwords are easy to remember anyway.",
          power: 3,
        },
        {
          description: "I never thought about keyloggers, they sound like something from a spy movie.",
          power: 1,
        },
      ],
    },
  
    {
      hackerCard: {
        description: "I intercepted your unsecured Bluetooth connection and accessed your device.",
        power: 3,
      },
      playerCards: [
        {
          description: "I always turn off Bluetooth when not in use.",
          power: 5,
        },
        {
          description: "I use secure Bluetooth connections and regularly update my devices.",
          power: 4,
        },
        {
          description: "I leave Bluetooth on all the time for convenience.",
          power: 1,
        },
      ],
    },
  
    {
      hackerCard: {
        description: "I manipulated your DNS settings to redirect you to fake websites.",
        power: 2,
      },
      playerCards: [
        {
          description: "I use a reputable DNS service and have DNSSEC enabled.",
          power: 4,
        },
        {
          description: "I never thought about DNS settings; I use the default ones from my ISP.",
          power: 3,
        },
        {
          description: "I'm not sure what DNS is, but everything seems to work fine.",
          power: 1,
        },
      ],
    }
  ];
  let audioObj = null;

  const hackerWinnerMessage = "Game over: You got hacked!";
  const playerWinnerMessage = "You defeated the hacker!";
  
  const maxLife = 5;

  const [playerLife, setPlayerLife] = useState(maxLife);
  const [hackerLife, setHackerLife] = useState(maxLife);
  const [roundFinished, setRoundFinished] = useState(true);
  const [cardSelected, setCardSelected] = useState(false);

  // useEffect(() => {
  //   if (!roundFinished) {
  //     playTurn();
  //   }
  // }, [roundFinished]);

  // useEffect(() => {
  //   updateScores();
  // }, [playerLife, hackerLife]);

  
const updateScores = () => {
  console.log("update me");
  const playerLifeElement = document.querySelector(".player-stats .life-total");
  const hackerLifeElement = document.querySelector(".hacker-stats .life-total");
  const playerLifeBar = document.querySelector(".player-stats .life-left");
  const hackerLifeBar = document.querySelector(".hacker-stats .life-left");


  const updatedPlayerLife = Math.max(playerLife, 0);
  const updatedHackerLife = Math.max(hackerLife, 0);

  playerLifeElement.innerHTML = updatedPlayerLife;
  hackerLifeElement.innerHTML = updatedHackerLife;


  const updateLifeBar = (element, life) => {
    const percentage = (life / maxLife) * 100;
    element.style.height = percentage < 0 ? 0 : percentage + "%";
  };

  updateLifeBar(playerLifeBar, updatedPlayerLife);
  updateLifeBar(hackerLifeBar, updatedHackerLife);
};


  
  
  useEffect(() => {
    updateScores();
    console.log(playerLife, hackerLife, );
    if (playerLife <= 0 || hackerLife <= 0) {
      setTimeout(() => {
        gameOver(playerLife <= 0 ? "Hacker" : "Player");
      }, 1500);
    } else {
      setTimeout(() => {
        document.querySelector("button.next-turn").removeAttribute("disabled");
      }, 500);

    }
  }, [playerLife, hackerLife]);

  
  
  
  const cardClicked = (cardIndex) => {
    console.log("card clicked");
    if (cardSelected) {
      return;
    }
    setRoundFinished(true);
    setCardSelected(true);
  
    const playerCard = document.querySelectorAll(".player-card")[cardIndex];
    playerCard.classList.add("played-card");
  
    document.querySelector(".game-board").classList.add("card-selected");
  
    setTimeout(() => {
      revealHackerPower();
    }, 500);
  
    setTimeout(() => {
      revealPlayerPower(playerCard);
    }, 800);
  
    setTimeout(() => {
      compareCards(playerCard);
    }, 1400);
  };

  const revealPlayerPower = (playerCard) => {
    console.log("reveal player power");
    playerCard.classList.add("reveal-power");
  };

  const revealHackerPower = () => {
    console.log("reveal hacker power");
    const hackerCard = document.querySelector(".hacker-card");
    hackerCard.classList.add("reveal-power");
  };
  const compareCards = (playerCard) => {
    // Check if the round is already finished
    // Set the round as finished
    console.log("compare cards");
  
    const playerPowerEl = playerCard.querySelector(".power");
    const hackerCard = document.querySelector(".hacker-card");
    const hackerPowerEl = hackerCard.querySelector(".power");
  
    const playerPower = parseInt(playerPowerEl.innerHTML);
    const hackerPower = parseInt(hackerPowerEl.innerHTML);
    console.log(playerPower, hackerPower);
    const powerDifference = playerPower - hackerPower;
    console.log(powerDifference);
  
    setPlayerLife((prevLife) => Math.max(prevLife + powerDifference, 0));
    setHackerLife((prevLife) => Math.max(prevLife - powerDifference, 0));
  };
  

  const gameOver = (winner) => {
    console.log("game over");
    const audioObj = new Audio(a1);
    audioObj.pause();
    document.querySelector(".game-board").classList.add("game-over");
    document.querySelector(".winner-section").style.display = "flex";
    document.querySelector(".winner-section").classList.remove("player-color");
    document.querySelector(".winner-section").classList.remove("hacker-color");

    if (winner === "Hacker") {
      const evilAudio = new Audio(a2);
      evilAudio.play();
      document.querySelector(".winner-message").innerHTML = hackerWinnerMessage;
      document.querySelector(".winner-section").classList.add("hacker-color");
    } else {
      const ohNoAudio = new Audio(a3);
      ohNoAudio.play();
      document.querySelector(".winner-message").innerHTML = playerWinnerMessage;
      document.querySelector(".winner-section").classList.add("player-color");
    }

    
  };

  const startGame = () => {
    console.log("start game");  
    setPlayerLife(maxLife);
    setHackerLife(maxLife);
    setRoundFinished(true);
    setCardSelected(false);
    

    const audioObj = new Audio(a1);
    audioObj.loop = true;
    audioObj.addEventListener("canplaythrough", (event) => {

      audioObj.play();
    });
    audioObj.play();

    document.querySelector(".game-board").classList.remove("before-game");
    document.querySelector(".game-board").classList.add("during-game");
    document.querySelector("button.start-game").style.display = "none";
    playTurn();
  };


  const restartGame = () => {
    console.log("restart game");
    const gameBoard = document.querySelector(".game-board");
    gameBoard.classList.remove("game-over", "during-game");
    gameBoard.classList.add("before-game");
  
    const winnerSection = document.querySelector(".winner-section");
    winnerSection.style.display = "none";
  
    const hackerCard = document.querySelector(".hacker-card");
    hackerCard.style.display = "none";
  
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.style.display = "block";
      card.classList.remove("worse-card", "better-card", "played-card", "tie-card", "prepared", "reveal-power");
    });
  
    const gameButton = document.querySelector("button");
    gameButton.removeAttribute("disabled");
  
    
    setTimeout(() => {
      startGame();
    }, 500); 
  };
  
  const playTurn = () => {
    
    console.log("play turn");
    
    
  
    document.querySelector(".game-board").classList.remove("card-selected");
    document.querySelector(".hacker-stats .thumbnail").classList.remove("ouch");
    document.querySelector(".player-stats .thumbnail").classList.remove("ouch");
    document.querySelector(".next-turn").setAttribute("disabled", "true");
  
    const allCardElements = document.querySelectorAll(".card");
  
    allCardElements.forEach((card, i) => {
      if (card.classList.contains("player-card")) {
        card.addEventListener("click", () => {
          cardClicked(i - 1);
        });
      }
    });
  
    setTimeout(() => {
      revealCards();
    }, 500);
  };
  
  const revealCards = () => {
    console.log("reveal cards");
    let j = 0;
    const cardIndexes = shuffleArray([0, 1, 2]);

    const randomScenarioIndex = Math.floor(Math.random() * scenarios.length);
    const scenario = scenarios[randomScenarioIndex];
    scenarios.splice(randomScenarioIndex, 1);

    const hackerCard = scenario.hackerCard;
    const hackerCardEl = document.querySelector(".hacker-area .card");

    const playerCards = scenario.playerCards;

    document.querySelectorAll(".card").forEach((card, i) => {
      card.classList.remove("worse-card", "better-card", "played-card", "tie-card", "prepared", "reveal-power");

      if (card.classList.contains("player-card")) {
        card.querySelector(".text").innerHTML = playerCards[cardIndexes[j]].description;
        card.querySelector(".power").innerHTML = playerCards[cardIndexes[j]].power;
        j++;
      }

      setTimeout(() => {
        card.classList.remove("prepared");
        card.style.display = "block";
        card.classList.add("showCard");
      }, parseInt(i + 1) * 200);
    });

    hackerCardEl.querySelector(".text").innerHTML = hackerCard.description;
    hackerCardEl.querySelector(".power").innerHTML = hackerCard.power;
  };
  

  const shuffleArray = (a) => {
    console.log("shuffle array");
    let j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
    return a;
  };
  return (
    <div>
      <div class="game-board">
        <div class="title-h1">
          <h1>
            <strong>Hacker's attack Cards</strong> <br />
            Choose the best card to stop the hackers' attack
          </h1>
        </div>
        <div class="hacker-area">
          <div class="stats hacker-stats">
            <div class="life-bar">
              <div class="life-left hacker-color"></div>
            </div>
            <div class="life-total"></div>
            <div class="thumbnail">
              <img src={c1} alt="hacker" />
            </div>
            <div class="name">Hacker</div>
          </div>

          <div class="card hacker-card hacker-color">
            <div class="text"></div>
            <div class="power"></div>
          </div>
        </div>

        <div class="player-area">
          <div class="stats player-stats">
            <div class="life-bar">
              <div class="life-left player-color"></div>
            </div>
            <div class="life-total"></div>

            <div class="thumbnail">
              <img src={c2} alt="hacker" />
            </div>
            <div class="name">You</div>
          </div>

          <div class="card player-card player-color">
            <div class="text"></div>
            <div class="power"></div>
          </div>

          <div class="card player-card player-color">
            <div class="text"></div>
            <div class="power"></div>
          </div>

          <div class="card player-card player-color">
            <div class="text"></div>
            <div class="power"></div>
          </div>

          <button class="start-game" onClick={startGame}>Play the Game!</button>
          <button class="next-turn" onClick={playTurn}>Next!</button>
        </div>
      </div>

      <div class="winner-section">
        <div>
          <span class="winner-message">You got hacked!</span>
          <button class="restart" onClick={restartGame}>Play Again</button>
        </div>
      </div>
    </div>
  );
};

export default Game;