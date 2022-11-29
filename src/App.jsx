import React, {useState} from "react";
import Jobber from "./Jobber";


function App(){
const [jobActive, setJobActive] = useState(false)


    return(


    <div className="App">

<div className={!jobActive ? "JobberButton": "Overlay "} onClick={()=> setJobActive(!jobActive)}> </div>

{jobActive ? <Jobber/>: <button onClick={()=> setJobActive(!jobActive)} className="JobberButton" >
    Activate Jobber
</button>}
</div>
    );
}
export default App;