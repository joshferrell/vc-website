import React from 'react';
import { oneLine } from 'common-tags';
import { Atoms, Molecules } from 'vc-components';
import { Community } from '../../img';
import { SectionAttributes, HeroTitleAttributes, HeroSubtitleAttributes } from '../../utils';
import { Callout, Wave } from '../../components';

const Customers = () => (
	<div>
		<Molecules.Section
			is="header"
			{...SectionAttributes}
			titleAttributes={{
				text: 'You\'re in good company.',
				...HeroTitleAttributes
			}}
			subtitleAttributes={{
				text: 'Join the small businesses, large enterprises, government institutions, and individuals empowered by Voice Computer.',
				...HeroSubtitleAttributes
			}}
			renderFooter={() => (
				<Atoms.ArrowButtonLink to="/sign-up">
					Try it free
				</Atoms.ArrowButtonLink>
			)}
		/>
		<Wave color="neutral.1" />
		<Callout
			title="Connect with Voice Computer customers"
			description={oneLine`
				The Voice Computer Community is an open, collaborative space where users from
				all over the world connect, share, and learn.
			`}
			buttonAttributes={{
				text: 'Connect with customers',
				href: 'http://forum.voicecomputer.com'
			}}
			imageAttributes={{
				src: Community,
				alt: 'illustration of several people'
			}}
		/>
	</div>
);

export default Customers;
