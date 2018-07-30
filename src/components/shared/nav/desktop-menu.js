import React from 'react';
import { Organisms } from 'vc-components';

import DesktopLeftNav from './desktop-left-nav';
import DesktopRightNav from './desktop-right-nav';

const DesktopMenu = ({ data }) => (
	<Organisms.DesktopMenu
		renderLeftNav={() => <DesktopLeftNav data={data} />}
		renderRightNav={DesktopRightNav}
	/>
);

export default DesktopMenu;
