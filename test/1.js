web.init();
web.open('https://www.cibus-sodexo.co.il/');
web.click("id=aAccount");


web.transaction('שם משתמש וסיסמה')
web.type("id=user","ayala.revivo@verisoft.co" );
web.waitForExist("//*[@class='login-btn cib-pink-grad']");
web.click("//*[@class='login-btn cib-pink-grad']");


web.type("id=password","Aa0527167617!" );
web.waitForExist("//*[@class='login-btn cib-pink-grad']");
web.click("//*[@class='login-btn cib-pink-grad']");

web.transaction('ההזמנות האחרונות שלי')
web.waitForExist("//*[@class='cib-pink-grad cib-btn']");
web.click("//*[@class='cib-pink-grad cib-btn']");

web.transaction('להזמין שוב')
web.waitForExist("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");
web.click("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");

web.transaction('אישור הזמנה')
web.waitForExist("//*[@class='cib-btn cib-pink-grad submit-order']");
web.click("//*[@class='cib-btn cib-pink-grad submit-order']");

web.transaction('לוגו-דף הבית')
web.waitForExist("//*[@class='cibus-logo']");
web.click("//*[@class='cibus-logo']");

web.transaction('ההזמנות האחרונות שלי')
web.waitForExist("//*[@class='cib-pink-grad cib-btn']");
web.click("//*[@class='cib-pink-grad cib-btn']");

web.transaction('להזמין שוב')
web.waitForExist("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");
web.click("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");

web.transaction('אישור הזמנה')
web.waitForExist("//*[@class='cib-btn cib-pink-grad submit-order']");
web.click("//*[@class='cib-btn cib-pink-grad submit-order']");

web.transaction('לוגו-דף הבית')
web.waitForExist("//*[@class='cibus-logo']");
web.click("//*[@class='cibus-logo']");

web.transaction('ההזמנות האחרונות שלי')
web.waitForExist("//*[@class='cib-pink-grad cib-btn']");
web.click("//*[@class='cib-pink-grad cib-btn']");

web.transaction('להזמין שוב')
web.waitForExist("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");
web.click("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");

web.transaction('אישור הזמנה')
web.waitForExist("//*[@class='cib-btn cib-pink-grad submit-order']");
web.click("//*[@class='cib-btn cib-pink-grad submit-order']");

web.transaction('לוגו-דף הבית')
web.waitForExist("//*[@class='cibus-logo']");
web.click("//*[@class='cibus-logo']");
