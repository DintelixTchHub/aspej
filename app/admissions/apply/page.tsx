"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, FileUp, Pencil, X } from "lucide-react";
import { InternalPage, PageFrame } from "@/components/layout/public-layout";
import { programs } from "@/lib/data/school";

const steps = ["Student", "Academic", "Contact", "Documents", "Review"];
const programNames = programs.map((program) => program.name);
const years = ["2026", "2027", "2028"];
const sources = ["ASPEJ Staff", "Friend/Family", "WhatsApp", "Facebook", "Instagram", "Google/Online Search", "School Visit", "Poster/Flyer", "Other"];
const acceptedTypes = ["image/jpeg", "image/png", "application/pdf"];
const maxFileSize = 5 * 1024 * 1024;

type Upload = { file: File; error?: string } | null;
type ApplicationData = {
  fullName: string; gender: string; dateOfBirth: string; modeOfStudy: string;
  academicYear: string; term: string; selectedProgram: string;
  studentNames: string; guardianName: string; guardianEmail: string; guardianPhone: string;
  guardianAddress: string; referralSource: string;
  sdmsOrResult: Upload; reportCard: Upload; supportive: Upload;
};

const initialData: ApplicationData = {
  fullName: "", gender: "", dateOfBirth: "", modeOfStudy: "", academicYear: "", term: "", selectedProgram: "",
  studentNames: "", guardianName: "", guardianEmail: "", guardianPhone: "", guardianAddress: "", referralSource: "",
  sdmsOrResult: null, reportCard: null, supportive: null,
};

