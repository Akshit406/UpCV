import os
import google.generativeai as genai 
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
load_dotenv()

def initialize_llm():
    GeminiApiKey=os.getenv('GOOGLE_API_KEY')
    genai.configure(api_key=GeminiApiKey)
    GeminiLLM = ChatGoogleGenerativeAI(model="gemini-2.0-flash")
    return GeminiLLM






