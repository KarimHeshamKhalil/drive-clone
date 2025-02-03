export interface FileItem {
  id: string
  name: string
  type: "file" | "folder"
  size?: string
  modified: string
  parent: string | null
}

export const mockFiles: FileItem[] = [
  { id: "1", name: "Documents", type: "folder", modified: "2023-05-15", parent: null },
  { id: "2", name: "Images", type: "folder", modified: "2023-05-14", parent: null },
  { id: "3", name: "Work", type: "folder", modified: "2023-05-13", parent: null },
  { id: "4", name: "resume.pdf", type: "file", size: "2.5 MB", modified: "2023-05-12", parent: "1" },
  { id: "5", name: "project_plan.docx", type: "file", size: "1.2 MB", modified: "2023-05-11", parent: "1" },
  { id: "6", name: "vacation.jpg", type: "file", size: "3.7 MB", modified: "2023-05-10", parent: "2" },
  { id: "7", name: "logo.png", type: "file", size: "0.5 MB", modified: "2023-05-09", parent: "2" },
  { id: "8", name: "presentation.pptx", type: "file", size: "5.1 MB", modified: "2023-05-08", parent: "3" },
  { id: "9", name: "budget.xlsx", type: "file", size: "1.8 MB", modified: "2023-05-07", parent: "3" },
]

export function getFilesByParent(parentId: string | null): FileItem[] {
  return mockFiles.filter((file) => file.parent === parentId)
}

export function getFilePath(fileId: string): FileItem[] {
  const path: FileItem[] = []
  let currentFile: FileItem | null | undefined = mockFiles.find((f) => f.id === fileId) || null

  while (currentFile) {
    path.unshift(currentFile)
    currentFile = currentFile.parent ? mockFiles.find((f) => f.id === currentFile!.parent) : null
  }

  return path
}

