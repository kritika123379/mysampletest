import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


// const Light={
//     background-color: #fff;
//     buttons:{
//         background-color: #f0f0f0;
//         font-color:black
//     }
// };
//  const Dark{
//     background-color: #000;
//     buttons:{
//         background-color:#666;
//         font-color:#fff;

//     }
// };

// Lighttheme=()=>{

// }
// Darktheme=()=>{

// }


 


export class Keypad extends Component {
    buttonPressed = e =>{
        this.props.buttonPressed(e.target.name);
    }
    render() {
        return (
            <div className="buttons">
            <div className="wrapper">
            
            
            
               <Button variant="info" name="1" onClick={this.buttonPressed}> 1    One</Button> 
               <Button variant="secondary" name="2"onClick={this.buttonPressed}> 2   Two</Button> 
               <Button variant="dark" name="3"onClick={this.buttonPressed}>3   Three</Button> 
               <br/>
               <Button variant="danger" name="4"onClick={this.buttonPressed}>4   Four</Button> 
               <Button variant="success" name="5"onClick={this.buttonPressed}>5   Five</Button> 
               <Button  variant="warning" name="6"onClick={this.buttonPressed}>6     Six</Button> 
               <br/>
               <Button  variant="primary" name="7"onClick={this.buttonPressed}>7    Seven</Button> 
               <Button  variant="info" name="8"onClick={this.buttonPressed}>8    Eight</Button> 
               <Button variant="danger"  name="9"onClick={this.buttonPressed}>9   Nine</Button> 
               <br/>
               <Button variant="success" name="0"onClick={this.buttonPressed}>0   Zero</Button>
               <Button variant="dark"name="."onClick={this.buttonPressed}>.   Dot</Button>
               <Button variant="secondary" name="C"onClick={this.buttonPressed}>All Clear </Button>
               
               
                <br/>
                <Button variant="secondary" name="C"onClick={this.buttonPressed}>C   E</Button> 
                <Button variant="warning"name="CE"onClick={this.buttonPressed}> Backspace</Button> 
                <Button variant="primary"name="(" onClick={this.buttonPressed}>(Leftbracket</Button> 
                <br/>
               <Button variant="primary"  name="*"onClick={this.buttonPressed}>*   MULTIPLY</Button> 
               <Button variant="secondary"  name="+"onClick={this.buttonPressed}>+   ADD</Button> 
               <Button variant="info" name="-"onClick={this.buttonPressed}>-    SUBTRACT</Button>
               <br/>
               
                <Button variant="danger"name=")"onClick={this.buttonPressed}> Right Bracket)</Button> 
               <Button  variant="warning" name="="onClick={this.buttonPressed}>=   ISEQUALTO</Button>
               <Button variant="danger" name="/"onClick={this.buttonPressed}>/   DIVIDE</Button> 
               </div> 
               <br/><br/>
               <Button  variant="secondary" className="Light" onClick={this.Lighttheme}>  Light Theme</Button>
                <Button variant="dark"  className="Dark" onClick={this.Darktheme}>Dark Theme</Button> 
         
               </div>
        )
    }
}

export default Keypad
