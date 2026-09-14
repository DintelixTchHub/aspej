"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileUp,
  Pencil,
  ShieldCheck,
} from "lucide-react";
import { InternalPage, PageFrame } from "@/components/layout/public-layout";

const steps = [
  "Applicant information",
  "Choose level",
  "Academic information",
  "Choose program",
  "Parent / guardian",
  "Other documents",
  "Review application",
  "Application fee",
  "Submit application",
];
const programs = [
  "Accounting",
  "Tourism",
  "Computer System Technology",
  "Networking",
  "Masonry",
];
const relatedFields = [
  "Accounting",
  "Tourism",
  "Computer System Technology",
  "Networking",
  "Masonry",
];

type ApplicationData = {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  nationalId: string;
  phone: string;
  email: string;
  address: string;
  passportPhoto: string;
  level: "Level 3" | "Level 4" | "Level 5" | "";
  previousSchool: string;
  completionYear: string;
  previousProgram: string;
  academicDocument: string;
  selectedProgram: string;
  guardianName: string;
  relationship: string;
  guardianPhone: string;
  guardianEmail: string;
  guardianAddress: string;
  emergencyContact: string;
  nationalIdDocument: string;
  birthCertificate: string;
  additionalDocument: string;
  paymentMethod: string;
  paymentReference: string;
  paymentProof: string;
};

const initialData: ApplicationData = {
  fullName: "",
  dateOfBirth: "",
  gender: "",
  nationality: "",
  nationalId: "",
  phone: "",
  email: "",
  address: "",
  passportPhoto: "",
  level: "",
  previousSchool: "",
  completionYear: "",
  previousProgram: "",
  academicDocument: "",
  selectedProgram: "",
  guardianName: "",
  relationship: "",
  guardianPhone: "",
  guardianEmail: "",
  guardianAddress: "",
  emergencyContact: "",
  nationalIdDocument: "",
  birthCertificate: "",
  additionalDocument: "",
  paymentMethod: "",
  paymentReference: "",
  paymentProof: "",
};

