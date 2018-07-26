import { UserTypes } from '../constants';

const setUserEmail = email => ({
	type: UserTypes.SET_USER_EMAIL, payload: email
});

const resetUserEmail = () => ({
	type: UserTypes.PURGE_USER
});

export default {
	setUserEmail,
	resetUserEmail
};
