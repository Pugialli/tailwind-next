'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'
import { useFileInput } from './Root'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file, i) => {
        const state =
          i % 3 === 0
            ? 'progress'
            : i % 3 === 1
              ? 'error'
              : i % 3 === 2
                ? 'complete'
                : undefined
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state={state}
          />
        )
      })}
    </div>
  )
}
