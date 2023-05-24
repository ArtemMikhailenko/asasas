import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const SaveList = () => {
  const coffee = useSelector((state) => state.coffee)
  const sugar = useSelector((state) => state.sugar)
  
 

  const clear = () => {
    dispatchFunc({ type: 'clear' })
  }
  const save = () => {
    dispatchFunc({ type: 'save' })
  }
  
  
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const logout = (e) => {
    e.preventDefault();
    dispatchFunc({type: 'logOut'})
  }
  return (
    <div className='save'>
          {!isLoggedIn &&<p>You must be logged in to save the list.</p>}
          {isLoggedIn &&  <button onClick={save}>SAVE</button>}
          {isLoggedIn && <button onClick={clear}>CLEAR</button>}
          {isLoggedIn && <button onClick={logout}>LOG OUT</button>}
      </div>
  )
}

export default SaveList