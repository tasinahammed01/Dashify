import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaPen,
} from "react-icons/fa";

const Profile = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [userDatas, setUserDatas] = useState([]);

  console.log(userDatas);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    e.preventDefault();
    const formData = new FormData(data.target);
    const userData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      bio: formData.get("bio"),
      country: formData.get("country"),
      city: formData.get("city"),
      state: formData.get("state"),
      postalCode: formData.get("postalCode"),
      taxId: formData.get("taxId"),
      linkedIn: formData.get("linkedIn"),
      twitter: formData.get("twitter"),
      github: formData.get("github"),
      instagram: formData.get("instagram"),
    };
    reset();

    setUserDatas(userData);
  };

  // Fetch events using fetch API
  const fetchUserInfo = async () => {
    try {
      const response = await fetch("http://localhost:5000/userProfile");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setUserInfo(data); // Save fetched events into state
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Fetch events when component mounts
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleEdit = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="bg-base-300 p-8 rounded-2xl shadow-md  mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Profile</h1>

        <div>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            <FaPen className="w-5 h-5" />
          </button>

          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-4xl">
              <h3 className="font-bold text-2xl mb-6 text-center">
                Edit Profile
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* First Name */}
                <div className="form-control flex flex-col gap-4">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="input input-bordered"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                {/* Last Name */}
                <div className="form-control flex flex-col gap-4">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="input input-bordered"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="form-control flex flex-col gap-4">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="input input-bordered"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="form-control flex flex-col gap-4">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="input input-bordered"
                    {...register("phone")}
                  />
                </div>

                {/* Bio */}
                <div className="form-control flex flex-col gap-4 md:col-span-2">
                  <label className="label">
                    <span className="label-text">Bio</span>
                  </label>
                  <textarea
                    placeholder="Write a short bio"
                    className="textarea textarea-bordered"
                    rows="3"
                    {...register("bio")}
                  ></textarea>
                </div>

                {/* Country */}
                <div className="form-control flex flex-col gap-4">
                  <label className="label">
                    <span className="label-text">Country</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter country"
                    className="input input-bordered"
                    {...register("country")}
                  />
                </div>

                {/* City */}
                <div className="form-control flex flex-col gap-4">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    className="input input-bordered"
                    {...register("city")}
                  />
                </div>

                {/* State */}
                <div className="form-control flex flex-col gap-4">
                  <label className="label">
                    <span className="label-text">State</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter state"
                    className="input input-bordered"
                    {...register("state")}
                  />
                </div>

                {/* Postal Code */}
                <div className="form-control flex flex-col gap-4">
                  <label className="label">
                    <span className="label-text">Postal Code</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter postal code"
                    className="input input-bordered"
                    {...register("postalCode")}
                  />
                </div>

                {/* Tax ID */}
                <div className="form-control flex flex-col gap-4 md:col-span-2">
                  <label className="label">
                    <span className="label-text">Tax ID</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter tax ID"
                    className="input input-bordered"
                    {...register("taxId")}
                  />
                </div>

                {/* LinkedIn */}
                <div className="form-control flex flex-col gap-4">
                  <label className="label">
                    <span className="label-text">LinkedIn</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter https://linkedin.com/in/your-profile"
                    className="input input-bordered"
                    {...register("linkedIn")}
                  />
                </div>

                {/* Twitter */}
                <div className="form-control flex flex-col gap-4">
                  <label className="label">
                    <span className="label-text">Twitter</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter https://twitter.com/in/your-profile"
                    className="input input-bordered"
                    {...register("twitter")}
                  />
                </div>

                {/* Github */}
                <div className="form-control flex flex-col gap-4">
                  <label className="label">
                    <span className="label-text">Github</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter https://github.com/in/your-profile"
                    className="input input-bordered"
                    {...register("github")}
                  />
                </div>

                {/* Instagram */}
                <div className="form-control flex flex-col gap-4">
                  <label className="label">
                    <span className="label-text">Instagram</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter https://instagram.com/in/your-profile"
                    className="input input-bordered"
                    {...register("instagram")}
                  />
                </div>

                {/* Submit Button */}
                <div className="form-control md:col-span-2 mt-4">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>

              <div className="modal-action mt-6">
                <form method="dialog" className="w-full flex justify-end gap-4">
                  <button className="btn btn-outline">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      <div className="md:flex items-center justify-between w-full mb-8">
        <div className="flex items-center mb-4">
          <img
            className="w-25 h-25 object-cover rounded-full mr-4"
            src="https://i.ibb.co.com/S3KN0By/front-end-developer.png"
            alt=""
          />
          <div>
            <h2 className="text-xl font-semibold">Tanjid Ahammed</h2>
            <p className="text-gray-600">
              MERN Stack Developer | Chittagong , Bangladesh
            </p>
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/tanjid-ahammed-tasin-977508280/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 shadow-md hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <FaLinkedinIn className="text-white text-xl group-hover:rotate-12" />
          </a>
          <a
            href="https://x.com/tasin_ahammed01"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-gradient-to-tr from-sky-400 to-sky-600 shadow-md hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <FaTwitter className="text-white text-xl group-hover:rotate-12" />
          </a>
          <a
            href="https://github.com/tasinahammed01"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-gradient-to-tr from-gray-800 to-black shadow-md hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <FaGithub className="text-white text-xl group-hover:rotate-12" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-gradient-to-tr from-pink-500 to-pink-700 shadow-md hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <FaInstagram className="text-white text-xl group-hover:rotate-12" />
          </a>
        </div>
      </div>

      <div>
        {userInfo.map((user) => (
          <div key={user._id} className="mb-4">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                Personal Information
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-500 text-sm">First Name</p>
                  <p className="font-medium">{user.firstName}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Last Name</p>
                  <p className="font-medium">{user.lastName}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Email address</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="font-medium">{user.phone}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-500 text-sm">Bio</p>
                <p className="font-medium">{user.bio}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                Address
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Country</p>
                  <p className="font-medium">{user.country}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">City/State</p>
                  <p className="font-medium">{user.cityState}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                Tax Information
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-sm">Partial Code</p>
                  <p className="font-medium">{user.partialCode}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">TAX ID</p>
                  <p className="font-medium">{user.taxId}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div>
        {isClicked && (
          
        )}
      </div> */}
    </div>
  );
};

export default Profile;
