import React from "react";

const component = () => {
  return <div>component</div>;
};

export default component;
// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../lib/Components/Share/Header";
// import { handleFormSubmit, useGetAlbum } from "./utils";
// import { useNavigate } from "react-router-dom";
// import { useParams } from 'react-router-dom'
//
// const EditAlbum = () => {
//     const navigate = useNavigate();
//     const { id } = useParams()
//     const { album, isLoading } = useGetAlbum(Number(id))
//     const initialValues = {
//         name: "",
//         artist: "",
//         year: album.year,
//         url: album.url,
//     };
//     if (!isLoading) {
//         initialValues.name = album.name
//         initialValues.artist = album.artist
//         initialValues.year = album.year
//         initialValues.url = album.url
//     }
//
//     const isNonMobile = useMediaQuery("(min-width:600px)");
//
//
//     return (
//         <Box m="20px">
//
//             <Header title="CREATE ALBUM" subtitle="Create a New Album" />
//             {isLoading ?
//                 (<Box></Box>)
//                 :
//                 (
//
//                     <Formik
//                         onSubmit={fields => {
//                             handleFormSubmit(fields, Number(id), navigate)
//                         }}
//                         initialValues={initialValues}
//                         validationSchema={checkoutSchema}
//                     >
//                         {({
//                             values,
//                             errors,
//                             touched,
//                             handleBlur,
//                             handleChange,
//                             handleSubmit,
//                         }) => (
//                             <form onSubmit={handleSubmit}>
//                                 <Box
//                                     display="grid"
//                                     gap="30px"
//                                     gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//                                     sx={{
//                                         "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//                                     }}
//                                 >
//                                     <TextField
//                                         fullWidth
//                                         variant="filled"
//                                         type="text"
//                                         label="Album Name"
//                                         onBlur={handleBlur}
//                                         onChange={handleChange}
//                                         value={values.name}
//                                         name="name"
//                                         error={!!touched.name && !!errors.name}
//                                         helperText={touched.name && errors.name}
//                                         sx={{ gridColumn: "span 2" }}
//                                     />
//                                     <TextField
//                                         fullWidth
//                                         variant="filled"
//                                         type="text"
//                                         label="artist"
//                                         onBlur={handleBlur}
//                                         onChange={handleChange}
//                                         value={values.artist}
//                                         name="artist"
//                                         error={!!touched.artist && !!errors.artist}
//                                         helperText={touched.artist && errors.artist}
//                                         sx={{ gridColumn: "span 2" }}
//                                     />
//                                     <TextField
//                                         fullWidth
//                                         variant="filled"
//                                         type="number"
//                                         label="Year"
//                                         onBlur={handleBlur}
//                                         onChange={handleChange}
//                                         value={values.year}
//                                         name="year"
//                                         error={!!touched.year && !!errors.year}
//                                         helperText={touched.year && errors.year}
//                                         sx={{ gridColumn: "span 4" }}
//                                     />
//                                     <TextField
//                                         fullWidth
//                                         variant="filled"
//                                         type="text"
//                                         label="url"
//                                         onBlur={handleBlur}
//                                         onChange={handleChange}
//                                         value={values.url}
//                                         name="url"
//                                         error={!!touched.url && !!errors.url}
//                                         helperText={touched.url && errors.url}
//                                         sx={{ gridColumn: "span 4" }}
//                                     />
//                                 </Box>
//                                 <Box display="flex" justifyContent="end" mt="20px">
//                                     <Button type="submit" color="secondary" variant="contained">
//                                         Save Album
//                                     </Button>
//                                 </Box>
//                             </form>
//                         )}
//                     </Formik>
//                 )
//             }
//         </Box>
//     );
// };
//
//
// const checkoutSchema = yup.object().shape({
//     name: yup.string().required("required"),
//     artist: yup.string().required("required"),
//     year: yup.number().required("Year is required").min(2010).max(2021),
//     url: yup.string().url().required("required"),
// });
//
//
// export default EditAlbum;
