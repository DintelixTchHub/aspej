import Link from "next/link";
import {
  ArrowRight,
  FileText,
  MessageSquare,
  Newspaper,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import {
  AdminLayout,
  AdminPanel,
  AdminStats,
} from "@/components/admin/admin-layout";
import { applications, events, newsArticles } from "@/lib/data/school";
import { StatusBadge } from "@/components/layout/public-layout";
export default function AdminPage() {
  return (
    <AdminLayout>
      <div className="admin-top">
        <div>
          <span className="eyebrow">Overview</span>
          <h2>Good morning, administrator.</h2>
          <p>Here is what needs your attention across the school platform.</p>
        </div>
        <Link className="button button-primary" href="/admin/news">
          <Plus size={16} /> Create update
        </Link>
      </div>
      <AdminStats
        items={[
          {
            label: "Total applications",
            value: "128",
            detail: "+12% this month",
          },
          {
            label: "Pending review",
            value: "24",
            detail: "8 require attention",
          },
          {
            label: "Published news",
            value: String(newsArticles.length),
            detail: "This prototype",
          },
          {
            label: "Upcoming events",
            value: String(events.length),
            detail: "Next 90 days",
          },
        ]}
      />
      <AdminPanel
        title="Recent applications"
        description="The latest applicant activity"
        action={
          <Link className="text-button" href="/admin/applications">
            View all <ArrowRight size={15} />
          </Link>
        }
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Applicant</th>
                <th>Program</th>
                <th>Status</th>
                <th>Submitted</th>
              </tr>
            </thead>
            <tbody>
              {applications.slice(0, 4).map((application) => (
                <tr key={application.id}>
                  <td>
                    <strong>{application.name}</strong>
                    <small>{application.id}</small>
                  </td>
                  <td>{application.program}</td>
                  <td>
                    <StatusBadge status={application.status} />
                  </td>
                  <td>{application.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminPanel>
      <div className="admin-dashboard-grid">
        <AdminPanel title="Quick actions">
          <div className="admin-quick-actions">
            <Link href="/admin/applications">
              <FileText size={18} /> Review applications
            </Link>
            <Link href="/admin/news">
              <Newspaper size={18} /> Publish news
            </Link>
            <Link href="/admin/events">
              <Plus size={18} /> Add event
            </Link>
            <Link href="/admin/settings">
              <Settings size={18} /> Site settings
            </Link>
            <Link href="/admin/messages">
              <MessageSquare size={18} /> Messages
            </Link>
            <Link href="/admin/users">
              <Users size={18} /> Manage users
            </Link>
          </div>
        </AdminPanel>
        <AdminPanel title="Workspace note">
          <div className="admin-note">
            <strong>Prototype mode</strong>
            <p>
              This workspace uses local typed data. Connect auth and APIs when
              the information model is approved.
            </p>
          </div>
        </AdminPanel>
      </div>
    </AdminLayout>
  );
}
