import "../App.css";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import Control from "./Control";
// import TasksExample from "../TasksExample.json";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

import React, { Component } from "react";

class App extends Component {
  showForm = () => {
    if (this.props.isDisplayForm) {
      return <NewTaskForm />;
    }
  };

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-3 text-center text-uppercase">To do list</h1>
        </div>
        <div className="container">
          <div className="row">
            {this.showForm()}
            <div className="col-xs col-sm col-md col-lg">
              <Control />
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
