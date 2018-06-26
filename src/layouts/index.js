import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { color, space, fontWeight } from 'styled-system';
import { Theme, Atoms, Organisms, Molecules, Utils } from 'vc-components';
import { IconLink } from '../components';

/* eslint-disable */
injectGlobal`
	body {
		margin: 0;
	}
`;
/* eslint-enable */

const { Box, NavLink, Icon } = Atoms;
const ColumnBox = styled(Box)`
	display: flex;
	flex-flow: row wrap;
	& > * {
		flex: 1 40%;
	}
`;

const BlogBox = styled(Box)`
	a {
		color: #5677FC;
		text-decoration: none;

		&:hover {
			color: #202d4a;
		}
	}

	& > div:first-of-type a {
		color: #202d4a;

		&:hover {
			color: #5677fc;
		}
	}
`;

const BlogLink = styled(Link).attrs({
	fontSize: 0,
	pt: props => props.pt || 1
})`
	display: flex;
	align-items: center;

	svg {
		height: 12px;
		width: 12px;
	}

	${Utils.fontSize};
	${space};
	${color};
	${fontWeight};
`;

const Layout = ({ children, data }) => (
	<Theme>
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' }
			]}
		/>
		<Atoms.Container>
			<header>
				<Organisms.DesktopMenu
					renderLeftNav={() => [
						<Atoms.NavLink to="/product">Product</Atoms.NavLink>,
						<Atoms.NavLink to="/pricing">Pricing</Atoms.NavLink>,
						<Molecules.DropdownNav title="Resources" left="-130px" minWidth="350px">
							<IconLink to="/support" text="Support" iconName="phone">
								Get in touch with us
							</IconLink>
							<IconLink href="http://forum.voicecomputer.com" text="Community" iconName="people">
								Get help from the best users
							</IconLink>
							<Box bg="neutral.1" mt="18px" m="-24px" py={3} px={4} display="flex">
								<Atoms.Icon name="book" iconSize="sm" color="neutral.5" mr="17px" />
								<BlogBox>
									<Box fontWeight={700}>
										<Link to="/blog">From the Blog</Link>
									</Box>
									<Box display="flex" flexDirection="column" color="primary.main">
										<BlogLink to="/blog/asdf">Top Microphones for Speech Recognition</BlogLink>
										<BlogLink to="/blog/asdf">Stop Doing Something and Do</BlogLink>
										<BlogLink to="/blog/asdf">Isn&#039;t this great? It works.</BlogLink>
										<BlogLink to="/blog" pt={2} fontWeight={600}>
											View More
											<Icon name="rightArrow" iconSize="xs" ml={1} color="secondary.tertiary" />
										</BlogLink>
									</Box>
								</BlogBox>
							</Box>
						</Molecules.DropdownNav>,
						<Molecules.DropdownNav title="About Us" left="-85px">
							<IconLink to="/about-us/company" text="Company" iconName="company" />
							<IconLink to="/about-us/customers" text="Our Customers" iconName="people" />
							<IconLink to="/contact" text="Contact Us" iconName="phone" />
						</Molecules.DropdownNav>
					]}
					renderRightNav={() => [
						<Atoms.NavLink to="/login">Sign In</Atoms.NavLink>,
						<Atoms.ArrowButtonLink to="/sign-up" type="secondary" squared>
							Try Free
						</Atoms.ArrowButtonLink>
					]}
				/>
				<Organisms.MobileMenu
					cta
					renderMenu={() => (
						<Box mt={3}>
							<NavLink py={3} fontSize="1.2" to="/login" justifyContent="flex-start">
								<span>Sign In</span>
								<Icon ml={4} name="rightArrow" type="outline" iconSize="sm" />
							</NavLink>
							<NavLink py={3} fontSize="1.2" to="/product" justifyContent="flex-start">Product</NavLink>
							<NavLink py={3} fontSize="1.2" to="/Pricing" justifyContent="flex-start">Pricing</NavLink>
							<Box bg="neutral.1" mt="12px" mb="8px" py={2} fontWeight={600} px={3}>
								Resources
							</Box>
							<ColumnBox display="flex">
								<NavLink py={3} fontSize="1.2" to="/Pricing" justifyContent="flex-start">About Us</NavLink>
								<NavLink py={3} fontSize="1.2" to="/Pricing" justifyContent="flex-start">Support</NavLink>
								<NavLink py={3} fontSize="1.2" to="/Pricing" justifyContent="flex-start">Blog</NavLink>
								<NavLink py={3} fontSize="1.2" to="/Pricing" justifyContent="flex-start">Community</NavLink>
							</ColumnBox>
						</Box>
					)}
				/>
			</header>
			<main style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>{children()}</main>
			<footer>
				testeroo
			</footer>
		</Atoms.Container>
	</Theme>
);

Layout.propTypes = {
	children: PropTypes.func.isRequired,
	data: PropTypes.shape({
		site: PropTypes.object
	}).isRequired
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
