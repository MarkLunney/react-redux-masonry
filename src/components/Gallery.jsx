import React from "react";
import { connect } from "react-redux";

import Masonry from "react-masonry-component";
import GalleryElement from "./GalleryElement";

import { expand } from "../actions/content";

const masonryOptions = {
  columnWidth: 260,
  transitionDuration: "0.7s",
  itemSelector: ".gallery-item-selector",
  gutter: 20
};

class Gallery extends React.Component {
  constructor() {
    super();
    this.isExpanding = false;
  }

  handleLayoutComplete = () => {
    this.isExpanding = false;
  };

  componentDidMount() {
    this.masonry.on("layoutComplete", this.handleLayoutComplete);
  }

  componentWillUnmount() {
    this.masonry.off("layoutComplete", this.handleLayoutComplete);
  }

  onClickElement(elementData) {
    const { expand } = this.props;

    if (!elementData.isExpanded && !this.isExpanding) {
      this.isExpanding = true;
      expand(elementData.id);
    }
  }

  render() {
    const { elements } = this.props;

    return (
      <div className="gallery">
        <Masonry
          ref={c => {
            this.masonry = this.masonry || c.masonry;
          }}
          className={"gallery-items"} // default ''
          elementType={"ul"} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
          {elements.map(elementData => (
            <GalleryElement
              element={elementData}
              onClick={this.onClickElement.bind(this, elementData)}
              key={elementData.id}
            />
          ))}
        </Masonry>
      </div>
    );
  }
}

export default connect(
  state => ({
    elements: state.content.elements
  }),
  {
    expand
  }
)(Gallery);
