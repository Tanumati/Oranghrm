package Orangehrm;

import org.openqa.selenium.By;

public class LoginPage extends Utils {
    LoadProps loadProps = new LoadProps();
    private  By _Username = By.id("txtUsername");
    private  By _Password = By.id("txtPassword");
    private  By _loginbutton = By.id("btnLogin");
    private By _actualmsg = By.linkText("Welcome Admin");

       public void loginPage(){
       }

        public void EnterUsername(String Usernamedata )
        {
           EnterText(_Username,Usernamedata);}
        public void  EnterPassword(String Passworddata){
           EnterText(_Password,Passworddata);}
        public void Clickonbutton(){
            ClickElement(_loginbutton);}
        public void VerifyUserIsOnLoginpage(){
           asserturlequals("https://opensource-demo.orangehrmlive.com/index.php/dashboard");

    }
}
