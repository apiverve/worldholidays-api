# [World Holidays API](https://apiverve.com/marketplace/worldholidays?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

World Holidays lists public holidays and observances for any two-letter country code, optionally for a state or region. It returns holiday dates, local and English names, day of week, event types and substitute-day flags, and can check whether a single date is a holiday.

The World Holidays API provides a simple, reliable way to integrate world holidays functionality into your applications. Built for developers who need production-ready world holidays capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/worldholidays?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/worldholidays?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/worldholidays)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.WorldHolidays)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-worldholidays/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_worldholidays)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/worldholidays)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_worldholidays)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callWorldHolidaysAPI() {
    try {
        const params = new URLSearchParams({
            country: 'US'
        });

        const response = await fetch(`https://api.apiverve.com/v1/worldholidays?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callWorldHolidaysAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/worldholidays?country=US" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/worldholidays
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/worldholidays) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.WorldHolidays
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.WorldHolidays) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-worldholidays
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-worldholidays/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_worldholidays
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_worldholidays) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/worldholidays
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/worldholidays) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_worldholidays
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_worldholidays) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:worldholidays-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/worldholidays-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [World Holidays API](https://apiverve.com/marketplace/worldholidays?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/worldholidays](https://docs.apiverve.com/ref/worldholidays)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The World Holidays API is commonly used for:

- **Web Applications** - Add world holidays features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with world holidays capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the World Holidays API:

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

## Support & Community

- 🏠 **API Home**: [World Holidays API](https://apiverve.com/marketplace/worldholidays?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
