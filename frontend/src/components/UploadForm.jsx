    import { useState, useRef } from 'react'

    export default function UploadForm({ onSubmit, onReset, isSubmitting }) {
    const [jobDescription, setJobDescription] = useState('')
    const [file, setFile] = useState(null)
    const fileInputRef = useRef(null)

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!file || !jobDescription.trim()) return
        onSubmit(file, jobDescription.trim())
    }

    const handleReset = () => {
        setJobDescription('')
        setFile(null)
        if (fileInputRef.current) {
        fileInputRef.current.value = ''
        }
        onReset()
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
        <div className="space-y-6">
            <div>
            <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Job Description
            </label>
            <textarea
                id="jobDescription"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Paste the job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                disabled={isSubmitting}
            />
            </div>

            <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                Resume (PDF only)
            </label>
            <input
                id="resume"
                type="file"
                accept=".pdf"
                ref={fileInputRef}
                onChange={handleFileChange}
                disabled={isSubmitting}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            </div>

            <div className="flex items-center justify-end space-x-3">
            {file && (
                <button
                type="button"
                onClick={handleReset}
                disabled={isSubmitting}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                Reset
                </button>
            )}
            <button
                type="submit"
                disabled={!file || !jobDescription.trim() || isSubmitting}
                className={`px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${isSubmitting ? 'opacity-70' : ''}`}
            >
                {isSubmitting ? 'Analyzing...' : 'Analyze Resume'}
            </button>
            </div>
        </div>
        </form>
    )
    }