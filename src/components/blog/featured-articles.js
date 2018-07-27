import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import { Atoms, Molecules } from 'vc-components';
import { Card } from '../.';
import { HeaderAttributes } from '../../utils';

const containerStyles = {
	bg: 'neutral.1',
	pb: 6,
	is: 'section',
	pt: [5, 5, 3],
	px: 3,
	alignItems: 'center',
	display: 'flex'
};

const Section = styled(Molecules.Section).attrs({
	...containerStyles,
	titleAttributes: {
		text: 'Featured Articles',
		...HeaderAttributes
	}
})`
	& > div {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		width: 100%;
	}
`;

const FeaturedArticles = () => (
	<Section>
		<Atoms.LinkWrapper to="/article">
			<Tilt options={{ max: 8, scale: 0.99 }}>
				<Card
					mx={2}
					maxWidth="355px"
					title="This is an example article"
					imageAttributes={{
						src: 'http://fillmurray.com/375/200'
					}}
				>
					Ut at nibh diam. Nam sodales risus lorem, ac hendrerit ligula suscipit a.
					Cras ullamcorper convallis est at dapibus.
				</Card>
			</Tilt>
		</Atoms.LinkWrapper>
		<Atoms.LinkWrapper to="/article">
			<Tilt options={{ max: 8, scale: 0.99 }}>
				<Card
					mx={2}
					maxWidth="355px"
					title="This is an example article"
					imageAttributes={{
						src: 'http://fillmurray.com/375/200'
					}}
				>
					Ut at nibh diam. Nam sodales risus lorem, ac hendrerit ligula suscipit a.
					Cras ullamcorper convallis est at dapibus.
				</Card>
			</Tilt>
		</Atoms.LinkWrapper>
		<Atoms.LinkWrapper to="/article">
			<Tilt options={{ max: 8, scale: 0.99 }}>
				<Card
					mx={2}
					maxWidth="355px"
					title="This is an example article"
					imageAttributes={{
						src: 'http://fillmurray.com/375/200'
					}}
				>
					Ut at nibh diam. Nam sodales risus lorem, ac hendrerit ligula suscipit a.
					Cras ullamcorper convallis est at dapibus.
				</Card>
			</Tilt>
		</Atoms.LinkWrapper>
	</Section>
);

export default FeaturedArticles;
