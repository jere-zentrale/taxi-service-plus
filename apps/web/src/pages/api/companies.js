// apps/web/src/pages/api/companies.js
import { PrismaClient } from '@prisma/client'
import { getUserFromHeader } from '../../libs/auth'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const user = getUserFromHeader(req)
  if (!user) return res.status(401).json({ error: 'Unauthorized' })

  try {
    switch (req.method) {
      case 'GET': {
        let companies
        if (user.role === 'SuperAdmin') {
          // Super-Admin sieht alle
          companies = await prisma.company.findMany()
        } else {
          // alle anderen nur die eigene(n)
          const where = user.role === 'CentralAdmin' || user.role === 'Admin'
            ? { id: user.companyId! }
            : // normale User: nur wenn ihnen Rechte gegeben wurden, hier als Beispiel ihre Firma
              { id: user.companyId! }
          const comp = await prisma.company.findMany({ where })
          companies = comp
        }
        return res.status(200).json(companies)
      }

      // Optional: POST/PATCH/DELETE nur für SuperAdmin/CentralAdmin erlauben
      default:
        res.setHeader('Allow', ['GET'])
        return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error) {
    console.error('API /companies error:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}