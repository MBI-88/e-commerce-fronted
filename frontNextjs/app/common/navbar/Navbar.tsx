"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/auth";
import { FaSignInAlt, FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import Logo from "./Logo";
import LinkNext from "next/link";

export default function Nav() {
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);
  const isAuth = useAuthStore((state) => state.isAuth);

  const isDark = false;
  const router = useRouter();

  const menuItems = [
    "Anuncios",
    "Añadir Anuncio",
    "Recientes",
    "Ofertas",
    "Populares",
  ];

  //boton logout
  const handleLogoutClick = () => {
    console.log("logout");

    Swal.fire({
      title: "Cerrar sesion ",
      text: "Seguro que  desea abandonar la sesion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Seguro!",
      cancelButtonText: "No, Cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        router.push("/pages/signin");

        Swal.fire("Sesion Cerrada!", "Se ha cerrado la sesion", "success");
      }
    });
  };

  //boton ir al profile
  const handleGoProfile = () => {
    // setAnchorEl(null);
    router.push("/pages/profile");
  };

  return (
    <Navbar isBordered>
      {/* para vista movil */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
        <NavbarBrand
          onClick={() => router.push("/")}
          className="sm:hidden pr-4"
        >
          {/* Logo /> */}
          <div className="w-24">
            <Logo />
          </div>
        </NavbarBrand>
      </NavbarContent>{" "}
      {/*CIERRE para vista movil */}
      {/* para vista normal name app*/}
      <NavbarContent onClick={() => router.push("/")}>
        <NavbarBrand className="hidden sm:flex">
          {/* <AcmeLogo /> */}
          <Logo />
        </NavbarBrand>
      </NavbarContent>{" "}
      {/*CIERRE para vista normal name app */}
      {/* links  desktop mode */}
      <NavbarContent justify="start">
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Anuncios
            </Link>
          </NavbarItem>
          {isAuth && (
            <NavbarItem>
              <LinkNext
                href="/pages/add-publishing/"
                color="foreground"
                className="cursor'pointer"
              >
                Añadir Anuncio
              </LinkNext>
            </NavbarItem>
          )}
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Destacados
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Opiniones
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      {/* modo claro oscuro */}
      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem>{isDark ? <FaSun /> : <FaMoon />}</NavbarItem>

        {isAuth ? (
          <>
            {/* user */}
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Loageado como</p>
                  <p className="font-semibold">{profile.email}</p>
                </DropdownItem>
                {/* <DropdownItem key="settings">My Settings</DropdownItem> */}
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                {/* <DropdownItem key="system">System</DropdownItem> */}
                <DropdownItem key="configurations" onClick={handleGoProfile}>
                  Mi Perfil
                </DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={handleLogoutClick}
                >
                  Cerrar Sesion
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        ) : (
          <>
            {/* user no auth */}
            <NavbarContent justify="end">
              <NavbarItem
                className="text-xl"
                // className="hidden lg:flex"
                onClick={() => {
                  router.push("/pages/signin");
                }}
              >
                <FaSignInAlt />
              </NavbarItem>
              <NavbarItem
                className="ms-2 text-xl"
                onClick={() => {
                  router.push("/pages/signup");
                }}
              >
                <AiOutlineUserAdd />
              </NavbarItem>
            </NavbarContent>
          </>
        )}
      </NavbarContent>
      {/* menu mobile links */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
