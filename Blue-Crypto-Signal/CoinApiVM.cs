using System.Collections.Generic;

namespace RealTimeSQL.ViewModels
{
    public class CoinApiVM
    {
        public status status { get; set; }
        public List<data> data { get; set; }
    }
    public class status
    {
        public string timestamp { get; set; }
    }
    public class data
    {
        public string id { get; set; }
        public string slug { get; set; }
        public string symbol { get; set; }
        public metrics metrics { get; set; }
    }

    public class metrics
    {
        public market_data market_data { get; set; }
    }

    public class market_data
    {
        public decimal? price_usd { get; set; }
    }
}
