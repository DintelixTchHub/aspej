'use client'

import { FileText, UploadCloud } from 'lucide-react'
import { AdminLayout, AdminPanel } from '@/components/admin/admin-layout'

export default function BabyeyiAdminPage() {
  return (
    <AdminLayout>
      <div className="admin-top">
        <div>
          <span className="eyebrow">Parent resources</span>
          <h2>Babyeyi document</h2>
          <p>Keep the information document available to parents and guardians before they apply.</p>
        </div>
      </div>

      <div className="admin-resource-grid">
        <AdminPanel title="Current document" description="The file currently shown on the admissions page.">
          <div className="admin-file-summary">
            <FileText size={22} />
            <div>
              <strong>Babyeyi.pdf</strong>
              <span>Parent information document</span>
              <small>Last updated: 24 September 2026</small>
            </div>
          </div>
          <div className="admin-panel-actions">
            <a className="button button-secondary" href="/documents/Babyeyi.pdf" download>Download current file</a>
          </div>
        </AdminPanel>

        <AdminPanel title="Upload replacement" description="PDF only. Use a clear, current version for families.">
          <form className="settings-form" action="/admin/babyeyi" method="post" encType="multipart/form-data">
            <label className="field">
              <span>Document title</span>
              <input name="title" defaultValue="Babyeyi document" required />
            </label>
            <label className="field">
              <span>Choose PDF file</span>
              <input name="document" type="file" accept="application/pdf" required />
            </label>
            <button className="button button-primary" type="submit"><UploadCloud size={15} /> Upload document</button>
          </form>
        </AdminPanel>
      </div>
    </AdminLayout>
  )
}
