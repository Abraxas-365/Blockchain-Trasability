import { Box, IconButton, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import { useNavigate } from "react-router-dom";
import { useGetUsers } from "../utils";
import { tokens } from "../../../theme";
import Header from "../../../lib/Components/Share/Header";
import UserActions from "../Components/UsersActions";
const ShowUsers = () => {
  const { users, isLoading } = useGetUsers();
  if (!isLoading) {
    console.log(users);
  }
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },

    {
      field: "email",
      headerName: "Email",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "company",
      headerName: "Company",
      headerAlign: "left",
      flex: 1,
      align: "left",
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => <UserActions {...{ params }} />,
      flex: 1,
    },
  ];

  const navigate = useNavigate();
  return (
    <Box m="20px">
      <Box display="flex">
        <Box sx={{ flex: 1 }}>
          <Header title="Users" subtitle="Users" />
        </Box>
        <IconButton
          onClick={() => {
            navigate("/newAlbum");
          }}
        >
          <ControlPointDuplicateIcon />
          <p style={{ color: colors.grey[100] }}>Add Album</p>
        </IconButton>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={users} columns={columns} />
      </Box>
    </Box>
  );
};

export default ShowUsers;
