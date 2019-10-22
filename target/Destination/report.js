$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Features/login.feature");
formatter.feature({
  "line": 2,
  "name": "As a user i should be login in",
  "description": "",
  "id": "as-a-user-i-should-be-login-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User Should able to login successfully",
  "description": "",
  "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter the\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click on loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should able to login valid credential succefully",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 16,
      "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 17,
      "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully;;2"
    },
    {
      "cells": [
        "mango",
        "admin123"
      ],
      "line": 18,
      "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully;;3"
    },
    {
      "cells": [
        "Admin",
        "a3215"
      ],
      "line": 19,
      "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully;;4"
    },
    {
      "cells": [
        "---",
        "admin123"
      ],
      "line": 20,
      "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully;;5"
    },
    {
      "cells": [
        "Admin",
        "----"
      ],
      "line": 21,
      "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully;;6"
    },
    {
      "cells": [
        "mango",
        "a12356"
      ],
      "line": 22,
      "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12596522600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 350298200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User Should able to login successfully",
  "description": "",
  "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enter \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter the\"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click on loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should able to login valid credential succefully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 355759200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.userEnterThe(String)"
});
formatter.result({
  "duration": 445586200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLoginbutton()"
});
formatter.result({
  "duration": 1808687100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToLoginValidCredentialSuccefully()"
});
formatter.result({
  "duration": 154706600,
  "status": "passed"
});
formatter.after({
  "duration": 114700,
  "status": "passed"
});
formatter.before({
  "duration": 86824536900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 258100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User Should able to login successfully",
  "description": "",
  "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enter \"mango\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter the\"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click on loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should able to login valid credential succefully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mango",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 299521900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.userEnterThe(String)"
});
formatter.result({
  "duration": 311317300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLoginbutton()"
});
formatter.result({
  "duration": 806141100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToLoginValidCredentialSuccefully()"
});
formatter.result({
  "duration": 89249500,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat Orangehrm.Utils.asserturlequals(Utils.java:97)\r\n\tat Orangehrm.LoginPage.VerifyUserIsOnLoginpage(LoginPage.java:23)\r\n\tat Orangehrm.MyStepdefs.userShouldAbleToLoginValidCredentialSuccefully(MyStepdefs.java:42)\r\n\tat ✽.Then user should able to login valid credential succefully(src/test/Resources/Features/login.feature:13)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!.....Scenario Failed....!!!Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 835547100,
  "status": "passed"
});
formatter.before({
  "duration": 19334198000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 144600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User Should able to login successfully",
  "description": "",
  "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enter \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter the\"a3215\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click on loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should able to login valid credential succefully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 437410100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a3215",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.userEnterThe(String)"
});
formatter.result({
  "duration": 489695100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLoginbutton()"
});
formatter.result({
  "duration": 1045125100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToLoginValidCredentialSuccefully()"
});
formatter.result({
  "duration": 85854000,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat Orangehrm.Utils.asserturlequals(Utils.java:97)\r\n\tat Orangehrm.LoginPage.VerifyUserIsOnLoginpage(LoginPage.java:23)\r\n\tat Orangehrm.MyStepdefs.userShouldAbleToLoginValidCredentialSuccefully(MyStepdefs.java:42)\r\n\tat ✽.Then user should able to login valid credential succefully(src/test/Resources/Features/login.feature:13)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!!.....Scenario Failed....!!!Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 663867000,
  "status": "passed"
});
formatter.before({
  "duration": 21075623500,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-U80KTVV7\u0027, ip: \u0027192.168.43.62\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat Orangehrm.BrowserSelector.setUpBrowser(BrowserSelector.java:65)\r\n\tat Orangehrm.Hooks.SetUp(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.net.ConnectException: Failed to connect to ondemand.eu-central-1.saucelabs.com/185.94.26.249:443\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:105)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\t... 80 more\r\nCaused by: java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\r\n\t... 102 more\r\n",
  "status": "failed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "User Should able to login successfully",
  "description": "",
  "id": "as-a-user-i-should-be-login-in;user-should-able-to-login-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enter \"---\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter the\"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click on loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should able to login valid credential succefully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "---",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.userEnterThe(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLoginbutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToLoginValidCredentialSuccefully()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("!!!!!!!.....Scenario Failed....!!!Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 648707900,
  "status": "passed"
});
