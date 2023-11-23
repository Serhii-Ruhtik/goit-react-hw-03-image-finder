import { Component } from 'react';

class Searchbar extends Component {
  state = {
    name: '',
  };

  handleChande = event => {
    this.setState({ name: event.target.value });
  };

  handleSabmit = event => {
    event.preventDefault();
    this.props.getQuery(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSabmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleChande}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
