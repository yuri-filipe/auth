import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { StoreTypes } from "../../store";
import Link from "@mui/material/Link";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const styleButton = {
  width: "100%",
  marginTop: "10px",
};

export default function NestedModal() {
  const dispatch = useDispatch();
  const modal = useSelector((state: StoreTypes) => state.Interface.toggle_modal);
  const handleClose = () => {
    dispatch({ type: "toggle_modal", payload: false });
  };
  const getToken = () => {
    const t = localStorage.getItem("token");
    const e = localStorage.getItem("email");
    if (t && e) {
      const token = JSON.parse(t.toString());
      const email = JSON.parse(e.toString());
      return { email, token };
    } else {
      return { email: "", token: "" };
    }
  };

  return (
    <Modal
      open={modal}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: "60vw", height: "60vh" }}>
        <Button style={styleButton} variant="outlined">
          <Link href={`/services?name=caio&token=${getToken().token}&email=${getToken().email}`}>caio system</Link>
        </Button>
        <Button style={styleButton} variant="outlined">
          <Link href={`/services?name=caio2&token=${getToken().token}&email=${getToken().email}`}>
            caio system localhost
          </Link>
        </Button>
        <Button style={styleButton} variant="outlined">
          <Link href="https://portainer.tylers.com.br/">portainer</Link>
        </Button>
      </Box>
    </Modal>
  );
}
