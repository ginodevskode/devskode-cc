"use client";
import { Button, TextField, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useForm } from "react-hook-form";
import userSchema from "@/validations/users";
import { joiResolver } from "@hookform/resolvers/joi";
import Link from "next/link";

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: joiResolver(userSchema) });

  return (
    <div className="flex min-h-screen flex-col justify-center">
      <div className="w-full flex justify-center">
        <form className="p-10 max-w-3xl w-full">
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
              <TextField
                {...register("email")}
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                fullWidth
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
                {...register("password")}
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                fullWidth
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
    </div>
  );
};

export default Login;
