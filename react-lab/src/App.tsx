import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import { User } from "./types/User";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  /* Your states here */
  const [users, setUsers] = useState<User[]>([
    {
      id: uuidv4(),
      fullname: "John Smith",
      age: 32,
      education: "College",
      gender: "other",
      skills: ["Node"],
      bio: "Super smart",
    },
    {
      id: uuidv4(),
      fullname: "Jane Doe",
      age: 38,
      education: "Grade School",
      gender: "other",
      skills: ["React", "TypeScript"],
      bio: "Super super smart",
    },
  ]);

  const [isView, setIsView] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

  /* Your handlers here */
  const handleAddUser = (user: Omit<User, "id">) => {
    const newUser = {
      ...user,
      id: uuidv4(),
    };
    setUsers((prevState) => [...prevState, newUser]);
    setIsView(true);
    setSelectedUser(newUser);
  };

  const handleDeleteUser = (id: string) =>
    setUsers((prevState) => prevState.filter((user) => user.id !== id));

  const handleViewUser = (id: string) => {
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) return;
    setSelectedUser(foundUser);
    setIsView(true);
  };

  const handleUpdateUser = (editedUser: User) => {
    setUsers((prevState) =>
      prevState.map((user) =>
        user.id === editedUser.id ? { ...user, ...editedUser } : user
      )
    );
    setIsView(true);
    setSelectedUser(editedUser);
    setUserToEdit(null);
  };

  const handleEditUser = (id: string) => {
    const found = users.find((user) => user.id === id);
    if (found) {
      setUserToEdit(found);
    } else {
      setUserToEdit(null);
    }
    setIsView(false);
  };

  return (
    <>
      <UserForm
        onAdd={handleAddUser}
        onUpdate={handleUpdateUser}
        userToEdit={userToEdit}
      />
      <ul>
        {users.map((user) => (
          <UserList
            key={user.id}
            user={user}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
            onView={handleViewUser}
          />
        ))}
      </ul>
      {isView && selectedUser ? <UserProfile user={selectedUser} /> : null}
    </>
  );
};

export default App;
