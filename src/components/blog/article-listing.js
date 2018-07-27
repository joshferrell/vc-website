import React from 'react';
import { Atoms, Molecules } from 'vc-components';

const data = {
	title: 'Example title of article',
	subtitle: 'Category',
	description: 'Ut at nibh diam. Nam sodales risus lorem, ac hendrerit ligula suscipit a. Cras ullamcorper convallis est at dapibus. Fusce eu quam scelerisque, elementum mi eu, condimentum tellus. Vestibulum porta condimentum varius.',
	to: '/article',
	imageAttributes: {
		src: 'http://www.fillmurray.com/896/504',
		alt: 'bill murray here'
	},
	authorName: 'John Doe'
};

const ArticleListing = () => (
	<Molecules.Section
		py={6}
		px={[3, 6]}
		maxWidth="1088px"
		mt="50px"
		mx="auto"
		is="section"
		alignItems="center"
		titleAttributes={{
			text: 'Latest in Speech Recognition',
			textAlign: 'center',
			fontSize: [2, 3],
			is: 'h2'
		}}
	>
		<Atoms.Box mt="52px">
			{[data, data, data].map(article => <Molecules.ArticleRow my={4} {...article} />)}
		</Atoms.Box>
	</Molecules.Section>
);

export default ArticleListing;
