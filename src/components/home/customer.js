import React, { Component } from 'react';
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

const sectionStyles = {
	borderRadius: 4,
	p: 5,
	flex: '1 200px',
	bg: 'white',
	ml: [0, 5],
	style: { overflow: 'hidden' }
};

const titleStyles = {
	fontWeight: 600,
	paddingBottom: '2px',
	margin: 0,
	fontSize: '1.092rem'
};

const Testamonial = ({ title, description, color }) => (
	<Molecules.Section {...sectionStyles}>
		<h3 style={{ color, ...titleStyles }}>
			{title}
		</h3>
		<div>{description}</div>
	</Molecules.Section>
);

class Customer extends Component {
	state = {
		index: 0,
		toggleInterval: null
	}

	componentDidMount = () => {
		const toggleInterval = setInterval(this.toggle, 3250);
		this.setState({ toggleInterval });
	}

	componentWillUnmount = () => {
		clearInterval(this.state.toggleInterval);
	}

	toggle = () => {
		const edgeCount = this.props.data.testamonials.edges.length;
		this.setState(({ index }) => ({
			index: index === edgeCount - 1 ? 0 : index + 1
		}));
	}

	render = () => {
		const activeTestamonial = this.props.data.testamonials.edges[this.state.index];
		const colors = ['#e51c23', '#259b24', '#5677fc', '#ffeb3b'];

		return (
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
				<Testamonial color={colors[this.state.index]} {...activeTestamonial.node.frontmatter} />
			</Atoms.Box>
		);
	}
}

export default Customer;
