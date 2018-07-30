import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import { Wave, JoinConversation, Skew, Newsletter } from '../components';
import { SectionAttributes, HeroTitleAttributes, HeroSubtitleAttributes } from '../utils';
import { FeaturedArticles, ArticleListing } from '../components/blog';

const Blog = ({ data }) => {
	const blogList = data.blogListing.edges.map(({ node }) => ({
		title: node.frontmatter.title,
		subtitle: node.frontmatter.tags.length ? node.frontmatter.tags[0] : undefined,
		description: node.excerpt,
		to: node.frontmatter.path,
		imageAttributes: {
			src: node.frontmatter.featuredImage,
			alt: node.frontmatter.featuredImageAlt
		},
		authorName: 'Voice Computer Staff'
	}));

	const featuredList = data.featuredListing.edges.map(({ node }) => ({
		title: node.frontmatter.title,
		description: node.excerpt,
		to: node.frontmatter.path,
		imageAttributes: {
			src: node.frontmatter.featuredImage,
			alt: node.frontmatter.featuredImageAlt
		},
		authorName: 'Voice Computer Staff'
	}));

	return (
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
			<FeaturedArticles articles={featuredList} />
			<ArticleListing articles={blogList} />
			<Atoms.Box py="150px" />
			<Skew bg="neutral.1" />
			<Newsletter mt="-300px" />
			<JoinConversation bg="neutral.1" />
		</div>
	);
};

export default Blog;

export const pageQuery = graphql`
	query BlogQuery {
		blogListing: allMarkdownRemark(
			limit: 5,
			filter: {
				frontmatter: {
					path: { regex:"/blog/" }
					isFeatured: { eq: false }
				}
			}
		){
			edges {
				node {
					frontmatter {
						path
						title
						tags
						featuredImage
						featuredImageAlt
					}
					excerpt(pruneLength:200)
				}
			}
		},
		featuredListing: allMarkdownRemark(
			limit: 3,
			filter: {
				frontmatter: {
					path: { regex:"/blog/" }
					isFeatured: { eq: true }
				}
			}
		){
			edges {
				node {
					frontmatter {
						path
						title
						featuredImage
						featuredImageAlt
					}
					excerpt(pruneLength:150)
				}
			}
		}
	}
`;
