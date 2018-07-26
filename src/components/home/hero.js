import React from 'react';
import { withRouter } from 'react-router-dom';

import sys from 'system-components';
import { Molecules, Atoms } from 'vc-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../../redux/actions';

import { TalkingToComputer } from '../../img';

const Header = sys({
	is: 'header',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
	maxWidth: '1088px',
	mt: [3, 4, 6],
	mb: 3,
	mx: 'auto',
	py: [5, 5, 0],
	px: [3, 4]
});

const Image = sys({
	is: 'img',
	flex: 1,
	display: ['none', 'none', 'block']
});

const titleStyles = {
	fontSize: [3, 4],
	lineHeight: '1.25',
	pb: 2
};

const Hero = ({ setUserEmail, history }) => {
	const handleSubmit = (email) => {
		setUserEmail(email);
		history.push('/sign-up');
	};

	return (
		<Header>
			<Molecules.Section
				flex={1}
				titleAttributes={{
					is: 'h1',
					text: 'Have your say with speech recognition.',
					...titleStyles
				}}
			>
				<Atoms.SectionText flex={1} fontSize={1} pb={2}>
					<strong>Voice Computer</strong> makes it easy to control your
					computer with just your voice.
				</Atoms.SectionText>
				<Molecules.InlineForm
					inputAttributes={{
						type: 'email',
						placeholder: 'Email',
						name: 'email',
						py: '14px'
					}}
					buttonAttributes={{ text: 'Start Free Trial' }}
					label="Enter your email address"
					onSubmit={handleSubmit}
				/>
			</Molecules.Section>
			<Image
				src={TalkingToComputer}
				width="300"
				height="350"
				alt="Woman controlling computer with voice"
			/>
		</Header>
	);
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...userActions }, dispatch);
export default connect(null, mapDispatchToProps)(withRouter(Hero));
