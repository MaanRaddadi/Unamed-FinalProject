import React, { useContext, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { CloseIcon } from "../Assets/Icons/CloseIcon";
import { Link, useNavigate } from "react-router-dom";
import { AddNewPlaceIcon } from "../Assets/Icons/AddNewPlaceIcon";
import { HomeIcon } from "../Assets/Icons/HomeIcon";
import { ProfileIcon } from "../Assets/Icons/ProfileIcon";
import { FavoriteIcon } from "../Assets/Icons/FavoriteIcon";
import { LanguageIcon } from "../Assets/Icons/LanguageIcon";
import { BlindColorIcon } from "../Assets/Icons/BlindColorIcon";
import { EasyModeIcon } from "../Assets/Icons/EasyModeIcon";
import { SignOutIcon } from "../Assets/Icons/SignOutIcon";
import userIcon from "../Assets/Icons/user.svg";
import { AddIcon } from "../Assets/Icons/AddIcon";
import SignInWindow from "./SignInWindow";
import SignUpWindow from "./SignUpWindow";
import { ArLogo } from "../Assets/Logo/ArLogo";
import { AuthContext } from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../Config/firebase";

function Nav({ handelLayoutChange, easyMode }) {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const userMenuRef = React.useRef();
  // to close the menu every time the user clicks anywhere
  const [showUserMenu, setShowUserMenu] = React.useState(false);

  const userMenuClick = () => {
    setShowUserMenu(!showUserMenu);
  };
  const admins = ["RdDQQRbPBIWUcmD10UICl6S7TTb2"];
  const sign_out = () => {
    signOut(auth);
    // setIsLogged(false)
    setShowUserMenu(false);
    navigate("/");
  };

  // for sign in model
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // for sign up model
  const [isSignUpModel, setIsSignUpModel] = React.useState(false);

  const openSignUpModel = () => {
    console.log("hello")
    setIsSignUpModel(!isSignUpModel);
  };

  React.useEffect(() => {
    // scrollRef.current.scrollIntoView()
    const outsideClick = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
      if (admins.includes(currentUser.uid)) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    };

    document.body.addEventListener("click", outsideClick);
    return () => {
      document.body.removeEventListener("click", outsideClick);
    };
  }, [showUserMenu]);

  return (
    <>
      {isAdmin ? (
        <nav className="bg-[#005B41] h-[12vh] flex justify-between py-4 px-8 items-center">
          <Link to="/">
            <div className="">
              <ArLogo size={100} />
            </div>
          </Link>

          {isAdmin ? (
            <div className="relative" ref={userMenuRef}>
              <button
                type="button"
                className="flex text-sm rounded-full md:me-0 focus:ring-4"
                id="user-menu-button"
                onClick={userMenuClick}
              >
                <img
                  className="w-12 h-12 rounded-full"
                  src={userIcon}
                  alt="user icon"
                />
              </button>

              {currentUser && (
                <div
                  className="absolute left-1 top-20 text-right mt-2 w-80 max-sm:w-64 bg-white border 
                  rounded-lg shadow z-[1000] overflow-y-auto max-h-[80vh]"
                >
                  <div className="py-2">
                    <div className="px-4 py-3">
                      <span onClick={userMenuClick} className="">
                        <CloseIcon />
                      </span>

                      <div className="text-center flex flex-col">
                        {/* avatar  */}
                        <div>
                          <div className="avatar relative">
                            <div className="w-24 rounded-full">
                              <img src={userIcon} />
                              <div>
                                {/* <div className="absolute bg-[#005B41] rounded-full p-1 bottom-0.5"> <AddIcon /> </div> */}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* username  */}
                        <div
                          className="flex justify-center items-center text-black 
                       font-bold gap-2"
                        >
                          <div>{currentUser.displayName}</div>
                          {/* <div><AddNewPlaceIcon size={16}/></div> */}
                        </div>

                        {/* user email  */}
                        <div
                          className="flex justify-center items-center text-gray-600 
                       font-bold gap-2 mb-6"
                        >
                          <div>{currentUser.email}</div>
                          {/* <div><AddNewPlaceIcon size={16}/></div> */}
                        </div>
                      </div>

                      <hr
                        className="w-48 h-1 mx-auto bg-gray-200 border-0 
                        rounded md:my-1 max-sm:my-7"
                      />
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <Link
                          to="/Dashboard"
                          className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                        >
                          <EasyModeIcon />
                          لوحة المعلومات
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                        >
                          <HomeIcon />
                          الرئيسية
                        </Link>
                      </li>
                      <li className="flex w-full items-center">
                        <Link
                          to="/NewRequest"
                          className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                        >
                          <AddNewPlaceIcon />
                          اضافة مكان جديد
                        </Link>
                      </li>

                      {/* <li>
                          <Link to="/" className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full">
                          <FavoriteIcon />
                          المفضلة
                          </Link>
                        </li> */}

                      <hr
                        className="w-48 h-1 mx-auto bg-gray-200 border-0 
                        rounded md:my-7 max-sm:my-7"
                      />

                      <li>
                        <Link
                          to="/"
                          className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                        >
                          <LanguageIcon />
                          اللغة العربية
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                        >
                          <BlindColorIcon />
                          عمى الالوان
                        </Link>
                      </li>
                      {easyMode ? (
                        <li>
                          <button
                            onClick={handelLayoutChange}
                            // to="/EasyLayout"
                            className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                          >
                            <EasyModeIcon />
                            الوضع الافتراضي
                          </button>
                        </li>
                      ) : (
                        <li>
                          <button
                            onClick={handelLayoutChange}
                            // to="/EasyLayout"
                            className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                          >
                            <EasyModeIcon />
                            الوضع السهل
                          </button>
                        </li>
                      )}

                      <hr
                        className="w-48 h-1 mx-auto bg-gray-200 border-0 
                        rounded md:my-7 max-sm:my-7"
                      />

                      <li>
                        <button
                          onClick={sign_out}
                          className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                        >
                          <SignOutIcon />
                          تسجيل الخروج
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button
              size="lg"
              onClick={openModal}
              className="text-black font-bold bg-white lg:text-xl 
          max-sm:text-sm md:text-base"
            >
              تسجيل دخول
            </Button>
          )}

          {/* <div className="lg:w-[35rem] md:w-[16rem] max-sm:w-[16rem]">
        <Input
          classNames={{
            base: " sm:max-w-[10rem] h-12 max-sm:hidden",
            mainWrapper: "h-full",
            input: "text-large",
            inputWrapper:
              "h-full font-normal text-default-500 bg-white lg:w-[35rem] md:w-[20rem] max-md:w-[15rem] max-sm:w-[4rem]",
          }}
          placeholder="بحث"
          
          endContent={<SearchIcon size={22} />}
          type="search"
          fullWidth={true}
        />
      </div> */}

          {/* <Button
        size="lg"
        onClick={sign_out}
        className="text-black font-bold bg-white lg:text-xl 
        max-sm:text-sm md:text-base"
      >
        تسجيل خروج
      </Button> */}
        </nav>
      ) : (
        <nav className="bg-[#005B41] h-[12vh] flex justify-between py-4 px-8 items-center">
          <Link to="/">
            <div className="">
              <ArLogo size={100} />
            </div>
          </Link>

          <div className="lg:w-[35rem] md:w-[16rem] max-sm:w-[16rem]">
            <Input
              classNames={{
                base: `sm:max-w-[10rem] h-12 max-sm:hidden`,
                mainWrapper: "h-full",
                input: "text-large",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-white lg:w-[35rem] md:w-[20rem] max-md:w-[15rem] max-sm:w-[4rem]",
              }}
              placeholder="بحث"
              endContent={<SearchIcon size={22} />}
              type="search"
              fullWidth={true}
            />
          </div>

          {currentUser ? (
            <div className="relative" ref={userMenuRef}>
              <button
                type="button"
                className="flex text-sm rounded-full md:me-0 focus:ring-4"
                id="user-menu-button"
                onClick={userMenuClick}
              >
                <img
                  className="w-12 h-12 rounded-full"
                  src={userIcon}
                  alt="user icon"
                />
              </button>

              {showUserMenu && (
                <div
                  className="absolute left-1 top-20 text-right mt-2 w-80 max-sm:w-64 bg-white border 
                  rounded-lg shadow z-[1000] overflow-y-auto max-h-[80vh]"
                >
                  <div className="py-2">
                    <div className="px-4 py-3">
                      <span onClick={userMenuClick} className="">
                        <CloseIcon />
                      </span>

                      <div className="text-center flex flex-col">
                        {/* avatar  */}
                        <div>
                          <div className="avatar relative">
                            <div className="w-24 rounded-full">
                              <img src={userIcon} />
                              <div>
                                <div className="absolute bg-[#005B41] rounded-full p-1 bottom-0.5">
                                  {" "}
                                  <AddIcon />{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* username  */}
                        <div
                          className="flex justify-center items-center text-black 
                       font-bold gap-2"
                        >
                          <div>{currentUser.displayName}</div>
                          <div>
                            <AddNewPlaceIcon size={16} />
                          </div>
                        </div>

                        {/* user email  */}
                        <div
                          className="flex justify-center items-center text-gray-600 
                       font-bold gap-2 mb-6"
                        >
                          <div>{currentUser.email}</div>
                          <div>
                            <AddNewPlaceIcon size={16} />
                          </div>
                        </div>
                      </div>

                      <hr
                        className="w-48 h-1 mx-auto bg-gray-200 border-0 
                        rounded md:my-1 max-sm:my-7"
                      />
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <Link
                          to="/"
                          className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                        >
                          <HomeIcon />
                          الرئيسية
                        </Link>
                      </li>
                      <li className="flex w-full items-center">
                        <Link
                          to="/NewRequest"
                          className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                        >
                          <AddNewPlaceIcon />
                          اضافة مكان جديد
                        </Link>
                      </li>

                      {/* <li>
                          <Link to="/" className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full">
                          <FavoriteIcon />
                          المفضلة
                          </Link>
                        </li> */}

                      <hr
                        className="w-48 h-1 mx-auto bg-gray-200 border-0 
                        rounded md:my-7 max-sm:my-7"
                      />

                      <li>
                        <Link
                          to="/"
                          className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                        >
                          <LanguageIcon />
                          اللغة العربية
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                        >
                          <BlindColorIcon />
                          عمى الالوان
                        </Link>
                      </li>
                      {easyMode ? (
                        <li>
                          <button
                            onClick={handelLayoutChange}
                            className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                          >
                            <EasyModeIcon />
                            الوضع الافتراضي
                          </button>
                        </li>
                      ) : (
                        <li>
                          <button
                            onClick={handelLayoutChange}
                            className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                          >
                            <EasyModeIcon />
                            الوضع السهل
                          </button>
                        </li>
                      )}

                      <hr
                        className="w-48 h-1 mx-auto bg-gray-200 border-0 
                        rounded md:my-7 max-sm:my-7"
                      />

                      <li>
                        <button
                          onClick={sign_out}
                          className="text-black px-4 py-2 hover:bg-gray-100 font-bold text-lg flex gap-5 w-full"
                        >
                          <SignOutIcon />
                          تسجيل الخروج
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button
              size="lg"
              onClick={openModal}
              className="text-black font-bold bg-white lg:text-xl 
          max-sm:text-sm md:text-base"
            >
              تسجيل دخول
            </Button>
          )}

          {/* to render the models :3 */}
          <SignInWindow
            isOpen={isModalOpen}
            openModal={openModal}
            openSignUpModel={openSignUpModel}
          />
          <SignUpWindow
            isSignUpModel={isSignUpModel}
            openSignUpModel={openSignUpModel}
            openModal={openModal}
          />
        </nav>
      )}
    </>
  );
}

export default Nav;
