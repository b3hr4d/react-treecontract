import { Color, colors } from '@mui/material'
import { createModel } from '@rematch/core'
import { Colors, SettingsState } from 'context/data/settings'
import { RootModel } from 'context/store'
import { throttle } from 'helpers'

const defaultState: SettingsState = {
  translate: { x: 0, y: 0, height: 500, width: 0 },
  user: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  loading: true,
  showAddress: true,
  showDetails: false,
  color: colors['blue'],
  modal: false,
}

const settings = createModel<RootModel>()({
  state: defaultState,
  reducers: {
    SET_COLOR: (state, color: Colors) => ({
      ...state,
      color: colors[color] as Color,
    }),
    SET_MODAL: (state, modal: boolean) => ({
      ...state,
      modal,
    }),
    SET_LOADING: (state, loading: boolean) => ({
      ...state,
      loading,
    }),
    SET_TRANSLATE: (state, translate) => ({
      ...state,
      loading: false,
      translate,
    }),
    SHOW_ADDRESS: (state) => {
      return {
        ...state,
        showAddress: !state.showAddress,
      }
    },
    SHOW_DETAILS: (state) => {
      return {
        ...state,
        showDetails: !state.showDetails,
      }
    },
    CHANGE_ADDRESS: (state, user: string) => {
      return {
        ...state,
        user,
      }
    },
  },

  effects: (dispatch) => ({
    resetTree: () => {
      dispatch.settings.SET_LOADING(true)

      throttle(() => {
        console.log('Reset')
        dispatch.settings.SET_LOADING(false)
      }, 100)
    },
  }),
})

export default settings
