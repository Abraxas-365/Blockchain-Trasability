import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { apiBouncer } from "../../../../lib/Data/api/apiCalls";

const EmpresasActions = ({ params }: any) => {
  const navigate = useNavigate();
  //TODO: change api path
  return (
    <Box>
      <Tooltip title="Edit this album">
        <IconButton
          onClick={() => {
            navigate(`/editSong/${params.row.id}`);
          }}
        >
          <Edit />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete this empresa">
        <IconButton
          onClick={async () => {
            await apiBouncer.delete(`/delete/${params.row.id}`);
            window.location.reload();
          }}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
export default EmpresasActions;
