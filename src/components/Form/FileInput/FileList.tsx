'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'
import { useFileInput } from './Root'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  const testState = ['progress', 'error', 'complete']

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file, i) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state={testState[i % 3]}
          />
        )
      })}
    </div>
  )
}
