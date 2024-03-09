web.init();
web.open('https://www.cibus-sodexo.co.il/');
web.click("id=aAccount");

//שם משתמש וסיסמה
web.type("id=user","ayala.revivo@verisoft.co" );
web.waitForExist("//*[@class='login-btn cib-pink-grad']");
web.click("//*[@class='login-btn cib-pink-grad']");


web.type("id=password","Aa0527167617!" );
web.waitForExist("//*[@class='login-btn cib-pink-grad']");
web.click("//*[@class='login-btn cib-pink-grad']");


// ההזמנות האחרונות שלי
web.waitForExist("//*[@class='cib-pink-grad cib-btn']");
web.click("//*[@class='cib-pink-grad cib-btn']");


//להזמין שוב
web.waitForExist("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");
web.click("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");


// //אישור הזמנה
// web.waitForExist("//*[@class='cib-btn cib-pink-grad submit-order']");
// web.click("//*[@class='cib-btn cib-pink-grad submit-order']");


// //לוגו-דף הבית
// web.waitForExist("//*[@class='cibus-logo']");
// web.click("//*[@class='cibus-logo']");


// //ההזמנות האחרונות שלי
// web.waitForExist("//*[@class='cib-pink-grad cib-btn']");
// web.click("//*[@class='cib-pink-grad cib-btn']");


// //להזמין שוב
// web.waitForExist("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");
// web.click("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");


// //אישור הזמנה
// web.waitForExist("//*[@class='cib-btn cib-pink-grad submit-order']");
// web.click("//*[@class='cib-btn cib-pink-grad submit-order']");

