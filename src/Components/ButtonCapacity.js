import React from 'react';
import { useSelector, useDispatch} from "react-redux";
import { hitMonster, hitBack } from '../js/actions/index';


const ButtonCapacity = (props) => {

  const dispatch = useDispatch()
  const hitMonster = () => {dispatch({ type: 'HIT_MONSTER' })}
  const hitBack = () => {dispatch({ type: 'HIT_BACK' , payload : props.player.id})}

  const Combat = () => {
    hitMonster()
    hitBack()
  }

        return (
            <button type="button" onClick={ () => (Combat()) } className="btn btn-success material-tooltip-main ">
                hit
            <i className="fas fa-bomb"></i> 5
        <i className="fas fa-fire-alt"></i> - 5
    </button>
        )
}



export default ButtonCapacity;
