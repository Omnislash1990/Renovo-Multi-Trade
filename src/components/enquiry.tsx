"use client";

import { Check, Copy, Mail, Phone, Send } from "lucide-react";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { nextSteps, sectors, services, site, timings } from "@/lib/site";

type Enquiry = {
  name: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  service: string;
  location: string;
  timing: string;
  message: string;
  website: string;
};

type FieldName = Exclude<keyof Enquiry, "website">;

const emptyEnquiry: Enquiry = {
  name: "",
  company: "",
  email: "",
  phone: "",
  sector: "",
  service: "",
  location: "",
  timing: "",
  message: "",
  website: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Enquiry): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};

  if (values.name.trim().length < 2) {
    errors.name = "Enter the name of the person we should reply to.";
  }
  if (values.company.trim().length < 2) {
    errors.company = "Enter the company appointing the work.";
  }
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a work email we can reply to.";
  }
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 8) {
    errors.phone = "Enter a phone number we can reach you on.";
  }
  if (!values.sector) {
    errors.sector = "Choose the sector closest to this site.";
  }
  if (!values.service) {
    errors.service = "Choose the lead trade, or multi-trade.";
  }
  if (values.location.trim().length < 2) {
    errors.location = "Enter the town or postcode of the site.";
  }
  if (!values.timing) {
    errors.timing = "Choose when access could start.";
  }
  if (values.message.trim().length < 20) {
    errors.message = "Add a short outline — twenty characters is enough to be useful.";
  }

  return errors;
}

function enquiryBody(values: Enquiry) {
  return [
    `Name: ${values.name.trim()}`,
    `Company: ${values.company.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Sector: ${values.sector}`,
    `Service: ${values.service}`,
    `Location: ${values.location.trim()}`,
    `Timing: ${values.timing}`,
    "",
    values.message.trim(),
  ].join("\n");
}

