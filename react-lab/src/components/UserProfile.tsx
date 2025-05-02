import { SiMongodb, SiTypescript } from "react-icons/si";
import { User } from "../types/User";
import { FaNode, FaReact } from "react-icons/fa";

type Props = {
  user: User;
};
const UserProfile = ({ user }: Props) => {
  return (
    <div
      style={{
        borderTop: "1px solid #191919",
        marginTop: "2rem",
      }}
    >
      <h3>{user.fullname}'s Info</h3>
      <div>
        <ul style={{ paddingLeft: 0 }}>
          <li
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <span>Full name:</span>
            <strong>{user.fullname}</strong>
          </li>
          <li
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <span>Age:</span>
            <strong>{user.age}</strong>
          </li>
          <li
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <span>Education:</span>
            <strong>{user.education}</strong>
          </li>
          <li
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <span>Gender:</span>
            <strong>{user.gender}</strong>
          </li>
          <li
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <span>Bio:</span>
            <strong>{user.bio}</strong>
          </li>
          <li
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Skills:</span>
            <strong>
              {user.skills.map((skill, index) => (
                <span key={index} style={{ fontSize: "30px" }}>
                  {skill === "Node" && <FaNode />}
                  {skill === "TypeScript" && <SiTypescript />}
                  {skill === "React" && <FaReact />}
                  {skill === "NoSQL" && <SiMongodb />}
                  {index < user.skills.length - 1 && ", "}
                </span>
              ))}
            </strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
