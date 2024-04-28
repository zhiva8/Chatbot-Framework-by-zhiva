// chatbot-framework.js

class Chatbot {
    constructor() {
      this.plugins = [];
    }
  
    use(plugin) {
      this.plugins.push(plugin);
    }
  
    async processMessage(message) {
      let response = "Sorry, I didn't understand that.";
      for (const plugin of this.plugins) {
        const result = await plugin(message);
        if (result) {
          response = result;
          break;
        }
      }
      return response;
    }
  }
  
  // Example plugin
  function greetingPlugin(message) {
    const greetings = ["hi", "hello", "hey"];
    if (greetings.includes(message.toLowerCase())) {
      return "Hello! How can I assist you?";
    }
  }
  
  // Usage example
  const bot = new Chatbot();
  bot.use(greetingPlugin);
  
  async function testBot() {
    const userInput = "Hi";
    const response = await bot.processMessage(userInput);
    console.log(response);
  }
  
  testBot();
  
  // Export the Chatbot class
  module.exports = Chat
  