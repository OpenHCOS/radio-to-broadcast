## TODO Money

https://www.hl7.org/fhir/datatypes.html#Money

Money mny-1: There SHALL be a code if there is a value and it SHALL be an expression of currency. If system is present, it SHALL be ISO 4217 (system = "urn:iso:std:iso:4217" - currency). (expression : (code or value.empty()) and (system.empty() or system = 'urn:iso:std:iso:4217')) XML, JSON

Usage: Account, ChargeItem, Claim, ClaimResponse, Contract, EligibilityResponse, ExplanationOfBenefit and PaymentReconciliation

https://www.hl7.org/fhir/account-examples.html

```
"balance": {
    "value": -1200,
    "unit": "USD",
    "system": "urn:iso:std:iso:4217",
    "code": "USD"
  }
```

ChargeItem - FHIR v3.0.1 https://www.hl7.org/fhir/chargeitem.html

```
  "quantity": {
    "value": 1
  },
  "factorOverride": 0.8,
  "priceOverride": {
    "value": 40,
    "unit": "EUR",
    "system": "urn:iso:std:iso:4217",
    "code": "EUR"
  },
  "overrideReason": "Patient is Cardiologist's golf buddy, so he gets a 20% discount!",
  "enterer": {
    "reference": "Practitioner/example"
  },
  "enteredDate": "2017-01-25T23:55:04+01:00",
```

## TODO Consent

https://www.hl7.org/fhir/consent-example.json.html

```
{
  "resourceType": "Consent",
  "id": "consent-example-basic",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n    <p>\n\tAuthorize Normal access for Treatment\n\t</p><p>\n    Patient &quot;P. van de Heuvel&quot; wishes to have all of the PHI collected at the Good Health Psychiatric Hospital \n   available for normal treatment use.\n   </p>\n   </div>"
  },
  "status": "active",
  "patient": {
    "reference": "Patient/f001",
    "display": "P. van de Heuvel"
  },
  "period": {
    "start": "1964-01-01",
    "end": "2016-01-01"
  },
  "dateTime": "2016-05-11",
  "organization": [
    {
      "reference": "Organization/Infoway",
      "display": "Canada Infoway"
    }
  ],
  "sourceAttachment": {
    "title": "The terms of the consent in lawyer speak."
  },
  "policyRule": "http://goodhealth.org/consent/policy/opt-in"
}
```

## TODO fhir server

Asymmetrik/node-fhir-server-core: A Secure Rest implementation for the HL7 FHIR Specification. For API documentation, please see https://github.com/Asymmetrik/node-fhir-server-core/wiki. https://github.com/Asymmetrik/node-fhir-server-core

## TODO Bunsen - FHIR - Apache Spark


cerner/bunsen: Explore, transform, and analyze FHIR data with Apache Spark https://github.com/cerner/bunsen

Bunsen offers first-class integration with Apache Spark for Python, Java, and Scala users. This page describes the steps to get started with them.

Deep Learning With Apache Spark — Part 1 – Towards Data Science https://towardsdatascience.com/deep-learning-with-apache-spark-part-1-6d397c16abd