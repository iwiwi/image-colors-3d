import React, { ChangeEvent } from 'react';
import loadImage from 'blueimp-load-image';

interface Props {
  onChange: (file_blob_or_url: File | Blob | string | null) => void;
}

interface LocalState {
  file: string;
  img: HTMLImageElement | null;
}

class ImageSelection extends React.Component<Props, LocalState>  {
  constructor(props: any){
    super(props);
    this.state = {
      file: "",
      img: null,
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
  
    document.addEventListener('paste', this.handlePaste);
  }
  
  // https://ourcodeworld.com/articles/read/491/how-to-retrieve-images-from-the-clipboard-with-javascript-in-the-browser
  handlePaste(e: ClipboardEvent) {
    //alert('pasted!');

    if (e.clipboardData === null) {
      return;
    }

    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; ++i) {
      const item = items[i];
      if (item.type.indexOf("image") == -1) {
          continue;
      }
      let blob = item.getAsFile();
      //alert('image found!');
      //this.updateImage(blob);
      this.props.onChange(blob);
      return;
    }

    //alert('image not found!"');
  }

  updateImage(file_blob_or_url: any) {
    const options = {
      
    }

    loadImage(
      file_blob_or_url,
      (data) => {
        if (data instanceof Event) {
          alert('error!');
        } else if (data instanceof HTMLImageElement) {
          alert('image!');
          // this.setState({file: data.src, img: data});
        } else {
          alert('canvas!');
          this.setState({file: data.toDataURL()});
        }
      },
      {
        maxWidth: 600,
        canvas: true,
      },
    );

  }

  handleFileChange(event: any) {
    //this.updateImage(event.target.files[0]);
    this.props.onChange(event.target.files[0])
  }

  handleURLChange(event: any) {
    //this.updateImage(e.target.value);
    this.props.onChange(event.target.value);
  }

  render() {
    //     {this.state.img === null ? "" : this.state.img}
    return (
      <div>
        <input type="file" onChange={this.handleFileChange} />
        <input id="url" type="url" placeholder="URL"  onChange={this.handleURLChange} />
        <img src={this.state.file}/>
      </div>
    );
  }
}

export default ImageSelection;
