World Holidays API
============

World Holidays lists public holidays and observances for any two-letter country code, optionally for a state or region. It returns holiday dates, local and English names, day of week, event types and substitute-day flags, and can check whether a single date is a holiday.


[![NuGet version](https://img.shields.io/nuget/v/APIVerve.API.WorldHolidays.svg)](https://www.nuget.org/packages/APIVerve.API.WorldHolidays)

This is a .NET wrapper for the [World Holidays API](https://apiverve.com/marketplace/worldholidays?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Installation

Using the .NET CLI:
```
dotnet add package APIVerve.API.WorldHolidays
```

Using the Package Manager:
```
nuget install APIVerve.API.WorldHolidays
```

Using the Package Manager Console:
```
Install-Package APIVerve.API.WorldHolidays
```

From within Visual Studio:

1. Open the Solution Explorer
2. Right-click on a project within your solution
3. Click on Manage NuGet Packages
4. Click on the Browse tab and search for "APIVerve.API.WorldHolidays"
5. Click on the APIVerve.API.WorldHolidays package, select the appropriate version in the right-tab and click Install

---

## Configuration

Before using the World Holidays API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```csharp
using System;
using APIVerve.API.WorldHolidays;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize the API client
        var apiClient = new WorldHolidaysAPIClient("[YOUR_API_KEY]");

        var queryOptions = new WorldHolidaysQueryOptions {
            Country = "US",
            Year = 2026,
            Region = "CA",
            Type = "public",
            Date = "2026-07-03"
        };

        // Make the API call
        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                // Access response data using the strongly-typed ResponseObj properties
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
```

---

## Usage

The World Holidays API documentation is found here: [https://docs.apiverve.com/ref/worldholidays](https://docs.apiverve.com/ref/worldholidays?utm_source=nuget&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

###### Authentication
World Holidays API uses API Key-based authentication. When you create an instance of the API client, you can pass your API Key as a parameter.

```csharp
// Create an instance of the API client
var apiClient = new WorldHolidaysAPIClient("[YOUR_API_KEY]");
```

---

## Usage Examples

### Basic Usage (Async/Await Pattern - Recommended)

The modern async/await pattern provides the best performance and code readability:

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.WorldHolidays;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new WorldHolidaysAPIClient("[YOUR_API_KEY]");

        var queryOptions = new WorldHolidaysQueryOptions {
            Country = "US",
            Year = 2026,
            Region = "CA",
            Type = "public",
            Date = "2026-07-03"
        };

        var response = await apiClient.ExecuteAsync(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

### Synchronous Usage

If you need to use synchronous code, you can use the `Execute` method:

```csharp
using System;
using APIVerve.API.WorldHolidays;

public class Example
{
    public static void Main(string[] args)
    {
        var apiClient = new WorldHolidaysAPIClient("[YOUR_API_KEY]");

        var queryOptions = new WorldHolidaysQueryOptions {
            Country = "US",
            Year = 2026,
            Region = "CA",
            Type = "public",
            Date = "2026-07-03"
        };

        var response = apiClient.Execute(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

---

## Error Handling

The API client provides comprehensive error handling. Here are some examples:

### Handling API Errors

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.WorldHolidays;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new WorldHolidaysAPIClient("[YOUR_API_KEY]");

        var queryOptions = new WorldHolidaysQueryOptions {
            Country = "US",
            Year = 2026,
            Region = "CA",
            Type = "public",
            Date = "2026-07-03"
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            // Check for API-level errors
            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
                Console.WriteLine($"Status: {response.Status}");
                return;
            }

            // Success - use the data
            Console.WriteLine("Request successful!");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
        catch (ArgumentException ex)
        {
            // Invalid API key or parameters
            Console.WriteLine($"Invalid argument: {ex.Message}");
        }
        catch (System.Net.Http.HttpRequestException ex)
        {
            // Network or HTTP errors
            Console.WriteLine($"Network error: {ex.Message}");
        }
        catch (Exception ex)
        {
            // Other errors
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

### Comprehensive Error Handling with Retry Logic

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.WorldHolidays;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new WorldHolidaysAPIClient("[YOUR_API_KEY]");

        // Configure retry behavior (max 3 retries)
        apiClient.SetMaxRetries(3);        // Retry up to 3 times (default: 0, max: 3)
        apiClient.SetRetryDelay(2000);     // Wait 2 seconds between retries

        var queryOptions = new WorldHolidaysQueryOptions {
            Country = "US",
            Year = 2026,
            Region = "CA",
            Type = "public",
            Date = "2026-07-03"
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed after retries: {ex.Message}");
        }
    }
}
```

---

## Advanced Features

### Custom Headers

Add custom headers to your requests:

```csharp
var apiClient = new WorldHolidaysAPIClient("[YOUR_API_KEY]");

// Add custom headers
apiClient.AddCustomHeader("X-Custom-Header", "custom-value");
apiClient.AddCustomHeader("X-Request-ID", Guid.NewGuid().ToString());

var queryOptions = new WorldHolidaysQueryOptions {
    Country = "US",
    Year = 2026,
    Region = "CA",
    Type = "public",
    Date = "2026-07-03"
};

var response = await apiClient.ExecuteAsync(queryOptions);

// Remove a header
apiClient.RemoveCustomHeader("X-Custom-Header");

// Clear all custom headers
apiClient.ClearCustomHeaders();
```

### Request Logging

Enable logging for debugging:

```csharp
var apiClient = new WorldHolidaysAPIClient("[YOUR_API_KEY]", isDebug: true);

// Or use a custom logger
apiClient.SetLogger(message =>
{
    Console.WriteLine($"[LOG] {DateTime.Now:yyyy-MM-dd HH:mm:ss} - {message}");
});

var queryOptions = new WorldHolidaysQueryOptions {
    Country = "US",
    Year = 2026,
    Region = "CA",
    Type = "public",
    Date = "2026-07-03"
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Retry Configuration

Customize retry behavior for failed requests:

```csharp
var apiClient = new WorldHolidaysAPIClient("[YOUR_API_KEY]");

// Set retry options
apiClient.SetMaxRetries(3);           // Retry up to 3 times (default: 0, max: 3)
apiClient.SetRetryDelay(1500);        // Wait 1.5 seconds between retries (default: 1000ms)

var queryOptions = new WorldHolidaysQueryOptions {
    Country = "US",
    Year = 2026,
    Region = "CA",
    Type = "public",
    Date = "2026-07-03"
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Dispose Pattern

The API client implements `IDisposable` for proper resource cleanup:

```csharp
var queryOptions = new WorldHolidaysQueryOptions {
    Country = "US",
    Year = 2026,
    Region = "CA",
    Type = "public",
    Date = "2026-07-03"
};

using (var apiClient = new WorldHolidaysAPIClient("[YOUR_API_KEY]"))
{
    var response = await apiClient.ExecuteAsync(queryOptions);
    Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
}
// HttpClient is automatically disposed here
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

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=nuget&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=nuget&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
