import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { Atoms, Molecules } from 'vc-components';
import { SignInBox, Wave } from '../components';
import { HeroTitleAttributes, HeroSubtitleAttributes } from '../utils';

const titleStyles = {
	px: 3,
	mb: 2,
	pb: 4,
	lineHeight: '1.25',
	...HeroTitleAttributes
};

class Login extends Component {
	static propTypes = {
		email: PropTypes.string
	}

	static defaultProps = { email: '' }

	renderForm = () => (
		<Atoms.Box is="form" px={3} maxWidth="450px">
			<Atoms.Box mb={3}>
				<Atoms.Label mt={4} mb={3}>
					Email
					<Atoms.Input type="email" required />
				</Atoms.Label>
			</Atoms.Box>
			<Atoms.Label mt={4}>
				Password
				<Atoms.Input type="password" required />
			</Atoms.Label>
			<Atoms.Box ml={-5} mt={3}>
				<Atoms.Toggle
					isChecked
					handleChange={() => {}}
					onState={{
						label: 'Remember Me',
						value: 'remember'
					}}
					offState={{
						value: 'no-remember'
					}}
				/>
			</Atoms.Box>
			<Atoms.ArrowButton mt={4}>
				Login
			</Atoms.ArrowButton>
			<Atoms.Divider type="yellow" my={5} />
			<Atoms.Box textAlign="center">
				<Atoms.Button onClick={() => {}} mx="auto" type="secondary">
					<Atoms.Icon name="google" pr={3} color="highlight.red" />
					Login with Google
				</Atoms.Button>
			</Atoms.Box>
			<Atoms.Box textAlign="center" mt={4}>
				New to Voice Computer? <Link to="/sign-up">Sign up now.</Link>
			</Atoms.Box>
		</Atoms.Box>
	)

	render = () => (
		<div>
			<Molecules.Section is="div" py="120px" />
			<Wave color="neutral.1" />
			<Molecules.Section bg="neutral.1">
				<SignInBox
					is="header"
					py="120px"
					alignItems="center"
					titleAttributes={{
						text: 'Login',
						...titleStyles
					}}
					subtitleAttributes={{
						text: 'Take control of your computer, hands free.',
						px: 3,
						...HeroSubtitleAttributes
					}}
				>
					{this.renderForm()}
				</SignInBox>
			</Molecules.Section>
		</div>
	)
}

export default Login;
