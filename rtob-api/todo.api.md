## speech api

*  https://speech.googleapis.com/v1/speech
* Performing Asynchronous Speech Recognition  |  Cloud Speech API Documentation  |  Google Cloud https://cloud.google.com/speech/docs/async-recognize


example

```
"response": {
    "@type": "type.googleapis.com/google.cloud.speech.v1.LongRunningRecognizeResponse",
    "results": [
      {
        "alternatives": [
          {
            "transcript": "okay so what am I doing here...(etc)...",
            "confidence": 0.96096134,
          }
        ]
      },
      {
        "alternatives": [
          {
            ...
          }
        ]
      }
    ]
  }
```

SpeechRecognitionAlternative

Alternative hypotheses (a.k.a. n-best list).

* https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1#google.cloud.speech.v1.SpeechRecognitionAlternative

```
Fields transcript	 string

confidence	float

words[] 
```

## IBM Watson Speech to Text service 

英文可辨識不同人，中文還不行。

* Speech to Text Demo https://speech-to-text-demo.ng.bluemix.net/
* Output features https://console.bluemix.net/docs/services/speech-to-text/output.html#speaker_labels
* FLAC - 維基百科，自由的百科全書 https://zh.wikipedia.org/wiki/FLAC

```

curl -X POST -u {username}:{password}
--header "Content-Type: audio/flac"
--data-binary @{path}audio-multi.flac
"https://stream.watsonplatform.net/speech-to-text/api/v1/recognize?model=en-US_NarrowbandModel&speaker_labels=true"


{
  "results": [
    {
      "alternatives": [
        {
          "timestamps": [
            [
              "hello",
              0.68,
              1.19
            ],
            [
              "yeah",
              1.47,
              1.93
            ],
            [
              "yeah",
              1.96,
              2.12
            ],
            [
              "how's",
              2.12,
              2.59
            ],
            [
              "Billy",
              2.59,
              3.17
            ],
            . . .
          ]
          "confidence": 0.821,
          "transcript": "hello yeah yeah how's Billy "
        }
      ],
      "final": true
    }
  ],
  "result_index": 0,
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

## 科技大擂台 - 與AI對話(正式賽)

科技大擂台 https://fgc.stpi.narl.org.tw/activity/techai2018

(5) 科技大擂台正式賽題型說明 - YouTube https://www.youtube.com/watch?v=W0O9L-2Gz3Y