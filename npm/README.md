# World Holidays API

World Holidays lists public holidays and observances for any two-letter country code, optionally for a state or region. It returns holiday dates, local and English names, day of week, event types and substitute-day flags, and can check whether a single date is a holiday.

[![npm version](https://img.shields.io/npm/v/@apiverve/worldholidays.svg)](https://www.npmjs.com/package/@apiverve/worldholidays)

This is a JavaScript wrapper for the [World Holidays API](https://apiverve.com/marketplace/worldholidays?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/worldholidays
```

Using yarn:
```shell
yarn add @apiverve/worldholidays
```

---

## Configuration

Before using the World Holidays API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The World Holidays API documentation is found here: [https://docs.apiverve.com/ref/worldholidays](https://docs.apiverve.com/ref/worldholidays?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const worldholidaysAPI = require('@apiverve/worldholidays');
const api = new worldholidaysAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  country: "US",
  year: 2026,
  region: "CA",
  type: "public",
  date: "2026-07-03"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  country: "US",
  year: 2026,
  region: "CA",
  type: "public",
  date: "2026-07-03"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  country: "US",
  year: 2026,
  region: "CA",
  type: "public",
  date: "2026-07-03"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "country": "US",
    "year": 2026,
    "holidays": [
      {
        "date": "2026-01-01 00:00:00",
        "start": "2026-01-01T05:00:00.000Z",
        "end": "2026-01-02T05:00:00.000Z",
        "name": "New Year's Day",
        "type": "public",
        "dayOfWeek": "Thursday",
        "englishName": "New Year's Day"
      },
      {
        "date": "2026-01-19 00:00:00",
        "start": "2026-01-19T05:00:00.000Z",
        "end": "2026-01-20T05:00:00.000Z",
        "name": "Martin Luther King Jr. Day",
        "type": "public",
        "dayOfWeek": "Monday",
        "englishName": "Martin Luther King Jr. Day"
      },
      {
        "date": "2026-02-14 00:00:00",
        "start": "2026-02-14T05:00:00.000Z",
        "end": "2026-02-15T05:00:00.000Z",
        "name": "Valentine's Day",
        "type": "observance",
        "dayOfWeek": "Saturday",
        "englishName": "Valentine's Day"
      },
      {
        "date": "2026-02-16 00:00:00",
        "start": "2026-02-16T05:00:00.000Z",
        "end": "2026-02-17T05:00:00.000Z",
        "name": "Washington's Birthday",
        "type": "public",
        "dayOfWeek": "Monday",
        "englishName": "Washington's Birthday"
      },
      {
        "date": "2026-03-17 00:00:00",
        "start": "2026-03-17T04:00:00.000Z",
        "end": "2026-03-18T04:00:00.000Z",
        "name": "St. Patrick's Day",
        "type": "observance",
        "dayOfWeek": "Tuesday",
        "englishName": "St. Patrick's Day"
      },
      {
        "date": "2026-04-05 00:00:00",
        "start": "2026-04-05T04:00:00.000Z",
        "end": "2026-04-06T04:00:00.000Z",
        "name": "Easter Sunday",
        "type": "observance",
        "dayOfWeek": "Sunday",
        "englishName": "Easter Sunday"
      },
      {
        "date": "2026-04-15 00:00:00",
        "start": "2026-04-15T04:00:00.000Z",
        "end": "2026-04-16T04:00:00.000Z",
        "name": "Tax Day",
        "type": "observance",
        "dayOfWeek": "Wednesday",
        "englishName": "Tax Day"
      },
      {
        "date": "2026-04-22 00:00:00",
        "start": "2026-04-22T04:00:00.000Z",
        "end": "2026-04-23T04:00:00.000Z",
        "name": "Administrative Professionals Day",
        "type": "observance",
        "dayOfWeek": "Wednesday",
        "englishName": "Administrative Professionals Day"
      },
      {
        "date": "2026-05-10 00:00:00",
        "start": "2026-05-10T04:00:00.000Z",
        "end": "2026-05-11T04:00:00.000Z",
        "name": "Mother's Day",
        "type": "observance",
        "dayOfWeek": "Sunday",
        "englishName": "Mother's Day"
      },
      {
        "date": "2026-05-25 00:00:00",
        "start": "2026-05-25T04:00:00.000Z",
        "end": "2026-05-26T04:00:00.000Z",
        "name": "Memorial Day",
        "type": "public",
        "dayOfWeek": "Monday",
        "englishName": "Memorial Day"
      },
      {
        "date": "2026-06-19 00:00:00",
        "start": "2026-06-19T04:00:00.000Z",
        "end": "2026-06-20T04:00:00.000Z",
        "name": "Juneteenth",
        "type": "public",
        "dayOfWeek": "Friday",
        "englishName": "Juneteenth"
      },
      {
        "date": "2026-06-21 00:00:00",
        "start": "2026-06-21T04:00:00.000Z",
        "end": "2026-06-22T04:00:00.000Z",
        "name": "Father's Day",
        "type": "observance",
        "dayOfWeek": "Sunday",
        "englishName": "Father's Day"
      },
      {
        "date": "2026-07-03 00:00:00",
        "start": "2026-07-03T04:00:00.000Z",
        "end": "2026-07-04T04:00:00.000Z",
        "name": "Independence Day (substitute day)",
        "type": "public",
        "substitute": true,
        "dayOfWeek": "Friday",
        "englishName": "Independence Day (substitute day)"
      },
      {
        "date": "2026-07-04 00:00:00",
        "start": "2026-07-04T04:00:00.000Z",
        "end": "2026-07-05T04:00:00.000Z",
        "name": "Independence Day",
        "type": "public",
        "dayOfWeek": "Saturday",
        "englishName": "Independence Day"
      },
      {
        "date": "2026-09-07 00:00:00",
        "start": "2026-09-07T04:00:00.000Z",
        "end": "2026-09-08T04:00:00.000Z",
        "name": "Labor Day",
        "type": "public",
        "dayOfWeek": "Monday",
        "englishName": "Labour Day"
      },
      {
        "date": "2026-10-12 00:00:00",
        "start": "2026-10-12T04:00:00.000Z",
        "end": "2026-10-13T04:00:00.000Z",
        "name": "Columbus Day",
        "type": "public",
        "dayOfWeek": "Monday",
        "englishName": "Columbus Day"
      },
      {
        "date": "2026-10-31 18:00:00",
        "start": "2026-10-31T22:00:00.000Z",
        "end": "2026-11-01T04:00:00.000Z",
        "name": "Halloween",
        "type": "observance",
        "dayOfWeek": "Saturday",
        "englishName": "Halloween"
      },
      {
        "date": "2026-11-11 00:00:00",
        "start": "2026-11-11T05:00:00.000Z",
        "end": "2026-11-12T05:00:00.000Z",
        "name": "Veterans Day",
        "type": "public",
        "dayOfWeek": "Wednesday",
        "englishName": "Veterans Day"
      },
      {
        "date": "2026-11-26 00:00:00",
        "start": "2026-11-26T05:00:00.000Z",
        "end": "2026-11-27T05:00:00.000Z",
        "name": "Thanksgiving Day",
        "type": "public",
        "dayOfWeek": "Thursday",
        "englishName": "Thanksgiving Day"
      },
      {
        "date": "2026-11-27 00:00:00",
        "start": "2026-11-27T05:00:00.000Z",
        "end": "2026-11-28T05:00:00.000Z",
        "name": "Day after Thanksgiving Day",
        "type": "observance",
        "dayOfWeek": "Friday",
        "englishName": "Day after Thanksgiving Day"
      },
      {
        "date": "2026-12-24 00:00:00",
        "start": "2026-12-24T05:00:00.000Z",
        "end": "2026-12-25T05:00:00.000Z",
        "name": "Christmas Eve",
        "type": "optional",
        "dayOfWeek": "Thursday",
        "englishName": "Christmas Eve"
      },
      {
        "date": "2026-12-25 00:00:00",
        "start": "2026-12-25T05:00:00.000Z",
        "end": "2026-12-26T05:00:00.000Z",
        "name": "Christmas Day",
        "type": "public",
        "dayOfWeek": "Friday",
        "englishName": "Christmas Day"
      },
      {
        "date": "2026-12-31 00:00:00",
        "start": "2026-12-31T05:00:00.000Z",
        "end": "2027-01-01T05:00:00.000Z",
        "name": "New Year's Eve",
        "type": "observance",
        "dayOfWeek": "Thursday",
        "englishName": "New Year's Eve"
      }
    ]
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
