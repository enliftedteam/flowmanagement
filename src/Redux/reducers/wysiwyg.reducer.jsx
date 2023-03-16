const wysiwygReducer = (state = '', action) => {
    switch(action.type){
        case 'FLOW_TEXT_SET':
            return action.payload
        default :
            return state
    }
}

export default wysiwygReducer