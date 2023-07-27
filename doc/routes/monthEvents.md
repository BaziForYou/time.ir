# Month Events

    GET /events/month

## Description

Returns all events of a month.

---

## Parameters

(required) all parameters

* **year** — a year in number format
* **month** — a month in number format

---

## Return format

```json
{
  "day": {
    "isHoliday": "boolean",
    "events": [
      {
        "date": "string",
        "stringDate": "string",
        "additionalInfo": "string",
        "event": "string",
        "isHoliday": "boolean"
      }
    ]
  }
  ...
}
```

---

## Errors

* **400 Bad Request** — Request did not contain one of the required parameters.
* **500 Internal Server Error** — there is a problem with time.ir

---

## Example

**Request**

    GET /events/month?year=1397&month=02
    GET /events?year=1397&month=02

**Return**

```json
{
  "1": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-1",
        "stringDate": "1 اردیبهشت",
        "additionalInfo": "",
        "event": "روز بزرگداشت سعدی",
        "isHoliday": false
      },
      {
        "date": "1397-02-1",
        "stringDate": "1 اردیبهشت",
        "additionalInfo": "4 شعبان",
        "event": "ولادت ابوالفضل العباس علیه السلام و روز جانباز",
        "isHoliday": false
      }
    ]
  },
  "2": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-2",
        "stringDate": "2 اردیبهشت",
        "additionalInfo": "22 April",
        "event": "جشن گیاه آوری؛ روز زمین",
        "isHoliday": false
      },
      {
        "date": "1397-02-2",
        "stringDate": "2 اردیبهشت",
        "additionalInfo": "5 شعبان",
        "event": "ولادت امام زین العابدین علیه السلام",
        "isHoliday": false
      }
    ]
  },
  "3": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-3",
        "stringDate": "3 اردیبهشت",
        "additionalInfo": "",
        "event": "روزبزرگداشت شیخ بهایی؛ روزملی کارآفرینی؛ روز معماری",
        "isHoliday": false
      }
    ]
  },
  "7": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-7",
        "stringDate": "7 اردیبهشت",
        "additionalInfo": "27 April",
        "event": "روز جهانی طراحی و گرافیک",
        "isHoliday": false
      }
    ]
  },
  "8": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-8",
        "stringDate": "8 اردیبهشت",
        "additionalInfo": "11 شعبان",
        "event": "ولادت علی اکبر علیه السلام و روز جوان",
        "isHoliday": false
      }
    ]
  },
  "9": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-9",
        "stringDate": "9 اردیبهشت",
        "additionalInfo": "",
        "event": "روز ملی روانشناس و مشاور",
        "isHoliday": false
      }
    ]
  },
  "10": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-10",
        "stringDate": "10 اردیبهشت",
        "additionalInfo": "",
        "event": "جشن چهلم نوروز؛ روز ملی خلیج فارس",
        "isHoliday": false
      }
    ]
  },
  "11": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-11",
        "stringDate": "11 اردیبهشت",
        "additionalInfo": "1 May",
        "event": "روزجهانی کارگر",
        "isHoliday": false
      }
    ]
  },
  "12": {
    "isHoliday": true,
    "events": [
      {
        "date": "1397-02-12",
        "stringDate": "12 اردیبهشت",
        "additionalInfo": "",
        "event": "روز معلم",
        "isHoliday": false
      },
      {
        "date": "1397-02-12",
        "stringDate": "12 اردیبهشت",
        "additionalInfo": "15 شعبان",
        "event": "ولادت حضرت قائم عجل الله تعالی فرجه و جشن نیمه شعبان",
        "isHoliday": true
      }
    ]
  },
  "15": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-15",
        "stringDate": "15 اردیبهشت",
        "additionalInfo": "",
        "event": "جشن میانه بهار/جشن بهاربد؛ روز شیراز",
        "isHoliday": false
      },
      {
        "date": "1397-02-15",
        "stringDate": "15 اردیبهشت",
        "additionalInfo": "5 May",
        "event": "روز جهانی ماما",
        "isHoliday": false
      }
    ]
  },
  "18": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-18",
        "stringDate": "18 اردیبهشت",
        "additionalInfo": "8 May",
        "event": "روز جهانی صلیب سرخ و هلال احمر",
        "isHoliday": false
      }
    ]
  },
  "22": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-22",
        "stringDate": "22 اردیبهشت",
        "additionalInfo": "12 May",
        "event": "روز جهانی زن در ریاضیات (به افتخار روز تولد مریم میرزاخانی)",
        "isHoliday": false
      },
      {
        "date": "1397-02-22",
        "stringDate": "22 اردیبهشت",
        "additionalInfo": "",
        "event": "زادروز مریم میرزاخانی ریاضیدان ایرانی، روز جهانی زن در ریاضیات",
        "isHoliday": false
      }
    ]
  },
  "25": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-25",
        "stringDate": "25 اردیبهشت",
        "additionalInfo": "",
        "event": "روز بزرگداشت فردوسی",
        "isHoliday": false
      }
    ]
  },
  "27": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-27",
        "stringDate": "27 اردیبهشت",
        "additionalInfo": "",
        "event": "روز ارتباطات و روابط عمومی",
        "isHoliday": false
      }
    ]
  },
  "28": {
    "isHoliday": false,
    "events": [
      {
        "date": "1397-02-28",
        "stringDate": "28 اردیبهشت",
        "additionalInfo": "",
        "event": "روز بزرگداشت حکیم عمر خیام",
        "isHoliday": false
      },
      {
        "date": "1397-02-28",
        "stringDate": "28 اردیبهشت",
        "additionalInfo": "18 May",
        "event": "روز جهانی موزه و میراث فرهنگی",
        "isHoliday": false
      }
    ]
  }
}
```
