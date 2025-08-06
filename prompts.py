

class PromptTemplate:

    def __init__(self, resumeText, JobDescription):
        self.resumeText = resumeText
        self.JobDescription = JobDescription
        self.score = self.score_prompt()
        self.suggest = self.suggest_prompt()
        self.summary = self.summary_prompt()
    
    def score_prompt(self):
        return f"""You are an expert ATS (Applicant Tracking System) and recruitment specialist.
Analyze the following resume and job description carefully.

RESUME:
{self.resumeText}

JOB DESCRIPTION:
{self.JobDescription}

Please provide a detailed analysis and scoring in the following format:
1. Overall Match Score (0-100): Rate how well the resume matches the job requirements
2. Key Skills Match: List matching skills and missing critical skills
3. Experience Alignment: Evaluate how well the candidate's experience aligns with the role
4. Qualification Match: Assess educational and certification alignment
5. Technical Proficiency: Evaluate technical skills match

Be objective and data-driven in your assessment. Consider both explicit and implicit requirements.
Provide the score in a clear, structured format with brief explanations for each category."""

    def suggest_prompt(self):
        
        return f"""As an expert resume optimizer and career coach, analyze this resume against the job description 
and provide specific, actionable improvements.

RESUME:
{self.resumeText}

JOB DESCRIPTION:
{self.JobDescription}

Please provide detailed suggestions in the following areas:
Focus only on:
- Identifying missing or underrepresented technical skills, programming languages, frameworks, tools, or databases that are mentioned in the job description 
but not present in the resume.
- Providing suggestions on which of these the candidate should acquire or emphasize to improve alignment with the job requirements.

Do not include advice on soft skills, formatting, achievements, or generic content improvements. Only focus on bridging the technical gap based on skill comparison.
Focus on practical, implementable changes that would significantly improve the match for this specific role.
Provide concrete examples where possible."""

    def summary_prompt(self):
        """Generate a prompt for summarizing the resume"""
        return f"""As an expert resume analyst, create a comprehensive yet concise summary of this professional profile.

RESUME:
{self.resumeText}

Please provide a clear, well-structured summary that includes:

1. Professional Overview:
   - Years of experience
   - Core expertise areas
   - Industry focus

2. Key Qualifications:
   - Educational background
   - Major certifications
   - Technical skills

3. Career Highlights:
   - Notable achievements
   - Leadership experience
   - Project impacts

4. Unique Value Proposition:
   - What sets this candidate apart
   - Specialist skills or experiences
   - Notable patterns in career progression

Keep the summary focused on the most relevant and impactful elements of the profile.
Highlight aspects that would be most valuable to potential employers."""