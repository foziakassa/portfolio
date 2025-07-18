// 'use client'

// import ItemLayout from "./ItemLayout";
//  import useSwr from "swr";
// import fetcher from '../../../shared/utils/fetcher';
// import { CollectionQuery } from "../../../models/collection-query.model";



// export  function Expriance(){
//     const collection: CollectionQuery = {
      
//     };
//     const {
//       data,
//       isLoading,
//       error,
//     } = useSwr(
//       { url: "/portal-portfolios/get-experiences", params: collection },
//       fetcher
//     );
// if(data){
//     console.log(data)

//     return(
//         <div className="">
            
         
//           <p className="font-semibold w-full text-left text-2xl 
//           sm:text-2xl"> June/2023-september/2023<br/>
//             <sub className="font-light 
//             text-xl sm:text-sm md:text-lg text-gray-200 ">
//               {data.data[0].description}
//               </sub>
//           </p>
        

        
//         </div>
//     )
// }
// }
// export function Expriance2(){
//     const collection: CollectionQuery = {
      
//     };
//     const {
//       data,
//       isLoading,
//       error,
//     } = useSwr(
//       { url: "/portal-portfolios/get-experiences", params: collection },
//       fetcher
//     );
//     if(data){
//     return(
//         <div className="">
//             <p className="font-semibold w-full text-left text-2xl 
//           sm:text-2xl"> June/2023-september/2023<br/>
//             <sub className="font-light 
//             text-xl sm:text-sm md:text-lg text-gray-200 ">
//               {data.data[1].description}
//               </sub>
//           </p>

//         </div>
//     )
// }
// }


'use client'

import ItemLayout from "./ItemLayout";
 import useSwr from "swr";
import fetcher from '../../../shared/utils/fetcher';
import { CollectionQuery } from "../../../models/collection-query.model";



export  function Expriance(){
  


    return(
        <div className="">
            
         
          <p className="font-semibold w-full text-left text-2xl 
          sm:text-2xl"> June/2023-september/2023<br/>
            <sub className="font-light 
            text-xl sm:text-sm md:text-lg text-gray-200 ">
              Frontend Development Intern
Company: Perago Information Solutions
Technologies Used: Angular Framework
              </sub>
          </p>
        

        
        </div>
    )
}

export function Expriance2(){
  
    return(
        <div className="">
            <p className="font-semibold w-full text-left text-2xl 
          sm:text-2xl"> June/2023-september/2023<br/>
            <sub className="font-light 
            text-xl sm:text-sm md:text-lg text-gray-200 ">
              {/* {data.data[1].description} */}
              Frontend Development Intern
Company: Kachamale Technologies
Technologies Used: Next.js, Node.js
              </sub>
          </p>

        </div>
    )
}
