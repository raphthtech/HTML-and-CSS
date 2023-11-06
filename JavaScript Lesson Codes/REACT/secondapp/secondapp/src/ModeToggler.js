// function ModeToggler () {
//     const darkModeOn = true;
//     const darkMode = <h1>Dark Mode is on</h1>;
//     const lightMode = <h1>Light Mode is on</h1>

//     return (
//         <div>
//             {darkModeOn ? darkMode : lightMode}
//         </div>
//     )
// }

// export default ModeToggler;

//TEST
// import "./toggle.css";

const Toggle = ({ toggle, handleToggleChange }) => {
  return (      
    <div className='toggle-container' onClick={handleToggleChange}>
        <div className={`toggle-btn ${!toggle ? "disable" : ""}`}>
            {toggle ? "ON" : "OFF"}
        </div>
    </div> 
  );
};

export default Toggle;