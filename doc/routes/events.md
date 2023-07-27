# Day Events

    GET /events

## Description

Returns all events of a day.

---

## Parameters

(required) all parameters

* **year** — a year in number format
* **month** — a month in number format
* **day** — a day in number format
* **type** — type of other params that is entered, accepted values [`jalali`, `gregorian`, `hijri`]

---

## Return format

```json
{
  "isHoliday": "boolean",
  "events": [
    {
    "date": "string",
    "stringDate": "string",
    "additionalInfo": "string",
    "event": "string",
    "isHoliday": "boolean"
    },
    ...
  ]
}
```

---

## Errors

* **204 No Content** — This status returns on a day with no event.
* **400 Bad Request** — Request did not contain one of the required parameters.
* **500 Internal Server Error** — there is a problem with time.ir

---

## Example

**Request**

    GET /events?year=1397&month=07&day=14&type=jalali

**Return**

```json
{
  "isHoliday": false,
  "events": [
    {
      "date": "1397-07-14",
      "stringDate": "14 مهر",
      "additionalInfo": "",
      "event": "روز دامپزشکی",
      "isHoliday": false
    },
    {
      "date": "1397-07-14",
      "stringDate": "14 مهر",
      "additionalInfo": "6 October",
      "event": "ترور محمد انور سادات، سومین رئیس جمهور مصر و برندهٔ جایزه صلح نوبل، توسط سازمان اسلام‌گرای جهاد اسلامی مصر",
      "isHoliday": false
    },
    {
      "date": "1397-07-14",
      "stringDate": "14 مهر",
      "additionalInfo": "6 October",
      "event": "آغاز جنگ یوم کیپور و حمله ارتش‌های مصر و سوریه از دو جبهه به اسرائیل",
      "isHoliday": false
    },
    {
      "date": "1397-07-14",
      "stringDate": "14 مهر",
      "additionalInfo": "6 October",
      "event": "تأسیس انجمن جهانی قلم در لندن",
      "isHoliday": false
    },
    {
      "date": "1397-07-14",
      "stringDate": "14 مهر",
      "additionalInfo": "6 October",
      "event": "افتتاح کاباره پرآوازه‌ی «مولن‌روژ» در پاریس",
      "isHoliday": false
    }
  ]
}
```
