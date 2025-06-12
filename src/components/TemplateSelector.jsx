import React from 'react'

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate}) => {
  return (
    <div className='mb-4'>

        <label className='block text-black font-body1 font-semibold mb-2'>
            Choose Your Desired Template
        </label>

        <select 
         value={selectedTemplate}
         onChange={(e) => setSelectedTemplate(e.target.value)}
         className='border text-black bg-red-50 p-2 rounded w-full'
        >
            <option value="default">Classic</option>
            <option value="modern">Modern</option>
            <option value="elegant">Elegant</option>

        </select>
        



    </div>
  )
}

export default TemplateSelector