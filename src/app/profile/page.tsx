"use client";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import data from "@/data.json";
import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useForm } from "react-hook-form";
import userSchema from "@/validations/users";
import Link from "next/link";

const Profile = () => {
  const user = data.users[0];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm();

  const goBackClick = () => {
    console.log("back");
  };

  const toggleModalOpen = () => {
    console.log("edit profile");
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="text-white">
      {isModalOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-black p-10 rounded grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex justify-between">
              <div>
                <button className="mr-2" onClick={toggleModalOpen}>
                  X
                </button>
                <span className="text-xl font-bold">Edit profile</span>
              </div>
              <button
                className="bg-white py-2 px-4 text-black font-bold rounded-full"
                onClick={toggleModalOpen}
              >
                Save
              </button>
            </div>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              {...register("first_name")}
              error={!!errors.first_name}
              helperText={
                errors.first_name ? String(errors.first_name.message) : ""
              }
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
            <TextField
              label="Bio"
              variant="outlined"
              fullWidth
              {...register("bio")}
              error={!!errors.bio}
              helperText={errors.bio ? String(errors.bio.message) : ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
            <TextField
              label="Locality"
              variant="outlined"
              fullWidth
              {...register("locality")}
              error={!!errors.locality}
              helperText={
                errors.locality ? String(errors.locality.message) : ""
              }
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
            <TextField
              label="Web"
              variant="outlined"
              fullWidth
              {...register("web")}
              error={!!errors.web}
              helperText={errors.web ? String(errors.web.message) : ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
          </div>
        </div>
      )}
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
            <div className="flex items-center">
              <h1 className="mr-2">
                {user.first_name} {user.last_name}
              </h1>
              <Image
                src="/VerifiedAccount.png"
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
          <button
            className="h-10 border border-white rounded-full px-4 py-1"
            onClick={toggleModalOpen}
          >
            Edit profile
          </button>
        </div>
        <div className="flex items-center">
          <span>
            {user.first_name} {user.last_name}
          </span>
          <Image
            src="/VerifiedAccount.png"
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
