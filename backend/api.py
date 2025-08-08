from fastapi import  APIRouter, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import tempfile
from pypdf import PdfReader
import os
from utils import *

router = APIRouter()

@router.post('/result')
async def get_result(JobDescription:str,file: UploadFile = File(...)):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
        contents = await file.read()
        tmp.write(contents)
        tmp_path = tmp.name
    resume_text = ""
    try:
        reader = PdfReader(tmp_path)
        for page in reader.pages:
            resume_text += page.extract_text() or ""
    finally:
        os.remove(tmp_path)
    
    summary = get_summary(resume_text,JobDescription)
    score = get_score(resume_text,JobDescription)
    suggestions = get_suggestions(resume_text,JobDescription)
    

    response = {
        "skills": summary.skills,
        "experience": summary.experience,
        "projects": summary.projects,
        "education": summary.education,
        "score": score.score,
        "score_justification": score.reason,
        "suggestion": suggestions.suggestions
    }
    
    return response


    
    

    