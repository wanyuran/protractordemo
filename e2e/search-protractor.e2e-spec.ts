import {browser, by, element, protractor} from 'protractor';

fdescribe('打开百度，搜索protractor并跳转至protractor官网', async () => {
  it('打开百度，输入protractor并点击搜索', async () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.baidu.com/');
    const EC = browser.ExpectedConditions;
    const searchBtn = element(by.css("input[type='submit']"));
    browser.wait(EC.visibilityOf(searchBtn));
    browser.sleep(2000);
    expect(searchBtn.getAttribute('value')).toEqual('百度一下');

    const searchBar = element(by.css("input[id='kw']"));
    await searchBar.sendKeys('protractor');
    await searchBtn.click();
  });

  it('搜索出protractor官网，并点击跳转至官网', async () => {
    browser.sleep(2000);
    const result = element(by.partialLinkText(" - end-to-end testing for AngularJS"));
    await result.click();
    browser.sleep(5000);

    const logo = element(by.className('protractor-logo'));
    expect(logo).toBeTruthy();


  });

});
