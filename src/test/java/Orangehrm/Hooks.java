package Orangehrm;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.testng.annotations.BeforeMethod;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import static org.apache.commons.io.FileUtils.copyFile;

public class Hooks extends Utils {
    BrowserSelector browserSelector = new BrowserSelector();
    LoadProps loadProps = new LoadProps();
  @Before
   public void SetUp(){
       browserSelector.setUpBrowser();
       driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
       driver.manage().window().maximize();
       driver.get(loadProps.getProperty("url"));
   }

   @After
    public void teardown(Scenario scenario)  {
      if(scenario.isFailed()){
          String screenshotname = scenario.getName().replaceAll("[.,:;?!]","")+ RandomeDate()+".png";
          //this takes a screenshot from the driver at save it to the specified location
          File Sourcepath = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
          //building up the destination path for the screenshot to save
          //Also make sure to create a folder 'screenshot' with in the cucumber-report folder
          File destinationPath = new File(System.getProperty("user.dir")+"/target/Destination/screenshots/"+screenshotname);
          //copy taken screenshot from source location to destination location
          try {
              copyFile(Sourcepath,destinationPath);
          } catch (IOException e) {
              e.printStackTrace();
          }
          scenario.write("!!!!!!!.....Scenario Failed....!!!Please see attached screenshot for the error/issue");
          //attach the screenshot to our report
          scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES),"image/png");
          //driver.close();
   }

}}
