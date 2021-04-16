import React, { Component } from "react";
import TaskListItem from "./TaskListItem";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }

  onFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "filterStatus") {
      value = Number(value);
    }

    let filerData = {
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? Number(value) : this.state.filterStatus,
    };
    this.setState({
      [name]: value,
    });

    this.props.onFilterTable(filerData);
  };

  render() {
    let { tasks, filterTable, keyword, sort } = this.props;

    if (filterTable.name) {
      tasks = tasks.filter((task) => {
        return (
          task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
        );
      });
    }

    if (filterTable.status >= 0) {
      tasks = tasks.filter((task) => {
        if (filterTable.status === -1) {
          return tasks;
        } else {
          if (task.status === filterTable.status) {
            return task.status === filterTable.status;
          }
        }
      });
    }

    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }

    if (sort.sortBy === "name") {
      tasks.sort((a, b) => {
        if (a.name < b.name) {
          return -sort.sortValue;
        }
        if (a.name > b.name) {
          return sort.sortValue;
        }
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status < b.status) {
          return -sort.sortValue;
        } else {
          return sort.sortValue;
        }
      });
    }

    let elmTask = tasks.map((task, index) => {
      return <TaskListItem key={index} taskDetail={task} taskIndex={index} />;
    });

    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="filterName"
                    value={this.state.filterName}
                    onChange={this.onFilter}
                  />
                </td>
                <td>
                  <select
                    className="form-control"
                    name="filterStatus"
                    value={this.state.fitlerStatus}
                    onChange={this.onFilter}
                  >
                    <option value={-1}>All</option>
                    <option value={0}>Hidden</option>
                    <option value={1}>Active</option>
                    <option value={2}>On process</option>
                  </select>
                </td>
                <td />
              </tr>
              {elmTask}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable,
    keyword: state.searchTask,
    sort: state.sortTask,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: (filter) => {
      dispatch(actions.filterTable(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
