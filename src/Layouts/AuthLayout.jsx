import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";

import { Home, GitCompareArrows, Bookmark, Heart, Star } from "lucide-react";
import AppLogo from "../Components/AppLogo";
import { OverlayPanel } from "primereact/overlaypanel";
import { InputTextarea } from "primereact/inputtextarea";
import { ToastContainer } from "react-toastify";
import Feedback from "../Pages/Feedback/Feedback";
const AuthLayout = ({ children }) => {
  const op = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRight = useRef(null);
  const items = [
    {
      label: "Account",
      icon: "pi pi-bell",
      items: [
        {
          label: "You have a new recommendation !",
          icon: "pi pi-bell",
          command: () => {
            navigate("/view/1000508");
          },
        },
        // {
        //   label: "My Account",
        //   icon: "pi pi-cog",
        //   command: () => {
        //     navigate("/view/1000508");
        //   },
        // },

        {
          label: "Logout",
          icon: "pi pi-power-off",
          template: (item, options) => {
            return (
              <Button
                className="w-full "
                onClick={(e) => options.onClick(e)}
                severity="danger"
                icon={item.icon}
                label={item.label}
              ></Button>
            );
          },
          command: () => {
            navigate("/");
          },
        },
      ],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto text-white   bg-white min-h-[100vh] relative ">
      <nav className=" flex  items-center justify-between bg-secondary">
        <AppLogo className="h-20 bg-white" />
        <div className="flex gap-2">
          <button
            className={`${
              location.pathname == "/home" ? "bg-accent" : "hover:text-accent "
            } font-bold tracking-wider rounded-full 
            px-2.5 py-1.5 shadow-md flex gap-1 items-center`}
            onClick={(e) => {
              navigate("/home");
            }}
          >
            <Home className="h-4 w-4" /> HOME
          </button>
          <button
            className={`${
              location.pathname == "/compare"
                ? "bg-accent"
                : "hover:text-accent "
            } font-bold tracking-wider rounded-full 
            px-2.5 py-1.5 shadow-md flex gap-1 items-center`}
            onClick={(e) => {
              navigate("/compare");
            }}
          >
            <GitCompareArrows className="h-4 w-4" /> COMPARE
          </button>
          <button
            className={`${
              location.pathname == "/saved" ? "bg-accent" : "hover:text-accent "
            } font-bold tracking-wider rounded-full 
            px-2.5 py-1.5 shadow-md flex gap-1 items-center`}
            onClick={(e) => {
              navigate("/saved");
            }}
          >
            <Bookmark className="h-4 w-4" /> SAVED
          </button>
          <button
            className={`${
              location.pathname == "/recommendations"
                ? "bg-accent"
                : "hover:text-accent "
            } font-bold tracking-wider rounded-full 
            px-2.5 py-1.5 shadow-md flex gap-1 items-center animate-pulse`}
            onClick={(e) => {
              navigate("/recommendations");
            }}
          >
            <Heart className="h-4 w-4  " fill="red" /> RECOMMENDED
          </button>
        </div>
        <div className="flex gap-1">
          {/* <button
            className={`${
              location.pathname == "/feedback"
                ? "bg-accent"
                : "hover:text-accent "
            } font-bold tracking-wider rounded-full 
            px-2.5 py-1.5 shadow-md flex gap-1 items-center `}
            onClick={(e) => {
              navigate("/feedback");
            }}
          >
            <Star className="h-4 w-4 text-yellow-200 " fill="yellow" /> FEEDBACK
          </button> */}
          <Menu
            model={items}
            popup
            ref={menuRight}
            id="popup_menu_right"
            popupAlignment="right"
            className="!text-sm"
          />

          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            className="mr-2 !rounded-full"
            size="large"
            shape="circle"
            onClick={(event) => menuRight.current.toggle(event)}
            aria-controls="popup_menu_right"
            aria-haspopup
          />
        </div>
      </nav>

      <div className="text-gray-500 ">{children}</div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="text-sm"
      />

      <Button
        type="button"
        icon="pi pi-thumbs-up"
        rounded
        onClick={(e) => op.current.toggle(e)}
        className="fixed bottom-5 right-5 tracking-widest "
        label="FEEDBACK"
        severity="info"
      />
      <OverlayPanel ref={op} className="w-full md:w-1/4  " showCloseIcon>
        <Feedback />
      </OverlayPanel>
    </div>
  );
};

export default AuthLayout;
