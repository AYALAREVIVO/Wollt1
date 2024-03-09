web.init();
web.open('https://www.cibus-sodexo.co.il/');
web.click("id=aAccount");
web.waitForExist("//*[@class='cib-pink-grad cib-btn']");
web.click("//*[@class="cib-pink-grad cib-btn"]");



web.waitForExist("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");
web.click("(//*[@class='cib-btn cib-pink-grad ng-star-inserted'])[1]");



web.waitForExist("(//*[@class='cib-btn cib-pink-grad submit-order']");
web.click("//*[@class='cib-btn cib-pink-grad submit-order']");


