"use client";
import React, { useState, useEffect } from "react";
import Card from "./card";
import useSwr from "swr";
import { useRouter } from "next/navigation";
import fetcher from "../../../shared/utils/fetcher";
// import { CollectionQuery } from '@models/collection-query.model';
import { CollectionQuery } from "../../../models/collection-query.model";

import { strict } from "assert";
// import { useLocale, useTranslations } from "next-intl";
interface ServiceData {
  name: string;
  description: string;
  coverPage: string;
}
const Service = () => {
  const router = useRouter();
  const [vis, setVis] = useState(false);

  // const t = useTranslations('Header')
  // const locale = useLocale()

  const [perPage, setPerPage] = React.useState(5);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);
  const [selectedService, setSelectedService] =
    React.useState<ServiceData | null>(null);
  const collection: CollectionQuery = {
    top: perPage,
    skip: (currentPage - 1) * perPage,
    // locale:locale,
    orderBy: [
      {
        field: "updatedAt",
        direction: "desc",
      },
    ],
  };

  const {
    data: services,
    isLoading,
    error,
  } = useSwr(
    { url: "/portal-portfolios/get-projects", params: collection },
    fetcher
  );

  useEffect(() => {
    if (services && services.count) {
      const totalPage = Math.ceil(services.count / perPage);
      setTotalPage(totalPage);
    }
  }, [perPage, services]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  return (
    <div className="">
      <div className="h-full flex px-2 mx-10 -my-14">
        <div
          id="service"
          className="flex flex-col justify-center gap-40 pt-24
        border my-20 rounded-md

        border-teal-50
        shadow-lg
        bg-background/40
        "
          style={{ overflowX: "hidden", overflowY: "hidden" }}
        >
          <h1 className="text-5xl font-bold">
            <section>
              <div className="max-w-6xl mx-8 md:mx-20 lg:mx-10 xl:mx-auto pt-12  ">
                <div className="  md:mb-6 md:text-center">
                  <div>
                    <h1 className="text-4xl -mt-20 font-bold text-accent relative">
                      Project
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5 px-16 ">
                {services.data.map((item: ServiceData, index: number) => (
                  <div className="flex-0 w-full justify-center">
                    <Card
                      key={index}
                      serviceData={item}
                      onClick={() => handleServiceClick(item)}
                    />
                  </div>
                ))}
              </div>
              <div className="join my-7  ml-40">
                {Array.from({ length: totalPage }).map((_, index) => (
                  <button
                    key={index}
                    className={`join-item btn mx-2 ${
                      currentPage === index + 1 ? "btn-active" : ""
                    } text-black bg-accent/40 hover:bg-accent/80
                   hover:text-white  p-3 rounded`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </section>
          </h1>
        </div>

        <div className="flex-3 bg-background/70 p-4 mt-20 mb-20 pt-20">
          {selectedService ? (
            <div>
              <div
                className="relative  flex w-[800px] h-full
              flex-col rounded-xl bg-background/30 bg-clip-border
               text-gray-100  my-10  mx-40
               hover:translate-x-1 
               shadow-md
               "
              >
                {/* <div
                  className="relative mx-auto -mt-12 h-64 w-96
              overflow-hidden rounded-xl text-white 
              shadow-xl bg-cover bg-center
              "
                >
                  <img
                    className="object-fill h-48 w-full "
                    src={selectedService?.coverPage}
                    alt="Bonnie Green image"
                  />
                </div> */}
                <div className="p-6 ">
                  <h2
                    className=" font-bold mb-2 text-accent
                text-3xl
                 "
                  >
                    {selectedService.name}
                  </h2>
                  <p
                    className="block font-sans 
        xl:text-lg lg:text-base md:text-sm sm:text-xs
         
        font-light leading-relaxed 
        text-inherit antialiased
        "
                  >
                    {selectedService?.description}
                  </p>
                </div>

                <div className="p-6 pt-0 ">
                  <button
                    onClick={() => router.push("/ProductPage")}
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-accent 
            py-3 px-6 text-center align-middle font-sans 
            text-xs font-bold uppercase text-gray-900 shadow-md
             shadow-blue-500/20 transition-all hover:shadow-lg
              hover:shadow-blue-500/40 focus:opacity-[0.85] 
              focus:shadow-none active:opacity-[0.85] active:shadow-none 
              disabled:pointer-events-none disabled:opacity-50 
              disabled:shadow-none"
                  >
                    detail
                  </button>
                </div>

                <div className=""></div>
              </div>
            </div>
          ) : (
            <p
              className="text-blue-900 justify-center font-bold text-xl 
          text-center mt-16
          "
            >
              Please select from the products to see the description
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
