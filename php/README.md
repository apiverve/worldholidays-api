# World Holidays API - PHP Package

World Holidays lists public holidays and observances for any two-letter country code. It returns holiday dates, official names, and event types across the year.

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
    'year' => 2026
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
    $response = $client->execute(['country' => 'US', 'year' => 2026]);
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
    "year": "2025",
    "holidays": [
      {
        "date": "2025-01-01 00:00:00",
        "start": "2025-01-01T05:00:00Z",
        "end": "2025-01-02T05:00:00Z",
        "name": "New Year's Day",
        "type": "public"
      },
      {
        "date": "2025-01-20 00:00:00",
        "start": "2025-01-20T05:00:00Z",
        "end": "2025-01-21T05:00:00Z",
        "name": "Martin Luther King Jr. Day",
        "type": "public"
      },
      {
        "date": "2025-02-14 00:00:00",
        "start": "2025-02-14T05:00:00Z",
        "end": "2025-02-15T05:00:00Z",
        "name": "Valentine's Day",
        "type": "observance"
      },
      {
        "date": "2025-02-17 00:00:00",
        "start": "2025-02-17T05:00:00Z",
        "end": "2025-02-18T05:00:00Z",
        "name": "Washington's Birthday",
        "type": "public"
      },
      {
        "date": "2025-03-17 00:00:00",
        "start": "2025-03-17T04:00:00Z",
        "end": "2025-03-18T04:00:00Z",
        "name": "St. Patrick's Day",
        "type": "observance"
      },
      {
        "date": "2025-04-15 00:00:00",
        "start": "2025-04-15T04:00:00Z",
        "end": "2025-04-16T04:00:00Z",
        "name": "Tax Day",
        "type": "observance"
      },
      {
        "date": "2025-04-20 00:00:00",
        "start": "2025-04-20T04:00:00Z",
        "end": "2025-04-21T04:00:00Z",
        "name": "Easter Sunday",
        "type": "observance"
      },
      {
        "date": "2025-04-23 00:00:00",
        "start": "2025-04-23T04:00:00Z",
        "end": "2025-04-24T04:00:00Z",
        "name": "Administrative Professionals Day",
        "type": "observance"
      },
      {
        "date": "2025-05-11 00:00:00",
        "start": "2025-05-11T04:00:00Z",
        "end": "2025-05-12T04:00:00Z",
        "name": "Mother's Day",
        "type": "observance"
      },
      {
        "date": "2025-05-26 00:00:00",
        "start": "2025-05-26T04:00:00Z",
        "end": "2025-05-27T04:00:00Z",
        "name": "Memorial Day",
        "type": "public"
      },
      {
        "date": "2025-06-15 00:00:00",
        "start": "2025-06-15T04:00:00Z",
        "end": "2025-06-16T04:00:00Z",
        "name": "Father's Day",
        "type": "observance"
      },
      {
        "date": "2025-06-19 00:00:00",
        "start": "2025-06-19T04:00:00Z",
        "end": "2025-06-20T04:00:00Z",
        "name": "Juneteenth",
        "type": "public"
      },
      {
        "date": "2025-07-04 00:00:00",
        "start": "2025-07-04T04:00:00Z",
        "end": "2025-07-05T04:00:00Z",
        "name": "Independence Day",
        "type": "public"
      },
      {
        "date": "2025-09-01 00:00:00",
        "start": "2025-09-01T04:00:00Z",
        "end": "2025-09-02T04:00:00Z",
        "name": "Labor Day",
        "type": "public"
      },
      {
        "date": "2025-10-13 00:00:00",
        "start": "2025-10-13T04:00:00Z",
        "end": "2025-10-14T04:00:00Z",
        "name": "Columbus Day",
        "type": "public"
      },
      {
        "date": "2025-10-31 18:00:00",
        "start": "2025-10-31T22:00:00Z",
        "end": "2025-11-01T04:00:00Z",
        "name": "Halloween",
        "type": "observance"
      },
      {
        "date": "2025-11-11 00:00:00",
        "start": "2025-11-11T05:00:00Z",
        "end": "2025-11-12T05:00:00Z",
        "name": "Veterans Day",
        "type": "public"
      },
      {
        "date": "2025-11-27 00:00:00",
        "start": "2025-11-27T05:00:00Z",
        "end": "2025-11-28T05:00:00Z",
        "name": "Thanksgiving Day",
        "type": "public"
      },
      {
        "date": "2025-11-28 00:00:00",
        "start": "2025-11-28T05:00:00Z",
        "end": "2025-11-29T05:00:00Z",
        "name": "Day after Thanksgiving Day",
        "type": "observance"
      },
      {
        "date": "2025-12-24 00:00:00",
        "start": "2025-12-24T05:00:00Z",
        "end": "2025-12-25T05:00:00Z",
        "name": "Christmas Eve",
        "type": "optional"
      },
      {
        "date": "2025-12-25 00:00:00",
        "start": "2025-12-25T05:00:00Z",
        "end": "2025-12-26T05:00:00Z",
        "name": "Christmas Day",
        "type": "public"
      },
      {
        "date": "2025-12-31 00:00:00",
        "start": "2025-12-31T05:00:00Z",
        "end": "2026-01-01T05:00:00Z",
        "name": "New Year's Eve",
        "type": "observance"
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
