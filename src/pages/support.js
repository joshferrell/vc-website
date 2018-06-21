import React from 'react';
import { Molecules } from 'vc-components';
import { SubtitleAttributes, SectionAttributes } from '../utils';
import { Wave } from '../components';

const Support = () => (
	<article>
		<Molecules.Section
			{...SectionAttributes}
			titleAttributes={{
				text: 'Contact our sales team',
				is: 'h1',
				fontSize: [3, 4],
				textAlign: 'center'
			}}
			subtitleAttributes={{
				text: 'Our team is happy to answer your questions.',
				is: 'h2',
				textAlign: 'center',
				fontSize: 1,
				fontWeight: 'normal',
				mt: 2,
				mb: 5
			}}
		/>
		<Wave color="neutral.1" />
		<Molecules.Section bg="neutral.1" justifyContent="center">
			<div style={{ maxWidth: '800px', margin: '0 auto' }}>
				sdom
			</div>
		</Molecules.Section>
	</article>
);

export default Support;
