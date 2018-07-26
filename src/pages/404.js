import React from 'react';
import Link from 'gatsby-link';
import { Molecules } from 'vc-components';
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
				...HeroSubtitleAttributes
			}}
		/>
		<Molecules.Section alignItems="center" pb={6} px={3}>
			You can <Link to="/">return to our front page</Link>, or <Link to="/contact">drop us a line</Link> if
			you can&#039;t find what you&#039;re looking for.
		</Molecules.Section>
	</div>
);

export default NotFoundPage;
