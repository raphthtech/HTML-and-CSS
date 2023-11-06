// Function to generate a random bot response
function getRandomResponse() {
  var responses = [
    "Hello!",
    "How can I assist you today?",
    "I'm here to help. What do you need?",
    "Feel free to ask me anything.",
    "I'm sorry, I don't have the answer to that."
  ];

  var randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

// Function to handle user input and generate bot response
function chatBot() {
  var userInput = prompt("Ask me a question or type 'exit' to end the chat:");

  if (userInput === null || userInput.toLowerCase() === "exit") {
    alert("Thank you for chatting. Goodbye!");
    return;
  }

  var botResponse = getRandomResponse();
  alert(botResponse);

  chatBot(); // Repeat the process for a continuous chat
}

// Start the chatbot
chatBot();
