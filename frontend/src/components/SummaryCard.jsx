export default function SummaryCard({ skills, experience, projects, education }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
      
      {skills && skills.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-transform duration-100 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-1">Experience</h3>
          <p className="text-gray-600">{experience}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-1">Projects</h3>
          <p className="text-gray-600">{projects}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-1">Education</h3>
          <p className="text-gray-600">{education}</p>
        </div>
      </div>
    </div>
  )
}