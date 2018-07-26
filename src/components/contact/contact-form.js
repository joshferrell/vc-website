import React, { Component } from 'react';
import { Atoms } from 'vc-components';
import hubspotSubmit from 'hubspot-form-submit';
import countries from 'country-list';

export default class ContactForm extends Component {
	state = {
		loading: false,
		success: false,
		firstName: '',
		lastName: '',
		email: '',
		message: '',
		companyWebsite: '',
		country: { label: 'United States', value: 'US' }
	}

	handleInputChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	}

	handleSelect = value => this.setState({ country: value });

	handleSubmit = async (e) => {
		if (!e.target.checkValidity()) return;
		e.preventDefault();
		const id = '4435970';
		const contactFormId = '4d3025ca-ed4d-414f-9d28-31cbea22d3c5';
		const {
			loading, success, country, ...formAttrs
		} = this.state;
		this.setState({ loading: true });
		try {
			await hubspotSubmit(id, contactFormId, { ...formAttrs, country: country.label });
			this.setState({ success: true });
		} catch (err) {
			console.log(err);
		} finally {
			this.setState({ loading: false });
		}
	}

	render = () => {
		const {
			firstName, lastName, email, message, companyWebsite, country, loading, success
		} = this.state;

		const countryList = countries()
			.getData()
			.map(({ code, name }) => ({ value: code, label: name }));

		return (
			<form onSubmit={this.handleSubmit}>
				<Atoms.Label py={2} inline>
					First Name
					<Atoms.Input
						placeholder="Jane"
						onChange={this.handleInputChange}
						value={firstName}
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
						value={lastName}
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
						value={email}
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
						value={companyWebsite}
						name="companyWebsite"
						gray
						required
						type="text"
					/>
				</Atoms.Label>
				<Atoms.Label inline py={2}>
					Country
					<Atoms.Select
						isSearchable
						options={countryList}
						onChange={this.handleSelect}
						value={country}
						gray
						required
					/>
				</Atoms.Label>
				<Atoms.Label alignItems="flex-start" inline pt={2} pb={4}>
					<Atoms.Box mt={2}>Message</Atoms.Box>
					<Atoms.Input
						is="textarea"
						placeholder="Tell us about your needs and timeline."
						onChange={this.handleInputChange}
						value={message}
						name="message"
						required
						gray
						type="text"
						width="100%"
						height="130px"
					/>
				</Atoms.Label>
				{
					success ? (
						<Atoms.Box
							textAlign={['left', 'right']}
							color="highlight.green"
							fontWeight={500}
						>
							{/* eslint-disable */}
							<Atoms.Box
								mr={3}
								aria-hidden
								aria-label="raised hands"
								role="img"
								is="span"
							>
								&#x1F64C;
							</Atoms.Box>
							Thanks for getting in touch! We will get back to you soon.
							{/* eslint-enable */}
						</Atoms.Box>
					) : (
						<Atoms.Box textAlign={['left', 'right']}>
							<Atoms.ArrowButton
								onClick={this.handleSubmit}
								type="tertiary"
								spin={loading}
							>
								Contact Sales
							</Atoms.ArrowButton>
						</Atoms.Box>
					)
				}
			</form>
		);
	}
}
