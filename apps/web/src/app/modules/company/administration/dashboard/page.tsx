//apps/web/src/app/modules/company/administration/dashboard/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import jwtDecode from 'jwt-decode'

interface Company {
  id: number
  name: string
  domain?: string
}
interface AuthUser { role: string; companyId?: number }

export default function DashboardPage() {
  const router = useRouter()
  const [companies, setCompanies] = useState<Company[]>([])
  const [filtered, setFiltered] = useState<Company[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  // Token aus localStorage und Role auslesen
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const user = token ? (jwtDecode(token) as AuthUser) : null

  useEffect(() => {
    if (!token) {
      router.push('/login')
      return
    }
    fetch('/api/companies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then((data: Company[]) => {
        setCompanies(data)
        setFiltered(data)
      })
      .finally(() => setLoading(false))
  }, [router, token])

  // Such-Filter
  useEffect(() => {
    setFiltered(
      companies.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, companies])

  if (loading) return <div className="p-4">Lade Daten...</div>

  return (
    <div className="p-6 bg-[var(--color-bg)] min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>

      {/* Suchfeld nur für SuperAdmins */}
      {user?.role === 'SuperAdmin' && (
        <input
          type="text"
          placeholder="Unternehmen suchen..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="mb-4 p-2 border rounded w-full max-w-sm"
        />
      )}

      {filtered.length === 0 ? (
        <p>Keine Unternehmen gefunden.</p>
      ) : (
        <ul className="space-y-2">
          {filtered.map(company => (
            <li
              key={company.id}
              className="p-4 border rounded-lg hover:shadow cursor-pointer"
              onClick={() => router.push(`/companies/${company.id}`)}
            >
              <h3 className="text-xl font-medium">{company.name}</h3>
              <p className="text-sm text-muted">
                {company.domain || 'Keine Domain angegeben'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}