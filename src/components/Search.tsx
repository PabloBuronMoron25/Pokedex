
import type { SearchType } from "../types/type";
import { Search as SearchIcon } from "lucide-react";

const Search = ({onSearch}: SearchType) => {

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   onSearch(e.target.value);
 };

  

  return (
  
    <div className="position-relative w-100 d-flex align-items-center">
      
     
      <SearchIcon 
        size={18} 
        className="text-muted position-absolute" 
        style={{ 
          left: '14px', 
          pointerEvents: 'none',
          zIndex: 5 
        }} 
      />

      
      <input
        type="text"
        placeholder="Buscar Pokémon"
        onChange={handleInputChange}
       
        className="form-control ps-5 py-2 rounded-pill shadow-sm border-secondary-subtle" 
      />
    </div>
  );

}


export default Search;