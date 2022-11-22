import { Box, IconButton, useTheme } from "@mui/material";
import React from "react";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import { useNavigate } from "react-router-dom";
import Header from "../../../lib/Components/Share/Header";
import { tokens } from "../../../theme";
import { useGetEmpresas } from "../utils";
import { DataGrid } from "@mui/x-data-grid";
import EmpresasActions from "../Components/EmpresasActions";

const ShowEmpresas = () => {
  const { empresas, isLoading } = useGetEmpresas();
  if (!isLoading) {
    console.log(empresas);
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
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "left",
      flex: 1,
      align: "left",
    },
    {
      field: "tecnologies",
      headerName: "Tecnologies",
      headerAlign: "left",
      flex: 1,
      align: "left",
    },
    {
      field: "iotamnemonic}",
      headerName: "Mnemonic",
      headerAlign: "left",
      flex: 1,
      align: "left",
      valueGetter: (params) => {
        console.log({ params });
        let result = [];
        if (params.row.iota.mnemonic) {
          result.push(params.row.iota.mnemonic);
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => <EmpresasActions {...{ params }} />,
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
            navigate("/newEmpresa");
          }}
        >
          <ControlPointDuplicateIcon />
          <p style={{ color: colors.grey[100] }}>Add Empresa</p>
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
        <DataGrid checkboxSelection rows={empresas} columns={columns} />
      </Box>
    </Box>
  );
};

export default ShowEmpresas;
