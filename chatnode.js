
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chatbot', { useNewUrlParser: true, useUnifiedTopology: true });

// Define schema for chat messages
const chatnode = new mongoose.Schema({
    message: String,
    response: String
});

// Create model for chat messages
const Chat = mongoose.model('Chat', chatSchema);

// Use body-parser middleware
app.use(bodyParser.json());

// Route for chatbot API
app.post('/api/chat', (req, res) => {
    const message = req.body.message;
    // Call chatbot logic function
    chatbotLogic(message)
        .then(response => {
            // Save chat message to database
            const chat = new Chat({ message, response });
            chat.save((err, chat) => {
                if (err) {
                    console.error(err);
                } else {
                    res.json({ response });
                }
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

// Chatbot logic function
function chatbotLogic(message) {
    // Sample responses
    const responses = {
        'hello': 'Hi! How can I assist you today?',
        'how are you': 'I\'m doing well, thanks!',
        'what is your purpose': 'I\'m here to help answer your questions and provide information.'
    };

    // Generate response
    const response = responses[message.toLowerCase()] || 'Sorry, I didn\'t understand that.';
    return Promise.resolve(response);
}

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(Server started on port ${port});
});


