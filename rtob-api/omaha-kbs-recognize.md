## Case 1

陳先生89歲，官校畢，育有一女一男，基督教，軍職退休，主要語言國語。107年1月於家中跌倒後腦溢血，術後氣切並使用呼吸器E1VTM1  NG(+)  foley(+)。

家庭史：個案原為為主要經濟來源與家庭決策者。病後由兒女支應，退休俸約20000，未同住兒子提供每月費用10000，已申請重大傷病卡，醫師表示要過六個月才能申請身心障礙手冊。主要照顧者為76歲妻子陳太太，偶而由同住的小女兒協助

服務專業人員利用手機APP錄音上傳音檔，後端API即時分析音檔回應omaha分類問題與根據前後對答提供KBS提示。

* Knowlege: 懂到哪
* Behavior: 做到哪
* Status: 目前呢

## Request

* 參考服務 Speech to Text Demo https://speech-to-text-demo.ng.bluemix.net/

```
curl -X POST
--header "Content-Type: audio/flac"
--data-binary /path-storage/audio-omaha-user123-id34563.flac
"https://openhcos.github.io/radio-to-broadcast/api/v1/omaha-kbs-recognize"
```

## Response

```
{
  "results": [
    {
      "alternatives": [
        {
          "timestamps": [
            [
              "陳太太",
              0.68,
              1.19
            ],
            [
              "你好",
              1.47,
              1.93
            ],
            [
              "你好",
              1.96,
              2.12
            ],
            [
              "陳先生",
              2.12,
              2.59
            ],
            [
              "狀況如何",
              2.59,
              3.17
            ],
            . . .
          ]
          "confidence": 0.821,
          "transcript": "陳先生 你好 你好 陳先生狀況如何...",
          "words": ["陳先生","你好","狀況","擦傷","身心障礙"....],
          "kbs-now": [
              "D3-9-13": ["K":1,"B":3,"S":5, "name":"體溫失控：居家居家醫療、居家護理"],
              "D3-10-6": ["K":3,"B":2,"S":1,,"name":"異常痰：居家居家醫療、居家護理"],
              "D2-1-49": ["K":3,"B":2,"S":1, "name":"缺乏可及資源；告知喘息服務及家屬支持團體相關資訊"],
              "D3-10-6": ["K":3,"B":2,"S":1]
              ], 
          "kbs20180316-history": [
              "D3-9-13": ["K":2,"B":4,"S":5],
              "D3-10-6": ["K":3,"B":2,"S":3],
              ], 
          "kbs20180329-history": [
              "D3-9-13": ["K":2,"B":4,"S":5],
              "D3-10-6": ["K":3,"B":2,"S":3],
              ], 
        }
      ]
    }
  ],
  "speaker_labels": [
    {
      "from": 0.68,
      "to": 1.19,
      "speaker": 2,
      "confidence": 0.418,
      "final": false
    },
    {
      "from": 1.47,
      "to": 1.93,
      "speaker": 1,
      "confidence": 0.521,
      "final": false
    },
    {
      "from": 1.96,
      "to": 2.12,
      "speaker": 2,
      "confidence": 0.407,
      "final": false
    },
    {
      "from": 2.12,
      "to": 2.59,
      "speaker": 2,
      "confidence": 0.407,
      "final": false
    },
    {
      "from": 2.59,
      "to": 3.17,
      "speaker": 2,
      "confidence": 0.407,
      "final": false
    },
    . . .
  ]
}
```
