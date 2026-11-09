using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WorldHolidays
{
    /// <summary>
    /// Query options for the World Holidays API
    /// </summary>
    public class WorldHolidaysQueryOptions
    {
        /// <summary>
        /// The 2-letter country code for which you want to get the holidays
        /// </summary>
        [JsonProperty("country")]
        public string Country { get; set; }

        /// <summary>
        /// The year for which you want to get the holidays
        /// </summary>
        [JsonProperty("year")]
        public int? Year { get; set; }

        /// <summary>
        /// State or region code (e.g. BY, CA or US-CA) to include regional holidays
        /// </summary>
        [JsonProperty("region")]
        public string Region { get; set; }

        /// <summary>
        /// Only return these holiday types, comma-separated: public, bank, school, optional, observance
        /// </summary>
        [JsonProperty("type")]
        public string Type { get; set; }

        /// <summary>
        /// Check a single date (YYYY-MM-DD); returns isHoliday and only the holidays on that day. Overrides year
        /// </summary>
        [JsonProperty("date")]
        public string Date { get; set; }
    }
}
