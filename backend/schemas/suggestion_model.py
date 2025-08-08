from pydantic import BaseModel, Field

class ResumeSuggestions(BaseModel):
    suggestions: str = Field(
        description="""
        A detailed paragraph explaining how the candidate can improve their resume based on the job description.

        Focus specifically on identifying and suggesting **missing technical skills** (such as programming languages, frameworks, tools, or databases) that are present in the job description but not mentioned in the candidate’s resume.

        To do this:
        - Continuously refer to the candidate’s mentioned skills in the resume.
        - Compare them against the required or preferred skills listed in the job description.
        - Suggest skills or technologies that the candidate should learn or highlight in order to increase alignment with the job requirements.

        The output should not include soft skills or generic formatting tips — it must be focused on bridging the technical skill gap between the resume and the job role.
        """
    )
