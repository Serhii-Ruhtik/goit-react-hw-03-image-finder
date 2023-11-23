import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios').default;
const apiUrl =
  'https://pixabay.com/api/?q=cat&page=1&key=40101841-4ad239ae4368ab22455fec4a5&image_type=photo&orientation=horizontal&per_page=12';
// const apiKey = '40101841-4ad239ae4368ab22455fec4a5';

class App extends Component {
  state = {
    results: [],
    q: '',
    page: 1,
    totalImages: 0,
    loading: false,
  };

  componentDidMount() {
    axios
      .get(apiUrl, { params: this.state })
      .then(response => {
        console.log(response.data);
      })

      .catch(error => {
        console.error('Error:', error);
      });
  }

  getQuery = formData => {
    this.setState({ query: formData });
  };

  render() {
    // const { data } = this.state;
    return (
      <>
        <Searchbar getQuery={this.getQuery} />
        <Loader />
        <ImageGallery />
        <ImageGalleryItem />

        {/* <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        /> */}
      </>
    );
  }
}
export default App;
