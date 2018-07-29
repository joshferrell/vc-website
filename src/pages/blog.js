import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import { Wave, JoinConversation, Skew, Newsletter } from '../components';
import { SectionAttributes, HeroTitleAttributes, HeroSubtitleAttributes } from '../utils';
import { FeaturedArticles, ArticleListing } from '../components/blog';

const article = {
	title: 'Example title of article',
	subtitle: 'Category',
	description: 'Ut at nibh diam. Nam sodales risus lorem, ac hendrerit ligula suscipit a. Cras ullamcorper convallis est at dapibus. Fusce eu quam scelerisque, elementum mi eu, condimentum tellus. Vestibulum porta condimentum varius.',
	to: '/article',
	imageAttributes: {
		src: 'http://www.placeholder.pics/svg/896x504',
		alt: 'bill murray here'
	},
	authorName: 'John Doe'
};

const Blog = () => (
	<div>
		<Molecules.Section
			is="header"
			{...SectionAttributes}
			titleAttributes={{
				text: 'Blog',
				...HeroTitleAttributes
			}}
			subtitleAttributes={{
				text: 'Voice Computer\'s blog for feature information and trusted source for getting the most from speech recognition.',
				...HeroSubtitleAttributes
			}}
		/>
		<Wave color="neutral.1" />
		<FeaturedArticles articles={[article, article, article]} />
		<ArticleListing articles={[article, article, article, article]} />
		<Atoms.Box py="150px" />
		<Skew bg="neutral.1" />
		<Newsletter mt="-300px" />
		<JoinConversation bg="neutral.1" />
	</div>
);

export default Blog;
