import { Color, colors } from '@mui/material'

export interface Translate {
  x: number
  y: number
  height: number
  width: number
}

export type Colors = keyof typeof colors

export interface SettingsState {
  translate: Translate
  loading: boolean
  showAddress: boolean
  showSnackBar: boolean
  snackbar: SnackBarType
  showDetails: boolean
  user: string
  color: Color
  modal: boolean
}

export type SnackBarType = {
  title?: string
  severity?: 'error' | 'warning' | 'info' | 'success'
  message: string
}

export type { Color }
