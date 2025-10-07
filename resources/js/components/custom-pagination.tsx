import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Meta } from '@/types'

interface CustomPaginationProps {
  meta: Meta
}

const CustomPagination = ({ meta }: CustomPaginationProps) => {
  if (!meta || !meta.links || meta.links.length === 0) return null

  const prevUrl = meta.links[0]?.url ?? null
  const nextUrl = meta.links[meta.links.length - 1]?.url ?? null

  // Filter halaman angka saja (tanpa Previous & Next)
  const pageLinks = meta.links.filter(
    (item) =>
      !item.label.toLowerCase().includes('previous') &&
      !item.label.toLowerCase().includes('next')
  )

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href={prevUrl ?? '#'}
            className={!prevUrl ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        {/* Page number links */}
        {pageLinks.map((item, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href={item.url ?? '#'}
              isActive={item.active}
              className={`rounded-md ${
                item.active
                  ? 'bg-primary text-primary-foreground hover:bg-primary/80'
                  : ''
              }`}
              dangerouslySetInnerHTML={{ __html: item.label }}
            />
          </PaginationItem>
        ))}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href={nextUrl ?? '#'}
            className={!nextUrl ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default CustomPagination
