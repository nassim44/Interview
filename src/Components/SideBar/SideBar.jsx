import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const [selectedItem, setSelectedItem] = useState(2);
  const navigate = useNavigate();
  const handleClick = (index, item) => {
    setSelectedItem(index);
    if (item.text === "Classes") {
      navigate("");
    }
    if (item.text === "Jeux") {
      navigate("jeux");
    }
  };

  const sidebarItems = [
    { icon: "iconAbonne.png", text: "Abonnés" },
    { icon: "Vector.png", text: "Elèves" },
    { icon: "books.png", text: "Classes" },
    { icon: "book.png", text: "Contenu" },
    { icon: "jeuxIcon.png", text: "Jeux" },
    { icon: "openBook.png", text: "Cours" },
    { icon: "statistiques.png", text: "Statistiques" },
  ];

  return (
    <div className="w-fit flex flex-col items-center bg-white border-[2.48343px] border-[#8D84F4] rounded-[22.9067px] mr-5">
      <div className="">
        <img src="logo.png" className="w-[90.67px] h-[55.05px] my-[15.77px]" />
      </div>
      <div className="border-[0.954447px] border-[#DFDEF1] w-full rotate-180 mb-3"></div>
      <div className="ml-5 mr-5">
        <div className="flex w-full space-x-20 justify-between rounded-[15.2712px] bg-profBackground border-[0.954447px] border-[#584DE2] items-center mb-3">
          <div className="flex items-center ml-2">
            <img src="prof.png" className="mr-4 my-[15.27px]" />
            <div className="flex flex-col items-start">
              <h5 className="font-bold text-[15px] leading-prof font-fredoka text-white">
                Prof.Mahmoud
              </h5>
              <p className="font-light leading-[17px] text-[16px] font-fredoka text-white">
                Administrateur
              </p>
            </div>
          </div>
          <img src="Down.png" className="mr-10" />
        </div>

        <form className="mx-auto w-full mb-5">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-fontColor dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 rounded-[11.4534px] ps-10 text-sm bg-[#E7E7E7] placeholder-fontColor text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder-Fredoka"
              placeholder="Rechercher"
              required
            />
          </div>
        </form>
        <div className="mb-14">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex h-fit items-center border-[1.65562px] border-Color rounded-radius mb-2 ${
                selectedItem === index ? "bg-Color text-white" : ""
              }`}
              onClick={() => handleClick(index, item)}
            >
              <img
                src={selectedItem === index && item.text === "Jeux" ? "jeuxSelected.png" : item.icon}
                className="mx-[15.27px] my-[15.27px] w-[22.91px] h-[22.91px]"
              />
              <p className="text-sideBarSize font-Fredoka font-Fredoka-medium">
                {item.text}
              </p>
              {item.text === "Abonnés" && (
                <img src="Down1.png" className="ml-auto mr-5" />
              )}
              {item.text === "Statistiques" && (
                <div className="ml-auto mr-5 flex items-center">
                  <p className="text-[11.4534px] bg-[#EE2750] leading-[14px] text-white font-Fredoka font-Fredoka-light rounded-[5.72668px] flex items-center justify-center">
                    <span className="inline-block p-1 rounded-full bg-[#EE2750]">
                      2
                    </span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center ml-2 mb-10">
          <img src="Message.png" className="mr-3" />
          <p className="font-Inter text-deconnecter text-[#989899]">
            Se Déconnecter
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
  