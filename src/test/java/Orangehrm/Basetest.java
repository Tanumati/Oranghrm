package Orangehrm;

import org.junit.Before;
import org.testng.annotations.BeforeMethod;

import java.util.concurrent.TimeUnit;

public class Basetest extends Utils {
    BrowserSelector browserSelector = new BrowserSelector();
    LoadProps loadProps = new LoadProps();

    @BeforeMethod
    public void setup(){
       browserSelector.setUpBrowser();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get(loadProps.getProperty("url"));
    }

}
