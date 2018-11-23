import { TOGGLE_ACTIONS } from './Actions';

const INITIAL_STATE = {
    name: "About"
}
export default function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_ACTIONS.toggle:{

                                        console.log(action.payload.name)
                                        return {
                                            ...state,
                                            name: action.payload.name
                                        }
                                    }
        default: return state;
      
    }
    return state;
}