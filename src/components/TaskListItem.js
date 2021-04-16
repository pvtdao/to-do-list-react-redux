import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskListItem extends Component {
  changStatus = (id) => {
    this.props.onUpdateStatus(id);
  };

  deleteTask = (id) => {
    this.props.onDeleteTask(id);
    this.props.onCloseForm();
  };

  updateTask = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.taskDetail);
  };

  showStatus = () => {
    if (this.props.taskDetail.status === 1) {
      return (
        <span
          className="bg-success p-2 rounded text-white cursor-pointer"
          onClick={() => this.changStatus(this.props.taskDetail.id)}
        >
          Active
        </span>
      );
    } else if (this.props.taskDetail.status === 0) {
      return (
        <span
          className="bg-danger p-2 rounded text-white cursor-pointer"
          onClick={() => this.changStatus(this.props.taskDetail.id)}
        >
          Hidden
        </span>
      );
    } else if (this.props.taskDetail.status === 2) {
      return (
        <span
          className="bg-info p-2 rounded text-white cursor-pointer"
          onClick={() => this.changStatus(this.props.taskDetail.id)}
        >
          Processing..
        </span>
      );
    }
  };

  render() {
    return (
      <tr>
        <td>{this.props.taskIndex + 1}</td>
        <td>{this.props.taskDetail.name}</td>
        <td className="text-center align-middle text-white">
          {this.showStatus()}
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.updateTask()}
          >
            <span className="fa fa-pencil mr-1" />
            Edit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.deleteTask(this.props.taskDetail.id)}
          >
            <span className="fa fa-trash mr-1" />
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id));
    },
    onDeleteTask: (id) => {
      dispatch(actions.deleteTask(id));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskListItem);
