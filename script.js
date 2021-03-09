




const BUY_PHONE = 'BUY_PHONE'
const BUY_TABLET = 'BUY_TABLET'
const BUY_TV = 'BUY_TV'


//1. On créer une fonction qui va revoyer les actions que l'on veut faire
function buyPhone(){
    
    //2. dessous les actions
    return {
        type: BUY_PHONE
    }
}

function buyTablet(){
    
    //2. dessous les actions
    return {
        type: BUY_TABLET
    }
}

function buyTv(){
    
    //2. dessous les actions
    return {
        type: BUY_TV
    }
}



//3. On cree un etat, et l'initialise 
const initialStatePhone = {
    phones : 5,
    tablets:10
}

const initialStateTv = {
    tv : 20
}

//4. Fonction reducer qui demande l'etat et laction a faire
const phonesReducer = (state = initialStatePhone, action) => {
    switch(action.type){
        case BUY_PHONE:
                        return {
                            ... state,
                            phones: state.phones -1
                        }
            break;
        
        case BUY_TABLET:
            return {
                ... state,
                tablets: state.tablets -1
            }
            break

        default: return initialStatePhone

    }
}

const tvsReducer = (state= initialStateTv, action) => {
    switch(action.type){
        case BUY_TV:
                        return {
                            ... state,
                            tv: state.tv -1
                        }
            break;


        default: return initialStateTv

    }
}


// Combiner les reducers si il y en a plusieurs, avec combineReducers, qui renvoi un rootRecducer
const rootReducer = Redux.combineReducers({
    phone: phonesReducer,
    tv: tvsReducer
})

//5. On cree le store qui va conternir nos etats et ses methodes ...
const store = Redux.createStore(rootReducer)



const availablePhones = document.getElementById('count-phones')
const availableTablets = document.getElementById('count-tab')
const availablePhonesBtn = document.getElementById('buy-phone')
const availableTabletsBtn = document.getElementById('buy-tablet')
const availableTvs = document.getElementById('count-tv')
const availableTvsBtn = document.getElementById('buy-tv')
availablePhones.innerHTML = store.getState().phone.phones
availableTablets.innerHTML = store.getState().phone.tablets
availableTvs.innerHTML = store.getState().tv.tv


console.log('Initial state ', store.getState());


// laction sur le btn
availablePhonesBtn.addEventListener('click', ()=>{
    store.dispatch(buyPhone())
})

availableTabletsBtn.addEventListener('click', ()=>{
    store.dispatch(buyTablet())
})

availableTvsBtn.addEventListener('click', ()=>{
    store.dispatch(buyTv())
})

// La methode subscribe permet decouter les changements d etat
store.subscribe(()=>{
    availablePhones.innerHTML = store.getState().phone.phones
    availableTablets.innerHTML = store.getState().phone.tablets
    availableTvs.innerHTML = store.getState().tv.tv
    console.log('Update states ', store.getState());
})





