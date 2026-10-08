import { useHook } from "./useHook";

// 1. Definimos la interfaz de la prop
interface SearchProps {
  searchTerm: string;
}

// 2. Desestructuramos { searchTerm } correctamente
export const Listusers = ({ searchTerm }: SearchProps) => {
  const { users, loading, handleOnclick, counter, handleReduceOnClick } = useHook();

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden my-6">
      {/* MENSAJE DE CARGANDO */}
      {loading ? (
        <div className="p-8 text-center text-gray-500 font-medium">
          Cargando usuarios de la API...
        </div>
      ) : (
        /* LISTA DINÁMICA CON .filter() Y .map() */
        <ul className="divide-y divide-gray-100">
          {users
            // CORRECCIÓN AQUÍ: 
            // - Usamos searchTerm en lugar de text
            // - Quitamos las llaves {} para que el return sea automático
            .filter((user) => 
              user.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((user) => (
              <li
                key={user.id}
                className="p-4 sm:px-6 hover:bg-gray-50/80 transition-colors flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
                    alt={user.name}
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
                    Usuario #{user.id}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    • Activo
                  </span>
                  <button className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}

      {/* Pie de la tarjeta */}
      <div className="p-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span>
          Mostrando <strong>{users.length}</strong> usuarios | Contador de práctica:{" "}
          <strong className="text-blue-600 text-sm">{counter}</strong>
        </span>
        <div className="flex gap-2">
          <button
            className="px-3 py-1.5 bg-white border border-gray-200 rounded-md font-medium hover:bg-gray-50 text-gray-700 shadow-sm disabled:opacity-50"
            onClick={handleReduceOnClick}
          >
            Anterior
          </button>
          <button
            className="px-3 py-1.5 bg-white border border-gray-200 rounded-md font-medium hover:bg-gray-50 text-gray-700 shadow-sm"
            onClick={handleOnclick}
          >
            Siguiente (Suma +1)
          </button>
        </div>
      </div>
    </div>
  );
};