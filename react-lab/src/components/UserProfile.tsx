import { User } from "../types/User";

type Props = {
  user: User;
};
const UserProfile = ({ user }: Props) => {
  return (
    <div>
      <h3>{user.fullname}'s Info</h3>
      <p>
        age: {user.age} / education: {user.education} / gender: {user.gender} /
        bio: {user.bio}
      </p>
    </div>
  );
};

export default UserProfile;
