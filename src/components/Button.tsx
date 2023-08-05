// the design and activation of each of the function





// these functions hold every individual limb change for the game. 
function RightArm(){
    alert("Hello1");
  }
  
  function LeftArm(){
    alert("Hello1");
  }
  
  function RightLeg(){
    alert("Hello1");
  }
  
  function LeftLeg(){
    alert("Hello1");
  }
  
  
  // essentially adds div tag that contains a button group of 4. Planning to change the sizes of these soon
  function ControlButtons() {
    // keep this for later- const colors = ["Red", "Blue", "Purple", "Yellow"]
  
    return (
  
  
      <div className="btn-group" role="group" aria-label="Basic example">
        <button onClick={RightArm} key="button1" type="button" className="btn btn-primary">RightArm</button>
        <button onClick={LeftArm} key="button2" type="button" className="btn btn-secondary">LeftArm</button>
        <button onClick={RightLeg} key="button3" type="button" className="btn btn-danger">RightLeg</button>
        <button onClick={LeftLeg} key="button4" type="button" className="btn btn-warning">LeftLeg</button>
      </div>
    );
  }
  
  
  
  export default ControlButtons;
  