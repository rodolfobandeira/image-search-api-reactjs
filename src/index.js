import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends Component {
  state = { images: [] };

  onAppSearchSubmit = async (term) => {
    const response = await unsplash.get('https://api.unsplash.com/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px'}}>
        <SearchBar onAppSearchSubmit={this.onAppSearchSubmit} />
        <p>Found: { this.state.images.length } images</p>
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

export default App;

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);
