import React from 'react';
import styled from 'styled-components';
import { Molecules, Atoms } from 'vc-components';

import { JoinConversation } from '../components';

const Header = styled.header`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-around;

	& > * {
		flex: 1;
	}
`

const IndexPage = () => (
	<article>
		<Header>
			<Molecules.Section
				titleAttributes={{
					text: 'Have your say.',
					fontSize: [3, 4],
				}}
				py={[2, 3]}
			>
				<Atoms.SectionText fontSize={1}>
					<strong>Voice Computer</strong> makes it easy to control your
					computer with just your voice.
				</Atoms.SectionText>
				<Molecules.InlineForm
					inputAttributes={{
						type: 'email',
						name: 'email'
					}}
					buttonAttributes={{
						text: 'Start Free Trial',
						type: 'primary'
					}}
					label="Enter your e-mail address"
					onSubmit={() => {}}
				/>
			</Molecules.Section>
			<img src="http://fillmurray.com/800/400" />
		</Header>
		<Molecules.Section
			titleAttributes={{
				text: 'Try our live demo',
			}}
			bg="neutral.1"
			py={[3, 6]}
		>
			<Atoms.SectionText>
				Have a microphone handy? Take a test drive with an instant product
				demonstration to see how Voice Computer can help you.
			</Atoms.SectionText>
			<Atoms.ArrowButtonLink outline type="tertiary" to="/demo">
				Try the demo
			</Atoms.ArrowButtonLink>
		</Molecules.Section>
		<Molecules.Section
			py={[3, 6]}
			titleAttributes={{
				text: 'Exactly what it sounds like.',
				fontSize: 3
			}}
			renderFooter={() => (
				<Atoms.DividerFooter>
					<Atoms.ArrowButtonLink nostyle px="0" to="/how-it-works">
						Learn more about Voice Computer
					</Atoms.ArrowButtonLink>
				</Atoms.DividerFooter>
			)}
		>
			<Atoms.SectionText>
				Voice Computer is the all–in–one speech app for Dragon. Take control of your
				computer from a distance — <strong>all without the use of your hands.</strong>
			</Atoms.SectionText>
			<Atoms.SectionText>
				We offer training, support, and lifetime access to documentation and tutorials.
			</Atoms.SectionText>
		</Molecules.Section>
		<JoinConversation />
	</article>
);

export default IndexPage;
