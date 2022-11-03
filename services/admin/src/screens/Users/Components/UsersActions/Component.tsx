import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { apiUsers } from "../../../../lib/Data/api/apiCalls";

const UserActions = ({ params }: any) => {
  const navigate = useNavigate();
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

      <Tooltip title="Delete this user">
        <IconButton
          onClick={async () => {
            await apiUsers.delete(`/delete/${params.row.id}`);
            window.location.reload();
          }}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
export default UserActions;
