import React, { Component } from 'react';
import auth0 from 'auth0-js';
import styled from 'styled-components';
import { Atoms, Molecules } from 'vc-components';
import { Wave } from '../components';
import { HeroTitleAttributes, HeroSubtitleAttributes, Auth0Config } from '../utils';

const SignInBox = styled(Molecules.Section).attrs({
	bg: 'white',
	maxWidth: '700px',
	borderRadius: 4,
	width: '100%',
	mt: '-130px',
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
`;

export default class Login extends Component {
	auth0 = new auth0.WebAuth(Auth0Config);

	handleGoogleSignIn = (e) => {
		e.preventDefault();
		this.webAuth.popup.authorize({ connection: 'google' });
	}

	render = () => (
		<Article>
			<Molecules.Section is="div" py={6} />
			<Wave color="neutral.1" />
			<Molecules.Section bg="neutral.1">
				<SignInBox
					is="header"
					py={[5, 6]}
					mb="120px"
					alignItems="center"
					titleAttributes={{
						text: 'Sign up',
						px: 3,
						mb: 2,
						lineHeight: '1.25',
						...HeroTitleAttributes
					}}
					subtitleAttributes={{
						text: 'Take control of your computer, hands free.',
						px: 3,
						...HeroSubtitleAttributes
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
							Create account
						</Atoms.ArrowButton>
						<Atoms.Divider type="yellow" my={5} />
						<Atoms.Box display="flex" justifyContent="center">
							<Atoms.Button onClick={this.handleGoogleSignIn} mx="auto" type="secondary">
								<Atoms.Icon name="google" pr={3} color="highlight.red" />
								Sign up with Google
							</Atoms.Button>
						</Atoms.Box>
					</form>
				</SignInBox>
			</Molecules.Section>
			<Atoms.Box flex="1" bg="neutral.1" />
		</Article>
	)
}
