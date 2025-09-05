"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AppLayout } from "@/components/app-layout"
import { AuthGuard } from "@/components/auth-guard"
import { EnhancedSearch } from "@/components/enhanced-search"
import { HelpTooltip } from "@/components/contextual-help"
import { mockFiles, formatFileSize, formatDate, type MockFile } from "@/lib/mock-data"
import { Upload, FileText, MoreHorizontal, Eye, Download, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

const classificationColors = {
  Personal: "bg-blue-500/10 text-blue-500",
  Legal: "bg-red-500/10 text-red-500",
  Financial: "bg-green-500/10 text-green-500",
  Medical: "bg-purple-500/10 text-purple-500",
  Other: "surface--mist text-gray-500",
}

export default function VaultPage() {
  const [files, setFiles] = useState<MockFile[]>(mockFiles)
  const [filteredFiles, setFilteredFiles] = useState<MockFile[]>(mockFiles)
  const [selectedFile, setSelectedFile] = useState<MockFile | null>(null)

  const handleSearch = (query: string, filters: string[]) => {
    let filtered = files

    // Apply text search
    if (query.trim()) {
      filtered = filtered.filter(
        (file) =>
          file.name.toLowerCase().includes(query.toLowerCase()) ||
          file.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
          file.classification.toLowerCase().includes(query.toLowerCase()),
      )
    }

    // Apply filters
    if (filters.includes("recent")) {
      filtered = filtered.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime())
    }

    setFilteredFiles(filtered)
  }

  const handleUpload = () => {
    // Mock file upload
    const newFile: MockFile = {
      id: Date.now().toString(),
      name: "New_Document.pdf",
      size: Math.floor(Math.random() * 5000000),
      classification: "Other",
      lastModified: new Date(),
      tags: ["new", "uploaded"],
      notes: "Recently uploaded document",
    }
    const updatedFiles = [newFile, ...files]
    setFiles(updatedFiles)
    setFilteredFiles(updatedFiles)
  }

  const handleSimulateDecrypt = (file: MockFile) => {
    alert(
      `Simulating decryption of ${file.name}...\n\nIn a real implementation, this would decrypt the file using your private key.`,
    )
  }

  return (
    <AuthGuard>
      <AppLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <HelpTooltip
                title="Encrypted Vault"
                content="All files are encrypted client-side before upload. Only you have the keys to decrypt them."
              >
                <h1 className="h1">Encrypted Vault</h1>
              </HelpTooltip>
              <div className="prose stack-lg">
                <p className="body mt-2">Securely store and manage your important documents</p>
              </div>
            </div>
            <Button onClick={handleUpload} className="hover:shadow-md transition-shadow">
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>

          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <EnhancedSearch
                onSearch={handleSearch}
                placeholder="Search files, tags, classifications..."
                showRecentSearches={true}
              />
            </CardContent>
          </Card>

          {/* Files List */}
          {filteredFiles.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <div className="prose stack-lg">
                  <h3 className="h3 mb-2">No files found</h3>
                  <p className="body mb-4">
                    {files.length === 0
                      ? "Upload documents you want protected."
                      : "Try adjusting your search or filters."}
                  </p>
                </div>
                <Button onClick={handleUpload}>
                  <Upload className="h-4 w-4 mr-2" />
                  {files.length === 0 ? "Upload your first document" : "Upload Document"}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Documents ({filteredFiles.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredFiles.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-4">
                        <FileText className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div>
                          <h4 className="font-medium">{file.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{formatFileSize(file.size)}</span>
                            <span>Modified {formatDate(file.lastModified)}</span>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge className={classificationColors[file.classification]}>{file.classification}</Badge>
                            {file.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedFile(file)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>{file.name}</SheetTitle>
                              <SheetDescription>Document details and actions</SheetDescription>
                            </SheetHeader>
                            <div className="space-y-6 mt-6">
                              <div>
                                <h4 className="font-medium mb-2">File Information</h4>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Size:</span>
                                    <span>{formatFileSize(file.size)}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Classification:</span>
                                    <Badge className={classificationColors[file.classification]}>
                                      {file.classification}
                                    </Badge>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Last Modified:</span>
                                    <span>{formatDate(file.lastModified)}</span>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-medium mb-2">Tags</h4>
                                <div className="flex flex-wrap gap-2">
                                  {file.tags.map((tag) => (
                                    <Badge key={tag} variant="outline">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-medium mb-2">Notes</h4>
                                <Textarea
                                  value={file.notes || ""}
                                  placeholder="Add notes about this document..."
                                  rows={3}
                                />
                              </div>

                              <div className="space-y-2">
                                <Button
                                  onClick={() => handleSimulateDecrypt(file)}
                                  variant="outline"
                                  className="w-full"
                                >
                                  <Eye className="h-4 w-4 mr-2" />
                                  Simulate Decrypt
                                </Button>
                                <Button variant="outline" className="w-full bg-transparent">
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </Button>
                              </div>
                            </div>
                          </SheetContent>
                        </Sheet>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </AppLayout>
    </AuthGuard>
  )
}
