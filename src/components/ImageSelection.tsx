import React, { ChangeEvent } from 'react';
import loadImage from 'blueimp-load-image';
import { FileBlobOrURL } from '../Types';

interface Props {
  onChange: (imageFile: FileBlobOrURL | null) => void;
}

class ImageSelection extends React.Component<Props> {
  constructor(props: any){
    super(props);

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
  
    document.addEventListener('paste', this.handlePaste);
  }
  
  // https://ourcodeworld.com/articles/read/491/how-to-retrieve-images-from-the-clipboard-with-javascript-in-the-browser
  handlePaste(e: ClipboardEvent) {
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
      this.props.onChange(blob);
      return;
    }
  }

  handleFileChange(event: any) {
    this.props.onChange(event.target.files[0])
  }

  handleURLChange(event: any) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <form>
        {/*
        <div className="form-group">
          <input id="url" type="url" placeholder="URL" className="form-control" onChange={this.handleURLChange} />
        </div>
        */}
        <div className="form-group custom-file">
          <input id="imageFile" type="file" className="custom-file-input" onChange={this.handleFileChange} />
          <label className="custom-file-label" htmlFor="imageFile">Select an image file</label>
        </div>
        <div className="mt-2">
        {/*or <strong>drag & drop</strong> an image file, <br />*/}
        or <strong>paste</strong> an image <small>(<strong>Ctrl+V</strong> or <strong>⌘+V</strong>)</small>.
        </div>
      </form>
    );
  }
}

export default ImageSelection;
