import React, { Component } from 'react';
import auth0 from 'auth0-js';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Atoms, Molecules } from 'vc-components';
import { Wave } from '../components';
import { HeroTitleAttributes, Auth0Config } from '../utils';

const SignInBox = styled(Molecules.Section).attrs({
	bg: 'white',
	maxWidth: '700px',
	borderRadius: 4,
	width: '100%',
	mt: '-300px',
	mx: 'auto',
	boxShadow: 2
})`
	z-index: 100;
	position: relative;
`;

const Article = styled.article`
	display: flex;
	flex-direction: column;
	height: 100%;
	flex: 1;
`;

export default class Login extends Component {
	constructor() {
		super();
		this.webAuth = new auth0.WebAuth(Auth0Config);
	}

	handleGoogleSignIn = (e) => {
		e.preventDefault();
		this.webAuth.popup.authorize({ connection: 'google' });
	}

	render = () => (
		<Article>
			<Molecules.Section is="div" py="120px" />
			<Wave color="neutral.1" />
			<Molecules.Section bg="neutral.1">
				<SignInBox
					is="header"
					py="120px"
					mb="120px"
					alignItems="center"
					titleAttributes={{
						text: 'Sign In',
						...HeroTitleAttributes
					}}
				>
					<form>
						<Atoms.Label mt={4}>
							Email
							<Atoms.Input type="email" required />
						</Atoms.Label>
						<Atoms.Label mt={4}>
							Password
							<Atoms.Input type="password" required />
						</Atoms.Label>
						<Atoms.ArrowButton mt={4}>
							Sign In
						</Atoms.ArrowButton>
						<Atoms.Box mt={4}>
							<Atoms.Label nostyle>
								<Atoms.Input type="checkbox" /> Remember Me
							</Atoms.Label>
						</Atoms.Box>
						<Atoms.Divider type="yellow" my={5} />
						<Atoms.Box display="flex" justifyContent="center">
							<Atoms.Button onClick={this.handleGoogleSignIn} mx="auto" type="secondary">
								<Atoms.Icon name="google" pr={3} color="highlight.red" />
								Login With Google
							</Atoms.Button>
						</Atoms.Box>
						<Atoms.Box textAlign="center" mt={4}>
							New to Voice Computer? <Link to="/sign-up">Sign up now.</Link>
						</Atoms.Box>
					</form>
				</SignInBox>
			</Molecules.Section>
			<Atoms.Box flex="1" bg="neutral.1" />
		</Article>
	)
}
