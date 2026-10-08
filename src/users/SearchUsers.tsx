import { useState } from "react";
import { Listusers } from "./Listusers";



export const SearchUsers = () => {

  const [text, setText] = useState("");

  const click = ()=>{
    console.log(text)
  }
  
  const handleResetClick = () => {
    setText("")
  }



  return (
    <div>

                <div className="max-w-md mx-auto my-8">
          <div className="relative rounded-md shadow-sm">

            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <input 
              type="text" 
              id="search-user"
              value={text}
              onChange={(e) => setText(e.target.value)
              } 
              className="block w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-12 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" 
              placeholder="Buscar por nombre, correo o ID..." 
              />


            <div className="absolute inset-y-0 right-0 flex items-center pr-1.5">
              <button type="button" className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-500 hover:bg-gray-200" onClick={click} onDoubleClick={handleResetClick}> 
                ⌘K
              </button>
            </div>
          </div>
</div>

<Listusers searchTerm={text} />



    </div>
)
}
