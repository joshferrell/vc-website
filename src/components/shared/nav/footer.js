import React from 'react';
import PropTypes from 'prop-types';
import { Organisms } from 'vc-components';
import { subscribeUser } from '../../../utils';

const footerLinks = [
	{
		title: 'Product',
		links: [
			{
				key: 'features',
				to: '/product',
				text: 'Features'
			},
			{
				key: 'pricing',
				to: '/pricing',
				text: 'Pricing'
			},
			{
				key: 'sales',
				to: '/contact',
				text: 'Contact Sales'
			}
		]
	},
	{
		title: 'Resources',
		links: [
			{
				key: 'support',
				href: 'https://vc-docs.sloppy.zone',
				text: 'Support'
			},
			{
				href: 'http://forum.voicecomputer.com',
				key: 'forum',
				text: 'Community Forum',
				target: '_blank'
			},
			{
				key: 'blog',
				to: '/blog',
				text: 'Our Blog'
			}
		]
	},
	{
		title: 'About Us',
		links: [
			{
				key: 'company',
				to: '/about-us/company',
				text: 'Company'
			},
			{
				key: 'customers',
				to: '/about-us/customers',
				text: 'Our Customers'
			},
			{
				key: 'contact',
				to: '/contact',
				text: 'Contact Us'
			}
		]
	}
];

const Footer = ({ url, mainList }) => (
	<Organisms.Footer
		title="Voice Computer"
		newsLetter={{
			title: 'Stay in touch',
			message: 'Discover new features and tips through our monthly newsletter.',
			inputAttributes: {
				type: 'email',
				name: 'email',
				placeholder: 'jane.doe@example.com',
				py: '16px'
			},
			buttonAttributes: {
				text: 'Submit',
				type: 'tertiary'
			},
			label: 'Email',
			onSubmit: subscribeUser(url, mainList)
		}}
		links={footerLinks}
	/>
);

Footer.propTypes = {
	url: PropTypes.string.isRequired,
	mainList: PropTypes.string.isRequired
};

export default Footer;
