import { Color, colors } from '@mui/material'
import settings from '.'

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
  showDetails: boolean
  user: string
  color: Color
}

export type { Color }

export type SettingsModel = typeof settings
