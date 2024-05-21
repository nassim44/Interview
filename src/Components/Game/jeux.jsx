function Jeux() {
  const sidebarItems = [
    { text: "Niveau Scolaire" },
    { text: "Matière" },
    { text: "Sujet & Thème" },
    { text: "Sous-Sujet" },
    { text: "Chapitre" },
    { text: "Compétence" },
  ];
  return (
    <>
      <div className="w-full h-full bg-white border-[2.48343px] border-[#8D84F4] rounded-[22.9067px] mr-10">
        <div className="w-full flex  items-center justify-between">
          <div className="flex items-center mt- ml-8">
            <img src="Back.png" className="w-[24.71px] h-[24.71px]" />
            <div className=" border-[0.954447px] border-[#DFDEF1] w-7 rotate-90 x"></div>
            <img
              src="backInvert.png"
              className="mr-5 w-[31.22px] h-[31.22px]"
            />
            <p className="font-Fredoka font-Fredoka-medium text-[40px] text-[#4C4949] mr-5">
              Nom du Jeu
            </p>
            <div>
              <img
                src="editJeux.png"
                className="ml-auto mr-5 w-[30.36px] h-auto"
              />
            </div>
          </div>
          <div className="flex items-center mt-5 ml-10">
            <div className="bg-[#584DE2] w-fit flex items-center rounded-[6.99881px] mr-5 h-[41px]">
              <img src="game.png" className="ml-3 mr-2 w-[20.96px] h-auto" />
              <p className="font-Fredoka font-Fredoka-light  text-[#FFFFFF] text-[15px] mr-2">
                Cartes Cachées
              </p>
              <img src="arrow.png" className=" ml-1 mr-2 " />{" "}
            </div>

            <img src="exit.png" className="ml-auto mr-5  h-auto" />
          </div>
        </div>
        <div className="flex items-center justify-between ml-8 ">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-3 mt-5 mr-2">
                  <img
                    src="choisr.png"
                    className="ml-auto mr-2 w-[14.21px] h-auto"
                  />
                  <p className="font-Fredoka font-Fredoka-light  text-[#655BE1] text-[12px] mr-2">
                    CHOISIR JEU
                  </p>
                </div>
                <div className=" border-[3.09569px] border-[#655BE1] w-full rotate-180 mb-8 mr-2 "></div>
              </div>
              <div className="flex items-center justify-between ">
                {sidebarItems.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-[#F4F4F6] w-fit h-[38.5px] flex items-center border-[0.819139px] border-Color rounded-[7.54464px] mb-2 mr-2 `}
                    onClick={() => handleClick(index, item)}
                  >
                    <p className=" ml-2 text-[12px] leading-[16px] text-[#5B5B5B] font-Fredoka font-Fredoka-light">
                      {item.text}
                    </p>
                    <img src="Down1.png" className="ml-auto mr-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center ml-14 -mt-2">
            <div className="bg-[#CCCCCC] w-fit flex border-[1.63828px] border-[#E8E8E8] items-center rounded-[6.99881px] mr-1 h-[41px]">
              <img src="game.png" className="ml-2 mr-1 w-[20.83px] h-auto" />
              <p className="font-Fredoka font-Fredoka-light  text-[#FFFFFF] text-[18.27px] mr-2">
                Ajouter
              </p>
            </div>
            <div className="bg-[#61BB61] w-fit flex border-[1.63828px] border-[#E8E8E8] items-center rounded-[6.99881px] mr-5 h-[41px]">
              <img
                src="sauvegarde.png"
                className="ml-2 mr-1 w-[20.83px] h-auto"
              />
              <p className="font-Fredoka font-Fredoka-light  text-[#FFFFFF] text-[18.27px] mr-2">
                Sauvegarder
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="max-w-3xl mr-16">
            <div className="w-full ml-8 mb-5 flex flex-col items-center bg-bgImage  bg-white border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px]">
              <div className=" mb-3">
                <div className=" bg-[#E4DFF0] mt-5 space-x-16 w-fit mr-16 p-5 rounded-[7.11211px]  flex justify-between ml-16">
                  <div className="w-fit bg-white rounded-[7.11211px] p-2 h-fit ">
                    <div className="flex flex-col items-center">
                      <div className=" border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px] p-6 mb-1">
                        <img src="galerie.png" className="w-[35px] h-auto" />
                      </div>
                      <p className="font-Fredoka font-Fredoka-light text-[12px]">
                        FRUITS ROUGES
                      </p>
                      <img src="sound.png" className="" />
                    </div>
                  </div>
                  <div className="w-fit bg-white rounded-[7.11211px] p-2 h-fit ">
                    <div className="flex flex-col items-center">
                      <div className=" border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px] p-6 mb-1">
                        <img src="galerie.png" className="w-[35px] h-auto" />
                      </div>
                      <p className="font-Fredoka font-Fredoka-light text-[12px]">
                        FRUITS ROUGES
                      </p>
                      <img src="sound.png" className="" />
                    </div>
                  </div>
                  <div className="w-fit bg-white rounded-[7.11211px] p-2 h-fit ">
                    <div className="flex flex-col items-center">
                      <div className=" border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px] p-6 mb-1">
                        <img src="galerie.png" className="w-[35px] h-auto" />
                      </div>
                      <p className="font-Fredoka font-Fredoka-light text-[12px]">
                        FRUITS ROUGES
                      </p>
                      <img src="sound.png" className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border-[1.4559px] border-[#D1CEF3] w-full rotate-180   "></div>
              <div className=" w-fit mb-3">
                <div className="  space-x-16 w-fit mr-16 p-5 rounded-[7.11211px]  flex justify-between ml-16">
                  <div className="w-fit shadow-xl bg-white rounded-[7.11211px] p-2 h-fit ">
                    <div className="flex flex-col items-center">
                      <div className=" border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px] p-6 mb-1">
                        <img src="galerie.png" className="w-[35px] h-auto" />
                      </div>
                      <p className="font-Fredoka font-Fredoka-light text-[12px]">
                        FRUITS ROUGES
                      </p>
                      <img src="sound.png" className="" />
                    </div>
                  </div>
                  <div className="w-fit shadow-xl bg-white rounded-[7.11211px] p-2 h-fit ">
                    <div className="flex flex-col items-center">
                      <div className=" border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px] p-6 mb-1">
                        <img src="galerie.png" className="w-[35px] h-auto" />
                      </div>
                      <p className="font-Fredoka font-Fredoka-light text-[12px]">
                        FRUITS ROUGES
                      </p>
                      <img src="sound.png" className="" />
                    </div>
                  </div>
                  <div className="w-fit shadow-xl bg-white rounded-[7.11211px] p-2 h-fit ">
                    <div className="flex flex-col items-center">
                      <div className=" border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px] p-6 mb-1">
                        <img src="galerie.png" className="w-[35px] h-auto" />
                      </div>
                      <p className="font-Fredoka font-Fredoka-light text-[12px]">
                        FRUITS ROUGES
                      </p>
                      <img src="sound.png" className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border-[1.4559px] border-[#D1CEF3] w-full rotate-180   "></div>
              <div className=" w-fit mb-3">
                <div className=" bg-white space-x-16 w-fit mr-16 p-5 rounded-[7.11211px]  flex justify-between ml-16">
                  <div className="w-fit shadow-xl bg-white rounded-[7.11211px] p-2 h-fit ">
                    <div className="flex flex-col items-center">
                      <div className=" border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px] p-6 mb-1">
                        <img src="galerie.png" className="w-[35px] h-auto" />
                      </div>
                      <p className="font-Fredoka font-Fredoka-light text-[12px]">
                        FRUITS ROUGES
                      </p>
                      <img src="sound.png" className="" />
                    </div>
                  </div>
                  <div className="w-fit shadow-xl bg-white rounded-[7.11211px] p-2 h-fit ">
                    <div className="flex flex-col items-center">
                      <div className=" border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px] p-6 mb-1">
                        <img src="galerie.png" className="w-[35px] h-auto" />
                      </div>
                      <p className="font-Fredoka font-Fredoka-light text-[12px]">
                        FRUITS ROUGES
                      </p>
                      <img src="sound.png" className="" />
                    </div>
                  </div>
                  <div className="w-28 shadow-xl bg-white rounded-[7.11211px] p-2  border-[3.52528px] border-[#8D84F4] border-dashed "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit  p-8  mb-5 flex flex-col  bg-white border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px]">
            <div className="flex items-center ml-16 mr-5">
              <img src="Vector (1).png" />
              <p className="font-Fredoka text-[#584DE2] font-Fredoka-light text-[30px]">
                Gallerie
              </p>
            </div>
            <p className="font-extralight text-[#6157E4]  text-[11px] -ml-20 mb-3">
              Consulter votre Gallerie
            </p>
            <div className="w-fit h-full mb-5 flex flex-col  bg-[#EFEEF8] border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px]">
              <div className="flex items-center mt-3 ml-5 mr-5">
                <img src="arrowright.png" />
                <p className="font-Fredoka text-[#434343] font-Fredoka-medium text-[15px]">
                  Vos Cartes
                </p>
              </div>
              <form className=" mx-auto w-fit mt-3 ml-5 mr-5 mb-5 ">
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 rounded-[11.4534px] ps-10 text-sm bg-white placeholder-fontColor text-gray-900 border border-gray-300   focus:ring-blue-500 focus:border-blue-500 placeholder-Fredoka"
                    placeholder="Rechercher"
                    required
                  />
                </div>
              </form>
              <div className="flex ml-8">
                <div className="w-fit shadow-xl bg-white rounded-[7.11211px] p-2 mr-1">
                  <div className="flex flex-col items-center">
                    <div className="border-[2.02528px] border-[#8D84F4] rounded-[7.11211px] w-[40px] h-[70px] mb-1 flex justify-center items-center">
                      <img src="galerie.png" className="w-[20px] h-auto" />
                    </div>
                  </div>
                </div>
                <div className="w-fit shadow-xl bg-white rounded-[7.11211px] p-2 mr-1">
                  <div className="flex flex-col items-center">
                    <div className="border-[2.02528px] border-[#8D84F4] rounded-[7.11211px] w-[40px] h-[70px] mb-1 flex justify-center items-center">
                      <img src="galerie.png" className="w-[20px] h-auto" />
                    </div>
                  </div>
                </div>
                <div className="w-fit shadow-xl bg-white rounded-[7.11211px] p-2 mr-1">
                  <div className="flex flex-col items-center">
                    <div className="border-[2.02528px] border-[#8D84F4] rounded-[7.11211px] w-[40px] h-[70px] mb-1 flex justify-center items-center">
                      <img src="galerie.png" className="w-[20px] h-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex ml-8 mt-2 mb-5">
                <div className="w-fit shadow-xl bg-white rounded-[7.11211px] p-2 mr-1">
                  <div className="flex flex-col items-center">
                    <div className="border-[2.02528px] border-[#8D84F4] rounded-[7.11211px] w-[40px] h-[70px] mb-1 flex justify-center items-center">
                      <img src="galerie.png" className="w-[20px] h-auto" />
                    </div>
                  </div>
                </div>
                <div className="w-fit shadow-xl bg-white rounded-[7.11211px] p-2 mr-1">
                  <div className="flex flex-col items-center">
                    <div className="border-[2.02528px] border-[#8D84F4] rounded-[7.11211px] w-[40px] h-[70px] mb-1 flex justify-center items-center">
                      <img src="galerie.png" className="w-[20px] h-auto" />
                    </div>
                  </div>
                </div>
                <div className="w-fit shadow-xl bg-white rounded-[7.11211px] p-2 mr-1">
                  <div className="flex flex-col items-center">
                    <div className="border-[2.02528px] border-[#8D84F4] rounded-[7.11211px] w-[40px] h-[70px] mb-1 flex justify-center items-center">
                      <img src="galerie.png" className="w-[20px] h-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center ml-14">
                <img src="plus.png" className="mr-1"/>
                <p className="font-extralight text-[#584DE2]  text-[10px]">Ajouter une nouvelle carte</p>
              </div>
              <img src="Card Deck.png" className="w-[109.08px] h-[151.92px] ml-16 mt-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jeux;
