import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { Brand } from "@/components/layout/public-layout";
import { schoolInfo } from "@/lib/data/school";

export default function StaffLoginPage() {
  return (
    <main className="auth-page">
      <div className="auth-shell">
        <Link className="auth-back" href="/">
          <ArrowLeft size={13} /> Back to ASPEJ
        </Link>
        <div className="auth-brand">
          <Brand />
        </div>
        <div className="auth-copy">
          <span className="eyebrow">Staff workspace</span>
          <h1>Sign in to manage ASPEJ.</h1>
          <p>
            Access applications, communications, events, and school content from
            one secure workspace.
          </p>
        </div>
        <form className="auth-form" action="/admin">
          <label className="field">
            <span>Work email</span>
            <input
              type="email"
              name="email"
              placeholder="name@aspej.rw"
              required
            />
          </label>
          <label className="field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </label>
          <button className="button button-primary" type="submit">
            <LockKeyhole size={14} /> Continue to workspace
          </button>
        </form>
        <p className="auth-note">
          Demo access is available for this prototype. Connect the ASPEJ
          identity service before launch.
        </p>
      </div>
    </main>
  );
}
