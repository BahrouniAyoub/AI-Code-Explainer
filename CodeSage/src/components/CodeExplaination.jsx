import React from 'react'

const CodeExplaination = (explaination) => {
  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">Explanation :</h2>
        <p>{explaination}</p>
    </div>
  )
}

export default CodeExplaination