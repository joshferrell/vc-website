import React from 'react';
import { Molecules, Atoms } from 'vc-components';

const containerStyles = {
	flex: '1 500px',
	mb: [6],
	mr: [0, 0, 6]
};

const LearnMore = () => (
	<Molecules.Section
		{...containerStyles}
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
);

export default LearnMore;
