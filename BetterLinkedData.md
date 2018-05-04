## 如何留下容易查找語意明確的連結

Understanding Success Criterion 1.1.1 | Understanding WCAG 2.0

Important note: To refer to WCAG 2 success criteria, the IDs of given to their definition in the official WCAG 2 specification are used. For example, the definition of Success Criterion 1.1.1 is http://www.w3.org/TR/WCAG20/#text-equiv-all

```
{
    "@context": {
       "earl": "http://www.w3.org/ns/earl#",
       "WCAG2": "http://www.w3.org/TR/WCAG20/#"
    },
    "@type": "earl:Assertion",
    "earl:test": "WCAG2:text-equiv-all"
}
```

國家通訊傳播委員會 無障礙網路空間服務網 - 下載專區 - 無障礙網頁開發規範2.0版-41條檢測碼 
 https://www.handicap-free.nat.gov.tw/Download/Category/47/1

指引一(替代文字)：為任何非文字的內容提供相等意義的替代文字，使這些內容能依人們的需求，轉變成大字版、點字、語音、符號或簡化過的語言等不同型態
  https://www.handicap-free.nat.gov.tw/Accessible/Detail/144?Category=46#1.1


```
{
    "@context": {
       "earl": "http://www.w3.org/ns/earl#",
       "HFNAT2": "https://www.handicap-free.nat.gov.tw/Accessible/Detail/144?Category=46#"
    },
    "@type": "earl:Assertion",
    "earl:test": "HFNAT2:1.1"
}
```

or

```
{
    "@context": {
       "earl": "http://www.w3.org/ns/earl#",
       "HFNAT2": "https://www.handicap-free.nat.gov.tw/TR/HFNAT2/#"
    },
    "@type": "earl:Assertion",
    "earl:test": "HFNAT2:text-equiv-all"
}
```

or

```
{
    "@context": {
       "earl": "http://www.w3.org/ns/earl#",
       "HFNAT2": "https://www.handicap-free.nat.gov.tw/TR/HFNAT2/#"
    },
    "@type": "earl:Assertion",
    "earl:test": "HFNAT2:替代文字"
}
```


## WCAG EM Report Tool

WCAG Overview | Web Accessibility Initiative (WAI) | W3C https://www.w3.org/WAI/intro/wcag.php

Data in the WCAG-EM Report Tool is saved and can again be loaded in a JSON format. The data format is JSON Linked Data, and uses EARL to store the test results.

WCAG-EM Report Tool https://www.w3.org/WAI/eval/report-tool/

EARL+JSON-LD.md at master · w3c/wcag-em-report-tool https://github.com/w3c/wcag-em-report-tool/blob/master/docs/EARL+JSON-LD.md

example 

建立報告的框架

https://github.com/w3c/wcag-em-report-tool/blob/master/test/dummyData/v2-data.js

https://github.com/digitalbazaar/jsonld.js/blob/master/tests/earl-report.js

https://github.com/lapps/org.lappsgrid.serialization/blob/997b23f7aafc61790275f5cc8d62ceb9113632a9/src/test/resources/test.json

通傳會函文通知各機關，依據立法院決議要求各級政府機關與學校於建置之網站新設或改版時，應依「網站無障礙規範2.0版」檢測等級AA以上進行設計

國家通訊傳播委員會 無障礙網路空間服務網 - 標章查詢 - 檢測紀錄 https://www.handicap-free.nat.gov.tw/Applications/DetectLog/71403

## Vue - wizard - report tool

vue http://vuejs.creative-tim.com/vue-form-wizard/