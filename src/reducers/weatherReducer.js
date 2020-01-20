const weatherReducer = (state = 'Current', action) => {
    switch (action.type) {
        case 'UPDATE_FORECAST_MODE':
            return action.text;
        default:
            return state
    }
};

export default weatherReducer