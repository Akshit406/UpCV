from pydantic import BaseModel,Field
from typing import Literal

class ResumeScore(BaseModel):
    score: Literal['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100'] = Field(
        description="""Specifies the score for the resume out of 100. Where 0 is the least possible score and 100 is the highest possible score
        The score must be given sensibly by considering all the relevant sections of resume and comparing it with the Job requirement"""
    )

    reason: str = Field(
        description= """
    Justification of the score that has been given for the resume, It must mention the reason for which the mark has been awarded and the
    reason for deductions. Properly reference the sections of resume by mentioning the names of the Skills / Experience / Project which earned
    them marks or resulted in them losing marks. """
    )



