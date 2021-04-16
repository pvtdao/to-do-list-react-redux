import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  onSearch = (keyword) => {
    this.props.onSearch(keyword);
  };

  onSearchKeyword = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Key..."
            onChange={this.onSearchKeyword}
            name="keyword"
            value={this.state.keyword}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-primary ml-1"
              type="button"
              onClick={() => this.onSearch(this.state.keyword)}
            >
              <span className="fa fa-search" />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.searchTask(keyword))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
