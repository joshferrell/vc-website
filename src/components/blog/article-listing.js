import React from 'react';
import { Atoms, Molecules } from 'vc-components';

const ArticleListing = ({ articles }) => (
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
			{articles.map(article => <Molecules.ArticleRow my={4} {...article} />)}
		</Atoms.Box>
	</Molecules.Section>
);

export default ArticleListing;
