import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import { SectionAttributes, HeroTitleAttributes, HeroSubtitleAttributes } from '../../utils';
import { Wave } from '../../components';
import { Creators, TeamListing } from '../../components/company';

const Company = ({ data }) => {
	const { edges } = data.allMarkdownRemark;
	const teamList = edges.map(({ node }) => ({ excerpt: node.excerpt, ...node.frontmatter }));

	return (
		<div>
			<Molecules.Section
				is="header"
				{...SectionAttributes}
				titleAttributes={{
					text: 'About Us',
					...HeroTitleAttributes
				}}
				subtitleAttributes={{
					text: 'Best in class speech recognition solutions.',
					...HeroSubtitleAttributes
				}}
				renderFooter={() => (
					<Atoms.ArrowButtonLink to="/sign-up">
						Try it free
					</Atoms.ArrowButtonLink>
				)}
			/>
			<Wave color="neutral.1" />
			<Creators />
			<TeamListing team={teamList} />
		</div>
	);
};

export default Company;

export const pageQuery = graphql`
	query TeamQuery {
	  allMarkdownRemark(filter: {frontmatter: {employeeTitle: {ne: ""}}}) {
	    edges {
	      node {
			excerpt(pruneLength: 32)
	        frontmatter {
	          path
	          title
	          image
	          employeeTitle
	        }
	      }
	    }
	  }
	}
`;
