import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import Link from 'gatsby-link';
import { BlogBox, IconLink, BlogLink } from './shared';

const DesktopLeftNav = ({ data }) => (
	<React.Fragment>
		<Atoms.NavLink to="/product">Product</Atoms.NavLink>
		<Atoms.NavLink to="/pricing">Pricing</Atoms.NavLink>
		<Molecules.DropdownNav title="Resources" left="-130px" minWidth="350px">
			<IconLink href="http://vc-docs.sloppy.zone" text="Support" iconName="phone">
					Get in touch with us
			</IconLink>
			<IconLink href="http://forum.voicecomputer.com" text="Community" iconName="people">
					Get help from the best users
			</IconLink>
			<Atoms.Box bg="neutral.1" mt="18px" m="-24px" py={3} px={4} display="flex">
				<Atoms.Icon name="book" iconSize="sm" color="neutral.5" mr="17px" />
				<BlogBox>
					<Atoms.Box fontWeight={700}>
						<Link to="/blog">From the Blog</Link>
					</Atoms.Box>
					<Atoms.Box display="flex" flexDirection="column" color="primary.main">
						{data.allMarkdownRemark.edges.map(({ node }) => (
							<BlogLink to={node.frontmatter.path}>
								{node.frontmatter.title}
							</BlogLink>
						))}
						<BlogLink to="/blog" pt={2} fontWeight={600}>
								View More
							<Atoms.Icon name="rightArrow" iconSize="xs" ml={1} color="secondary.tertiary" />
						</BlogLink>
					</Atoms.Box>
				</BlogBox>
			</Atoms.Box>
		</Molecules.DropdownNav>
		<Molecules.DropdownNav title="About Us" left="-85px">
			<IconLink to="/about-us/company" text="Company" iconName="company" />
			<IconLink to="/about-us/customers" text="Our Customers" iconName="people" />
			<IconLink to="/contact" text="Contact Us" iconName="phone" />
		</Molecules.DropdownNav>
	</React.Fragment>
);

export default DesktopLeftNav;
