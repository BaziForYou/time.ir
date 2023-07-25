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
        "event": "string",
        "isHoliday": "boolean"
      }
    ]
  }
}
```

---

## Errors

* **400 Bad Request** — Request did not contain one of the required parameters.
* **500 Internal Server Error** — there is a problem with time.ir

---

## Example

**Request**

    GET /events?year=1397&month=02

**Return**

```json
{
  "1":{
    "isHoliday":false,
    "events":[
      {
        "date":"1397-02-01",
        "event":"روز بزرگداشت سعدی",
        "isHoliday":false
      },
      {
        "date":"1397-02-01",
        "event":"ولادت ابوالفضل العباس علیه السلام و روز جانباز [ 4 شعبان ]",
        "isHoliday":false
      }
    ]
  },
  "2":{
    "isHoliday":false,
    "events":[
      {
        "date":"1397-02-02",
        "event":"جشن گیاه آوری؛ روز زمین [ 22 April ]",
        "isHoliday":false
      },
      {
        "date":"1397-02-02",
        "event":"ولادت امام زین العابدین علیه السلام [ 5 شعبان ]",
        "isHoliday":false
      }
    ]
  },
  "3":{
    "isHoliday":false,
    "events":[
      {
        "date":"1397-02-03",
        "event":"روزبزرگداشت شیخ بهایی؛ روزملی کارآفرینی؛ روز معماری",
        "isHoliday":false
      }
    ]
  },
  "7":{
    "isHoliday":false,
    "events":[
      {
        "date":"1397-02-07",
        "event":"روز جهانی طراحی و گرافیک [ 27 April ]",
        "isHoliday":false
      }
    ]
  },
  "8":{
    "isHoliday":false,
    "events":[
      {
        "date":"1397-02-08",
        "event":"ولادت علی اکبر علیه السلام و روز جوان [ 11 شعبان ]",
        "isHoliday":false
      }
    ]
  }
}
```
