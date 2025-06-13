// /components/NavBar.tsx
import logo from "@/app/public/logo.png";
import {
  Menu,
  PermIdentity,
  ShoppingCartOutlined
} from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";

export default function NavBar({
  toggleDrawer,
}: {
  toggleDrawer: (newOpen: boolean) => void;
}) {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      className="py-4"
      style={{ background: "#fcfcfc" }}
    >
      <Toolbar className="container mx-auto flex justify-center items-center flex-col lg:flex-row">
        <div className="flex items-center justify-between  w-full">
          <button
            className="lg:hidden"
            aria-label="Menu"
            onClick={() => toggleDrawer(true)}
          >
            <Menu color="action" />
          </button>
          <Link href="/" className="logo">
            <Image
              src={logo}
              alt="Erubaba Logo"
              width={100}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden lg:block w-1/2">
            <SearchInput />
          </div>
          <div className="flex items-center">
            <div className="hidden lg:flex items-center text-gray-700">
              {["Help", "About Us", "Sell"].map((txt) => (
                <Link
                  key={txt}
                  href={`/${txt.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mr-7"
                  style={{ textDecoration: "none" }}
                >
                  <span className="hover:underline">{txt}</span>
                </Link>
              ))}
            </div>
            <div className="flex items-center">
              <IconButton>
                <PermIdentity color="action" />
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartOutlined color="action" />
                </Badge>
              </IconButton>
            </div>
          </div>
        </div>
        <div className="block lg:hidden w-full mt-2">
          <SearchInput />
        </div>
      </Toolbar>
    </AppBar>
  );
}
