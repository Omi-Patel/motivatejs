// index.js

// const chalk = require('chalk');
import chalk from "chalk";

function handleError(error) {
  // Log the original error message in red
  console.error(chalk.red("Error:"), error.message);

  // Display a motivational quote in green
  console.log(chalk.green("Motivational Quote:", getRandomMotivationalQuote()));
}

function getRandomMotivationalQuote() {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The only constant is change. - Heraclitus",
    "The mind is everything. What you think you become. - Buddha",
    "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
    "The best programmers are the ones who are always learning. - Bjarne Stroustrup",
    "Don't be afraid to ask questions. The only dumb question is the one not asked. - Unknown",
    "No one is born a great programmer. It takes practice and dedication. - Unknown",
    "Together we can achieve so much more than alone. - Helen Keller",
    "The best way to learn is to teach. - Unknown",
    "Sharing knowledge is the best way to keep it. - Soren Kierkegaard",
    "The strength of the community is the sum of its individual members. - Margaret Mead",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Don't take yourself too seriously. No one else does. - Unknown",
    "It's not a bug; it's an undocumented feature. - Anonymous",
    "Sometimes the best way to solve a problem is to laugh at it. - Unknown",
    "Coffee is the best medicine for a developer's soul. - Unknown",
    "Make it work, make it right, make it fast. - Kent Beck",
    "Clean code always looks like it was written by someone who cares. - Robert C. Martin",
    "The key to successful programming is to write code that others can understand, including yourself in six months. - Martin Fowler",

    // Add more motivational quotes as needed
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export default handleError;
