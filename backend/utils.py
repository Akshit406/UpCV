from schemas.summary_model import ResumeSummary
from schemas.suggestion_model import ResumeSuggestions
from schemas.score_model import ResumeScore
from initialize_llm import initialize_llm
from prompts import PromptTemplate

def get_summary(resumeText:str,JD:str)->ResumeSummary:
    llm=initialize_llm()
    llm_so = llm.with_structured_output(ResumeSummary)
    prompt = PromptTemplate(resumeText,JD)
    summary= llm_so.invoke(prompt.summary)
    return summary

def get_score(resumeText:str,JD:str)->ResumeScore:
    llm=initialize_llm()
    llm_so = llm.with_structured_output(ResumeScore)
    prompt = PromptTemplate(resumeText,JD)
    score= llm_so.invoke(prompt.score)
    return score

def get_suggestions(resumeText:str,JD:str)->ResumeSuggestions:
    llm=initialize_llm()
    llm_so = llm.with_structured_output(ResumeSuggestions)
    prompt = PromptTemplate(resumeText,JD)
    suggestion= llm_so.invoke(prompt.suggest)
    return suggestion

