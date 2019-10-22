
package Orangehrm;

import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariOptions;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class BrowserSelector extends Utils {
       public static LoadProps loadProps = new LoadProps();
       public static final String USERNAME =loadProps.getProperty("SAUCE_USERNAME");
       public static final String ACCESS_KEY =loadProps.getProperty("SAUCE_ACCESS_KEY");
       public static final String URL = "https://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.eu-central-1.saucelabs.com:443/wd/hub";
       public static final boolean SAUCE_LAB = Boolean.parseBoolean(System.getProperty("Sauce"));
       String browser = System.getProperty("Browser");

       public void setUpBrowser() {
          //String browser=loadProps.getProperty("Browser");
           System.out.println(USERNAME);
           System.out.println(ACCESS_KEY);
           //if sauce lab is true.....................................
           
           if (SAUCE_LAB) {
               System.out.println("Running in saucelab......with Browser" + browser);
               if (browser.equalsIgnoreCase("Chrome")) {
                   MutableCapabilities sauceOptions = new MutableCapabilities();
                   ChromeOptions browserOptions = new ChromeOptions();
                   browserOptions.setExperimentalOption("w3c", true);
                   browserOptions.setCapability("platformName", "Windows 10");
                   browserOptions.setCapability("browserVersion", "77.0");
                   browserOptions.setCapability("sauce:options", sauceOptions);
                   //DesiredCapabilities caps = DesiredCapabilities.chrome();
                   try {
                       driver = new RemoteWebDriver(new URL(URL),browserOptions);
                   } catch (MalformedURLException e) {
                       e.printStackTrace();
                   }
               } else if (browser.equalsIgnoreCase("IE")) {
                   MutableCapabilities sauceOptions = new MutableCapabilities();
                   InternetExplorerOptions browserOptions = new InternetExplorerOptions();
                   browserOptions.setCapability("platformName", "Windows 10");
                   browserOptions.setCapability("browserVersion", "11.285");
                   browserOptions.setCapability("sauce:options", sauceOptions);
                   try {
                       driver = new RemoteWebDriver(new URL(URL), browserOptions);
                   } catch (MalformedURLException e) {
                       e.printStackTrace();
                   }
               } else if (browser.equalsIgnoreCase("Firefox")) {
                   MutableCapabilities sauceOptions = new MutableCapabilities();
                   FirefoxOptions browserOptions = new FirefoxOptions();
                   browserOptions.setCapability("platformName", "Windows 10");
                   browserOptions.setCapability("browserVersion", "69.0");
                   browserOptions.setCapability("sauce:options", sauceOptions);
                   try {
                       driver = new RemoteWebDriver(new URL(URL), browserOptions);
                   } catch (MalformedURLException e) {
                       e.printStackTrace();
                   }
               } else if (browser.equalsIgnoreCase("Safari")) {
                   MutableCapabilities sauceOptions = new MutableCapabilities();
                   SafariOptions browserOptions = new SafariOptions();
                   browserOptions.setCapability("platformName", "macOS 10.14");
                   browserOptions.setCapability("browserVersion", "12.0");
                   browserOptions.setCapability("sauce:options", sauceOptions);
                   try {
                       driver = new RemoteWebDriver(new URL(URL), browserOptions);
                   } catch (MalformedURLException e) {
                       e.printStackTrace();
                   }
                     } else{System.out.println("browser name is empty or wrong name:" + browser);}
               } else {
                   if(browser.equalsIgnoreCase("Chrome")) {
                       System.setProperty("webdriver.chrome.driver", "src\\test\\Resources\\Browserdriver\\chromedriver.exe");
                       driver = new ChromeDriver();
                   } else if (browser.equalsIgnoreCase("IEDriverServer")) {
                       System.setProperty("webdriver.ie.driver", "src\\test\\Resources\\Browserdriver\\IEDriverServer.exe");
                       InternetExplorerOptions internetExplorerOptions = new InternetExplorerOptions();
                       internetExplorerOptions.setCapability(InternetExplorerDriver.IE_SWITCHES, "-private");
                       internetExplorerOptions.setCapability(InternetExplorerDriver.IE_ENSURE_CLEAN_SESSION, true);
                       driver = new InternetExplorerDriver(internetExplorerOptions);
                   } else if (browser.equalsIgnoreCase("Firefox")) {
                       System.setProperty("webdriver.gecko.driver", "src\\test\\Resources\\Browserdriver\\geckodriver.exe");
                       driver = new FirefoxDriver();
                   } else {
                       System.out.println("browser name is empty or wrong name:" + browser);
                   }
               }
           }
       }
