import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";
import * as actions from "./../actions/index";
import { connect } from "react-redux";

class Control extends Component {
  changeDisplayValue = () => {
    this.props.onToggleForm();
    this.props.onClear({
      id: "",
      name: "",
      status: 2,
    });
  };

  showButton = () => {
    if (this.props.displayValue) {
      return (
        <button
          type="button"
          className="btn btn-danger mb-3"
          onClick={() => this.changeDisplayValue()}
        >
          Cancel
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={() => this.changeDisplayValue()}
        >
          Add new task
        </button>
      );
    }
  };

  onSort = (sortBy, sortValue) => {
    this.props.onSort(sortBy, sortValue);
  };

  render() {
    return (
      <div>
        {this.showButton()}
        <div className="row mt-15 mb-3">
          <Search />
          <Sort />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayValue: state.isDisplayForm,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onClear: (task) => {
      dispatch(actions.editTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Control);
