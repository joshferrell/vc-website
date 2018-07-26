import React from 'react';
import PropTypes from 'prop-types';
import sys from 'system-components';
import { Atoms, Molecules } from 'vc-components';

const Img = sys({
	is: 'img',
	mr: [3, 4],
	mb: [4, 4, 0],
	mt: 2
});

const Callout = ({ description, title, imageAttributes, buttonAttributes, inWave, color, ...props }) => {
	const { text: buttonText, ...btnProps } = buttonAttributes;
	const buttonProps = Object.assign({}, {
		type: 'primary',
		nostyle: true
	}, btnProps);

	const imageProps = Object.assign({}, {
		width: 150,
		style: { marginTop: '-4px' }
	}, imageAttributes);

	return (
		<Atoms.Box {...props} display="flex" justifyContent="center" pt={inWave ? 5 : 6} pb={[5, 6]} px={3} is="section">
			<Atoms.Box
				maxWidth="1088px"
				display="flex"
				px={[3, 6]}
				flexDirection={['column', 'column', 'row']}
				alignItems={['center', 'center', 'flex-start']}
				justifyContent="center"
			>
				<Img aria-hidden {...imageProps} />
				<Molecules.Section
					titleAttributes={{
						text: title,
						fontSize: 2,
						is: 'h2',
						mb: 3,
						color
					}}
				>
					<Atoms.Box is="p" m={0} color={color}>
						{description}
					</Atoms.Box>
					<Atoms.Box mt={2}>
						<Atoms.ArrowButtonLink {...buttonProps}>
							{buttonText}
						</Atoms.ArrowButtonLink>
					</Atoms.Box>
				</Molecules.Section>
			</Atoms.Box>
		</Atoms.Box>
	);
};

Callout.propTypes = {
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageAttributes: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired
	}).isRequired,
	buttonAttributes: PropTypes.shape({
		text: PropTypes.string.isRequired
	}).isRequired,
	inWave: PropTypes.bool
};

Callout.defaultProps = {
	inWave: false
};

export default Callout;
