import styled from "@emotion/styled";
import { Drawer } from "@material-ui/core";

export const LeftMenu = () => {
  return (
    <StyledDrawer variant="permanent" anchor="left" open={true}>
      <DrawerContent>
        JAJSJSAJs
      </DrawerContent>
    </StyledDrawer>
  );
};

const DrawerContent = styled('div')({
  paddingTop: '64px',
  width: '300px'
})

const StyledDrawer = styled(Drawer)({
  zIndex: 1075,
});
