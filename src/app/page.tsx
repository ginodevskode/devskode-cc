// app/page.tsx
"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { fetchData } from "@/utils/helpers";
import { useRouter } from "next/navigation";

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);
  const posts = useSelector((state: RootState) => state.posts);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem("authToken");
    if (storedData) {
      fetchData(dispatch);
    } else {
      router.push("/login");
    }
  }, [dispatch]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Posts</p>
      {posts.posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      ))}
      <p>Users</p>
      {users.users.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </main>
  );
}
