import React from 'react';
import sys from 'system-components';
import { Molecules, Atoms } from 'vc-components';

const FlexBox = sys('color', 'maxWidth', 'display', 'space', 'alignItems', 'justifyContent', 'flexDirection');
const Img = sys({ is: 'img' }, 'space');

const Callout = ({ imageAttributes, title, description, buttonAttributes, color, ...props }) => {
	const { text: buttonText, ...buttonProps } = buttonAttributes;

	return (
		<FlexBox display="flex" justifyContent="center" {...props}>
			<FlexBox
				maxWidth="1088px"
				display="flex"
				px={[5, 6]}
				flexDirection={['column', 'column', 'row']}
				alignItems={['center', 'center', 'flex-start']}
				justifyContent="center"
			>
				<Img mr={[3, 4]} mb={[4, 4, 0]} mt={2} {...imageAttributes} />
				<Molecules.Section
					color={color}
					titleAttributes={{
						text: title,
						fontSize: 2,
						is: 'h2',
						mb: 3
					}}
				>
					{description}
					<FlexBox mt={2}>
						<Atoms.ArrowButtonLink {...buttonProps}>
							{buttonText}
						</Atoms.ArrowButtonLink>
					</FlexBox>
				</Molecules.Section>
			</FlexBox>
		</FlexBox>
	);
};

export default Callout;
