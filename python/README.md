World Holidays API
============

World Holidays lists public holidays and observances for any two-letter country code. It returns holiday dates, official names, and event types across the year.


[![PyPI version](https://img.shields.io/pypi/v/apiverve-worldholidays.svg)](https://pypi.org/project/apiverve-worldholidays/)

This is a Python wrapper for the [World Holidays API](https://apiverve.com/marketplace/worldholidays?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-worldholidays
```

Using `pip3`:

```bash
pip3 install apiverve-worldholidays
```

---

## Configuration

Before using the World Holidays API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_worldholidays.apiClient import WorldholidaysAPIClient

# Initialize the client with your APIVerve API key
api = WorldholidaysAPIClient("[YOUR_API_KEY]")

query = {
    "country": "US",
    "year": 2026
}

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The World Holidays API documentation is found here: [https://docs.apiverve.com/ref/worldholidays](https://docs.apiverve.com/ref/worldholidays?utm_source=pypi&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_worldholidays.apiClient import WorldholidaysAPIClient

# Initialize the client with your APIVerve API key
api = WorldholidaysAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = {
    "country": "US",
    "year": 2026
}
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

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

---

## Error Handling

The API client provides comprehensive error handling through the `WorldholidaysAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_worldholidays.apiClient import WorldholidaysAPIClient, WorldholidaysAPIClientError

api = WorldholidaysAPIClient("[YOUR_API_KEY]")

query = {
    "country": "US",
    "year": 2026
}

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except WorldholidaysAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_worldholidays.apiClient import WorldholidaysAPIClient, WorldholidaysAPIClientError

api = WorldholidaysAPIClient("[YOUR_API_KEY]")

query = {
    "country": "US",
    "year": 2026
}

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except WorldholidaysAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_worldholidays.apiClient import WorldholidaysAPIClient, WorldholidaysAPIClientError

query = {
    "country": "US",
    "year": 2026
}

# Using context manager ensures proper cleanup
with WorldholidaysAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except WorldholidaysAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_worldholidays.apiClient import WorldholidaysAPIClient

# Enable debug mode
api = WorldholidaysAPIClient("[YOUR_API_KEY]", debug=True)

query = {
    "country": "US",
    "year": 2026
}

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_worldholidays.apiClient import WorldholidaysAPIClient

api = WorldholidaysAPIClient("[YOUR_API_KEY]")

query = {
    "country": "US",
    "year": 2026
}

try:
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
