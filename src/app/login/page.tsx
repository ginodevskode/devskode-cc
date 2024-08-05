"use client";
import { Button, TextField, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Link from "next/link";
import { useState } from "react";

import { loginSchema } from "@/validations/users";
import { loginData, ToastStyle } from "@/utils/interfaces";
import { Toast } from "@/sharedComponents/toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginData>({
    mode: "onChange",
    resolver: joiResolver(loginSchema),
  });

  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<ToastStyle>();

  const onSubmit = async (data: loginData) => {
    const { email, password } = data;
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const { message } = await response.json();
      setMessage(message);
      setType("error");
      setOpen(true);
      return;
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center">
      <div className="w-full flex justify-center">
        <form
          className="p-10 max-w-3xl w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <TwitterIcon sx={{ color: "#1DA1F2", fontSize: "50px" }} />
            <Typography
              variant="h4"
              component="h4"
              sx={{ color: "white", fontWeight: "900" }}
            >
              Log In to Twitter
            </Typography>
            <div className="grid grid-row gap-10">
              <div>
                <TextField
                  label="Email"
                  id="email"
                  fullWidth
                  margin="normal"
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
                  id="password"
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
            </div>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button
                variant="contained"
                type="submit"
                color="primary"
                className="py-3"
                fullWidth
                sx={{
                  backgroundColor: "#1DA1F2",
                  maxWidth: "400px",
                  borderRadius: "76px",
                  "&:hover": {
                    backgroundColor: "#1DA1F2",
                  },
                }}
              >
                Log In
              </Button>
              <Link href="/register">
                <Typography sx={{ color: "#1DA1F2" }}>
                  Don&apos;t have an account? Sign Up
                </Typography>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Toast message={message} type={type} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Login;