function FileField({
  label,
  value,
  onChange,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.files?.[0]?.name ?? "");
  return (
    <label className="field file-field">
      <span>
        {label} {required && <b>*</b>}
      </span>
      <input
        type="file"
        required={required && !value}
        onChange={handleChange}
      />
      <small>{value || "PDF, JPG or PNG accepted"}</small>
    </label>
  );
}

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ApplicationData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");
  const update = (key: keyof ApplicationData) => (value: string) =>
    setData((current) => ({ ...current, [key]: value }));
  const updateNow = (key: keyof ApplicationData, value: string) =>
    update(key)(value);
  const updateFile = (key: keyof ApplicationData) => (value: string) =>
    update(key)(value);
  const documentLabel =
    data.level === "Level 3"
      ? "S3 Result Slip"
      : data.level === "Level 4"
        ? "Level 3 Completion Report Card"
        : "Level 4 Completion Report Card";
  const levelDescription =
    data.level === "Level 3"
      ? "S3 completion details are required."
      : data.level
        ? `${data.level === "Level 4" ? "Level 3" : "Level 4"} completion details are required.`
        : "Choose a level to reveal the correct academic requirement.";
  const relationWarning =
    data.level !== "Level 3" &&
    data.previousProgram &&
    data.selectedProgram &&
    data.previousProgram !== data.selectedProgram;
  const progress = ((step + 1) / steps.length) * 100;
  const canContinue = useMemo(() => {
    if (step === 0)
      return Boolean(
        data.fullName &&
        data.dateOfBirth &&
        data.gender &&
        data.nationality &&
        data.nationalId &&
        data.phone &&
        data.email &&
        data.address &&
        data.passportPhoto,
      );
    if (step === 1) return Boolean(data.level);
    if (step === 2)
      return Boolean(
        data.previousSchool && data.completionYear && data.academicDocument,
      );
    if (step === 3) return Boolean(data.selectedProgram) && !relationWarning;
    if (step === 4)
      return Boolean(
        data.guardianName &&
        data.relationship &&
        data.guardianPhone &&
        data.guardianAddress &&
        data.emergencyContact,
      );
    if (step === 5)
      return Boolean(
        data.nationalIdDocument &&
        data.birthCertificate &&
        data.additionalDocument,
      );
    if (step === 7) return Boolean(data.paymentMethod && data.paymentReference);
    return true;
  }, [data, relationWarning, step]);
  const next = () => {
    if (canContinue)
      setStep((current) => Math.min(current + 1, steps.length - 1));
  };
  const previous = () => setStep((current) => Math.max(current - 1, 0));
  const submit = (event: FormEvent) => {
    event.preventDefault();
    setReference(
      `ASPEJ-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`,
    );
    setSubmitted(true);
  };

  if (submitted)
    return (
      <InternalPage>
        <PageFrame
          eyebrow="Application confirmation"
          title="Application submitted successfully."
          intro="Keep your application number safe. You can use it to track your application status."
        >
          <div className="application-confirmation">
            <CheckCircle2 size={42} />
            <span className="eyebrow">Application number</span>
            <strong>{reference}</strong>
            <div className="confirmation-summary">
              <p>
                <span>Applicant</span>
                <b>{data.fullName}</b>
              </p>
              <p>
                <span>Applied level</span>
                <b>{data.level}</b>
              </p>
              <p>
                <span>Selected program</span>
                <b>{data.selectedProgram}</b>
              </p>
              <p>
                <span>Submitted</span>
                <b>{new Date().toLocaleDateString("en-GB")}</b>
              </p>
              <p>
                <span>Status</span>
                <b>Pending review</b>
              </p>
            </div>
            <p className="confirmation-note">
              ASPEJ will review your information and contact you through the
              details provided.
            </p>
          </div>
        </PageFrame>
      </InternalPage>
    );

  return (
    <InternalPage>
      <PageFrame
        eyebrow="ASPEJ admissions"
        title="Build your application, one step at a time."
        intro="Complete the application carefully. Required documents change automatically based on the level you choose."
      >
        <div className="application-wizard">
          <aside className="application-steps">
            <div className="wizard-caption">
              <ShieldCheck size={16} />
              <span>Secure application</span>
            </div>
            {steps.map((label, index) => (
              <button
                type="button"
                className={
                  index === step
                    ? "is-active"
                    : index < step
                      ? "is-complete"
                      : ""
                }
                onClick={() => index <= step && setStep(index)}
                key={label}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {label}
              </button>
            ))}
          </aside>
          <form className="application-form" onSubmit={submit}>
            <div className="progress">
              <div className="progress-label">
                <strong>
                  Step {step + 1} of {steps.length}
                </strong>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="progress-track">
                <span style={{ width: `${progress}%` }} />
              </div>
            </div>
            {step === 0 && (
              <section className="wizard-section">
                <StepHeading
                  number="01"
                  title="Applicant information"
                  description="Tell us who is applying to ASPEJ."
                />
                <div className="form-fields form-grid-two">
                  <Field
                    label="Full name"
                    value={data.fullName}
                    onChange={update("fullName")}
                    required
                  />
                  <Field
                    label="Date of birth"
                    type="date"
                    value={data.dateOfBirth}
                    onChange={update("dateOfBirth")}
                    required
                  />
                  <Field
                    label="Gender"
                    value={data.gender}
                    onChange={update("gender")}
                    options={["Female", "Male", "Prefer not to say"]}
                    required
                  />
                  <Field
                    label="Nationality"
                    value={data.nationality}
                    onChange={update("nationality")}
                    placeholder="e.g. Rwandan"
                    required
                  />
                  <Field
                    label="National ID number"
                    value={data.nationalId}
                    onChange={update("nationalId")}
                    required
                  />
                  <Field
                    label="Phone number"
                    value={data.phone}
                    onChange={update("phone")}
                    required
                  />
                  <Field
                    label="Email address"
                    type="email"
                    value={data.email}
                    onChange={update("email")}
                    required
                  />
                  <Field
                    label="Address"
                    value={data.address}
                    onChange={update("address")}
                    required
                  />
                  <FileField
                    label="Passport photo"
                    value={data.passportPhoto}
                    onChange={updateFile("passportPhoto")}
                    required
                  />
                </div>
              </section>
            )}
            {step === 1 && (
              <section className="wizard-section">
                <StepHeading
                  number="02"
                  title="Choose your application level"
                  description="Your selection determines the academic document required in the next step."
                />
                <div className="level-options">
                  {(["Level 3", "Level 4", "Level 5"] as const).map((level) => (
                    <button
                      type="button"
                      className={
                        data.level === level
                          ? "level-option is-selected"
                          : "level-option"
                      }
                      onClick={() => {
                        updateNow("level", level);
                        updateNow("academicDocument", "");
                        updateNow("previousProgram", "");
                      }}
                      key={level}
                    >
                      <strong>{level}</strong>
                      <span>
                        {level === "Level 3"
                          ? "Entry through S3 completion"
                          : `Progression from ${level === "Level 4" ? "Level 3" : "Level 4"}`}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="level-callout">
                  <strong>Required next document</strong>
                  <span>
                    {data.level ? documentLabel : "Select a level first"}
                  </span>
                  <p>{levelDescription}</p>
                </div>
              </section>
            )}
            {step === 2 && (
              <section className="wizard-section">
                <StepHeading
                  number="03"
                  title="Academic information"
                  description={levelDescription}
                />
                <div className="form-fields form-grid-two">
                  <Field
                    label={
                      data.level === "Level 3"
                        ? "Previous school"
                        : "Previous TVET school"
                    }
                    value={data.previousSchool}
                    onChange={update("previousSchool")}
                    required
                  />
                  <Field
                    label={
                      data.level === "Level 3"
                        ? "S3 completion year"
                        : `${data.level === "Level 4" ? "Level 3" : "Level 4"} completion year`
                    }
                    value={data.completionYear}
                    onChange={update("completionYear")}
                    placeholder="e.g. 2025"
                    required
                  />
                  {data.level !== "Level 3" && (
                    <Field
                      label="Previous TVET program / trade"
                      value={data.previousProgram}
                      onChange={update("previousProgram")}
                      options={relatedFields}
                      required
                    />
                  )}
                  <FileField
                    label={`Upload ${documentLabel}`}
                    value={data.academicDocument}
                    onChange={updateFile("academicDocument")}
                    required
                  />
                  {data.level === "Level 3" && (
                    <Field
                      label="S3 candidate / index number"
                      value={data.previousProgram}
                      onChange={update("previousProgram")}
                      required
                    />
                  )}
                </div>
              </section>
            )}
            {step === 3 && (
              <section className="wizard-section">
                <StepHeading
                  number="04"
                  title="Choose your program"
                  description={`Programs available for ${data.level || "your selected level"}.`}
                />
                <div className="program-options">
                  {programs.map((program) => (
                    <button
                      type="button"
                      className={
                        data.selectedProgram === program
                          ? "program-option is-selected"
                          : "program-option"
                      }
                      onClick={() => updateNow("selectedProgram", program)}
                      key={program}
                    >
                      <span>{program}</span>
                      <ArrowRight size={16} />
                    </button>
                  ))}
                </div>
                {relationWarning && (
                  <p className="form-warning">
                    For {data.level}, your selected program should be related to
                    your previous TVET field ({data.previousProgram}). Choose a
                    related program to continue.
                  </p>
                )}
              </section>
            )}
            {step === 4 && (
              <section className="wizard-section">
                <StepHeading
                  number="05"
                  title="Parent / guardian information"
                  description="Add someone ASPEJ can contact when needed."
                />
                <div className="form-fields form-grid-two">
                  <Field
                    label="Full name"
                    value={data.guardianName}
                    onChange={update("guardianName")}
                    required
                  />
                  <Field
                    label="Relationship"
                    value={data.relationship}
                    onChange={update("relationship")}
                    placeholder="e.g. Parent, guardian"
                    required
                  />
                  <Field
                    label="Phone number"
                    value={data.guardianPhone}
                    onChange={update("guardianPhone")}
                    required
                  />
                  <Field
                    label="Email address"
                    type="email"
                    value={data.guardianEmail}
                    onChange={update("guardianEmail")}
                  />
                  <Field
                    label="Address"
                    value={data.guardianAddress}
                    onChange={update("guardianAddress")}
                    required
                  />
                  <Field
                    label="Emergency contact"
                    value={data.emergencyContact}
                    onChange={update("emergencyContact")}
                    required
                  />
                </div>
              </section>
            )}
            {step === 5 && (
              <section className="wizard-section">
                <StepHeading
                  number="06"
                  title="Other required documents"
                  description="Upload the supporting documents required for your application."
                />
                <div className="form-fields">
                  <FileField
                    label="National ID / identification document"
                    value={data.nationalIdDocument}
                    onChange={updateFile("nationalIdDocument")}
                    required
                  />
                  <FileField
                    label="Birth certificate"
                    value={data.birthCertificate}
                    onChange={updateFile("birthCertificate")}
                    required
                  />
                  <FileField
                    label="Any additional document required by ASPEJ"
                    value={data.additionalDocument}
                    onChange={updateFile("additionalDocument")}
                    required
                  />
                </div>
              </section>
            )}
            {step === 6 && (
              <Review data={data} edit={(target) => setStep(target)} />
            )}
            {step === 7 && (
              <section className="wizard-section">
                <StepHeading
                  number="08"
                  title="Application fee / payment"
                  description="Record the payment details for your application."
                />
                <div className="fee-banner">
                  <strong>Application fee</strong>
                  <span>
                    Official fee amount will be confirmed by ASPEJ admissions.
                  </span>
                </div>
                <div className="form-fields form-grid-two">
                  <Field
                    label="Payment method"
                    value={data.paymentMethod}
                    onChange={update("paymentMethod")}
                    options={["Mobile money", "Bank transfer", "Pay at school"]}
                    required
                  />
                  <Field
                    label="Payment reference"
                    value={data.paymentReference}
                    onChange={update("paymentReference")}
                    required
                  />
                  <FileField
                    label="Payment proof, if required"
                    value={data.paymentProof}
                    onChange={updateFile("paymentProof")}
                  />
                </div>
              </section>
            )}
            {step === 8 && (
              <section className="wizard-section final-submit">
                <StepHeading
                  number="09"
                  title="Submit application"
                  description="Review your application one final time before sending it to ASPEJ."
                />
                <CheckCircle2 size={38} />
                <h3>
                  Please confirm that all information provided is correct.
                </h3>
                <p>You can go back to edit any section before submitting.</p>
                <button className="button button-primary" type="submit">
                  Submit application <ArrowRight size={16} />
                </button>
              </section>
            )}
            <div className="wizard-actions">
              {step > 0 && (
                <button
                  className="button button-secondary"
                  type="button"
                  onClick={previous}
                >
                  <ArrowLeft size={15} /> Back
                </button>
              )}
              {step < 8 && (
                <button
                  className="button button-primary"
                  type="button"
                  onClick={next}
                  disabled={!canContinue}
                >
                  Continue <ArrowRight size={15} />
                </button>
              )}
            </div>
          </form>
        </div>
      </PageFrame>
    </InternalPage>
  );
}

function StepHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="wizard-heading">
      <span>{number}</span>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  options,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}) {
  return (
    <label className="field">
      <span>
        {label} {required && <b>*</b>}
      </span>
      {options ? (
        <select
          value={value}
          required={required}
          onChange={(event) => onChange(event.target.value)}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </label>
  );
}
function Review({
  data,
  edit,
}: {
  data: ApplicationData;
  edit: (step: number) => void;
}) {
  const groups = [
    {
      title: "Personal information",
      step: 0,
      items: [
        ["Name", data.fullName],
        ["Date of birth", data.dateOfBirth],
        ["Gender", data.gender],
        ["Nationality", data.nationality],
        ["Phone", data.phone],
        ["Email", data.email],
        ["Passport photo", data.passportPhoto],
      ],
    },
    {
      title: "Education and program",
      step: 1,
      items: [
        ["Level", data.level],
        ["Previous school", data.previousSchool],
        ["Completion year", data.completionYear],
        ["Academic document", data.academicDocument],
        ["Program", data.selectedProgram],
      ],
    },
    {
      title: "Parent / guardian",
      step: 4,
      items: [
        ["Name", data.guardianName],
        ["Relationship", data.relationship],
        ["Phone", data.guardianPhone],
        ["Emergency contact", data.emergencyContact],
      ],
    },
    {
      title: "Other documents",
      step: 5,
      items: [
        ["National ID", data.nationalIdDocument],
        ["Birth certificate", data.birthCertificate],
        ["Additional document", data.additionalDocument],
      ],
    },
  ];
  return (
    <section className="review-section">
      <StepHeading
        number="07"
        title="Review application"
        description="Check every section. Select Edit to change information before continuing."
      />
      {groups.map((group) => (
        <div className="review-group" key={group.title}>
          <div className="review-group-head">
            <h3>{group.title}</h3>
            <button type="button" onClick={() => edit(group.step)}>
              <Pencil size={13} /> Edit
            </button>
          </div>
          {group.items.map(([label, value]) => (
            <p key={label}>
              <span>{label}</span>
              <strong>{value || "Not provided"}</strong>
            </p>
          ))}
        </div>
      ))}
    </section>
  );
}
