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

const FeaturedArticles = ({ articles }) => (
	<Section>
		{articles.map(({ to, title, imageAttributes, description }) => (
			<Atoms.LinkWrapper to={to}>
				<Tilt options={{ max: 8, scale: 0.99 }}>
					<Card
						mx={2}
						maxWidth="355px"
						title="This is an example article"
						imageAttributes={imageAttributes}
					>
						{description}
					</Card>
				</Tilt>
			</Atoms.LinkWrapper>
		))}
	</Section>
);

export default FeaturedArticles;
