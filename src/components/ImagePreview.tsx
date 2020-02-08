import React, { ChangeEvent } from 'react';
import loadImage from 'blueimp-load-image';
import { FileBlobOrURL } from '../Types'

interface Props {
    imageFile: FileBlobOrURL;
    onError: (errorMessage: string) => void;
}

interface State {
    img_src: string | null;
}

class ImagePreview extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      img_src: null,
    };

    loadImage(
        props.imageFile,
        (data) => {
            if (data instanceof Event) {
              this.props.onError("Loading image file failed");
            } else if (data instanceof HTMLImageElement) {
              alert('image!');
            } else {
              this.setState({img_src: data.toDataURL()});
            }
        },
        {
            // maxWidth: "600",
            canvas: true,
        }
    );
  }
  
  render() {
    if (this.state.img_src === null) {
        return <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>
      ;
    } else {
        return <img src={this.state.img_src} style={{ maxWidth: "100%" }} className="d-block mx-auto" />
    }
  }
}

export default ImagePreview;
