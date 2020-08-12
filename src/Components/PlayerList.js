import React, { useState } from 'react';
import { createStore } from 'redux';
import PlayerCard from './PlayerCard';
import { connect } from 'react-redux';


const mapState = (state, ownProps) => {
    return {
      players: state.players
    };
};

const PlayerListConnect = ({ players }) => {

  const displayPlayers = () => {
    return Object.keys(players).map(key => (
      <PlayerCard key={players[key].id} player={players[key]} />
    ));
  }

    return (
      <div className='row'>
        {displayPlayers()}
      </div>
    );
  }

const PlayerList = connect(mapState)(PlayerListConnect)

export default PlayerList;
