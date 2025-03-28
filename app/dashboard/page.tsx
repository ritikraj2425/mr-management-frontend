import Link from "next/link"
import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GroupCard } from "@/components/group-card"
import { MergeRequestList } from "@/components/merge-request-list"

// Mock data for groups
const groups = [
  {
    id: "1",
    name: "Frontend Team",
    description: "UI/UX and frontend development team",
    pendingMRs: 5,
    totalMRs: 42,
    members: 8,
  },
  {
    id: "2",
    name: "Backend Team",
    description: "API and database development team",
    pendingMRs: 3,
    totalMRs: 37,
    members: 6,
  },
]

// Mock data for merge requests
const mergeRequests = [
  {
    id: "mr-1",
    title: "Add user authentication flow",
    creator: "Jane Smith",
    group: "Frontend Team",
    status: "pending",
    createdAt: "2023-05-15T10:30:00Z",
  },
  {
    id: "mr-2",
    title: "Fix pagination bug in user list",
    creator: "John Doe",
    group: "Backend Team",
    status: "pending",
    createdAt: "2023-05-14T14:45:00Z",
  },
  {
    id: "mr-3",
    title: "Implement dark mode toggle",
    creator: "Alex Johnson",
    group: "Frontend Team",
    status: "pending",
    createdAt: "2023-05-13T09:15:00Z",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Welcome, User</h2>
        <Button asChild>
          <Link href="/dashboard/merge-requests/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New MR
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Groups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{groups.length}</div>
            <p className="text-xs text-muted-foreground">You are a member of {groups.length} groups</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mergeRequests.length}</div>
            <p className="text-xs text-muted-foreground">{mergeRequests.length} MRs waiting for your review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your MRs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">8 merged, 4 pending review</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Your Groups</h3>
          <Button variant="outline" asChild>
            <Link href="/dashboard/groups">View All</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
          <Card className="flex h-full flex-col items-center justify-center border-dashed">
            <Link
              href="/dashboard/groups/new"
              className="flex h-full w-full flex-col items-center justify-center rounded-md p-6 text-center hover:bg-muted/50"
            >
              <PlusCircle className="mb-2 h-6 w-6 text-muted-foreground" />
              <p className="text-sm font-medium text-muted-foreground">Create or Join Group</p>
            </Link>
          </Card>
        </div>
      </div>

      <div className="space-y-4 ">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">MRs For You To Merge</h3>
          <Button variant="outline" asChild>
            <Link href="/dashboard/merge-requests">View All</Link>
          </Button>
        </div>
        <MergeRequestList mergeRequests={mergeRequests} />
      </div>
    </div>
  )
}

