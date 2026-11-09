# World Holidays API - PHP Package

World Holidays lists public holidays and observances for any two-letter country code, optionally for a state or region. It returns holiday dates, local and English names, day of week, event types and substitute-day flags, and can check whether a single date is a holiday.

## Installation

Install via Composer:

```bash
composer require apiverve/worldholidays
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Worldholidays\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'country' => 'US',
    'year' => 2026,
    'region' => 'CA',
    'type' => 'public',
    'date' => '2026-07-03'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Worldholidays\Client;
use APIVerve\Worldholidays\Exceptions\APIException;
use APIVerve\Worldholidays\Exceptions\ValidationException;

try {
    $response = $client->execute(['country' => 'US', 'year' => 2026, 'region' => 'CA', 'type' => 'public', 'date' => '2026-07-03']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/worldholidays?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/worldholidays?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/worldholidays?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
