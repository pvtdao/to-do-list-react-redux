import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class Sort extends Component {
  onSort = (sortBy, sortValue) => {
    this.props.onSort({
      sortBy,
      sortValue,
    });
  };

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort <span className="fa fa-caret-square-o-down ml-1" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li
              className={
                this.props.sort.sortBy === "name" &&
                this.props.sort.sortValue === 1
                  ? "sort_selected"
                  : " "
              }
            >
              <a role="button" onClick={() => this.onSort("name", 1)}>
                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
              </a>
            </li>
            <li
              className={
                this.props.sort.sortBy === "name" &&
                this.props.sort.sortValue === -1
                  ? "sort_selected"
                  : " "
              }
            >
              <a role="button" onClick={() => this.onSort("name", -1)}>
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li
              className={
                this.props.sort.sortBy === "status" &&
                this.props.sort.sortValue === 1
                  ? "sort_selected"
                  : " "
              }
            >
              <a role="button" onClick={() => this.onSort("status", 1)}>
                Active & Hidden status
              </a>
            </li>
            {/* <li
              className={
                this.props.sortBy === "status" && this.props.sortValue === 2
                  ? "sort_selected"
                  : " "
              }
            >
              <a role="button" onClick={() => this.onSort("status", 2)}>
                Hidden status
              </a>
            </li> */}
            <li
              className={
                this.props.sort.sortBy === "status" &&
                this.props.sort.sortValue === -1
                  ? "sort_selected"
                  : " "
              }
            >
              <a role="button" onClick={() => this.onSort("status", -1)}>
                Process status
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sort: state.sortTask,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: (sort) => {
      dispatch(actions.sortTask(sort));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
