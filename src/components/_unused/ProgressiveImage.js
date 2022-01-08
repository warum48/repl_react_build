import React, { Component } from "react";
import PropTypes from "prop-types";

class ProgressiveImage extends Component {
  static defaultProps = {
    alt: ""
  };

  constructor(props) {
    super(props);
    // initially set loading to true and current src of image to placeholder image
    this.state = {
      loading: true,
      currentSrc: props.placeholder
    };
  }

  componentDidMount() {
    const { src } = this.props;
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () =>
      // When image is loaded replace the image's src and set loading to false
      this.setState({ currentSrc: src, loading: false });
  }

  componentDidUpdate(prevProps) {
    /*if (prevProps.text !== this.props.text) {
      this.updateAndNotify();
    }*/
    /*const { src } = this.props.src;
    const { placeholder } = this.props.placeholder;*/
    if (prevProps.src !== this.props.src) {
      const { src } = this.props;
      const { placeholder } = this.props;
      this.setState({ currentSrc: placeholder, loading: true });
      // start loading original image
      const imageToLoad = new Image();
      imageToLoad.src = src;
      imageToLoad.onload = () =>
        // When image is loaded replace the image's src and set loading to false
        this.setState({ currentSrc: src, loading: false });
    }
  }

  render() {
    const { currentSrc, loading } = this.state;
    const { alt } = this.props;
    return (
      <img
        src={currentSrc}
        className="_ProgressiveImage"
        style={{
          opacity: loading ? 0.5 : 1,
          transition: "opacity .15s linear",
          maxWidth: "100%"
          //filter: loading ? "blur(20px)" : "none",
          //transition: loading ? "none" : "filter 0.3s ease-out"
        }}
        alt={alt}
      />
    );
  }
}

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ProgressiveImage;
