import React from 'react';
import { Atoms } from 'vc-components';

const DesktopRightNav = () => (
	<React.Fragment>
		<Atoms.NavLink to="/login">Sign In</Atoms.NavLink>
		<Atoms.ArrowButtonLink to="/sign-up" type="secondary" squared>
			Try Free
		</Atoms.ArrowButtonLink>
	</React.Fragment>
);

export default DesktopRightNav;
