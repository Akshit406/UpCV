import SummaryCard from './SummaryCard'
import ScoreCard from './ScoreCard'
import SuggestionsCard from './SuggestionsCard'

export default function ResultPanel({ results }) {
  return (
    <div className="space-y-6">
      <ScoreCard 
        score={results.score} 
        justification={results.score_justification} 
      />
      
      <SummaryCard 
        skills={results.skills} 
        experience={results.experience} 
        projects={results.projects} 
        education={results.education} 
      />
      
      <SuggestionsCard suggestion={results.suggestion} />
    </div>
  )
}