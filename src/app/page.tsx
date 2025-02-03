"use client"

import { useState } from "react"
import { getFilesByParent, getFilePath } from "../../utils/mockData"
import { Button } from "~/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"
import { Folder, File, Upload } from "lucide-react"

export default function Home() {
  const [currentFolder, setCurrentFolder] = useState<string | null>(null)

  const files = getFilesByParent(currentFolder)
  const breadcrumbs = currentFolder ? getFilePath(currentFolder) : []

  const handleFolderClick = (folderId: string) => {
    setCurrentFolder(folderId)
  }

  const handleBreadcrumbClick = (folderId: string | null) => {
    setCurrentFolder(folderId)
  }

  return (
    <div className="bg-gray-900 p-8 min-h-screen text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-2xl">Google Drive Clone</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Upload className="mr-2 w-4 h-4" /> Upload
          </Button>
        </div>

        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => handleBreadcrumbClick(null)}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs.map((item, index) => (
              <BreadcrumbItem key={item.id}>
                <BreadcrumbSeparator />
                <BreadcrumbLink onClick={() => handleBreadcrumbClick(item.id)}>{item.name}</BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead className="text-right">Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file) => (
            <TableRow key={file.id}>
              <TableCell className="font-medium">
                {file.type === "folder" ? (
                  <button
                    className="flex items-center text-blue-600 hover:underline"
                    onClick={() => handleFolderClick(file.id)}
                  >
                    <Folder className="mr-2 w-4 h-4" />
                    <span>{file.name}</span>
                  </button>
                ) : (
                  <a href="#" className="flex items-center text-blue-600 hover:underline">
                    <File className="mr-2 w-4 h-4" />
                    <span>{file.name}</span>
                  </a>
                )}
              </TableCell>
              <TableCell>{file.type}</TableCell>
              <TableCell>{file.size || "-"}</TableCell>
              <TableCell className="text-right">{file.modified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </div>
  )
}

