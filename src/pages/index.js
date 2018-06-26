import React from 'react';
import styled from 'styled-components';
import { Molecules, Atoms } from 'vc-components';
import { space, display } from 'styled-system';
import { oneLineTrim } from 'common-tags';
import { JoinConversation, Callout, Wave } from '../components';

const Header = styled.header`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-around;
	max-width: 1088px;
	${space};

	& > * {
		flex: 1;
	}
`;

const Image = styled.img.attrs({
	display: ['none', 'none', 'block']
})`
	${display};
`;

const IndexPage = () => (
	<article>
		<Header mt={[3, 4, 6]} mb={3} mx="auto" px={[3, 4]}>
			<Molecules.Section
				titleAttributes={{
					text: 'Have your say with speech recognition.',
					lineHeight: '1.25',
					is: 'h1',
					pb: 2,
					fontSize: [3, 4]
				}}
				py={[2, 3]}
				mr={2}
			>
				<Atoms.SectionText fontSize={1} pb={2}>
					<strong>Voice Computer</strong> makes it easy to control your
					computer with just your voice.
				</Atoms.SectionText>
				<Molecules.InlineForm
					inputAttributes={{
						type: 'email',
						name: 'email',
						py: [1, 2, '13px']
					}}
					buttonAttributes={{
						text: 'Start Free Trial',
						type: 'primary'
					}}
					label="Enter your e-mail address"
					onSubmit={() => {}}
				/>
			</Molecules.Section>
			<Image alt="something" src="http://fillmurray.com/800/400" />
		</Header>
		<Wave color="neutral.1" />
		<Callout
			bg="neutral.1"
			py={[5, 6]}
			title="Special Requests?"
			description={oneLineTrim`
				We have plenty of experience delivering personalized speech recognition
				solutions. Get in touch, and we&#039;ll discuss how to getting you up and running.
			`}
			buttonAttributes={{
				text: 'Contact Us',
				to: '/contact-us',
				type: 'tertiary',
				nostyle: true
			}}
			imageAttributes={{
				src: 'http://fillmurray.com/150/150',
				alt: 'fillmurray :)'
			}}
		/>
		<Atoms.Box
			maxWidth="1088px"
			display="flex"
			flexWrap="wrap"
			justifyContent="space-between"
			px={[3, 4]}
			mx="auto"
			pt={[4, 6]}
		>
			<Molecules.Section
				flex="1 500px"
				mb={[4, 6]}
				mr={[0, 0, 6]}
				titleAttributes={{
					text: 'Exactly what it sounds like.',
					fontSize: 3
				}}
				renderFooter={() => (
					<Atoms.DividerFooter>
						<Atoms.ArrowButtonLink nostyle px="0" to="/how-it-works" type="tertiary">
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
			<Molecules.Table
				mb={[5, 6]}
				headerCells={[
					{ text: 'App' },
					{ text: 'Voice Control & Custom Commands', maxWidth: '200px' }
				]}
				bodyCells={[
					[
						{ text: 'Office' },
						{ iconAttributes: { name: 'check' } }
					]
				]}
				boxShadow={2}
			/>
		</Atoms.Box>
		<JoinConversation />
	</article>
);

export default IndexPage;
