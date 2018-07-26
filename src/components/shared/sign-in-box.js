import { Molecules } from 'vc-components';
import styled from 'styled-components';

const SignInBox = styled(Molecules.Section).attrs({
	bg: 'white',
	maxWidth: '700px',
	width: '100%',
	mt: '-300px',
	mb: '120px',
	mx: 'auto',
	boxShadow: 3
})`
	z-index: 100;
	position: relative;

	@media (max-width: 1200px) {
		margin-top: -225px;
	}

	@media (max-width: 800px) {
		margin: -375px 0 0;
		max-width: 100%;
	}

	@media (max-width: 550px) {
		margin-top: -350px;
	}
`;

export default SignInBox;
