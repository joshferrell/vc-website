import React from 'react';
import styled from 'styled-components';
import { Molecules, Atoms } from 'vc-components';
import { space, display } from 'styled-system';
import sys from 'system-components';
import { oneLine } from 'common-tags';
import { JoinConversation, Callout, Wave } from '../components';
import {
	Office, Skype, Slack, Chrome, Firefox, Edge, Adobe, Citrix, TalkingToComputer, MailBalloons
} from '../img';

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

const checkBoxCell = {
	iconAttributes: { name: 'check', type: 'glyph', color: '#72C472' },
	cellAttributes: { textAlign: 'center' }
};

const imageCellStyles = {
	cellAttributes: { display: 'flex', alignItems: 'center', justifyContent: 'center' }
};

const CellImg = sys({
	is: 'img'
}, 'width', 'space');

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
			<Image width="300" height="350" alt="Woman controlling computer with voice" src={TalkingToComputer} />
		</Header>
		<Wave color="neutral.1" />
		<Callout
			bg="neutral.1"
			pt={5}
			pb={[5, 6]}
			title="Special Requests?"
			description={oneLine`
				We have plenty of experience delivering personalized speech recognition
				solutions. Get in touch, and we'll discuss how to getting you up and running.
			`}
			buttonAttributes={{
				text: 'Contact Us',
				to: '/contact',
				type: 'primary',
				nostyle: true
			}}
			imageAttributes={{
				src: MailBalloons,
				alt: 'envelope attached to balloons',
				ariaHidden: true,
				width: 250,
				style: {
					marginTop: '-40px'
				}
			}}
		/>
		<Atoms.Box
			maxWidth="1088px"
			display="flex"
			flexWrap="wrap"
			justifyContent="space-between"
			px={[3, 4]}
			mx="auto"
			py={[5, 6]}
		>
			<Molecules.Section
				flex="1 500px"
				mb={[4, 6]}
				mr={[0, 0, 6]}
				titleAttributes={{
					text: 'Exactly what it sounds like.',
					fontSize: 3,
					is: 'h2'
				}}
				renderFooter={() => (
					<Atoms.DividerFooter>
						<Atoms.ArrowButtonLink nostyle px="0" to="/product" type="tertiary">
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
				mb={[5, 0]}
				mx="auto"
				headerCells={[
					{ text: 'App' },
					{
						text: 'Voice Control & Custom Commands',
						cellAttributes: { maxWidth: '200px' }
					}
				]}
				buttonAttributes={{
					text: 'and more',
					to: '/product'
				}}
				bodyCells={[
					[
						{
							render: () => (
								<CellImg src={Office} alt="Microsoft Office" width="130px" px={2} />
							),
							...imageCellStyles
						},
						checkBoxCell
					],
					[
						{
							render: () => (
								<div style={{ display: 'flex', justifyContent: 'space-around' }}>
									<CellImg src={Chrome} width="40px" height="45px" alt="Chrome" px={2} />
									<CellImg src={Firefox} width="40px" height="45px" alt="Firefox" px={2} />
									<CellImg src={Edge} width="40px" height="45px" alt="Microsoft Edge" px={2} />
								</div>
							),
							...imageCellStyles
						},
						checkBoxCell
					],
					[
						{
							render: () => (
								<div style={{ display: 'flex', justifyContent: 'space-around' }}>
									<CellImg src={Slack} width="40px" height="45px" alt="Slack" px={2} />
									<CellImg src={Skype} width="40px" height="45px" alt="Skype" px={2} />
								</div>
							),
							...imageCellStyles
						},
						checkBoxCell
					],
					[
						{
							render: () => (
								<div style={{ display: 'flex', justifyContent: 'space-around' }}>
									<CellImg src={Adobe} width="54px" height="45px" alt="Adobe Creative Cloud" px={2} />
								</div>
							),
							...imageCellStyles
						},
						checkBoxCell
					],
					[
						{
							render: () => (
								<div style={{ display: 'flex', justifyContent: 'space-around' }}>
									<CellImg src={Citrix} width="90px" height="45px" alt="Citrix" px={2} />
								</div>
							),
							...imageCellStyles
						},
						checkBoxCell
					]
				]}
				boxShadow={2}
			/>
		</Atoms.Box>
		<JoinConversation />
	</article>
);

export default IndexPage;
