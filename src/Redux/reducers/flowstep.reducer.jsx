const flowStepReducer = (state = ['This'], action) => {
    switch(action.type){
        case 'GET_FLOW_EMPTY':
            console.log('fuck1')
            return[state]
        case 'ADD_FLOW_REDUCER':
            console.log('fuck2')
            return [...state, action.payload];
        default :
            return state
    }
}

export default flowStepReducer