type Update = (key: keyof ApplicationData, value: string | Upload) => void;

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ApplicationData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const [submitting] = useState(false);
  const update: Update = (key, value) => setData((current) => ({ ...current, [key]: value }));

  const validateStep = (target = step) => {
    const nextErrors: Record<string, string> = {};
    if (target === 0) {
      if (!data.fullName.trim()) nextErrors.fullName = "Full name is required.";
      if (!data.gender) nextErrors.gender = "Please select your gender.";
      if (!data.dateOfBirth || new Date(data.dateOfBirth) >= new Date()) nextErrors.dateOfBirth = "Please enter a valid date of birth.";
      if (!data.modeOfStudy) nextErrors.modeOfStudy = "Please select a mode of study.";
    }
    if (target === 1) {
      if (!data.academicYear) nextErrors.academicYear = "Please select an academic year.";
      if (!data.term) nextErrors.term = "Please select a term.";
      if (!data.selectedProgram) nextErrors.selectedProgram = "Please select a program.";
    }
    if (target === 2) {
      if (!data.studentNames.trim()) nextErrors.studentNames = "Student names are required.";
      if (!data.guardianName.trim()) nextErrors.guardianName = "Parent/Guardian name is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.guardianEmail)) nextErrors.guardianEmail = "Please enter a valid email address.";
      if (!/^[+\d][\d\s()-]{7,}$/.test(data.guardianPhone)) nextErrors.guardianPhone = "Please enter a valid phone number.";
    }
    if (target === 3) {
      if (!data.sdmsOrResult) nextErrors.sdmsOrResult = "SDMS Code or Result Slip is required.";
      if (!data.reportCard) nextErrors.reportCard = "Previous Year Report Card is required.";
      (['sdmsOrResult', 'reportCard', 'supportive'] as const).forEach((key) => {
        if (data[key]?.error) nextErrors[key] = data[key]?.error || "Invalid file.";
      });
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const chooseFile = (key: "sdmsOrResult" | "reportCard" | "supportive", event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    let error = "";
    if (!acceptedTypes.includes(file.type)) error = "Use a PDF, JPG, or PNG file.";
    if (file.size > maxFileSize) error = "Each file must be 5MB or smaller.";
    update(key, { file, error: error || undefined });
    setErrors((current) => ({ ...current, [key]: error }));
    event.target.value = "";
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (submitting || !validateStep(3)) return;
    setSubmitError("Application submission is not available yet because this project has no connected application API.");
  };

  return <InternalPage><PageFrame eyebrow="ASPEJ admissions" title="Complete your application." intro="Work through each step carefully. Your information stays here as you move between steps."><div className="application-wizard"><nav className="application-steps" aria-label="Application progress">{steps.map((label, index) => <button key={label} type="button" className={index === step ? "is-active" : index < step ? "is-complete" : ""} onClick={() => index < step && setStep(index)} aria-current={index === step ? "step" : undefined}><span>{index < step ? <CheckCircle2 size={14} /> : index + 1}</span><b>{label}</b></button>)}</nav><form className="application-form" onSubmit={submit} noValidate><div className="progress" aria-hidden="true"><div className="progress-label"><strong>Step {step + 1} of 5</strong><span>{Math.round(((step + 1) / 5) * 100)}% complete</span></div><div className="progress-track"><span style={{ width: `${((step + 1) / 5) * 100}%` }} /></div></div>{step === 0 && <StudentStep data={data} update={update} errors={errors} />}{step === 1 && <AcademicStep data={data} update={update} errors={errors} />}{step === 2 && <ContactStep data={data} update={update} errors={errors} />}{step === 3 && <DocumentsStep data={data} update={update} errors={errors} chooseFile={chooseFile} />}{step === 4 && <Review data={data} edit={setStep} />}{submitError && <p className="form-warning" role="alert">{submitError}</p>}<div className="wizard-actions">{step > 0 && <button className="button button-secondary" type="button" onClick={() => setStep((current) => current - 1)}><ArrowLeft size={15} /> Back</button>}{step < 4 ? <button className="button button-primary" type="button" onClick={() => validateStep() && setStep((current) => current + 1)}>Continue <ArrowRight size={15} /></button> : <button className="button button-primary" type="submit" disabled={submitting}>{submitting ? "Submitting your application..." : "Submit application"} <ArrowRight size={15} /></button>}</div></form></div></PageFrame></InternalPage>;
}

function StudentStep({ data, update, errors }: { data: ApplicationData; update: Update; errors: Record<string, string> }) {
  return <section className="wizard-section"><StepHeading number="01" title="Student information" description="Tell us about the student applying to ASPEJ." /><div className="form-fields form-grid-two"><Field label="Full name" value={data.fullName} onChange={(value) => update("fullName", value)} required error={errors.fullName} /><Field label="Gender" value={data.gender} onChange={(value) => update("gender", value)} options={["Male", "Female"]} required error={errors.gender} /><Field label="Date of birth" type="date" value={data.dateOfBirth} onChange={(value) => update("dateOfBirth", value)} required error={errors.dateOfBirth} /><Field label="Mode of study" value={data.modeOfStudy} onChange={(value) => update("modeOfStudy", value)} options={["Day", "Boarding"]} required error={errors.modeOfStudy} /></div></section>;
}

function AcademicStep({ data, update, errors }: { data: ApplicationData; update: Update; errors: Record<string, string> }) {
  return <section className="wizard-section"><StepHeading number="02" title="Academic selection" description="Choose the intended academic year, term, and program." /><div className="form-fields form-grid-two"><Field label="Academic year" value={data.academicYear} onChange={(value) => update("academicYear", value)} options={years} required error={errors.academicYear} /><Field label="Term" value={data.term} onChange={(value) => update("term", value)} options={["Term 1", "Term 2", "Term 3"]} required error={errors.term} /><Field label="Program / class selection" value={data.selectedProgram} onChange={(value) => update("selectedProgram", value)} options={programNames} required error={errors.selectedProgram} /></div></section>;
}

function ContactStep({ data, update, errors }: { data: ApplicationData; update: Update; errors: Record<string, string> }) {
  return <section className="wizard-section"><StepHeading number="03" title="Contact information" description="Provide contact details for the student and parent or guardian." /><div className="form-fields form-grid-two"><Field label="Student names" value={data.studentNames} onChange={(value) => update("studentNames", value)} required error={errors.studentNames} /><Field label="Parent/Guardian name" value={data.guardianName} onChange={(value) => update("guardianName", value)} required error={errors.guardianName} /><Field label="Parent/Guardian email" type="email" value={data.guardianEmail} onChange={(value) => update("guardianEmail", value)} required error={errors.guardianEmail} /><Field label="Parent/Guardian phone" value={data.guardianPhone} onChange={(value) => update("guardianPhone", value)} required error={errors.guardianPhone} /><Field label="Parent/Guardian address" value={data.guardianAddress} onChange={(value) => update("guardianAddress", value)} /><Field label="How did you hear about ASPEJ?" value={data.referralSource} onChange={(value) => update("referralSource", value)} options={sources} /></div></section>;
}

function DocumentsStep({ data, update, errors, chooseFile }: { data: ApplicationData; update: Update; errors: Record<string, string>; chooseFile: (key: "sdmsOrResult" | "reportCard" | "supportive", event: ChangeEvent<HTMLInputElement>) => void }) {
  return <section className="wizard-section"><StepHeading number="04" title="Documents" description="Upload clear documents in PDF, JPG, or PNG format. Maximum 5MB per file." /><div className="upload-list"><UploadField label="SDMS Code or Result Slip" required upload={data.sdmsOrResult} error={errors.sdmsOrResult} onChange={(event) => chooseFile("sdmsOrResult", event)} onRemove={() => update("sdmsOrResult", null)} /><UploadField label="Previous Year Report Card" required upload={data.reportCard} error={errors.reportCard} onChange={(event) => chooseFile("reportCard", event)} onRemove={() => update("reportCard", null)} /><UploadField label="Supportive Documents" upload={data.supportive} error={errors.supportive} onChange={(event) => chooseFile("supportive", event)} onRemove={() => update("supportive", null)} /></div></section>;
}

function UploadField({ label, required, upload, error, onChange, onRemove }: { label: string; required?: boolean; upload: Upload; error?: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void; onRemove: () => void }) {
  return <div className="upload-field"><div><strong>{label} {required && <b>*</b>}</strong><small>PDF, JPG or PNG Â· Maximum 5MB</small></div>{upload ? <div className="selected-file"><span>{upload.file.name} Â· {(upload.file.size / 1024 / 1024).toFixed(1)} MB</span><button type="button" onClick={onRemove} aria-label={`Remove ${label}`}><X size={15} /></button></div> : <label className="upload-button"><FileUp size={16} /> Choose file<input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={onChange} /></label>}{error && <small className="field-error" role="alert">{error}</small>}</div>;
}

function Review({ data, edit }: { data: ApplicationData; edit: (step: number) => void }) {
  const groups = [{ title: "Student information", step: 0, items: [["Full name", data.fullName], ["Gender", data.gender], ["Date of birth", data.dateOfBirth], ["Mode of study", data.modeOfStudy]] }, { title: "Academic selection", step: 1, items: [["Academic year", data.academicYear], ["Term", data.term], ["Program", data.selectedProgram]] }, { title: "Contact information", step: 2, items: [["Student names", data.studentNames], ["Parent/Guardian", data.guardianName], ["Email", data.guardianEmail], ["Phone", data.guardianPhone], ["Address", data.guardianAddress || "Not provided"]] }, { title: "Documents", step: 3, items: [["SDMS / result slip", data.sdmsOrResult?.file.name || "Not provided"], ["Report card", data.reportCard?.file.name || "Not provided"], ["Supportive documents", data.supportive?.file.name || "Not provided"]] }];
  return <section className="review-section"><StepHeading number="05" title="Review and submit" description="Please review your information carefully before submitting your application." />{groups.map((group) => <div className="review-group" key={group.title}><div className="review-group-head"><h3>{group.title}</h3><button type="button" onClick={() => edit(group.step)}><Pencil size={13} /> Edit</button></div>{group.items.map(([label, value]) => <p key={label}><span>{label}</span><strong>{value}</strong></p>)}</div>)}</section>;
}

function StepHeading({ number, title, description }: { number: string; title: string; description: string }) {
  return <div className="wizard-heading"><span>{number}</span><div><h2>{title}</h2><p>{description}</p></div></div>;
}

function Field({ label, value, onChange, type = "text", placeholder, options, required, error }: { label: string; value: string; onChange: (value: string) => void; type?: string; placeholder?: string; options?: string[]; required?: boolean; error?: string }) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return <label className="field" htmlFor={id}><span>{label} {required && <b>*</b>}</span>{options ? <select id={id} value={value} onChange={(event) => onChange(event.target.value)} aria-invalid={Boolean(error)}><option value="">Select an option</option>{options.map((option) => <option key={option}>{option}</option>)}</select> : <input id={id} type={type} value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} aria-invalid={Boolean(error)} />}{error && <small className="field-error" role="alert">{error}</small>}</label>;
}
