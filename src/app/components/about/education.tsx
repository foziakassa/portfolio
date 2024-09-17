'use client'
 import useSwr from "swr";
import fetcher from '../../../shared/utils/fetcher';
import { CollectionQuery } from "../../../models/collection-query.model";


export default function Education(){
    const collection: CollectionQuery = {
      
      };
      const {
        data,
        isLoading,
        error,
      } = useSwr(
        { url: "/portal-portfolios/get-educations", params: collection },
        fetcher
      );

     if(data){
      // console.log(data)
      return(
        <p className="font-semibold w-full text-left text-2xl 
        sm:text-2xl">
         Education <br/> <sub className="font-light 
          text-xl sm:text-sm md:text-lg text-gray-200 ">
           {data.data[0].description}
            </sub>
        </p>
    )

     }
   
}