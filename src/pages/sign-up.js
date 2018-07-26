import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Atoms, Molecules } from 'vc-components';
import { HeroTitleAttributes, HeroSubtitleAttributes } from '../utils';
import { Wave, SignInBox } from '../components';

const titleStyles = {
	px: 3,
	mb: 2,
	pb: 4,
	lineHeight: '1.25',
	...HeroTitleAttributes
};

class SignUp extends Component {
	static propTypes = {
		email: PropTypes.string
	}

	static defaultProps = { email: '' }

	renderEmail = () => {
		const { email } = this.props;
		return email ? (
			<Atoms.Input type="email" hidden required value={email} />
		) : (
			<Atoms.Box mb={3}>
				<Atoms.Label mt={4} mb={3}>
					Email
					<Atoms.Input type="email" required />
				</Atoms.Label>
			</Atoms.Box>
		);
	}

	renderForm = () => (
		<Atoms.Box is="form" px={3} maxWidth="450px">
			{this.renderEmail()}
			<Atoms.Label mt={4}>
				Password
				<Atoms.Input type="password" required />
			</Atoms.Label>
			<Atoms.ArrowButton mt={4}>
				Create account
			</Atoms.ArrowButton>
			<Atoms.Divider type="yellow" my={5} />
			<Atoms.Box display="flex" justifyContent="center">
				<Atoms.Button onClick={() => {}} mx="auto" type="secondary">
					<Atoms.Icon name="google" pr={3} color="highlight.red" />
					Sign up with Google
				</Atoms.Button>
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
						text: 'Sign Up',
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

const mapStateToProps = state => ({ ...state.user });

export default connect(mapStateToProps)(SignUp);
