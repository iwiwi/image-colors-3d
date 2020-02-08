import React from 'react';
import bsCustomFileInput from 'bs-custom-file-input';

import logo from './logo.svg';
import './App.css';
import ImageSelection from './components/ImageSelection'
import ImagePreview from './components/ImagePreview'
import HSLPlot from './components/HSLPlot'
import { FileBlobOrURL } from './Types'

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
  imageFile: FileBlobOrURL | null;
  errorMessage: string | null;
}

class App extends React.Component<Props, State>  {
  constructor(props: Props){
    super(props);
    this.state = {
      imageFile: null,
      errorMessage: null,
    };

    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentDidMount() {
    bsCustomFileInput.init()
  }

  handleImageChange(file_blob_or_url: FileBlobOrURL | null) {
    if (file_blob_or_url === null) {
      return;
    }

    this.setState({
      imageFile: file_blob_or_url,
    });
  }

  render() {
    let result;
    if (this.state.errorMessage) {
      result = <div className="alert alert-danger mt-5" role="alert">
        <h3>Error</h3>
        { this.state.errorMessage }
      </div>;
    } else if (this.state.imageFile) {
      result =      <div className="row mt-5">
        <div className="col-md-12 col-lg-6">
          <HSLPlot fileBlobOrURL={this.state.imageFile} />
        </div>
        <div className="col-md-12 col-lg-6">
          <ImagePreview fileBlobOrURL={this.state.imageFile} />
        </div>
      </div>;
    } else {
      result = null;
    }

    return (
      <div>
        <NavBar />
        <div className="container flex-grow-1 flex-shrink-0 mt-5">
          <div className="row">
            <div className="col-sm-12">
              <ImageSelection onChange={this.handleImageChange} />
            </div>
          </div>
          { result }
        </div>
      </div>
    );
  }
}


export default App;
