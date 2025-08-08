// src/pages/AnalyzePage.jsx
import { useState } from 'react'
import UploadForm from '../components/UploadForm'
import ResultPanel from '../components/ResultPanel'
import LoadingSkeleton from '../components/LoadingSkeleton'
import ErrorToast from '../components/ErrorToast'
import { analyzeResume } from '../utils/api'

export default function AnalyzePage() {
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (file, jobDescription) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const data = await analyzeResume({ file, jobDescription })
      setResults(data)
    } catch (err) {
      setError(err.message || 'Failed to analyze resume')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {error && <ErrorToast message={error} onClose={() => setError(null)} />}
        {!results && !isLoading && (
          <UploadForm onSubmit={handleSubmit} isSubmitting={isLoading} />
        )}
        {isLoading && <LoadingSkeleton />}
        {results && <ResultPanel results={results} />}
      </div>
    </div>
  )
}