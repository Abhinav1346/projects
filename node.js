const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/translate', async (req, res) => {
    const { sourceLanguage, targetLanguage, text } = req.body;
    const translationApi = 'https://translation-api.com/translate';
    const response = await fetch(translationApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sourceLanguage,
            targetLanguage,
            text
        })
    });

    const data = await response.json();
    res.json({ translatedText: data.translatedText });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
