"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, Download, Tag, FolderOpen, CheckSquare, X } from "lucide-react"
import { toast } from "sonner"

interface BulkOperationsProps {
  selectedItems: string[]
  totalItems: number
  onSelectAll: () => void
  onClearSelection: () => void
  onBulkAction: (action: string, options?: any) => void
  itemType: "files" | "recipients" | "plans"
}

export function BulkOperations({
  selectedItems,
  totalItems,
  onSelectAll,
  onClearSelection,
  onBulkAction,
  itemType,
}: BulkOperationsProps) {
  const [bulkAction, setBulkAction] = useState("")

  const handleBulkAction = () => {
    if (!bulkAction || selectedItems.length === 0) return

    switch (bulkAction) {
      case "delete":
        onBulkAction("delete")
        toast.success(`${selectedItems.length} ${itemType} deleted`)
        break
      case "download":
        onBulkAction("download")
        toast.success(`Downloading ${selectedItems.length} ${itemType}`)
        break
      case "tag":
        onBulkAction("tag", { tag: "bulk-processed" })
        toast.success(`Tagged ${selectedItems.length} ${itemType}`)
        break
      case "move":
        onBulkAction("move", { folder: "Archive" })
        toast.success(`Moved ${selectedItems.length} ${itemType} to Archive`)
        break
    }

    setBulkAction("")
    onClearSelection()
  }

  if (selectedItems.length === 0) return null

  return (
    <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={selectedItems.length === totalItems}
            onCheckedChange={selectedItems.length === totalItems ? onClearSelection : onSelectAll}
          />
          <span className="text-sm font-medium">
            {selectedItems.length} of {totalItems} selected
          </span>
        </div>
        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
          <CheckSquare className="h-3 w-3 mr-1" />
          Bulk Mode
        </Badge>
      </div>

      <div className="flex items-center space-x-3">
        <Select value={bulkAction} onValueChange={setBulkAction}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Choose action" />
          </SelectTrigger>
          <SelectContent>
            {itemType === "files" && (
              <>
                <SelectItem value="download">
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </div>
                </SelectItem>
                <SelectItem value="tag">
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2" />
                    Add Tag
                  </div>
                </SelectItem>
                <SelectItem value="move">
                  <div className="flex items-center">
                    <FolderOpen className="h-4 w-4 mr-2" />
                    Move to Folder
                  </div>
                </SelectItem>
              </>
            )}
            <SelectItem value="delete" className="text-red-600">
              <div className="flex items-center">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={handleBulkAction} disabled={!bulkAction} size="sm">
          Apply
        </Button>

        <Button variant="ghost" size="sm" onClick={onClearSelection}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
