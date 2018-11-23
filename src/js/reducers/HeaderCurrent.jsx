import { TOGGLE_ACTIONS } from './Actions';

const INITIAL_STATE = {
    enabled: false
}
export default function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_ACTIONS.toggle:{
                                        var toggle = !(state.enabled)
                                        return {
                                            ...state,
                                            enabled: toggle
                                        }
                                    }
        default: return state;
      
    }
    return state;
}