import { User } from "../types/User";

type Props = {
  user: User;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
};
const UserList = ({ user, onDelete, onEdit, onView }: Props) => {
  return (
    <li
      key={user.id}
      style={{
        display: "flex",
        gap: "1rem",
        margin: ".5rem 0",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>{user.fullname}</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => onView(user.id)}>View</button>
        <button onClick={() => onEdit(user.id)}>Edit</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    </li>
  );
};

export default UserList;
