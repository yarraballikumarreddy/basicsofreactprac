import React from "react";

class Footer extends React.Component{

    render(){
        return(
<footer>

        <div class="suggestions">
            <h3>Feedback :</h3>
            <input type="text" placeholder="Suggestions"/>
            <button>Submit</button>
        </div>

        <div class="social">
            <p>Connect to Us</p>
            <a href=""> <img class="fb" src="images/fb2.png"></img></a>
            <a href="https://twitter.com/login?lang=en">
                <img class="twt" src="images/tw1.png"> </img></a>
        </div>

        <div class="mail">Email:
            <p>shantalakshmiefoods@gmail.com</p>
        </div>

        <div class="address">
            <p>CONTACT US :</p>
            <p> Door:116,srivarinagar,<br/>madanapalli,chittoor,<br/>Andrapardesh,<br/>india ,517325
                 contact number :9949776904</p>
        </div>
    </footer>
      )
            
    }
}
export default Footer;