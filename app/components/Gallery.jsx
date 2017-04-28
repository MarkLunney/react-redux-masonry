import React from 'react';
import { connect } from 'react-redux';

import Masonry from 'react-masonry-component';
import GalleryElement from './GalleryElement';

import { expand } from '../actions/content';

import styles from '../styles/gallery.css';

var masonryOptions = {
    columnWidth: 260,
    transitionDuration: '0.7s',
    itemSelector: '.gallery-item-selector',
    gutter: 20
};

class Gallery extends React.Component {
    constructor() {
        super();
        this.isExpanding = false;
    }

    handleLayoutComplete() {
        this.isExpanding = false;
    }

    componentDidMount() {
        this.masonry.on('layoutComplete', this.handleLayoutComplete.bind(this));
    }

    componentWillUnmount() {
        this.masonry.off('layoutComplete', this.handleLayoutComplete.bind(this));
    }

    onClickElement(elementData) {
        const { expand } = this.props;

        if (!elementData.isExpanded && !this.isExpanding) {
            this.isExpanding = true;
            expand(elementData.id)
        }
    }

    render() {
        const { elements } = this.props;

        if (elements) {
            return (
                <div styleName="gallery">
                    <Masonry
                    ref={function (c) { this.masonry = this.masonry || c.masonry; }.bind(this)}
                    styleName={'gallery-items'} // default ''
                    elementType={'ul'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >

                    {elements.map((elementData) => {

                        return <GalleryElement
                            element={elementData}
                            onClick={this.onClickElement.bind(this, elementData)}
                            key={elementData.id}
                        />

                    }
                    )}
                </Masonry>
            </div>
            )
        } else {
            return <div>Loading</div>;
        }
    }
}


export default connect(() => ({}), {
    expand
})(Gallery);