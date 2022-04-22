import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import usePersistedState from "../../hooks/usePersistedState";

interface PropsType {
  email: any;
  password: any;
}
export default function Index({ email, password }: PropsType) {
  const [state, setState] = usePersistedState<PropsType | null>("credendials", { email: "", password: "" });
  const [checked, setChecked] = usePersistedState<boolean>("remember", false);
  const handleChange = (event: React.SyntheticEvent, checked: boolean) => {
    setChecked(checked);
  };
  React.useEffect(() => {
    if (email && password && checked) {
      setState({ email, password });
    }
  }, [email, password, checked]);
  return (
    <FormControlLabel
      onChange={handleChange}
      checked={checked}
      control={<Checkbox color="secondary" />}
      label="Lembre de mim"
    />
  );
}
