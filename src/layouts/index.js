import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Theme, Atoms, Organisms } from 'vc-components';
import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
	body {
		margin: 0;
	}
`;
/* eslint-enable */

const ExternalNav = Atoms.NavLink.withComponent('a');

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
						<ExternalNav href="https://docs.voicecomputer.com">Support</ExternalNav>
					]}
					renderRightNav={() => [
						<Atoms.NavLink to="/login">Sign In</Atoms.NavLink>,
						<Atoms.ArrowButtonLink to="/sign-up" type="secondary" squared>
						Try Free
						</Atoms.ArrowButtonLink>
					]}
				/>
			</header>
			<main>{children()}</main>
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
