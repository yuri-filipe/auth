import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreTypes } from "../../store";

const filter = (value: string | null) => {
  if (value && value === "sucess") {
    return (
      <Alert severity="success" sx={{ width: "100%" }}>
        <AlertTitle>Sucess</AlertTitle>
        Login realizado com sucesso - <strong>Escolha um serviço</strong>
      </Alert>
    );
  } else if (value === "warning") {
    return (
      <Alert severity="warning" sx={{ width: "100%" }}>
        <AlertTitle>Warning</AlertTitle>
        Ops! suas credenciais estão incorretas - <strong>Verifique-as</strong>
      </Alert>
    );
  } else if (value === "error") {
    return (
      <Alert severity="error" sx={{ width: "100%" }}>
        <AlertTitle>Error</AlertTitle>
        Ops! parece que o servidor está offline - <strong>Verifique-o</strong>
      </Alert>
    );
  }
};

export const Index = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state: StoreTypes) => state.Interface.alert);
  const handleClose = () => {
    dispatch({ type: "alert", payload: null });
  };

  return (
    <Snackbar
      open={alert !== null}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      {filter(alert)}
    </Snackbar>
  );
};
export default Index;
