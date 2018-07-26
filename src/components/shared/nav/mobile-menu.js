import React from 'react';
import sys from 'system-components';
import { Atoms, Organisms } from 'vc-components';

const links = [
	{ text: 'Product', to: '/product' },
	{ text: 'Pricing', to: '/pricing' },
	{ text: 'About Us', to: '/about-us/company' },
	{ type: 'divider' },
	{ text: 'Support', href: 'https://vc-docs.sloppy.zone' },
	{ text: 'Community', href: 'http://forum.voicecomputer.com' },
	{ text: 'Blog', to: '/blog' },
	{ text: 'Contact Us', to: '/contact' }
];

const Divider = sys({
	borderTop: '1px solid',
	borderColor: 'neutral.2',
	my: 2
});

const MobileMenu = () => (
	<Organisms.MobileMenu
		cta
		renderMenu={dismissMenu => (
			<Atoms.Box mt={3}>
				<Atoms.NavLink onClick={dismissMenu} py={3} fontSize="1.2" to="/login" justifyContent="flex-start">
					Sign In
				</Atoms.NavLink>
				<Divider />
				{links.map(({ text, type, ...props }) => {
					if (type === 'divider') return <Divider />;
					return (
						<Atoms.NavLink
							{...props}
							onClick={dismissMenu}
							py={3}
							fontSize="1.2"
							justifyContent="flex-start"
						>
							{text}
						</Atoms.NavLink>
					);
				})}
			</Atoms.Box>
		)}
	/>
);

export default MobileMenu;
