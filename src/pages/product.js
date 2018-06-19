import React from 'react';
import { Molecules, Atoms } from 'vc-components';
import { JoinConversation } from '../components';

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
		<Molecules.Section
			bg="neutral.1"
			{...SectionAttributes}
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
			<Atoms.Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-betweeen">
				<img src="http://fillmurray.com/500/250" />
				<Atoms.Box display="flex" flexDirection="column" justifyContent="space-around" m={[3, 6]} maxWidth="25rem">
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
				</Atoms.Box>
			</Atoms.Box>
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
			<Atoms.Box display="flex" flexWrap="wrap" justifyContent="space-around">
				<Molecules.Section
					px={4}
					py={5}
					flex="1 20rem"
					maxWidth="25rem"
					m={4}
					borderRadius={4}
					bg="white"
					boxShadow={2}
					titleAttributes={{
						text: 'Personal guidance from start to finish',
						is: 'h3',
						fontSize: 2
					}}
				>
					<Atoms.SectionText>
						Our trainers are ready to walk you through our voice-activated controls,
						fully-customize your Voice Computer solution, and handle anything else
						it takes to get you hands-free.
					</Atoms.SectionText>
				</Molecules.Section>
				<Molecules.Section
					px={4}
					py={5}
					m={4}
					borderRadius={4}
					maxWidth="25rem"
					flex="1 20rem"
					bg="white"
					boxShadow={2}
					titleAttributes={{
						text: 'On-demand instruction and support',
						is: 'h3',
						fontSize: 2
					}}
				>
					<Atoms.SectionText>
						With Voice Computer you'll always have easy access to documentation,
						expert-guided lessons, and the backing of over 20 years of voice
						recognition experience.
					</Atoms.SectionText>
				</Molecules.Section>
			</Atoms.Box>
		</Molecules.Section>
		<JoinConversation />
	</article>
);

export default Product;
