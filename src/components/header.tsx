import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Header = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography variant="h5">Rule 1</Typography>
      </StyledToolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)({
  position: "relative",
  zIndex: 2000
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});
