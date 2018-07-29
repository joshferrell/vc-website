import React from 'react';
import { oneLine } from 'common-tags';
import { Atoms, Molecules } from 'vc-components';
import { Community, InOffice, Space, TalkingToComputer } from '../../img';
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
		<Atoms.Box
			is="section"
			bg="neutral.1"
		>
			<Atoms.Box
				display="flex"
				flexWrap="wrap"
				justifyContent="space-between"
				px={3}
				pb={6}
				mx="auto"
				maxWidth="1110px"
				pt={[5, 5, 0]}
			>
				<Atoms.Box mx={3} my={4} is="div" textAlign="center" maxWidth="300px">
					<img src={InOffice} alt="test" width="250px" height="189px" />
					<Atoms.Box my={3} is="h2">Enterprise</Atoms.Box>
					<Atoms.Box>
						Cras molestie.Phasellus dapibus sollicitudin odio. Nam ligula tellus,
						consectetur in massa ut, venenatis pulvinar ex. Donec viverra dapibus ex.
					</Atoms.Box>
				</Atoms.Box>
				<Atoms.Box mx={3} my={4} is="div" textAlign="center" maxWidth="300px">
					<img src={Space} alt="test" width="250px" height="189px" />
					<Atoms.Box my={3} is="h2">Government</Atoms.Box>
					<Atoms.Box>
						Cras molestie.Phasellus dapibus sollicitudin odio. Nam ligula tellus,
						consectetur in massa ut, venenatis pulvinar ex. Donec viverra dapibus ex.
					</Atoms.Box>
				</Atoms.Box>
				<Atoms.Box mx={3} my={4} is="div" textAlign="center" maxWidth="300px">
					<img src={TalkingToComputer} alt="test" width="250px" height="189px" />
					<Atoms.Box my={3} is="h2">You</Atoms.Box>
					<Atoms.Box>
						Cras molestie.Phasellus dapibus sollicitudin odio. Nam ligula tellus,
						consectetur in massa ut, venenatis pulvinar ex. Donec viverra dapibus ex.
					</Atoms.Box>
				</Atoms.Box>
			</Atoms.Box>
		</Atoms.Box>
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
