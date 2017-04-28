import React from 'react';

import styles from '../styles/header.css';

export default ({title, subtitle, icons}) => {
    
    return <div styleName="header">
        <div styleName="title-left">
            <h1>{title}</h1>
            <br />
            <h2>{subtitle}</h2>
        </div>

        <div styleName="title-right">
            {icons.map(({id, src, url}) => {

                    return <a href={url} key={id}><img src={src} /></a>

                }
            )}
        </div>
    </div>

};
