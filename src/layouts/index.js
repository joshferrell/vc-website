import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Theme, Atoms } from 'vc-components';
import { DesktopMenu, MobileMenu, Footer } from '../components/shared';

const Layout = ({ data, children }) => {
	const { title, description, configuration } = data.site.siteMetadata;
	return (
		<Theme>
			<Helmet
				title={title}
				meta={[
					{ name: 'description', content: description }
				]}
			/>
			<Atoms.Container>
				<header>
					<DesktopMenu />
					<MobileMenu />
				</header>
				<Atoms.Box is="main">
					{children()}
				</Atoms.Box>
				<Footer {...configuration.subscribe} />
			</Atoms.Container>
		</Theme>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	joinConversation: PropTypes.bool
};

Layout.defaultProps = {
	joinConversation: false
};

export default Layout;

export const query = graphql`
	query LayoutQuery {
		site {
			siteMetadata {
				title
				description
				configuration {
					subscribe {
						url
						mainList
					}
				}
			}
		}
	}
`;
