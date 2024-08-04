import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useEffect } from "react";

const Modal = ({
  toggleModalOpen,
  user,
}: {
  user: {
    id: number;
    photo_url: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  };
  toggleModalOpen: () => void;
}) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("first_name", user.first_name);
  }, [user, setValue]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="w-9/12 max-w-3xl p-8 bg-black rounded grid gap-10">
        <div className="flex justify-between">
          <div>
            <button className="mr-2" onClick={toggleModalOpen}>
              X
            </button>
            <span className="text-xl font-bold">Edit profile</span>
          </div>
          <button
            className="bg-white px-3 py-1 text-black font-bold rounded-full"
            onClick={toggleModalOpen}
          >
            Save
          </button>
        </div>
        <Image
          src={user.photo_url}
          alt="profile picture"
          width={90}
          height={90}
          className="rounded-full"
        />
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
          label="Location"
          variant="outlined"
          fullWidth
          {...register("location")}
          error={!!errors.location}
          helperText={errors.location ? String(errors.location.message) : ""}
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
  );
};

export default Modal;
