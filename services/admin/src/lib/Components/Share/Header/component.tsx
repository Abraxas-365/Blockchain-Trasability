import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";

type Props = {
    title: string;
    subtitle: string;
}


const Header = ({ title, subtitle }: Props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box mb="30px">
            <Typography
                variant="h5"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
            <Typography variant="h6" color={colors.greenAccent[400]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;
