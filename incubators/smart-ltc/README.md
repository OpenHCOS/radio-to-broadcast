# 長期照顧給付及支付基準

- 長期照顧（照顧服務、專業服務、交通接送服務、輔具服務及居家無障礙環境改善服務）給付及支付基準 - 衛生福利部 https://www.mohw.gov.tw/cp-3763-44235-1.html
- 從使用者角度解讀 『長照給付及支付基準』 https://www.familycare.org.tw/sites/default/files/20180130%E5%9F%BA%E6%96%BC%E4%BD%BF%E7%94%A8%E8%80%85%E7%B6%93%E9%A9%97%E5%B1%95%E6%9C%9B%E9%95%B7%E7%85%A7%E6%94%AF%E4%BB%98%E6%96%B0%E5%88%B6%28%E5%AE%B6%E7%B8%BD%E9%99%B3%E6%99%AF%E5%AF%A7%E7%A7%98%E6%9B%B8%E9%95%B7%29.pdf

## ICF

- 國際健康功能與身心障礙分類系統 - 維基百科，自由的百科全書 
 https://zh.wikipedia.org/wiki/%E5%9C%8B%E9%9A%9B%E5%81%A5%E5%BA%B7%E5%8A%9F%E8%83%BD%E8%88%87%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E5%88%86%E9%A1%9E%E7%B3%BB%E7%B5%B1
- OID repository - 2.16.840.1.113883.6.254 = {joint-iso-itu-t(2) country(16) us(840) organization(1) hl7(113883) externalCodeSystems(6) icf(254)} 
 http://oid-info.com/get/2.16.840.1.113883.6.254
- Terminologies-systems - FHIR v3.0.1 
 https://www.hl7.org/fhir/terminologies-systems.html
- 新制(8類)與舊制(16類)身心障礙類別及代碼對應表 
 https://www.set.edu.tw/reg/tra/Interior.htm
- ICF編碼指引 https://repat.sfaa.gov.tw/files/ICFguide990508.pdf


### 長照個案 ICF 7 

- b Body functions - REHADAT-ICF-Guide 
 https://www.rehadat-icf.de/en/koerperfunktionen/index.html
- b7 Neuromusculoskeletal and movementrelated functions - REHADAT-ICF-Guide 
 https://www.rehadat-icf.de/en/koerperfunktionen/b7/index.html
- 長期照顧個案管理實務面  http://www.kmhk.org.tw/sweb/New_Folder/file/teacherFile/02%E9%95%B7%E6%9C%9F%E7%85%A7%E9%A1%A7%E5%80%8B%E6%A1%88%E7%AE%A1%E7%90%86%E5%AF%A6%E5%8B%99%E9%9D%A2-%E7%AB%B9%E5%90%9B.pdf


### ICF CodeSystem "urn:oid:2.16.840.1.113883.6.254"

- template http://decor.nictiz.nl/pub/eoverdracht/e-overdracht-html-20141209T072156/tmp-2.16.840.1.113883.2.4.6.10.30.2.204-2012-05-03T000000.html
- https://www.rehadat-icf.de/en/koerperfunktionen/b1/b114/b1142/index.html
- GeneralMentalFunctions-v3.0(2016EN) - Zorginformatiebouwstenen https://zibs.nl/wiki/GeneralMentalFunctions-v3.0(2016EN)
- Mapping code system OIDs to URIs 
 https://gist.github.com/vlindhol/09290d2386946e06ad21919f6c28bb86

```
<observation classCode="OBS" moodCode="EVN">
  <templateId root="2.16.840.1.113883.2.4.6.10.30.2.204"/>
  <code code="b11429" codeSystem="2.16.840.1.113883.6.254" codeSystemName="ICF" displayName="Oriëntatie in persoon, niet gespecificeerd"/>
  <value xsi:type="CD" code="b11429.1" displayName="lichte stoornis"/>
</observation>
```