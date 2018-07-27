import React from 'react';
import { Company } from '../../img';
import { Atoms, Molecules } from 'vc-components';

const containerStyles = {
	bg: 'neutral.1',
	pb: [5, 6],
	pt: [5, 5, 3],
	px: 3,
	mx: 'auto',
	alignItems: 'center'
};

const boxStyles = {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center',
	alignItems: 'center'
};

const Creators = () => (
	<Molecules.Section
		{...containerStyles}
		headerDivider="green"
		titleAttributes={{
			text: 'We are creators',
			fontSize: [2, 3],
			px: 3,
			mt: 0,
			textAlign: 'center',
			is: 'h2'
		}}
	>
		<Atoms.Box mt="44px" {...boxStyles}>
			<img
				src={Company}
				alt="team collaborating on different devices"
				style={{
					width: '100%', height: 'auto', flex: '1 500px', maxWidth: '500px'
				}}
			/>
			<Atoms.Box m={[3, 6]} maxWidth="25rem">
				<p>
						We are a team of creators with decades of experience in speech recognition,
						enterprise technology, and product design. We are committed to making your
						life easier through applied speech recognition.
				</p>
				<p>
						We serve customers in <strong>20 countries</strong> from three Californian
						offices in Sacramento, Davis, and the San Francisco Bay Area.
				</p>
			</Atoms.Box>
		</Atoms.Box>
	</Molecules.Section>
);

export default Creators;
