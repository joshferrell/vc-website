import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import { HeroTitleAttributes, HeroSubtitleAttributes } from '../utils';
import { Wave, Share, Newsletter } from '../components';

const Article = ({ data }) => {
	const post = data.markdownRemark;

	return (
		<article>
			<Atoms.Box
				is="img"
				width="100%"
				src={post.frontmatter.featuredImage}
				alt={post.frontmatter.featuredImageAlt}
			/>
			<Wave color="white" mt="-73px" />
			<Molecules.Section
				is="header"
				px={3}
				alignItems="center"
				titleAttributes={{
					text: post.frontmatter.title,
					...HeroTitleAttributes
				}}
				subtitleAttributes={{
					text: `Written by Voice Computer Staff`,
					...HeroSubtitleAttributes
				}}
			/>
			<Atoms.Box
				is="section"
				maxWidth="960px"
				my={5}
				px={[3, 6]}
				mx="auto"
			>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
				<Atoms.Box mt={6} mb={5}>
					<Atoms.Box is="h2" m={0} mb={2}>Share</Atoms.Box>
					<Share url={post.frontmatter.path} />
				</Atoms.Box>
				<Newsletter />
			</Atoms.Box>
		</article>
	);
};

export default Article;

export const pageQuery = graphql`
	query ArticleByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				title
				path
				tags
				featuredImage
				featuredImageAlt
			}
		}
	}
`;
