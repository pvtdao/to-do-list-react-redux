import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: 1,
    };
  }

  componentWillMount() {
    if (this.props.itemEditing) {
      let { itemEditing } = this.props;
      this.setState({
        id: itemEditing.id,
        name: itemEditing.name,
        status: itemEditing.status,
      });
    } else {
      this.setState({
        id: "",
        name: "",
        status: 2,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      let { itemEditing } = nextProps;

      this.setState({
        id: itemEditing.id,
        name: itemEditing.name,
        status: itemEditing.status,
      });
    } else {
      this.setState({
        id: "",
        name: "",
        status: 2,
      });
    }
  }

  onChangeFn = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  onClearFn = () => {
    this.setState({
      name: "",
      status: 1,
    });
  };

  onSubmitFn = (e) => {
    // this.props.getData(this.state);
    e.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClearFn();
    this.props.onCloseForm();
  };

  showTitle = () => {
    if (this.state.id === "") {
      return "New task";
    } else {
      return "Edit task";
    }
  };

  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 border p-2">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h2 className="panel-title text-center">{this.showTitle()}</h2>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmitFn}>
              <div className="form-group">
                <label>Name :</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChangeFn}
                />
              </div>
              <label>Status :</label>
              <select
                className="form-control"
                required="required"
                name="status"
                value={this.state.status}
                onChange={this.onChangeFn}
              >
                <option value={0}>Hidden</option>
                <option value={1}>Active</option>
                <option value={2}>On process..</option>
              </select>
              <br />
              <div className="text-right">
                <button type="submit" className="btn btn-block btn-warning">
                  Save
                </button>
                &nbsp;
                {/* <button type="submit" className="btn btn-danger">
                  Cancel
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};

// chuyển action thành props
const mapDispatchToProps = (dispatch, props) => {
  return {
    // Cặp keyvalue, key này sẽ là props của component
    // Vì là thêm task mới nên sẽ có tham số đầu vào là task
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);
