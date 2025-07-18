import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: ""
    },
    address: {
      street: "",
      city: ""
    }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("company.")) {
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, name: value },
      }));
    } else if (name.startsWith("address.")) {
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [name.split(".")[1]]: value },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Name" value={user.name} onChange={handleChange} className="input" />
          <input name="username" placeholder="Username" value={user.username} onChange={handleChange} className="input" />
          <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="input" />
          <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="input" />
          <input name="website" placeholder="Website" value={user.website} onChange={handleChange} className="input" />
          <input name="company.name" placeholder="Company Name" value={user.company.name} onChange={handleChange} className="input" />
          <input name="address.street" placeholder="Street" value={user.address.street} onChange={handleChange} className="input" />
          <input name="address.city" placeholder="City" value={user.address.city} onChange={handleChange} className="input" />

          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-gray-800">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
