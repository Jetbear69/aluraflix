import Button from "../../components/Button/Button";
import IconCirclePlus from "../../components/Utils/IconCirclePlus/IconCirclePlus";
import IconHome from "../../components/Utils/IconHome/IconHome";
import Logo from "../../components/Utils/Logo/Logo";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";
import { useState, useEffect } from "react";

function NavBar() {
  const [activeButton, setActiveButton] = useState("Home");
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activateButton = (buttonName: string) => setActiveButton(buttonName);
  const toggleModalVisibility = () => {
    if (showModal) {
      setActiveButton("Home");
    }
    setShowModal(!showModal);
  };

  const handleButtonClickAndToggleModal = (buttonName: string) => {
    setActiveButton(buttonName);
    setShowModal(!showModal);
  };

  return (
    <>
      <nav
        className="bg-dark flex navbar-shadow border-b-4 border-tertiary items-center justify-center md:justify-between p-10"
        style={{ height: "125px" }}
      >
        <div className="hide-on-mobile">
          <Logo />
        </div>

        <div className="flex justify-center items-center content-center gap-5 buttons-svg-mobile">
          <Button
            svg={<IconHome />}
            text="HOME"
            isActive={activeButton === "Home"}
            onClick={() => activateButton("Home")}
          />
          <Button
            svg={<IconCirclePlus />}
            text="NUEVO VIDEO"
            isActive={activeButton === "New Video"}
            onClick={() => handleButtonClickAndToggleModal("New Video")}
            className="button-alura inactive navbar-new-video-button"
            style={isMobile ? { border: 'none' } : {}}
          />
        </div>
      </nav>
      {showModal && (
        <Modal
          show={showModal}
          title="Nuevo Video"
          children={
            <div>
              <Form />
            </div>
          }
          onClose={toggleModalVisibility}
          bgColor="#232323"
          borderColor="#fbf8f3"
        />
      )}
    </>
  );
}

export default NavBar;