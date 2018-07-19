import React, { Component } from 'react';
import styled from 'styled-components';
import { Atoms, Molecules } from 'vc-components';
import { SectionAttributes } from '../utils';
import { Skew } from '../components';

export default class Support extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		message: '',
		companyWebsite: '',
		country: '',
		message: ''
	}

	handleInputChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	}

	render = () => (
		<article>
			<Molecules.Section
				pt={6}
				pb={4}
				alignItems="center"
				titleAttributes={{
					text: 'Contact our sales team',
					is: 'h1',
					fontSize: [3, 4],
					textAlign: 'center'
				}}
				subtitleAttributes={{
					text: 'Our team is happy to answer your questions.',
					is: 'h2',
					textAlign: 'center',
					fontSize: 1,
					fontWeight: 'normal',
					mt: 2,
					mb: 5
				}}
			/>
			<Molecules.Section justifyContent="center">
				<Molecules.Section
					bg="white"
					m="0 auto -120px"
					maxWidth="600px"
					p={[4, 5]}
					boxShadow={1}
				>
					<form>
						<Atoms.Label py={2} inline>
							First Name
							<Atoms.Input
								placeholder="Jane"
								onChange={this.handleInputChange}
								value={this.state.firstName}
								name="firstName"
								gray
								required
								type="text"
							/>
						</Atoms.Label>
						<Atoms.Label inline py={2}>
							Last Name
							<Atoms.Input
								placeholder="Doe"
								onChange={this.handleInputChange}
								value={this.state.lastName}
								name="lastName"
								required
								gray
								type="text"
							/>
						</Atoms.Label>
						<Atoms.Label inline py={2}>
							Email
							<Atoms.Input
								placeholder="jane.doe@example.com"
								onChange={this.handleInputChange}
								value={this.state.email}
								name="email"
								required
								gray
								type="email"
							/>
						</Atoms.Label>
						<Atoms.Label inline py={2}>
							Company Website
							<Atoms.Input
								placeholder="example.com"
								onChange={this.handleInputChange}
								value={this.state.companyWebsite}
								name="companyWebsite"
								gray
								required
								type="text"
							/>
						</Atoms.Label>
						<Atoms.Label inline py={2}>
							Country
							<Atoms.Input
								placeholder="United States"
								onChange={this.handleInputChange}
								value={this.state.country}
								name="country"
								required
								gray
								type="text"
							/>
						</Atoms.Label>
						<Atoms.Label alignItems="flex-start" inline pt={2} pb={4}>
							Message
							<Atoms.Input
								is="textarea"
								placeholder="Tell us about your needs and timeline."
								onChange={this.handleInputChange}
								value={this.state.message}
								name="message"
								required
								gray
								type="text"
								width="100%"
								height="130px"
							/>
						</Atoms.Label>
						<Atoms.Box textAlign={['left', 'right']}>
							<Atoms.ArrowButton type="tertiary">
								Contact Sales
							</Atoms.ArrowButton>
						</Atoms.Box>
					</form>
				</Molecules.Section>
			</Molecules.Section>
			<Skew bg="primary.main" />
			<Molecules.Section bg="primary.main" p={80} />
		</article>
	)
}
