"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Save, Search, Star, Trash2, Clock } from "lucide-react"
import { toast } from "sonner"

interface SavedSearch {
  id: string
  name: string
  query: string
  filters: Record<string, string>
  createdAt: Date
  isFavorite: boolean
}

interface SavedSearchesProps {
  onApplySearch: (search: SavedSearch) => void
  currentQuery: string
  currentFilters: Record<string, string>
}

export function SavedSearches({ onApplySearch, currentQuery, currentFilters }: SavedSearchesProps) {
  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([
    {
      id: "1",
      name: "Recent Legal Documents",
      query: "legal",
      filters: { classification: "Legal", dateRange: "7" },
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      isFavorite: true,
    },
    {
      id: "2",
      name: "Failed Check-ins",
      query: "failed",
      filters: { eventType: "Check-in failed", dateRange: "30" },
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      isFavorite: false,
    },
    {
      id: "3",
      name: "System Events",
      query: "",
      filters: { actor: "system", dateRange: "7" },
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      isFavorite: true,
    },
  ])
  const [searchName, setSearchName] = useState("")
  const [showSaveForm, setShowSaveForm] = useState(false)

  const saveCurrentSearch = () => {
    if (!searchName.trim()) {
      toast.error("Please enter a name for this search")
      return
    }

    const newSearch: SavedSearch = {
      id: Date.now().toString(),
      name: searchName,
      query: currentQuery,
      filters: currentFilters,
      createdAt: new Date(),
      isFavorite: false,
    }

    setSavedSearches([newSearch, ...savedSearches])
    setSearchName("")
    setShowSaveForm(false)
    toast.success("Search saved successfully!")
  }

  const toggleFavorite = (id: string) => {
    setSavedSearches((searches) =>
      searches.map((search) => (search.id === id ? { ...search, isFavorite: !search.isFavorite } : search)),
    )
  }

  const deleteSearch = (id: string) => {
    setSavedSearches((searches) => searches.filter((search) => search.id !== id))
    toast.success("Search deleted")
  }

  const formatFilters = (filters: Record<string, string>) => {
    return Object.entries(filters)
      .filter(([_, value]) => value && value !== "All")
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ")
  }

  const favoriteSearches = savedSearches.filter((s) => s.isFavorite)
  const recentSearches = savedSearches.filter((s) => !s.isFavorite).slice(0, 5)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Saved Searches</span>
          </CardTitle>
          <Button variant="outline" size="sm" onClick={() => setShowSaveForm(!showSaveForm)}>
            <Save className="h-4 w-4 mr-2" />
            Save Current
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Save Current Search Form */}
        {showSaveForm && (
          <div className="p-3 bg-muted/20 rounded-lg space-y-3">
            <Input
              placeholder="Enter search name..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <div className="flex space-x-2">
              <Button onClick={saveCurrentSearch} size="sm">
                Save
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setShowSaveForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Favorite Searches */}
        {favoriteSearches.length > 0 && (
          <div>
            <h4 className="font-medium mb-2 flex items-center">
              <Star className="h-4 w-4 mr-1 text-amber-500" />
              Favorites
            </h4>
            <div className="space-y-2">
              {favoriteSearches.map((search) => (
                <div
                  key={search.id}
                  className="flex items-center justify-between p-2 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors"
                >
                  <div className="flex-1 cursor-pointer" onClick={() => onApplySearch(search)}>
                    <div className="font-medium text-sm">{search.name}</div>
                    {search.query && <div className="text-xs text-muted-foreground">"{search.query}"</div>}
                    {Object.keys(search.filters).length > 0 && (
                      <div className="text-xs text-muted-foreground">{formatFilters(search.filters)}</div>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="sm" onClick={() => toggleFavorite(search.id)}>
                      <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => deleteSearch(search.id)}>
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div>
            <h4 className="font-medium mb-2 flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              Recent
            </h4>
            <div className="space-y-2">
              {recentSearches.map((search) => (
                <div
                  key={search.id}
                  className="flex items-center justify-between p-2 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors"
                >
                  <div className="flex-1 cursor-pointer" onClick={() => onApplySearch(search)}>
                    <div className="font-medium text-sm">{search.name}</div>
                    {search.query && <div className="text-xs text-muted-foreground">"{search.query}"</div>}
                    {Object.keys(search.filters).length > 0 && (
                      <div className="text-xs text-muted-foreground">{formatFilters(search.filters)}</div>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="sm" onClick={() => toggleFavorite(search.id)}>
                      <Star className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => deleteSearch(search.id)}>
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {savedSearches.length === 0 && (
          <div className="text-center py-4 text-muted-foreground">
            <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No saved searches yet</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
