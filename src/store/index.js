import { legacy_createStore } from 'redux'

const couterReducer = (state = {coffee: 0,sugar:0,sugarStorage:0,coffeStorage:0, isLoggedIn: false}, action) => {
    if (action.type === 'incrementCoffee'){
        return { 
           coffee: state.coffee + 1,
           sugar:state.sugar,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'decrementCoffee'){
        return {
           coffee: state.coffee - 1,
           sugar:state.sugar,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'increaseCoffee'){
        return {
           coffee: state.coffee + action.number,
           sugar:state.sugar,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if(action.type === 'logIn'){
        return {
            coffee: state.coffee,
            sugar:state.sugar,
            isLoggedIn: true,
         }
    }
    if (action.type === 'incrementSugar'){
        return { 
            sugar: state.sugar + 1,
            coffee: state.coffee,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'decrementSugar'){
        return {
            sugar: state.sugar - 1,
            coffee: state.coffee,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'increaseSugar'){
        return {
            sugar: state.sugar + action.number,
            coffee: state.coffee,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if(action.type === 'logIn'){
        return {
            sugar: state.sugar,
            coffee: state.coffee,
            isLoggedIn: true,
         }
    }if(action.type === 'logOut'){
        return {
            sugar: state.sugar,
            coffee: state.coffee,
            isLoggedIn: false,
         }
    }
    if (action.type === 'clear'){
        return { 
           coffee: state.coffee = 0,
           sugar:state.sugar = 0,
           coffeStorage:localStorage.removeItem('coffee'),
           sugarStorage:localStorage.removeItem('sugar'),
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'save'){
        return { 
           coffee:state.coffee ,
           sugar:state.sugar,
           sugarStorage:localStorage.setItem('sugar',JSON.stringify(state.sugar)),
           coffeStorage:localStorage.setItem('coffee',JSON.stringify(state.coffee)) ,
           isLoggedIn: state.isLoggedIn,

           
  
        }
    }
    return state
}

const store = legacy_createStore(couterReducer ); 



export default store;
