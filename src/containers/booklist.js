import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  // Whatever is returned below shows up as props inside of BookList above
  return {
    books: state.books
  };
}

// Anything returned from this function becomes props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the results is passed to the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from component to a container -
// In order to know about dispatch method selectBook, make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
