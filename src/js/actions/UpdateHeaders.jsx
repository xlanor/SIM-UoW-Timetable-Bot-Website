import { TOGGLE_ACTIONS } from '../reducers/Actions';

export const switchHeader = (name) => {
    return (dispatch) => {
      dispatch({ type: TOGGLE_ACTIONS.toggle, payload:{name: name} });
    }
  }