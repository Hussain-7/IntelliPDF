'use client'

import { useState } from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function AdminPage() {
  const { user, isLoading } = useKindeBrowserClient()
  const [stats, setStats] = useState({
    totalUsers: 156,
    activeUsers: 89,
    totalFiles: 423,
    storageUsed: '2.1 GB'
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user?.email?.endsWith('@admin.com')) {
    return <div className="p-8">You do not have access to this page.</div>
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalUsers}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.activeUsers}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Files</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalFiles}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Storage Used</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.storageUsed}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>System Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <span className="block text-sm font-medium mb-1">Maximum File Size (MB)</span>
              <Input id="maxFileSize" defaultValue="10" />
            </div>
            <div>
              <span className="block text-sm font-medium mb-1">Storage Limit per User (GB)</span>
              <Input id="storageLimit" defaultValue="5" />
            </div>
            <Button>Save Settings</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              'User john@example.com uploaded a new file',
              'Storage limit increased for premium users',
              'New user registration: sarah@example.com',
              'System backup completed successfully'
            ].map((activity, index) => (
              <div key={index} className="p-2 bg-muted rounded-lg">
                {activity}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
