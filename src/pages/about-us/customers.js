import React from 'react';
import { oneLineTrim } from 'common-tags';
import { Molecules, Atoms } from 'vc-components';
import { Community } from '../../img';
import { HeaderAttributes, HeroTitleAttributes, HeroSubtitleAttributes, SectionAttributes } from '../../utils';
import { Wave, Callout } from '../../components';

const Customers = () => (
	<article>
		<Molecules.Section
			is="section"
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
		<Molecules.Section
			bg="neutral.1"
			pb={[5, 6]}
			pt={[5, 5, 3]}
			alignItems="center"
			titleAttributes={{
				text: 'Featured Industries',
				...HeaderAttributes
			}}
		>
			<Atoms.Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between" mt={4}>
				<div style={{ maxWidth: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<img src="http://fillmurray.com/200/200" width="200" style={{ margin: '0 auto' }} />
					<Molecules.Section
						titleAttributes={{
							text: 'Enterprise',
							textAlign: 'center',
							my: 3
						}}
						textAlign="center"
						justifyContent="center"
					>
						<Atoms.Box display="flex" justifyContent="center" flexDirection="column">
							<p style={{ textAlign: 'center', margin: 0 }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacus
								felis, pharetra et nisl at, faucibus dignissim justo.
							</p>
							<Atoms.Button to="/asdf" nostyle type="tertiary">
								Learn More
							</Atoms.Button>
						</Atoms.Box>

					</Molecules.Section>
				</div>
			</Atoms.Box>
		</Molecules.Section>
		<Callout
			width="100%"
			py={[5, 6]}
			title="Connect with Voice Computer customers"
			description={
				oneLineTrim`
					The Voice Computer Community is an open, collaborative space where users
					from all over the world connect, share, and learn.
				`
			}
			buttonAttributes={{
				text: 'Contact Us',
				to: '/contact',
				type: 'tertiary',
				nostyle: true
			}}
			imageAttributes={{
				src: Community,
				alt: 'Grid of people smiling',
				width: '225px',
				style: { marginTop: '-16px' }
			}}
		/>
	</article>
);

export default Customers;