function mailtoHref(values: Enquiry) {
  const subject = encodeURIComponent(`Survey request — ${values.company.trim()}`);
  const body = encodeURIComponent(enquiryBody(values));
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

const fieldClass =
  "h-12 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-ink outline-none transition placeholder:text-mist/70 focus:border-copper-deep";

export function Enquiry() {
  const [values, setValues] = useState<Enquiry>(emptyEnquiry);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const formId = useId();
  const errorSummaryId = `${formId}-errors`;
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ready) {
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    statusRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }, [ready]);

  function update<K extends keyof Enquiry>(key: K, value: Enquiry[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setReady(false);
    setCopied(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (values.website.trim()) {
      setReady(true);
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      const node = document.getElementById(`${formId}-${firstInvalid}`);
      node?.focus();
      return;
    }

    setReady(true);
    const link = document.createElement("a");
    link.href = mailtoHref(values);
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(enquiryBody(values));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="enquire" className="scroll-mt-24 bg-ink text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-brass uppercase">
            07 / Survey
          </p>
          <h2 className="mt-3 text-balance font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
            Tell us about the site.
          </h2>
          <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-cream/75">
            A few lines on the building, the trades and the timing. If you already have
            drawings, say so — we will ask for them by return. {site.response}
          </p>
          <ol className="mt-8 space-y-4">
            {nextSteps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-cream/85">
                <span className="font-serif text-brass">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-8 space-y-3 text-sm">
            <a href={site.phoneHref} className="flex items-center gap-2 font-medium text-cream hover:text-brass">
              <Phone aria-hidden="true" className="size-4 text-brass" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 font-medium break-all text-cream hover:text-brass"
            >
              <Mail aria-hidden="true" className="size-4 shrink-0 text-brass" />
              {site.email}
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-paper p-5 text-ink sm:p-8">
          {ready ? (
            <div ref={statusRef} role="status" aria-live="polite" className="scroll-mt-28">
              <span className="flex size-11 items-center justify-center rounded-full bg-moss text-white">
                <Check aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-4 font-serif text-3xl tracking-tight">Your survey request is ready to send.</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Send it to {site.email}. If a draft did not open, use the button or copy
                the summary. Nothing is filed with Renovo until that email is sent.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mailtoHref(values)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-copper-deep px-5 text-sm font-semibold text-white hover:bg-copper-ink"
                >
                  <Send aria-hidden="true" className="size-4" />
                  Open the email draft
                </a>
                <button
                  type="button"
                  onClick={copySummary}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-semibold text-ink"
                >
                  <Copy aria-hidden="true" className="size-4" />
                  {copied ? "Copied" : "Copy summary"}
                </button>
              </div>
              <pre className="mt-6 overflow-x-auto rounded-2xl bg-white p-4 text-left font-sans text-xs leading-relaxed whitespace-pre-wrap text-ink-soft">
                {enquiryBody(values)}
              </pre>
              <button
                type="button"
                className="mt-4 text-sm font-medium text-copper-deep underline-offset-4 hover:underline"
                onClick={() => setReady(false)}
              >
                Edit the details
              </button>
            </div>
          ) : (
            <form id={formId} className="relative" onSubmit={onSubmit} noValidate>
              <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor={`${formId}-website`}>Website</label>
                <input
                  id={`${formId}-website`}
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={(event) => update("website", event.target.value)}
                />
              </div>

              {Object.keys(errors).length > 0 ? (
                <p id={errorSummaryId} role="alert" className="mb-4 rounded-xl bg-copper-deep/10 px-3 py-2 text-sm text-copper-deep">
                  Check the highlighted fields. A survey request needs a real way to reply.
                </p>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id={`${formId}-name`}
                  label="Name"
                  autoComplete="name"
                  value={values.name}
                  error={errors.name}
                  onChange={(value) => update("name", value)}
                />
                <Field
                  id={`${formId}-company`}
                  label="Company"
                  autoComplete="organization"
                  value={values.company}
                  error={errors.company}
                  onChange={(value) => update("company", value)}
                />
                <Field
                  id={`${formId}-email`}
                  label="Work email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  error={errors.email}
                  onChange={(value) => update("email", value)}
                />
                <Field
                  id={`${formId}-phone`}
                  label="Phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  error={errors.phone}
                  onChange={(value) => update("phone", value)}
                />
                <SelectField
                  id={`${formId}-sector`}
                  label="Sector"
                  value={values.sector}
                  error={errors.sector}
                  placeholder="Select a sector"
                  options={sectors.map((sector) => sector.title)}
                  onChange={(value) => update("sector", value)}
                />
                <SelectField
                  id={`${formId}-service`}
                  label="Lead service"
                  value={values.service}
                  error={errors.service}
                  placeholder="Select a service"
                  options={["Multi-trade package", ...services.map((service) => service.title)]}
                  onChange={(value) => update("service", value)}
                />
                <Field
                  id={`${formId}-location`}
                  label="Site location"
                  autoComplete="address-level2"
                  value={values.location}
                  error={errors.location}
                  onChange={(value) => update("location", value)}
                />
                <SelectField
                  id={`${formId}-timing`}
                  label="Timing"
                  value={values.timing}
                  error={errors.timing}
                  placeholder="When could we attend?"
                  options={[...timings]}
                  onChange={(value) => update("timing", value)}
                />
              </div>

              <div className="mt-4">
                <label htmlFor={`${formId}-message`} className="text-sm font-medium text-ink">
                  Outline of the work
                  <span aria-hidden="true" className="text-copper"> *</span>
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  required
                  rows={5}
                  value={values.message}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                  onChange={(event) => update("message", event.target.value)}
                  placeholder="Building type, trades involved, access constraints, and whether drawings exist."
                  className={`${fieldClass} mt-1.5 h-auto py-3 ${errors.message ? "border-copper-deep" : ""}`}
                />
                {errors.message ? (
                  <p id={`${formId}-message-error`} className="mt-1.5 text-sm text-copper-deep">
                    {errors.message}
                  </p>
                ) : (
                  <p className="mt-1.5 text-xs text-mist">
                    Drawings can follow by email. Access and what is in scope is enough to start.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-copper-deep text-sm font-semibold text-white transition hover:bg-copper-ink sm:w-auto sm:px-6"
              >
                Prepare survey request
                <Send aria-hidden="true" className="size-4" />
              </button>
              <p className="mt-3 text-xs leading-relaxed text-mist">
                This opens an email draft to the estimating desk. It does not store your
                details on this website.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
};

function Field({ id, label, value, error, onChange, type = "text", autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        <span aria-hidden="true" className="text-copper"> *</span>
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={`${fieldClass} mt-1.5 ${error ? "border-copper-deep" : ""}`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-copper-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  placeholder: string;
  options: string[];
  onChange: (value: string) => void;
};

function SelectField({ id, label, value, error, placeholder, options, onChange }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        <span aria-hidden="true" className="text-copper"> *</span>
      </label>
      <select
        id={id}
        name={id}
        required
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={`${fieldClass} mt-1.5 ${error ? "border-copper-deep" : ""} ${value ? "text-ink" : "text-mist"}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-copper-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
