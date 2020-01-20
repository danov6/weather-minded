const weatherReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_FORECAST_MODE':
            return action.text;
        default:
            return state
    }
};

export default weatherReducer