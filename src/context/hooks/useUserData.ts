import { RootState, store } from "context/models/store";
import { useSelector } from "react-redux";

export const registerUSer = (user: string, referrer: string) => {
  store.dispatch.userData.registerUser({ user, referrer });
};

const useUserData = () => useSelector((state: RootState) => state.userData);

export default useUserData;
