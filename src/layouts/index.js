import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import { Theme, Atoms } from 'vc-components';

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
		<Header siteTitle={data.site.siteMetadata.title} />
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
