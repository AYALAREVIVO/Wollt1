web.init();
web.open('https://www.cibus-sodexo.co.il/');
web.click("id=aAccount");
// ההזמנות האחרונות שלי
web.waitForExist("//*[@class='cib-pink-grad cib-btn']");
web.click("//*[@class='cib-pink-grad cib-btn']");


//להזמין שוב
web.waitForExist("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");
web.click("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");


//אישור הזמנה
web.waitForExist("//*[@class='cib-btn cib-pink-grad submit-order']");
web.click("//*[@class='cib-btn cib-pink-grad submit-order']");


//לוגו-דף הבית
web.waitForExist("//*[@class='cibus-logo']");
web.click("//*[@class='cibus-logo']");


//ההזמנות האחרונות שלי
web.waitForExist("//*[@class='cib-pink-grad cib-btn']");
web.click("//*[@class='cib-pink-grad cib-btn']");


//להזמין שוב
web.waitForExist("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");
web.click("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");


//אישור הזמנה
web.waitForExist("//*[@class='cib-btn cib-pink-grad submit-order']");
web.click("//*[@class='cib-btn cib-pink-grad submit-order']");

