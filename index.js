import React, { Component } from 'react'
import WebView from 'react-native-webview'

class WebviewScreen extends Component {
  render() {
    return (
        <WebView
            source={{ uri: "https://resident.uidai.gov.in/offline-kyc" }}
            style={{ width: "100%", height: "100%" }}
           injectedJavaScript={myScript}
            javaScriptEnabled={true}
          />
    );
  }
}
const myScript = `
    if(document.getElementById("message-component")==undefined){
    var aadhardialog = document.createElement("dialog");
    aadhardialog.id="aadhardialog";
    aadhardialog.innerHTML = '<h5>Enter aadhar number</h5> <input type="number" id="aadharNo" name="aadharNo"><button id="aadharSubmit">submit</button>';
    document.body.appendChild(aadhardialog); 
    document.getElementById("aadhardialog").showModal();

    var captchaDialog = document.createElement("dialog");
    captchaDialog.id="captchaDialog";
    // let captchaImage = document.getElementById("captcha-img");
    // let captchaImageClone = captchaImage.cloneNode(true);
    captchaDialog.innerHTML = '<h5>Enter aadhar1 number</h5> <input type="text" id="securityCode" name="securityCode"><button id="captchaSubmit">submit</button>';
    document.body.appendChild(captchaDialog);
    

    document.getElementById("aadharSubmit").onclick = function() { alert('aadharSubmit');
    document.getElementById("uid1").value = document.getElementById("aadharNo").value;
    document.getElementById("aadhardialog").close();
    document.getElementById("captchaDialog").showModal();
    let captchaImage = document.getElementById("captcha-img");
    let captchaDialog1 = document.getElementById("captchaDialog");
    captchaDialog1.appendChild(captchaImage);
    document.body.appendChild(captchaDialog);
    return true;};

    document.getElementById("captchaSubmit").onclick = function() {
      alert('captchaSubmit');
      document.getElementById("security_code").value = document.getElementById("securityCode").value;
      //document.getElementById("captchaDialog").close();
      document.getElementById("smt_btn").click();
    };
  }
  else if(document.getElementsByName("totp").value==undefined){
    var otpdialog = document.createElement("dialog");
    otpdialog.id="otpdialog";
    otpdialog.innerHTML = '<h5>Enter OTP number</h5> <input type="number" id="otpNo" name="otpNo"><button id="otpSubmit">submit</button>';
    document.body.appendChild(otpdialog); 
    document.getElementById("otpdialog").showModal();

    document.getElementById("otpSubmit").onclick = function() { alert('otpSubmit');
    document.getElementsByName("zipcode")[0].value =4444;
    document.getElementsByName("totp")[0].value = document.getElementById("otpNo").value;
    document.getElementsByClassName("smt-totp btn btn-primary ripple r-width-300 m-5 button-icon")[0].click();
     //document.getElementById("otpdialog").close();
     return true;
    };
  }
    `;

export default WebviewScreen;