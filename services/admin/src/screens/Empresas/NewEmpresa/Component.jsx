import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import Header from "../../../lib/Components/Share/Header";
import { handleFormSubmit } from "../utils";

const NewEmpresa = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    status: "",
    tecnologies: "",
    iota: {
      mnemonic: "",
    },
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box m="20px">
      <Header title="Create Empresa" subtitle="Create New Empresa" />
      <Formik
        onSubmit={(fields) => {
          handleFormSubmit(fields, navigate);
        }}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Mnemonic"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.iota.mnemonic}
                name="iota.mnemonic"
                error={!!touched.iota && !!errors.iota}
                helperText={touched.iota && errors.iota}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tecnologie"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tecnologies}
                name="tecnologies"
                error={!!touched.tecnologies && !!errors.tecnologies}
                helperText={touched.tecnologies && errors.tecnologies}
                sx={{ gridColumn: "span 1" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Save User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  //TODO: make this with parameters
  status: yup.string().required("required"),
  tecnologies: yup.string().required("required"),
  iota: yup
    .object()
    .shape({
      mnemonic: yup.string(),
    })
    .nullable(),
});

export default NewEmpresa;
