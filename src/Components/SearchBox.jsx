import { useRef } from "react";
import { SearchTasksAction } from "../store/actions/TasksActions";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchRef = useRef();

  const handleSearch = () => {
    SearchTasksAction({ text: searchRef.current.value })(dispatch);
  };

  return (
    <div
      style={{
        border: "1px solid #D2D2D2",
        padding: "15px",
        borderRadius: "8px",
        margin: "20px",
      }}
    >
      <p style={{ fontWeight: "bold" }}>Search</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <label htmlFor="search">Search</label>
        <input type="text" placeholder="Search" id="search" ref={searchRef} />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
