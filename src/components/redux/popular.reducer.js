import { 
    UPDATE_LANGUAGE, 
    GET_REPOS_LOADING, 
    GET_REPOS_SUCCESS, 
    GET_REPOS_FAILURE, 
} from "./popular.constants"

const initialState = {
    selectedLanguages: 'All',
    loading: false,
    repos: [],
    error: null,
}

export const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LANGUAGE:
            return {
                ...state,
                selectedLanguages: action.payload,
            }

        case GET_REPOS_LOADING:
            return {
                ...state,
                loading: true,
            }

        case GET_REPOS_SUCCESS:
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }

        case GET_REPOS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        default: 
            return state;
    }
}