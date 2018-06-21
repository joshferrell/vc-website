import React from 'react';
import sys from 'system-components';
import { Atoms, Molecules } from 'vc-components';
import { Wave, JoinConversation } from '../components';

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

const FlexBox = sys('color', 'maxWidth', 'display', 'space', 'alignItems', 'justifyContent', 'flexDirection');

const Img = sys({ is: 'img' }, 'space');

const Pricing = () => (
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
		<Wave color="primary.main" />
		<Molecules.Section
			is="div"
			bg="primary.main"
			py="120px"
		/>
		<Molecules.Section
			mt="-120px"
			mb="120px"
			alignItems="center"
			color="white"
			display="flex"
		>
			this is a test
		</Molecules.Section>
		<FlexBox bg="primary.main" display="flex" justifyContent="center">
			<FlexBox
				maxWidth="800px"
				display="flex"
				p={[5, 6]}
				flexDirection={['column', 'column', 'row']}
				alignItems={['center', 'center', 'flex-start']}
				justifyContent="center"
			>
				<Img mr={[3, 4]} mb={[4, 4, 0]} mt={2} src="http://fillmurray.com/150/150" />
				<Molecules.Section
					bg="primary.main"
					color="white"
					titleAttributes={{
						text: 'Special Requests?',
						fontSize: [2, 3],
						is: 'h2',
						mb: 2
					}}
				>
					We have plenty of experience delivering personalized speech recognition
					solutions. Get in touch, and we&#039;ll discuss how to getting you up and running.
					<FlexBox mt={2}>
						<Atoms.ArrowButtonLink
							to="/contact-us"
							type="tertiary"
							nostyle
						>
							Contact Us
						</Atoms.ArrowButtonLink>
					</FlexBox>
				</Molecules.Section>
			</FlexBox>
		</FlexBox>
		<JoinConversation />
	</article>
);

export default Pricing;
