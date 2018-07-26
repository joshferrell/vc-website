import React from 'react';
import { Wave, JoinConversation } from '../components';
import { Hero, MainFeatures, FeatureCards } from '../components/product';

const Product = () => (
	<div>
		<Hero />
		<Wave color="neutral.1" />
		<MainFeatures />
		<FeatureCards />
		<JoinConversation />
	</div>
);

export default Product;
