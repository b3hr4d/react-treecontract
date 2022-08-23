import { RootState, store } from "context/models/store";
import { Colors, Translate } from "context/types/global";
import { useSelector } from "react-redux";

export const setColor = (color: Colors) =>
  store.dispatch.global.SET_COLOR(color);

export const setLoading = (loading: boolean) =>
  store.dispatch.global.SET_LOADING(loading);

export const setUserAddress = () => store.dispatch.global.SHOW_ADDRESS();

export const setUserDetails = () => store.dispatch.global.SHOW_DETAILS();

export const setUser = (user: string) =>
  store.dispatch.global.CHANGE_ADDRESS(user);

export const resetTree = () => store.dispatch.global.resetTree();

export const setTranslate = (translate: Translate) =>
  store.dispatch.global.SET_TRANSLATE(translate);

const useGlobal = () => useSelector((state: RootState) => state.global);

export default useGlobal;
