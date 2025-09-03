import "./ManageUsers.css";
import UserForm from "../../components/UserForm/UserForm";
import UsersList from "../../components/UserList/UserList";

const ManageUsers = () => {
  return (
    <div className="users-container text-light">
      <div className="left-column">
        <UserForm></UserForm>
      </div>
      <div className="right-column">
        <UsersList></UsersList>
      </div>
    </div>
  );
};

export default ManageUsers;
