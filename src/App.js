import './App.css';
import React, { useState } from 'react';

function App() {
  const [round, updateRound] = useState(2);
  const [teamNumber, updateTeamNumber] = useState('Team2');
  const [flag, updateFlag] = useState('');
  const [player, updatePlayer] = useState(null);
  const [country, updateCountry] = useState('');
  const [results, updateResults] = useState({
    Pat: {
      Name: 'Pat',
      Team1: '',
      Team2: '',
    },
    Gaz: {
      Name: 'Gaz',
      Team1: '',
      Team2: '',
    },
    Beavis: {
      Name: 'Beavis',
      Team1: '',
      Team2: '',
    },
    Shannon: {
      Name: 'Shannon',
      Team1: '',
      Team2: '',
    },
    Eric: {
      Name: 'Eric',
      Team1: '',
      Team2: '',
    },
    Geo: {
      Name: 'Geo',
      Team1: '',
      Team2: '',
    },
    Adam: {
      Name: 'Adam',
      Team1: '',
      Team2: '',
    },
    Rob: {
      Name: 'Rob',
      Team1: '',
      Team2: '',
    },
    Margaret: {
      Name: 'Margaret',
      Team1: '',
      Team2: '',
    },
    Drew: {
      Name: 'Drew',
      Team1: '',
      Team2: '',
    },
    Lyndsie: {
      Name: 'Lyndsie',
      Team1: '',
      Team2: '',
    },
    SeanBeav: {
      Name: 'Sean Beav',
      Team1: '',
      Team2: '',
    },
    JayD: {
      Name: 'JayD',
      Team1: '',
      Team2: '',
    },
    Ethan: {
      Name: 'Ethan',
      Team1: '',
      Team2: '',
    },
    Sean: {
      Name: 'Sean',
      Team1: '',
      Team2: '',
    },
    Ashley: {
      Name: 'Ashley',
      Team1: '',
      Team2: '',
    },
  });
  const [pot1, updatePot1] = useState([
    'Brazil',
    'Belgium',
    'Argentina',
    'Denmark',
    'USA',
    'England',
    'Spain',
    'France',
    'Netherlands',
    'Mexico',
    'Portugal',
    'Germany',
    'Croatia',
    'Uruguay',
    'Switzerland',
    'Senegal',
  ]);
  const [pot2, updatePot2] = useState([
    'Wales',
    'Iran',
    'Serbia',
    'Morocco',
    'Japan',
    'Poland',
    'Korea',
    'CostaRica',
    'Tunisia',
    'Australia',
    'Canada',
    'Cameroon',
    'Ecuador',
    'Qatar',
    'Ghana',
    'SaudiArabia',
  ]);
  const [teams, updateTeams] = useState([
    'Pat',
    'Gaz',
    'Beavis',
    'Geo',
    'Eric',
    'Adam',
    'SeanBeav',
    'JayD',
    'Margaret',
    'Drew',
    'Rob',
    'Lyndsie',
    'Shannon',
    'Sean',
    'Ashley',
    'Ethan',
  ]);

  // Components

  const Results = () => {
    const drawResults = Object.values(results).map((team) => (
      <div key={team.Name} className="results_map">
        <div className="result_item result_header">{team.Name}</div>
        <div className="result_item">{team.Team1}</div>
        <div className="result_item">{team.Team2}</div>
      </div>
    ));

    return <div className="drawResults">{drawResults}</div>;
  };

  const Buttons = () => {
    return (
      <div className="buttons">
        <button onClick={() => playerPick()}>Player</button>
        <button onClick={() => countryPick(round)}>Country</button>
        <button onClick={() => nextTurn(round, player, teamNumber)}>
          Next Turn
        </button>
        <button onClick={() => roundTwo()}>Second Round</button>
      </div>
    );
  };

  const Player = () => {
    return (
      <div className="player">
        <div className="player_header">PLAYER</div>
        <div className="player_name">{player}</div>
      </div>
    );
  };

  const Country = () => {
    return (
      <div className="country">
        <div className="country_header">COUNTRY</div>
        <div className="fade-in-text">{country}</div>
        {flag ? (
          <img
            className="fade-in-image"
            src={require(`./images/${flag}.jpg`)}
          />
        ) : (
          <></>
        )}
      </div>
    );
  };

  // Functions

  let roundTwo = () => {
    if (pot2.length === 0) {
      updateRound(1);
      updateTeamNumber('Team1');
      updateTeams([
        'Pat',
        'Gaz',
        'Beavis',
        'Geo',
        'Eric',
        'Adam',
        'SeanBeav',
        'JayD',
        'Margaret',
        'Drew',
        'Rob',
        'Lyndsie',
        'Shannon',
        'Sean',
        'Ashley',
        'Ethan',
      ]);
    } else {
      alert('Must complete round 1');
    }
  };

  let playerPick = () => {
    if (!player) {
      let number = Math.floor(Math.random() * (teams.length - 0)) + 0;
      updatePlayer(teams[number]);
    } else {
      alert('player has already been selected');
    }
  };

  let countryPick = (pot) => {
    if (player && !country) {
      let selectedPot;
      if (pot === 1) {
        selectedPot = pot1;
      } else {
        selectedPot = pot2;
      }
      let number = Math.floor(Math.random() * (selectedPot.length - 0)) + 0;
      updateCountry(selectedPot[number]);
      updateFlag(selectedPot[number]);
    } else {
      alert('No player selected or country has already been selected');
    }
  };

  let nextTurn = (pot, person, teamNum) => {
    if (player && country) {
      let newResults = {
        ...results,
        [person]: { ...results[person], [teamNum]: country },
      };
      updateResults(newResults);
      pot === 1
        ? updatePot1(pot1.filter((x) => x !== country))
        : updatePot2(pot2.filter((x) => x !== country));
      updateTeams(teams.filter((a) => a !== player));
      updateCountry('');
      updatePlayer(null);
      updateFlag('');
    } else {
      alert('Must select a player and country');
    }
  };

  return (
    <div className="App">
      <div className="results">
        <div className="result_title">Draw Results</div>
        <Results />
      </div>
      <div className="picks">
        <Player />
        <Country />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
