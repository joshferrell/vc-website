import React from 'react';
import { oneLine } from 'common-tags';
import { Atoms } from 'vc-components';
import { Wave, Callout, Skew, JoinConversation } from '../components';
import { Microphone } from '../img';
import {
	Hero,
	FeatureTable,
	LearnMore,
	Customer
} from '../components/home';

const productStyles = {
	maxWidth: '1088px',
	px: [3, 4],
	py: 6,
	mx: 'auto',
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between'
};

const IndexPage = ({ data }) => (
	<div>
		<Hero />
		<Wave color="neutral.1" />
		<Callout
			bg="neutral.1"
			title="Try our live demo!"
			inWave
			description={oneLine`
				Have a microphone handy? Take a test drive with an instant product demonstration
				to see how Voice Computer can help you.
			`}
			buttonAttributes={{
				text: 'Try the demo',
				to: '/demo'
			}}
			imageAttributes={{
				src: Microphone,
				alt: 'microphone illustration'
			}}
		/>
		<Atoms.Box is="section" {...productStyles}>
			<LearnMore />
			<FeatureTable />
		</Atoms.Box>
		<Skew bg="neutral.0" />
		<Atoms.Box bg="neutral.0" py="140px" mb="-180px" />
		<Customer data={data} />
		<JoinConversation />
	</div>
);

export default IndexPage;

export const pageQuery = graphql`
	query HomeQuery {
	  testamonials: allMarkdownRemark(
		  filter: { frontmatter: {
			  path: { regex: "/testamonial/" }
		  }
	  }) {
		edges {
		  node {
			frontmatter {
			  title
			  description
			}
		  }
		}
	  }
	}
`;
