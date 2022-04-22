import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreTypes } from "../../store";

export const Index = () => {
  const dispatch = useDispatch();
  const backdrop = useSelector((state: StoreTypes) => state.Interface.toggle_backdrop);
  const handleClose = () => {
    dispatch({ type: "toggle_backdrop", payload: !backdrop });
  };
  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={backdrop} onClick={handleClose}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
export default Index