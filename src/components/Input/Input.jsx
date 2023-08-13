import { InputSearch } from "./input.styled"
import Search from "../../assets/svgs/search"

const Input = ({children}) => {
  return (
   <div>
    <InputSearch>{children}</InputSearch>
    <Search/>
   </div>
   
   
  )
}

export default Input