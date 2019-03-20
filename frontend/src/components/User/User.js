import React from "react";
import { ADMIN_USER } from "../../appConfig";
const User = props => {
  let actionsColumn = props.isAdmin ? (
    <td>
      <a
        onClick={e => {
          e.preventDefault();
          props.editUserRequest(props.user);
        }}
      >
        <span className="icon has-text-black	">
          <i className="fas fa-user-edit" title="edit" />
        </span>
      </a>
      <a
        onClick={e => {
          e.preventDefault();
          props.deleteUser(props.user);
        }}
      >
        <span className="icon has-text-black">
          <i className="fas fa-user-minus" title="remove" />
        </span>
      </a>
    </td>
  ) : null;
  actionsColumn = props.user.username !== ADMIN_USER ? actionsColumn : <td />;

  return (
    <tr key={props.user.email}>
      <td>{props.index}</td>
      <td>{props.user.firstName}</td>
      <td>{props.user.lastName}</td>
      <td>{props.user.username}</td>
      <td>{props.user.mobile}</td>
      <td>{props.user.email}</td>
      <td>{props.user.role}</td>
      {actionsColumn}
    </tr>
  );
};

export default User;
