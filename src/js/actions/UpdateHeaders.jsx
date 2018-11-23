import { TOGGLE_ACTIONS } from '../../reducers/Actions';

export const switchHeader = () => {
    return (dispatch) => {
      dispatch({ type: TOGGLE_ACTIONS.toggle });
    }
  }
  