
const subscribeUser = (url, list) => async (emailAddress) => {
	const res = await fetch(`${url}?list=${list}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email_address: emailAddress
		})
	});
	const json = await res.json();
	if (res.okay && json.status === 'success') return true;
	throw new Error(json.message);
};

export default subscribeUser;
