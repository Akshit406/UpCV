// src/components/HowItWorks.jsx
import { DocumentTextIcon, ClipboardDocumentIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    name: 'Upload PDF Resume',
    description: 'Simply drag and drop your resume file',
    icon: DocumentTextIcon,
  },
  {
    name: 'Paste Job Description',
    description: 'Copy-paste the job posting you\'re applying for',
    icon: ClipboardDocumentIcon,
  },
  {
    name: 'Get AI Analysis',
    description: 'Receive instant feedback and score',
    icon: ChartBarIcon,
  },
]

export default function HowItWorks() {
  return (
    <div className="bg-white py-12" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How upCV Works
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {steps.map((step) => (
              <div key={step.name} className="relative group">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white group-hover:bg-indigo-600 transition-all">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{step.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}