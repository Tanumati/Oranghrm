package Orangehrm;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs extends Utils {
    LoginPage loginPage=new LoginPage();

    @Given("^user is on login page$")
    public void userIsOnLoginPage() {

    }


    @When("^user enter \"([^\"]*)\"$")
    public void userEnter(String Username)  {
        loginPage.EnterUsername(Username);
    }

    @And("^user enter the\"([^\"]*)\"$")
    public void userEnterThe(String Password)  {
        loginPage.EnterPassword(Password);

    }

    @And("^user click on loginbutton$")
    public void userClickOnLoginbutton() {
        loginPage.Clickonbutton();
    }

    @Then("^user should able to see\"([^\"]*)\"$")
    public void userShouldAbleToSee(String Result)  {
        asserturlequals(Result);

    }

    @Then("^user should able to login valid credential succefully$")
    public void userShouldAbleToLoginValidCredentialSuccefully() {
        loginPage.VerifyUserIsOnLoginpage();
    }
}
