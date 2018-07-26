import React from 'react';
import { Atoms, Molecules } from 'vc-components';

const containerStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexWrap: 'wrap',
	maxWidth: '960px',
	mx: 'auto',
	px: [3, 6],
	py: 6,
	bg: 'primary.main',
	is: 'section',
	boxShadow: 3
};

const Customer = () => (
	<Atoms.Box {...containerStyles}>
		<Molecules.Section
			color="white"
			p={4}
			flex="1 250px"
			titleAttributes={{
				is: 'h2',
				text: 'Don\'t just take our word for it.',
				pb: 2
			}}
			renderFooter={() => (
				<Atoms.DividerFooter>
					<Atoms.ArrowButtonLink nostyle px="0" to="/about-us/customers" type="tertiary">
						Learn more about Voice Computer
					</Atoms.ArrowButtonLink>
				</Atoms.DividerFooter>
			)}
		>
			<Atoms.Box m={0} is="p">
				Join <strong>thousands</strong> of voices from <strong>20 countries</strong> who
				have said good-bye to pain.
			</Atoms.Box>
		</Molecules.Section>
		<Molecules.Section borderRadius={4} p={5} flex="1 200px" bg="white" ml={[0, 5]}>
			<Atoms.Box color="highlight.red" fontWeight={600} pb={1} is="h3" fontSize={1} m={0}>
				Michael S.
			</Atoms.Box>
			<Atoms.Box>
				Voice Computer has made my life as a worldwide account director for
				FedEx Corporation much easier. I can tell you that the time savings are tremendous.
			</Atoms.Box>
		</Molecules.Section>
	</Atoms.Box>
);

export default Customer;
