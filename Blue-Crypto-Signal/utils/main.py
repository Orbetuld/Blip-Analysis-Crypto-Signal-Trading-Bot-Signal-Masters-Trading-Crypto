from telegram.ext import Updater, CommandHandler
import yfinance as yf
import ta

# Get the closing price data
closing_prices = stock_data["Close"]

# Calculate the 20-day moving average
ma = ta.trend.SMAIndicator(closing_prices, window=20).sma_indicator()

# Calculate the RSI
rsi = ta.momentum.RSIIndicator(closing_prices).rsi()
# Generate the buy/sell signal
if ma.iloc[-1] > ma.iloc[-2] and rsi.iloc[-1] < 30:
    signal = "Buy"
    entry_point = stock_data["Close"].iloc[-1]
    take_profit = entry_point * 1.05
    stop_loss = entry_point * 0.95
elif ma.iloc[-1] < ma.iloc[-2] and rsi.iloc[-1] > 70:
    signal = "Sell"
    entry_point = stock_data["Close"].iloc[-1]
    take_profit = entry_point * 0.95
    stop_loss = entry_point * 1.05
else:
    signal = "Hold"
    entry_point = None
    take_profit = None
    stop_loss = None
    

# Define the function to get stock data from Yahoo
def get_stock_data(ticker, interval):
    stock_data = yf.download(ticker, interval=interval)
    return stock_data

# Define the function to generate buy/sell signal
def generate_signal(stock_data):
    # Use technical indicators to generate signal
    return signal, entry_point, take_profit, stop_loss

# Define the /start command handler
def start(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="Welcome to the Stock Signal Bot!")

# Define the /signal command handler
def signal(update, context):
    ticker = "AAPL"  # Replace with the ticker symbol of the desired stock
    interval = "1d"  # Replace with the desired interval (e.g. "1d", "1h", "30m", "15m", "5m", "1m")
    stock_data = get_stock_data(ticker, interval)
    signal, entry_point, take_profit, stop_loss = generate_signal(stock_data)
    message = f"Signal: {signal}\nEntry point: {entry_point}\nTake profit: {take_profit}\nStop loss: {Sure, here's the modified code that you can use to read data from Yahoo:
