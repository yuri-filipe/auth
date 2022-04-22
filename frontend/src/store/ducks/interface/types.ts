import { PaletteMode } from "@mui/material";
//STATE TYPES
export interface InterfaceType {
  theme: PaletteMode;
  toggle_modal: boolean
  toggle_backdrop: boolean,
  alert: null | string
}
