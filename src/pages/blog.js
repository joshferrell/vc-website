import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import { Wave, JoinConversation, Skew, Newsletter } from '../components';
import { SectionAttributes, HeroTitleAttributes, HeroSubtitleAttributes } from '../utils';
import { FeaturedArticles, ArticleListing } from '../components/blog';

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
		<FeaturedArticles />
		<ArticleListing />
		<Atoms.Box py="150px" />
		<Skew bg="neutral.1" />
		<Newsletter mt="-300px" />
		<JoinConversation bg="neutral.1" />
	</div>
);

export default Blog;
