import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';

const lock = new Auth0Lock(
	'JEln3i9CazZTuJ1BQvxRGf6Q8oyCZWHk',
	'peace-dragon.auth0.com',
	{
		allowLogin: false
	}
);

lock.on('authenticated', (authResult) => {
	lock.getUserInfo(authResult.accessToken, (err, profile) => {
		if (err) return;

		localStorage.setItem('accessToken', authResult.accessToken);
		localStorage.setItem('profile', JSON.stringify(profile));
	});
});

class Login extends Component {
	render = () => (
		<div>
			{lock.show()}
		</div>
	)
}

export default Login;
