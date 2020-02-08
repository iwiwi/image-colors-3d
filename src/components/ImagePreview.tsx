import React, { ChangeEvent } from 'react';
import loadImage from 'blueimp-load-image';

interface Props {
    fileBlobOrURL: File | Blob | string;
}

interface State {
    img_src: string | null;
}

class ImagePreview extends React.Component<Props, State>  {
  constructor(props: Props){
    super(props);
    this.state = {
      img_src: null,
    };

    loadImage(
        props.fileBlobOrURL,
        (data) => {
            if (data instanceof Event) {
              alert('error!');
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
        return "";
    } else {
        return <img src={this.state.img_src} style={{ maxWidth: "100%" }} />
    }
  }
}

export default ImagePreview;
