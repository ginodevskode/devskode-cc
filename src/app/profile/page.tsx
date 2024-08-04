"use client";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import data from "@/data.json";

const Profile = () => {
  const user = data.users[0];

  const goBackClick = () => {
    console.log("back");
  };

  return (
    <section className="text-white">
      <div className="flex flex-col m-4">
        <div className="flex items-center mb-4">
          <IconButton
            onClick={goBackClick}
            style={{
              marginBottom: "20px",
            }}
          >
            <ArrowBackIcon
              sx={{
                color: "white",
                marginRight: "10px",
              }}
            />
          </IconButton>
          <div>
            <div className="flex">
              <h1 className="mr-2">
                {user.first_name} {user.last_name}
              </h1>
              <Image
                src="https://via.placeholder.com/20"
                alt="twitter verification"
                width={20}
                height={20}
              />
            </div>
            <span className="text-gray-400">Post counter</span>
          </div>
        </div>
        <div className="flex justify-between items-end mb-4">
          <Image
            src={user.photo_url}
            alt="profile picture"
            width={110}
            height={110}
            className="rounded-full"
          />
          <button className="h-10 border border-white rounded-full px-4 py-1">
            Edit profile
          </button>
        </div>
        <div>
          <span>
            {user.first_name} {user.last_name}
          </span>
          <Image
            src="https://via.placeholder.com/20"
            alt="twitter verification"
            width={20}
            height={20}
            className="inline-block ml-2"
          />
        </div>
        <div className="text-gray-400">{user.username}</div>
        <div>
          <span className="mr-2">
            user.following
            <span className="text-gray-400"> Following</span>
          </span>
          <span>
            user.followers
            <span className="text-gray-400"> Followers</span>
          </span>
        </div>
        <h2 className="self-center font-bold">Posts</h2>
      </div>
      <div className="min-w-80 w-9/12 h-1 m-auto bg-blue-500"></div>
      <div className="w-full h-1 bg-gray-800"></div>
    </section>
  );
};

export default Profile;
