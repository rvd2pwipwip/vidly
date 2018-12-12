import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (i, c) => {
    if (c.content) return c.content(i);
    return _.get(i, c.path);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(i => (
          <tr>
            {columns.map(c => (
              <td>{this.renderCell(i, c)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
