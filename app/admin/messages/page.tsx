import { AdminLayout, AdminPanel } from '@/components/admin/admin-layout'
export default function AdminMessagesPage() { return <AdminLayout><AdminPanel title="Messages" description="Review questions from the ASPEJ community."><div className="empty-state"><h3>No messages yet</h3><p>Contact form submissions will appear here when connected to a backend.</p></div></AdminPanel></AdminLayout> }
