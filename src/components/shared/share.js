import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Atoms } from 'vc-components';
import {
	FacebookIcon, FacebookShareButton,
	LinkedinIcon, LinkedinShareButton,
	TwitterIcon, TwitterShareButton,
	RedditIcon, RedditShareButton,
	EmailIcon, EmailShareButton
} from 'react-share';

const Box = styled(Atoms.Box).attrs({
	display: 'flex',
	mx: -2
})`
	& > * {
		margin: 8px;
	}
`;

const Share = ({ url, size, ...props }) => {
	const buttonAttrs = { url };
	const iconAttrs = { size };

	return (
		<Box display="flex" {...props}>
			<FacebookShareButton {...buttonAttrs}>
				<FacebookIcon {...iconAttrs} />
			</FacebookShareButton>
			<LinkedinShareButton {...buttonAttrs}>
				<LinkedinIcon {...iconAttrs} />
			</LinkedinShareButton>
			<TwitterShareButton {...buttonAttrs}>
				<TwitterIcon {...iconAttrs} />
			</TwitterShareButton>
			<RedditShareButton {...buttonAttrs}>
				<RedditIcon {...iconAttrs} />
			</RedditShareButton>
			<EmailShareButton {...buttonAttrs}>
				<EmailIcon {...iconAttrs} />
			</EmailShareButton>
		</Box>
	);
};

Share.propTypes = {
	url: PropTypes.string.isRequired,
	size: PropTypes.number
};

Share.defaultProps = {
	size: 45
};

export default Share;
