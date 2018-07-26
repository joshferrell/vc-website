const initialState = {
	email: ''
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'SET_USER_EMAIL':
		return Object.assign({}, state, { email: action.payload });
	case 'PURGE_USER':
		return initialState;
	default:
		return state;
	}
};

export default userReducer;
