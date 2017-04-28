import React from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { expand } from '../actions/content';

import Gallery from '../components/Gallery'
import Header from '../components/Header'

class App extends React.Component {
    render() {
        const { content, header } = this.props;

        if (window.Promise) {
            return (
                <div>
                    <Gallery elements={content.elements} onExpand={expand.bind(null)} />
                    
                    <Header title={header.title} subtitle={header.subtitle} icons={header.icons} />
                </div>
            )
        } else {
            return (
                <div>
                    <a href="https://www.linkedin.com/in/marklunney/">Please visit my LinkedIn page</a>
                </div>
            )
        }
    }
}

export default compose(
    connect(state => ({
        content: state.content,
        header: state.header
    }), {
            expand
        })
)(App);