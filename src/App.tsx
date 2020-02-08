import React from 'react';
import bsCustomFileInput from 'bs-custom-file-input';

import logo from './logo.svg';
import './App.css';
import ImageSelection from './components/ImageSelection'
import ImagePreview from './components/ImagePreview'
import HSLPlot from './components/HSLPlot'

type FileBlobOrUrl = File | Blob | string;

const NavBar = () => {
  // view-source:https://bs-custom-file-input.netlify.com/
  return <div className="App">
    <nav className="navbar navbar-expand navbar-dark bg-dark text-white">
      <div className="container">
        <h1 className="mb-0 h5 py-1">Image Color 3D</h1>
      </div>
    </nav>
    </div>
};

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

  componentDidMount() {
    bsCustomFileInput.init()
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
      <div>
        <NavBar />
        <div className="container flex-grow-1 flex-shrink-0 mt-5">
          <div className="row">
            <div className="col-sm-12">
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
          </div>
        </div>
      </div>
    );
  }
}


export default App;
