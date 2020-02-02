import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageSelection from './components/ImageSelection'
import ImagePreview from './components/ImagePreview'
import HSLPlot from './components/HSLPlot'

type FileBlobOrUrl = File | Blob | string;

interface Props {
}

interface State {
  image_file_blob_or_url: FileBlobOrUrl | null;
}

class App extends React.Component<Props, State>  {
  constructor(props: Props){
    super(props);
    this.state = {
      image_file_blob_or_url: null,
    };

    this.handleImageChange = this.handleImageChange.bind(this);
    //document.addEventListener('paste', this.handlePaste);
  }

  handleImageChange(file_blob_or_url: FileBlobOrUrl | null) {
    if (file_blob_or_url === null) {
      return;
    }

    this.setState({
      image_file_blob_or_url: file_blob_or_url,
    });
  }

  render() {
    return (
      <div className="App">
        <ImageSelection onChange={this.handleImageChange} />
        {
          this.state.image_file_blob_or_url === null ?
            "" : 
            <div>
              <ImagePreview fileBlobOrURL={this.state.image_file_blob_or_url} />
              <HSLPlot fileBlobOrURL={this.state.image_file_blob_or_url} />
            </div>
        }
      </div>
    );
  }
}

export default App;
