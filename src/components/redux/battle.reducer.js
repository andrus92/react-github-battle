import {
    UPDATE_PLAYER_ONE_NAME,
    UPDATE_PLAYER_ONE_IMG,
    UPDATE_PLAYER_TWO_NAME,
    UPDATE_PLAYER_TWO_IMG
} from './battle.constants';

const initialState = {
    playerOneName: '',
    playerOneImage: '',
    playerTwoName: '',
    playerTwoImage: '',
}

export const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PLAYER_ONE_NAME:
            return {
                ...state,
                playerOneName: action.payload,
            }
        
        case UPDATE_PLAYER_ONE_IMG:
            return {
                ...state,
                playerOneImage: action.payload,
            }
                
        case UPDATE_PLAYER_TWO_NAME:
            return {
                ...state,
                playerTwoName: action.payload,
            }

        case UPDATE_PLAYER_TWO_IMG:
            return {
                ...state,
                playerTwoImage: action.payload,
        }

        default:
            return state;
    }
}