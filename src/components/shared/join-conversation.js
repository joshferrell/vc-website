import React from 'react';
import { Molecules, Atoms } from 'vc-components';

const JoinConversation = ({ ...props }) => (
	<Molecules.Section
		{...props}
		py={6}
		is="section"
		alignItems="center"
		titleAttributes={{
			text: 'Ready to join the conversation?',
			textAlign: 'center',
			fontSize: [2, 3],
			is: 'h2'
		}}
		subtitleAttributes={{
			textAlign: 'center',
			text: 'Come say hello. Your first 30 days are on the house.',
			is: 'p',
			fontSize: 1,
			mb: 4,
			mt: 2
		}}
		renderFooter={() => (
			<div style={{ textAlign: 'center' }}>
				<Atoms.ArrowButtonLink to="/sign-up" m={2}>
					Start your free trial
				</Atoms.ArrowButtonLink>
				<Atoms.ButtonLink type="tertiary" to="/contact" m={2}>
					Contact Sales
				</Atoms.ButtonLink>
			</div>
		)}
	/>
);

export default JoinConversation;
