from gtts import gTTS
from googletrans import Translator
import uuid
import os

translator = Translator()

def speak_text(text, lang='hi'):
    # ✅ Translate text to Hindi first
    translated = translator.translate(text, dest=lang).text

    # ✅ Generate audio from translated text
    filename = f"{uuid.uuid4().hex}.mp3"
    output_path = os.path.join("static", filename)
    tts = gTTS(text=translated, lang=lang)
    tts.save(output_path)

    return filename
