import React, { useEffect, useState } from 'react'

  export interface User{
    id:number;
    name :string
    email :string
  }

  interface searhProps {
    searchTerm: string;
  }

export const useHook = ( ) => {
    const [users, setUsers] = useState<User[]>([]);
      const [loading, setLoading] = useState(true)

        const handleOnclick = ()=>{
            setCounter(counter +  1)
        }


        const handleReduceOnClick = ()=> {
            setCounter(counter - 1)
        }
      
      const [counter, setCounter] = useState(10);


   useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data); // Guardamos la lista en el estado
        console.log('Lista guardada con exito')
      } catch (error) {
        console.error("Error al traer los usuarios:", error);
      } finally {
        setLoading(false); // Desactivamos el indicador de carga
      }
    };

    fetchUsers();
  }, []); // [] = Se ejecuta una sola vez al montar el componente
  
    return{

        //properties 
        users,
        setUsers,
        loading,
        counter,

        //methods
        handleOnclick,
        handleReduceOnClick


  }


}
