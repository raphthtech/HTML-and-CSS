const AnotherToggler = ()=> {
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is On</h1>;
    const lightMode = <h1>Light Mode is On</h1>;

    const handleClick = ()=> {
        darkModeOn = !darkModeOn;
        // darkModeOn ? console.log('Dark Mode is on') : console.log('Light Mode is On');
        App.style = {darkModeOn ? { backgroundColor: "black" , color: "white"} : { backgroundColor: "white"  , color: "black"}};

        
    //   style={toggle ? { backgroundColor: "black" , color: "white"} : { backgroundColor: "white"  , color: "black"}}
    // >
    }

    return (
        <div className='App'>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>Switch Mode</button>
        </div>
    )
}

export default AnotherToggler;