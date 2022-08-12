import React, { useState } from 'react';
import { changeUser } from '../store/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'


const UserInput = () => {

    const [userName, setUserName] = useState("")



    const dispatch = useDispatch()
    const navigate = useNavigate()

    const sumbit = e => {
        e.preventDefault()
        dispatch(changeUser(userName))
        navigate("/pokedex")

    }
    return (
        <div className="flex-center">
            <div id='fondo' className='flex-center'>
            <form onSubmit={sumbit}>
                <h1 >Hola entrenador!</h1>
                <p> <b> para continuer ingresa tu nombre </b></p>
                <input

                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    placeholder="Coloca tu pokeusuario"
                />
                <button>submit</button>

            </form>
            </div>
            
        </div>


    );
};

export default UserInput;