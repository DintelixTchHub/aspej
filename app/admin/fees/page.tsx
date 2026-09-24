'use client'

import { Plus, Save, Trash2 } from 'lucide-react'
import { AdminLayout, AdminPanel } from '@/components/admin/admin-layout'

const feeRows = [
  { label: 'Registration fee', amount: '5000', program: 'All programs', term: 'Once per year' },
  { label: 'Tuition fee', amount: '45000', program: 'All programs', term: 'Term 1' },
]

export default function FeesAdminPage() {
  return (
    <AdminLayout>
      <div className="admin-top">
        <div>
          <span className="eyebrow">Finance</span>
          <h2>Fees structure</h2>
          <p>Maintain the fee information that families need before applying.</p>
        </div>
        <button className="button button-primary" type="button"><Save size={15} /> Save structure</button>
      </div>

      <AdminPanel title="Current fee structure" description="Amounts are shown in Rwandan francs (RWF).">
        <div className="fee-table-wrap">
          <div className="fee-table fee-table-header"><span>Fee name</span><span>Amount (RWF)</span><span>Program</span><span>Applies</span><span /></div>
          {feeRows.map((row) => (
            <div className="fee-table" key={row.label}>
              <input defaultValue={row.label} aria-label={`${row.label} name`} />
              <input defaultValue={row.amount} type="number" min="0" aria-label={`${row.label} amount`} />
              <select defaultValue={row.program} aria-label={`${row.label} program`}><option>All programs</option><option>Building Construction</option><option>Tourism</option><option>Accounting</option><option>Networking & Internet Technologies</option></select>
              <select defaultValue={row.term} aria-label={`${row.label} applies`}><option>Once per year</option><option>Term 1</option><option>Term 2</option><option>Term 3</option></select>
              <button className="icon-button" type="button" aria-label={`Remove ${row.label}`}><Trash2 size={16} /></button>
            </div>
          ))}
        </div>
        <button className="text-button fee-add-button" type="button"><Plus size={15} /> Add fee line</button>
      </AdminPanel>

      <AdminPanel title="Notes for families" description="Add payment instructions or important context.">
        <label className="field">
          <span>Fee structure note</span>
          <textarea rows={4} placeholder="Example: Fees are payable through the school finance office before the start of each term." />
        </label>
      </AdminPanel>
    </AdminLayout>
  )
}
