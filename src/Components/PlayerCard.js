import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';

const mapState = (state, ownProps) => {
    return {
      players: state.players
    };
};

const PlayerCardConnect = ({ players }) => {
        return (
            <div key={players.id} className="col-sm-3 card center" id={`joueur${players.id}`}>

                <div className="card-body text-center">
                    <h5 className="card-title">{players.name}</h5>
                    <ProgressBar pv={players.pv} pvMax={players.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                    <ProgressBar pv={players.mana} pvMax={players.manaMax} faType='fa-fire-alt' barName=' : mana ' />

                    <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                    <div className="row">
                        <div >
                            <ButtonCapacity players={players} />
                            <ButtonCapacity players={players} />
                            <ButtonCapacity players={players} />
                            <ButtonCapacity players={players} />

                        </div>
                    </div >
                </div >

            </div >
        )
}

const PlayerCard = connect(mapState)(PlayerCardConnect)
export default PlayerCard;
