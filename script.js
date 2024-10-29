const translationForm = document.getElementById('translation-form');
const translateButton = document.getElementById('translate-button');
const textToTranslate = document.getElementById('text-to-translate');
const translatedText = document.getElementById('translated-text');

translateButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const sourceLanguage = document.getElementById('source-language').value;
    const targetLanguage = document.getElementById('target-language').value;
    const text = textToTranslate.value;

    const response = await fetch('/translate', {
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

    const data = await
