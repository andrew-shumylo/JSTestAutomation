module.exports = class Page{
    //Base URL
    open (path){
        return browser.url(path);
    }
}