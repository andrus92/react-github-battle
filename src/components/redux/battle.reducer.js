import {
    UPDATE_PLAYER_ONE_NAME,
    UPDATE_PLAYER_ONE_IMG,
    UPDATE_PLAYER_TWO_NAME,
    UPDATE_PLAYER_TWO_IMG,
    UPDATE_RESULTS,
} from './battle.constants';

const initialState = {
    playerOneName: '',
    playerOneImage: '',
    playerTwoName: '',
    playerTwoImage: '',
    winnerInfo: {
        name: '',
        image: '',
        fullName: '',
        location: '',
        followers: '',
    },
    loserInfo: {
        name: '',
        image: '',
        fullName: '',
        location: '',
        followers: '',
    },
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

        case UPDATE_RESULTS: {
            return {
                ...state,
                winnerInfo: {
                    name: action.payload.winnerName,
                    image: action.payload.winnerImage,
                    fullName: action.payload.winnerFullName,
                    location: action.payload.winnerLocation,
                    followers: action.payload.winnerFollowers,
                },
                loserInfo: {
                    name: action.payload.loserName,
                    image: action.payload.loserImage,
                    fullName: action.payload.loserFullName,
                    location: action.payload.loserLocation,
                    followers: action.payload.loserFollowers,
                }
            }
        }

        default:
            return state;
    }
}