import { UserDataState } from "context/models/userData";
import { Dispatch, RootState } from "context/store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserDataFunction } from "./types";

const useUserData = (): [UserDataState, UserDataFunction] => {
  const userState = useSelector((state: RootState) => state.userData);
  const { userData } = useDispatch<Dispatch>();

  const setShowAddress = useCallback(() => userData.SHOW_ADDRESS(), [userData]);
  const setShowDetails = useCallback(() => userData.SHOW_DETAILS(), [userData]);

  const setUser = useCallback(
    (user: string) => userData.CHANGE_ADDRESS(user),
    [userData]
  );

  const Register = (user: string, referrer: string) => {
    userData.Register({ user, referrer });
  };

  return [userState, { setShowAddress, setShowDetails, setUser, Register }];
};

export default useUserData;
