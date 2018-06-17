import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import { Theme, Atoms, Organisms } from 'vc-components';

const Layout = ({ children, data }) => (
  <Theme>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
	<Atoms.Container>
		<Organisms.DesktopMenu
			renderLeftNav={() => [
				<Atoms.NavLink to="/products">Products</Atoms.NavLink>,
				<Atoms.NavLink to="/pricing">Pricing</Atoms.NavLink>,
				<Atoms.NavLink to="/support">Support</Atoms.NavLink>
			]}
			renderRightNav={() => [
				<Atoms.NavLink to="/about">Sign In</Atoms.NavLink>,
				<Atoms.ArrowButtonLink to="/sign-up" type="secondary" squared>
					Try Free
				</Atoms.ArrowButtonLink>
			]}
		/>
	    <div>
	      {children()}
	    </div>
	</Atoms.Container>
</Theme>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
