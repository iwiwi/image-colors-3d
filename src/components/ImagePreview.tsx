import React from "react";
import loadImage from "blueimp-load-image";
import { FileBlobOrURL } from "../Types";

interface Props {
  imageFile: FileBlobOrURL;
  onError: (errorMessage: string) => void;
}

interface State {
  imgSrc: string | null;
}

class ImagePreview extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      imgSrc: null
    };

    loadImage(
      props.imageFile,
      data => {
        if (data instanceof Event) {
          this.props.onError("Loading image file failed");
        } else if (data instanceof HTMLImageElement) {
          alert("image!");
        } else {
          this.setState({ imgSrc: data.toDataURL() });
        }
      },
      {
        canvas: true
      }
    );
  }

  render() {
    if (this.state.imgSrc === null) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      return (
        <img
          src={this.state.imgSrc}
          style={{ maxWidth: "100%" }}
          className="d-block mx-auto"
          alt="preview"
        />
      );
    }
  }
}

export default ImagePreview;
