import {
    UPDATE_PLAYER_ONE_NAME,
    UPDATE_PLAYER_ONE_IMG,
    UPDATE_PLAYER_TWO_NAME,
    UPDATE_PLAYER_TWO_IMG
} from './battle.constants';

export const updatePlayerOneName = (payload) => ({
    type: UPDATE_PLAYER_ONE_NAME,
    payload,
})

export const updatePlayerOneImg = (payload) => ({
    type: UPDATE_PLAYER_ONE_IMG,
    payload,
})

export const updatePlayerTwoName = (payload) => ({
    type: UPDATE_PLAYER_TWO_NAME,
    payload,
})

export const updatePlayerTwoImg = (payload) => ({
    type: UPDATE_PLAYER_TWO_IMG,
    payload,
})