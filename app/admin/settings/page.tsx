import { AdminLayout, AdminPanel } from '@/components/admin/admin-layout'
import { schoolInfo } from '@/lib/data/school'

export default function AdminSettingsPage() {
  return (
    <AdminLayout>
      <div className="admin-top">
        <div>
          <span className="eyebrow">Workspace</span>
          <h2>Settings</h2>
          <p>Configure the school platform foundation.</p>
        </div>
      </div>
      <div className="settings-grid">
        <AdminPanel title="Institution profile" description="Public information about ASPEJ">
          <div className="settings-form">
            <label className="field"><span>School name</span><input defaultValue={schoolInfo.fullName} /></label>
            <label className="field"><span>Short name</span><input defaultValue={schoolInfo.name} /></label>
            <label className="field"><span>Tagline</span><input defaultValue={schoolInfo.tagline} /></label>
            <label className="field"><span>Description</span><textarea rows={3} defaultValue={schoolInfo.description} /></label>
            <label className="field"><span>Vision</span><textarea rows={3} defaultValue={schoolInfo.vision} /></label>
            <label className="field"><span>Mission</span><textarea rows={3} defaultValue={schoolInfo.mission} /></label>
          </div>
        </AdminPanel>
        <AdminPanel title="Contact details" description="How people reach the school">
          <div className="settings-form">
            <label className="field"><span>Location</span><input defaultValue={schoolInfo.location} /></label>
            <label className="field"><span>Phone</span><input defaultValue={schoolInfo.phone} /></label>
            <label className="field"><span>Email</span><input defaultValue={schoolInfo.email} /></label>
            <label className="field"><span>School manager</span><input defaultValue={schoolInfo.manager} /></label>
          </div>
        </AdminPanel>
      </div>
      <div className="settings-actions">
        <button className="button button-primary" type="button">Save changes</button>
        <button className="button button-secondary" type="button">Reset defaults</button>
      </div>
    </AdminLayout>
  )
}
