import { AppDispatch } from "@/redux/store";
import { setPosts } from "@/redux/posts/postSlice";
import { setUsers } from "@/redux/users/userSlice";
export const fetchData = async (dispatch: AppDispatch) => {
    const response = await fetch("/api/data");
    const data = await response.json();
    dispatch(setUsers(data.users));
    dispatch(setPosts(data.posts));
};