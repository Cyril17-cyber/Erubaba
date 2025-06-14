import {
  HelpOutline,
  InfoOutline,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Poppins } from "next/font/google";
import * as React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function TemporaryDrawer({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => void;
}) {
  React.useEffect(() => {
    // This effect runs when the component mounts or when `open` changes
    console.log("TemporaryDrawer open:", open);
  }, [open]);
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HelpOutline />
            </ListItemIcon>
            <p className={`${poppins.className} text-sm`}>Help</p>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InfoOutline />
            </ListItemIcon>
            <p className={`${poppins.className} text-sm`}>About Us</p>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingBagOutlined />
            </ListItemIcon>
            <p className={`${poppins.className} text-sm`}>Sell</p>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
