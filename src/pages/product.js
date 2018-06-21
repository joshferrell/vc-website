import React from 'react';
import { Molecules, Atoms } from 'vc-components';
import { JoinConversation, Wave } from '../components';

const SectionAttributes = {
	py: [5, 6],
	alignItems: 'center'
};

const HeaderAttributes = {
	fontSize: [2, 3],
	textAlign: 'center',
	is: 'h2',
	mb: 2
};

const SubtitleAttributes = {
	fontSize: 1,
	textAlign: 'center',
	is: 'p'
};

const Product = () => (
	<article>
		<Molecules.Section
			is="header"
			{...SectionAttributes}
			titleAttributes={{
				text: 'Accessibility should\'t be hard.',
				fontSize: [3, 4],
				textAlign: 'center',
				is: 'h1'
			}}
			subtitleAttributes={{
				text: 'Voice Computer is the last speech recognition solution you\'ll ever need.',
				textAlign: 'center',
				fontSize: 1,
				fontWeight: 'normal',
				is: 'h2',
				mt: 2,
				mb: 5
			}}
			renderFooter={() => (
				<Atoms.ArrowButtonLink to="/sign-up">
					Try it free
				</Atoms.ArrowButtonLink>
			)}
		/>
		<Wave color="neutral.1" />
		<Molecules.Section
			bg="neutral.1"
			pb={[5, 6]}
			pt={[5, 5, 3]}
			alignItems="center"
			headerDivider="green"
			titleAttributes={{
				text: 'Built for you.',
				...HeaderAttributes
			}}
			subtitleAttributes={{
				text: 'Voice Computer enables you to reach even greater heights',
				...SubtitleAttributes
			}}
		>
			<div>
				<Molecules.Section
					py={3}
					titleAttributes={{
						text: 'Up and running in an instant',
						is: 'h3',
						fontSize: 2
					}}
				>
					<Atoms.SectionText>
						Interact with any element using only your microphone through our
						intuitive user interface.
					</Atoms.SectionText>
				</Molecules.Section>
				<Molecules.Section
					py={3}
					titleAttributes={{
						text: 'Unlimited flexibility',
						is: 'h3',
						fontSize: 2
					}}
				>
					<Atoms.SectionText>
						Tag your favorite controls for easy access to your most commonly
						used app features.
					</Atoms.SectionText>
				</Molecules.Section>
			</div>
		</Molecules.Section>
		<Molecules.Section
			bg="primary.main"
			{...SectionAttributes}
			titleAttributes={{
				text: 'We\'ve got your back.',
				color: 'white',
				...HeaderAttributes
			}}
			subtitleAttributes={{
				text: 'Voice Computer enables you to reach even greater heights',
				color: 'white',
				...SubtitleAttributes
			}}
			headerDivider="yellow"
		>
			<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
				<Molecules.Section
					px={4}
					py={5}
					flex="1 20rem"
					maxWidth="30rem"
					m={3}
					bg="white"
					boxShadow={1}
					titleAttributes={{
						text: 'Up and running in an instant',
						is: 'h3',
						fontSize: 2
					}}
				>
					<Atoms.SectionText>
						Interact with any element using only your microphone through our
						intuitive user interface.
					</Atoms.SectionText>
				</Molecules.Section>
				<Molecules.Section
					px={4}
					py={5}
					m={3}
					maxWidth="30rem"
					flex="1 20rem"
					bg="white"
					boxShadow={1}
					titleAttributes={{
						text: 'Unlimited flexibility',
						is: 'h3',
						fontSize: 2
					}}
				>
					<Atoms.SectionText>
						Tag your favorite controls for easy access to your most commonly
						used app features.
					</Atoms.SectionText>
				</Molecules.Section>
			</div>
		</Molecules.Section>
		<JoinConversation />
	</article>
);

export default Product;
