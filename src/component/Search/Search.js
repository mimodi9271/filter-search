import { useState } from "react";
import { UseproductsAction } from "../../Provider/provider";

const SearchBar = ({filter}) => {
  const [value, setValue] = useState("");

  const dispatch = UseproductsAction();

  const changeHandler = (e) => {
    // console.log(e.target.value)
    if(filter == ""){
      dispatch({type : "search" , event : e });
      setValue(e.target.value);
      return;
    }
    dispatch({type : "filter", selectedoption : filter });
    dispatch({type : "search" , event : e })
    setValue(e.target.value);
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="search for ..."
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchBar;
