import { Colors, Translate } from 'context/data/settings'
import store, { RootState } from 'context/store'
import { useSelector } from 'react-redux'

export const setColor = (color: Colors) =>
  store.dispatch.settings.SET_COLOR(color)

export const setModal = (modal: boolean) =>
  store.dispatch.settings.SET_MODAL(modal)

export const setLoading = (loading: boolean) =>
  store.dispatch.settings.SET_LOADING(loading)

export const setUserAddress = () => store.dispatch.settings.SHOW_ADDRESS()

export const setUserDetails = () => store.dispatch.settings.SHOW_DETAILS()

export const setUser = (user: string) =>
  store.dispatch.settings.CHANGE_ADDRESS(user)

export const resetTree = () => store.dispatch.settings.resetTree()

export const setTranslate = (translate: Translate) =>
  store.dispatch.settings.SET_TRANSLATE(translate)

const useSettings = () => useSelector((state: RootState) => state.settings)

export default useSettings
