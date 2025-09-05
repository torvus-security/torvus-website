"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, X, Clock, Tag } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  type: "file" | "recipient" | "plan" | "audit"
  description: string
  tags: string[]
  lastModified: Date
}

interface EnhancedSearchProps {
  onSearch: (query: string, filters: string[]) => void
  placeholder?: string
  showRecentSearches?: boolean
}

export function EnhancedSearch({
  onSearch,
  placeholder = "Search files, recipients, plans...",
  showRecentSearches = true,
}: EnhancedSearchProps) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "financial documents",
    "legal contracts",
    "medical records",
  ])

  const quickFilters = [
    { label: "Files", value: "files", icon: Tag },
    { label: "Recipients", value: "recipients", icon: Tag },
    { label: "Plans", value: "plans", icon: Tag },
    { label: "Recent", value: "recent", icon: Clock },
  ]

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      onSearch(searchQuery, activeFilters)
      setRecentSearches((prev) => {
        const updated = [searchQuery, ...prev.filter((s) => s !== searchQuery)].slice(0, 5)
        return updated
      })
      setIsOpen(false)
    }
  }

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const clearFilters = () => {
    setActiveFilters([])
  }

  useEffect(() => {
    onSearch(query, activeFilters)
  }, [query, activeFilters, onSearch])

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(query)
            }
            if (e.key === "Escape") {
              setIsOpen(false)
            }
          }}
          className="pl-10 pr-12"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
          {activeFilters.length > 0 && (
            <Badge variant="secondary" className="small">
              {activeFilters.length}
            </Badge>
          )}
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setIsOpen(!isOpen)}>
            <Filter className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="flex items-center space-x-2 mt-2">
          <span className="small text-muted-foreground">Filters:</span>
          {activeFilters.map((filter) => (
            <Badge key={filter} variant="secondary" className="small">
              {filter}
              <Button variant="ghost" size="sm" className="h-3 w-3 p-0 ml-1" onClick={() => toggleFilter(filter)}>
                <X className="h-2 w-2" />
              </Button>
            </Badge>
          ))}
          <Button variant="ghost" size="sm" onClick={clearFilters} className="small">
            Clear all
          </Button>
        </div>
      )}

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 transition-all duration-200">
          <Card className="border-border/50 bg-card/95 backdrop-blur-sm shadow-lg">
            <CardContent className="p-4 space-y-4">
              <div>
                <h4 className="h4 font-medium mb-2">Quick Filters</h4>
                <div className="flex flex-wrap gap-2">
                  {quickFilters.map((filter) => (
                    <Button
                      key={filter.value}
                      variant={activeFilters.includes(filter.value) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleFilter(filter.value)}
                      className="small"
                    >
                      <filter.icon className="w-3 h-3 mr-1" />
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>

              {showRecentSearches && recentSearches.length > 0 && (
                <div>
                  <h4 className="h4 font-medium mb-2">Recent Searches</h4>
                  <div className="space-y-1">
                    {recentSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start small"
                        onClick={() => {
                          setQuery(search)
                          handleSearch(search)
                        }}
                      >
                        <Clock className="w-3 h-3 mr-2" />
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
