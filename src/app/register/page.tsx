"use client";
import { Button, TextField, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Link from "next/link";
import { useState } from "react";

import { registerSchema } from "@/validations/users";
import { signupData, ToastStyle } from "@/utils/interfaces";
import { Toast } from "@/sharedComponents/toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupData>({
    mode: "onChange",
    resolver: joiResolver(registerSchema),
  });
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<ToastStyle>();

  const onSubmit = (data: signupData) => {
    console.log(data);
    setOpen(true);
    setMessage("Registration successful!");
    setType("success");
  };

  return (
    <div className="flex min-h-screen flex-col justify-center">
      <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-6">
          <TwitterIcon sx={{ color: "#1DA1F2", fontSize: "50px" }} />
          <Typography
            variant="h4"
            component="h4"
            sx={{ color: "white", fontWeight: "900" }}
          >
            Create your account
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <TextField
                label="First Name"
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
            </div>
            <div>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                {...register("last_name")}
                error={!!errors.last_name}
                helperText={
                  errors.last_name ? String(errors.last_name.message) : ""
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
            </div>
            <div>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                {...register("username")}
                error={!!errors.username}
                helperText={
                  errors.username ? String(errors.username.message) : ""
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
            </div>
            <div>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email ? String(errors.email.message) : ""}
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
            <div>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                {...register("password")}
                error={!!errors.password}
                helperText={
                  errors.password ? String(errors.password.message) : ""
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
            </div>
            <div>
              <TextField
                label="Repeat Password"
                variant="outlined"
                type="password"
                fullWidth
                {...register("repeat_password")}
                error={!!errors.repeat_password}
                helperText={
                  errors.repeat_password
                    ? String(errors.repeat_password.message)
                    : ""
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
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Button
              variant="contained"
              color="primary"
              className="py-3"
              fullWidth
              type="submit"
              sx={{
                backgroundColor: "#1DA1F2",
                maxWidth: "400px",
                borderRadius: "76px",
                "&:hover": {
                  backgroundColor: "#1DA1F2",
                },
              }}
            >
              Signup
            </Button>
            <Link href="/login">
              <Typography sx={{ color: "#1DA1F2" }}>
                Already have an account? Login
              </Typography>
            </Link>
          </div>
        </div>
      </form>
      <Toast message={message} type={type} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Register;
