import React from 'react';
import Link from 'gatsby-link';
import { Atoms, Molecules } from 'vc-components';
import { FourOhFour } from '../img';
import { HeroTitleAttributes, HeroSubtitleAttributes } from '../utils';

const NotFoundPage = () => (
	<div>
		<Molecules.Section
			alignItems="center"
			px={3}
			pt={6}
			titleAttributes={{
				text: 'Page not found!',
				...HeroTitleAttributes
			}}
			subtitleAttributes={{
				text: 'Sorry, but the page you were looking for could not be found.',
				textAlign: 'center',
				...HeroSubtitleAttributes
			}}
		/>
		<Atoms.Box lineHeight="1.5" px={3} textAlign="center">
			You can <Link to="/">return to our front page</Link>, or <Link to="/contact">drop us a line</Link> if
			you can&#039;t find what you&#039;re looking for.
		</Atoms.Box>
		<Atoms.Box mx="auto" textAlign="center" p={5} pt={5}>
			<Atoms.Box maxWidth="600px" is="img" src={FourOhFour} />
		</Atoms.Box>
	</div>
);

export default NotFoundPage;
