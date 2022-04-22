import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import ButtonThemeMode from "../components/set_theme/ButtonThemeMode";
import Modal from "../components/modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { StoreTypes } from "../store";
import { useFormik } from "formik";
import * as yup from "yup";
import { auth } from "../services/api";
import Backdrop from "../components/backdrop/Index";
import Alert from "../components/alert/Index";
import RememberButton from "../components/remember/Index";
import usePersistedState from "../hooks/usePersistedState";
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Projeto TYLERS
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}
interface StateProps {
  email: any;
  password: any;
}
export default function Index() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = React.useState<StateProps>({ email: "", password: "" });
  const [state, setState] = usePersistedState<StateProps | null>("credendials", null);
  const formik = useFormik({
    initialValues: {
      email: state ? state.email : "",
      password: state ? state.password : "",
    },
    validationSchema: yup.object({
      email: yup.string().email("E-mail inválido.").required("O email é obrigatório."),
      password: yup.string().required("A senha é obrigatória."),
    }),
    onSubmit: (values) => {
      setCredentials({email:values.email, password:values.password});
      Submit(values);
      dispatch({ type: "toggle_backdrop", payload: true });
    },
  });
  const _theme = useSelector((state: StoreTypes) => state.Interface.theme);
  async function Submit(values: any) {
    const res = await auth(values);
    if (res) {
      dispatch({ type: "toggle_backdrop", payload: false });
      if (res !== "unauthorized") {
        localStorage.setItem("token", JSON.stringify(res.token));
        localStorage.setItem("email", JSON.stringify(res.email));
  
        dispatch({ type: "alert", payload: "sucess" });
        setTimeout(() => {
          dispatch({ type: "toggle_modal", payload: true });
        }, 1000);
      } else if (res === "unauthorized") {
        formik.handleReset("x");
        dispatch({ type: "alert", payload: "warning" });
      }
    } else {
      dispatch({ type: "toggle_backdrop", payload: false });
      dispatch({ type: "alert", payload: "error" });
    }
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Modal />
      <Backdrop />
      <Alert />
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Tylers login
          </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit} style={{ width: 500 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              autoComplete="email"
              autoFocus
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Typography
                style={{
                  color: "#ff6d6d",
                  marginLeft: "5px",
                  fontSize: "15px",
                }}
              >
                {formik.errors.email}
              </Typography>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <Typography
                style={{
                  color: "#f00",
                  marginLeft: "5px",
                  fontSize: "15px",
                }}
              >
                {formik.errors.password}{" "}
              </Typography>
            ) : null}
            <div
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <RememberButton email={credentials.email} password={credentials.password} />
              <ButtonThemeMode />
              <Typography>{_theme === "dark" ? "Tema escuro" : "Tema claro"}</Typography>
            </div>

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Não tem uma conta? Inscrever-se"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
