import { useState } from 'react'

export default function SuggestionsCard({ suggestion }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const suggestionLines = suggestion.split('\n').filter(line => line.trim())
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Suggestions</h2>
        {suggestionLines.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
      
      <ul className="space-y-2">
        {(isExpanded ? suggestionLines : suggestionLines.slice(0, 3)).map((line, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
            <span className="text-gray-600">{line}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}