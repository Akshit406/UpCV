import { useEffect, useState } from 'react'

export default function ScoreCard({ score, justification }) {
  const [animatedScore, setAnimatedScore] = useState(0)
  const numericScore = parseInt(score, 10)
  const circumference = 2 * Math.PI * 45
  const offset = circumference - (animatedScore / 100) * circumference

  useEffect(() => {
    let currentScore = 0
    const increment = numericScore / 20
    
    const timer = setInterval(() => {
      currentScore += increment
      if (currentScore >= numericScore) {
        currentScore = numericScore
        clearInterval(timer)
      }
      setAnimatedScore(Math.floor(currentScore))
    }, 30)
    
    return () => clearInterval(timer)
  }, [numericScore])

  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Match Score</h2>
      
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              className="text-gray-200"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
            />
            {/* Progress circle */}
            <circle
              className="text-blue-600 transform -rotate-90 origin-center"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
              style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
            />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-800">
              {animatedScore}%
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-2">
          {numericScore < 50 
            ? "Areas to improve below" 
            : numericScore < 80 
              ? "Good match" 
              : "Excellent match!"}
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg text-left w-full">
          <p className="text-gray-700">{justification}</p>
        </div>
      </div>
    </div>
  )
}