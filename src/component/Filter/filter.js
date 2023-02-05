import { useState } from "react";
import { UseproductsAction } from "../../Provider/provider";
import Select from "react-select";
import "../../App.css";
import SearchBar from "../Search/Search";

const optionssize = [
  { value: "", label: "ALL" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const optionsprice = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = UseproductsAction();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const Filtersizehandler = (selectedoption) => {
    // console.log(selectedoption);
    // setValue(e.target.value);
    // console.log(value);
    // dispatch({ type: "filter", event: e });

    setFilter(selectedoption);
    dispatch({ type: "filter", selectedoption });
    dispatch({ type: "sort", selectedoption: sort });
  };

  const Filterpricehandler = (selectedoption) => {
    // console.log(selectedoption);
    dispatch({ type: "sort", selectedoption });
    setSort(selectedoption);
  };

  return (
    <>
      <SearchBar filter={filter} />
      <div className="filter">
        <p>this is filter part</p>
        <div className="reactselect">
          <span>oreder by size :</span>
          {/* <select onChange={Filtersizehandler} value={value}>
          <option value="">ALL</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select> */}
          <Select
            value={filter}
            onChange={Filtersizehandler}
            options={optionssize}
            className="select"
          />

          <span>sort by price :</span>
          <Select
            value={sort}
            onChange={Filterpricehandler}
            options={optionsprice}
            className="select"
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
