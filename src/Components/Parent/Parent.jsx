import { useState } from "react";

function Parent() {
  return (
    <>
      <div className=" w-full mr-40 h-full bg-white border-[2.48343px] border-[#8D84F4] rounded-[22.9067px] ">
        <div className="w-full flex  items-center justify-between mb-5">
          <div className="flex items-center mt-5 ml-10">
            <img src="Back.png" className="w-[24.71px] h-[24.71px]" />
            <div className=" border-[0.954447px] border-[#DFDEF1] w-7 rotate-90 x"></div>
            <img
              src="backInvert.png"
              className="mr-5 w-[31.22px] h-[31.22px]"
            />
            <p className="font-Fredoka font-Fredoka-medium text-[40px] text-[#4C4949] mr-5">
              Gérez les Parents
            </p>
            <div>
              <img
                src="arrowUp.png"
                className="ml-auto mr-5 w-[16.36px] h-auto mb-2 mt-3"
              />
              <img
                src="arrowDown.png"
                className="ml-auto mr-5 w-[16.36px] h-auto"
              />
            </div>
          </div>
          <div className="flex items-center mt-5 ml-10">
            <img src="edit.png" className="ml-auto mr-5 w-[30.36px] h-auto" />
            <button className="bg-[#FFEBEB] rounded-[7.83403px] w-[118.53px] h-[41px] font-Fredoka font-Fredoka-medium text-[15px] text-[#C72929] mr-5">
              Restreindre
            </button>
            <img src="exit.png" className="ml-auto mr-5 w-[30.36px] h-auto" />
          </div>
        </div>

        <div className="ml-5 mr-5 ">
          <ul class="flex flex-wrap text-sm font-medium mb-5 text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="me-2">
              <a
                href="#"
                aria-current="page"
                class=" font-Fredoka font-Fredoka-medium text-[20px] inline-block p-4 text-[#584DE2]  rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              >
                Informations
              </a>
              <div className=" border-[2.09569px] border-[#655BE1] w-full rotate-180 mb-8 mr-2 "></div>
            </li>
            <li class="me-2">
              <a
                href="#"
                class=" font-Fredoka font-Fredoka-medium text-[20px] inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              >
                Abonnements
              </a>
            </li>
          </ul>
          <div className="w-full flex flex-col  items-start bg-[#E8E6FF] border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px] mb-6">
            <div className="w-full flex flex-col  items-start bg-[#E8E6FF] border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px]">
              <div className="flex items-center  space-x-72 justify-evenly ml-10 mt-3 mb-3 rounded-[7.11211px] ">
                <div className="flex items-center ">
                  <img
                    src="Avatar (1).png"
                    className="ml-auto mr-5 w-[60px] h-[60px]"
                  />
                  <div className="flex flex-col items-start">
                    <div>
                      <p className="font-Fredoka font-Fredoka-medium text-[20.37px]">
                        Parent 1
                      </p>
                    </div>
                    <p className="font-Fredoka font-Fredoka-extra-light text-[12px]">
                      Abonné Depuis Mars 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <p className="font-Fredoka font-Fredoka-medium text-[20.37px]">
                      75
                    </p>
                    <p className="font-Fredoka font-Fredoka-extra-light text-[12px] text-[#6F6F6F]">
                      Classes
                    </p>
                  </div>
                  <div className=" border-[0.954447px] border-[#BBBBBB] w-7 rotate-90 x"></div>
                  <div className="mr-5">
                    <p className="font-Fredoka font-Fredoka-medium text-[20.37px]">
                      16
                    </p>
                    <p className="font-Fredoka font-Fredoka-extra-light text-[12px] text-[#6F6F6F]">
                      Abonnement
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="mail.png" className="w-[29.72px] h-[29.72px]" />
                    <p className="font-Fredoka font-Fredoka-extra-light text-[12px] text-[#6F6F6F]">
                      email@exemple.com
                    </p>
                  </div>

                  <div className=" border-[0.954447px] border-[#BBBBBB] w-7 rotate-90 x"></div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="tel.png" className="w-[29.72px] h-[29.72px]" />
                    <p className="font-Fredoka font-Fredoka-extra-light text-[12px] text-[#6F6F6F]">
                      +216 22 222 222
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col  items-start bg-white border-[3.02528px] border-[#8D84F4]  rounded-[7.11211px]">
              <div className="mt-6 w-full">
                <div className="flex ml-12">
                  <table className="w-full mr-10 mb-5">
                    <tbody>
                      <tr className="">
                        <td className="flex font-Fredoka font-Fredoka-medium text-[15px] justify-start mb-3">
                          Date de naissance
                        </td>
                        <td>
                          <input
                            type="search"
                            id="default-search"
                            className="block w-full mb-3 p-1 text-sm bg-[#F0EFFB] placeholder-fontColor text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder-Fredoka"
                            placeholder="26 Mars 1998"
                            required
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr >
                        <td className="flex font-Fredoka font-Fredoka-medium mb-3 text-[15px] justify-start">
                          Sexe
                        </td>
                        <td>
                          <div className="flex items-center">
                            <div className="grid w-[141.3px] mb-3 h-[40.2px] border-[3.02528px] bg-[#F0EFFB] border-[#8D84F4]  rounded bg-primary text-primary-content place-content-center mr-3">
                              Homme
                            </div>
                            <div className="grid w-[141.3px] mb-3 h-[40.2px] border-[3.02528px] bg-[#F0EFFB] rounded bg-primary text-primary-content place-content-center">
                              Femme
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="flex font-Fredoka font-Fredoka-medium text-[15px] mb-3 justify-start">
                          district
                        </td>
                        <td>
                          <input
                            type="search"
                            id="default-search"
                            className="block w-full p-1 mb-3 text-sm bg-[#F0EFFB] placeholder-fontColor text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder-Fredoka"
                            placeholder="La Goulette"
                            required
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="flex font-Fredoka  mb-3 font-Fredoka-medium text-[15px] justify-start">
                          ville
                        </td>
                        <td>
                          <input
                            type="search"
                            id="default-search"
                            className="block w-full p-1 mb-3 text-sm bg-[#F0EFFB] placeholder-fontColor text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder-Fredoka"
                            placeholder="Tunis"
                            required
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="flex font-Fredoka mb-3 font-Fredoka-medium text-[15px] justify-start">
                          délégation du gouvernorat
                        </td>
                        <td>
                          <input
                            type="search"
                            id="default-search"
                            className="block w-full p-1 mb-3 text-sm bg-[#F0EFFB] placeholder-fontColor text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder-Fredoka"
                            placeholder="La Goulette"
                            required
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="flex font-Fredoka mb-3 font-Fredoka-medium text-[15px] justify-start">
                          adresse postale
                        </td>
                        <td>
                          <input
                            type="search"
                            id="default-search"
                            className="block w-full mb-3 p-1 text-sm bg-[#F0EFFB] placeholder-fontColor text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder-Fredoka"
                            placeholder="Rue de la Liberté"
                            required
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="flex font-Fredoka mb-3 font-Fredoka-medium text-[15px] justify-start">
                          numéro de bâtiment
                        </td>
                        <td>
                          <input
                            type="search"
                            id="default-search"
                            className="block w-full mb-3 p-1 text-sm bg-[#F0EFFB] placeholder-fontColor text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder-Fredoka"
                            placeholder="5"
                            required
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="flex font-Fredoka font-Fredoka-medium text-[15px] justify-start">
                          code postal
                        </td>
                        <td>
                          <input
                            type="search"
                            id="default-search"
                            className="block w-full p-1 text-sm bg-[#F0EFFB] placeholder-fontColor text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder-Fredoka"
                            placeholder="2060"
                            required
                            readOnly
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Parent;
