import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { User } from "../types/User";

type Props = {
  onAdd: (users: Omit<User, "id">) => void;
  onUpdate: (user: User) => void;
  userToEdit: User | null;
};
const UserForm = ({ onAdd, onUpdate, userToEdit }: Props) => {
  const [formData, setFormData] = useState<User>({
    id: "",
    fullname: "",
    age: 0,
    education: "",
    gender: "",
    skills: [],
    bio: "",
  });
  useEffect(() => {
    if (userToEdit) {
      setFormData({
        id: userToEdit.id,
        fullname: userToEdit.fullname,
        age: userToEdit.age,
        education: userToEdit.education,
        gender: userToEdit.gender,
        skills: [],
        bio: userToEdit.bio,
      });
    }
  }, [userToEdit]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    // const checked = (e.target as HTMLInputElement).checked;
    // if (type === "checkbox") {
    //   setFormData((prevState) => {
    //     console.log([...prevState.skills]);
    //     const updateSkill = checked
    //       ? [...prevState.skills, value]
    //       : // : prevState.skills;
    //         prevState.skills.filter((level) => level !== value);
    //     console.log(updateSkill);
    //     return { ...prevState, skills: updateSkill };
    //   });
    // const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    //   const { value, checked } = e.target;
    //   setFormData((prevState) => {
    //     const updateFavFoods = checked
    //       ? [...prevState.favoriteFoods, value]
    //       : prevState.favoriteFoods.filter((level) => level !== value);
    //     return { ...prevState, favoriteFoods: updateFavFoods };
    //   });
    // };
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updateSkills = checked
        ? [...prevState.skills, value]
        : prevState.skills.filter((level) => level !== value);
      return { ...prevState, skills: updateSkills };
    });
  };

  const handleSumit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userToEdit) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }
    handleClean();
  };

  const handleClean = () => {
    setFormData({
      id: "",
      fullname: "",
      age: 0,
      education: "",
      gender: "",
      skills: [],
      bio: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSumit}>
        <input
          type="text"
          name="fullname"
          placeholder="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <select
          name="education"
          value={formData.education}
          onChange={handleInputChange}
        >
          <option value="">Select your education</option>
          <option value="Grade School">Grade School</option>
          <option value="High School">High School</option>
          <option value="College">College</option>
        </select>
        <fieldset>
          <label>
            Male
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleInputChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleInputChange}
            />
          </label>
          <label>
            Other
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleInputChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            TypeScript
            <input
              type="checkbox"
              name="skills"
              checked={formData.skills.includes("TypeScript")}
              value="TypeScript"
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            React
            <input
              type="checkbox"
              name="skills"
              checked={formData.skills.includes("React")}
              value="React"
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            Node
            <input
              type="checkbox"
              name="skills"
              checked={formData.skills.includes("Node")}
              value="Node"
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            NoSQL
            <input
              type="checkbox"
              name="skills"
              checked={formData.skills.includes("NoSQL")}
              value="NoSQL"
              onChange={handleCheckboxChange}
            />
          </label>
        </fieldset>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
        ></textarea>
        <button>Add/Save User</button>
      </form>
      <button onClick={handleClean}>Clear</button>
    </div>
  );
};

export default UserForm;
