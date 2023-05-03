import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SaveList = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);                
  const dispatch = useDispatch(); 

  const saveClick = () => { 
    const data = {coffee, sugar};
    localStorage.setItem("ListData", JSON.stringify(data));
  };
  const clearClick = () => {
    localStorage.removeItem("ListData");
    dispatch({type: "resetList"});
  };

  return (
    <div className="save">
      {!isLoggedIn && <p>You must be logged in to save the list.</p>}
      {isLoggedIn && (
        <React.Fragment>
          <button onClick={saveClick} >SAVE</button>
          <button onClick={clearClick}>CLEAR</button> 
        </React.Fragment>
      )}
    </div>
  );
};

export default SaveList;
