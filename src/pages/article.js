import React from 'react';
import { Atoms, Molecules } from 'vc-components';
import { HeroTitleAttributes, HeroSubtitleAttributes } from '../utils';
import { Wave, Share, Newsletter } from '../components';

const Article = () => (
	<article>
		<Atoms.Box is="img" src="http://placeholder.pics/svg/1440x350" alt="test" width="100%" />
		<Wave color="white" mt="-73px" />
		<Molecules.Section
			is="header"
			px={3}
			alignItems="center"
			titleAttributes={{
				text: 'This is an example title',
				...HeroTitleAttributes
			}}
			subtitleAttributes={{
				text: 'Written by Josh Ferrell',
				...HeroSubtitleAttributes
			}}
		/>
		<Atoms.Box
			is="section"
			maxWidth="960px"
			my={5}
			px={[3, 6]}
			mx="auto"
		>
			<h1>HTML Ipsum Presents</h1>

<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

<h2>Header Level 2</h2>

<ol>
   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
</ol>

<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

<h3>Header Level 3</h3>

<ul>
   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
</ul>
			<Atoms.Box mt={6} mb={5}>
				<Atoms.Box is="h2" m={0} mb={2}>Share</Atoms.Box>
				<Share url="http://google.com" />
			</Atoms.Box>
			<Newsletter />
		</Atoms.Box>

	</article>
);

export default Article;
