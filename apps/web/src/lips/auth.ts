// apps/web/src/libs/auth.ts
import jwt from 'jsonwebtoken'

export interface AuthUser {
  sub: number
  email: string
  role: 'SuperAdmin' | 'CentralAdmin' | 'Admin' | 'User'
  companyId?: number
}

export function getUserFromHeader(req: { headers: Record<string,string> }): AuthUser | null {
  const auth = req.headers.authorization?.split(' ')
  if (auth?.[0] !== 'Bearer' || !auth[1]) return null
  try {
    return jwt.verify(auth[1], process.env.JWT_SECRET!) as AuthUser
  } catch {
    return null
  }
}