import React from 'react';

import styles from '../styles/gallery.css';

export default ({ element, onClick }) => {
	let styleName = element.isExpanded ? 'gallery-item expanded' : 'gallery-item';

	return <li className='gallery-item-selector' styleName={styleName}>
		<img src={element.src} />
		<div styleName="details" onClick={onClick}>
			<div styleName="tag">
				{element.client}
				<br />
				{element.title}
			</div>
			<div styleName="description">
				{element.description}
				<br />
				<a href={element.linkUrl}>{element.linkText}</a>
			</div>
		</div>
	</li>
};
