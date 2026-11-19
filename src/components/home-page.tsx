import Image from "next/image";
import { BookingLink } from "@/components/booking-link";
import { MeetingsEmbed } from "@/components/meetings-embed";
import { brand } from "@/config/brand";

const primary =
  "inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-80";
const secondary =
  "inline-flex items-center justify-center rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-subtle";

const problems = [
  {
    number: "01",
    title: "By the time you respond, they’ve moved on.",
    highlight: "A prospect fills in your form. Hours pass. Maybe a day.",
    body: "By the time someone follows up, they’ve already called two competitors — one of whom picked up immediately. Speed of first response is one of the highest-leverage variables in B2B sales. Most businesses don’t measure it, and don’t realise how much it’s costing them.",
  },
  {
    number: "02",
    title: "The quote that went quiet.",
    highlight: "You sent it. They didn’t reply. Nobody followed up.",
    body: "The enquiry came in, the quote went out, and then nothing. No second touch. No check-in. The rep assumed silence meant no interest and moved on. In most cases, the prospect just needed one more contact. That deal was still live — it just didn’t get a second chance.",
  },
  {
    number: "03",
    title: "Two reps. Two processes. Neither written down.",
    highlight:
      "Ask your team how a deal is supposed to be handled. You’ll get different answers.",
    body: "There’s no playbook. No agreed follow-up cadence. No scripts for the hard calls. One rep chases three times, another sends one email and waits. When a deal goes cold, nobody knows whose job it is to revive it. The result is a sales floor full of improvisation — and revenue that depends entirely on who happens to be in that day.",
  },
];

const steps = [
  {
    label: "01 · Investigation",
    title: "Prospect Simulation",
    body: "We engage your business as a real prospect — form submission, phone call, every follow-up — and document exactly what does (and doesn’t) happen at each step.",
  },
  {
    label: "02 · Data",
    title: "Website & Lead Audit",
    body: "We pull data from your website analytics, ad accounts, and lead tracking tools to establish what’s actually entering your funnel — and where it’s constrained.",
  },
  {
    label: "03 · Pipeline",
    title: "CRM & Pipeline Review",
    body: "We audit how deals are tracked, worked, and followed up — and map exactly where they’re dying and at what stage.",
  },
  {
    label: "04 · Numbers",
    title: "Revenue Metrics",
    body: "Using all the data we pull across your business, we calculate your cost per lead, close rate, sales velocity, revenue per lead, and more — and hand them to you. Often the first time you’ve seen them.",
  },
  {
    label: "05 · People",
    title: "Rep & Process Assessment",
    body: "We compare how your sales team actually handles leads versus how they should — through questionnaires, interviews, and call reviews.",
  },
  {
    label: "06 · Output",
    title: "Gap Analysis & Action Plan",
    body: "Every finding is scored and ranked. Each gap comes with an estimated rand value — what it’s costing you per year — so you know exactly where to focus first.",
  },
];

const services = [
  {
    title: "Sales funnel audits",
    body: "A structured review of how leads arrive, how fast they are answered, how they are followed up and where deals die, with each gap priced in rand.",
  },
  {
    title: "CRM and sales automation",
    body: "Setting up and fixing HubSpot, GoHighLevel and Make so follow-up, pipelines and reporting run on their own.",
  },
  {
    title: "Conversion and tracking",
    body: "Landing-page conversion work, Google Analytics 4 and Google Tag Manager tracking, and Google Ads, so you know what each lead and each sale actually costs.",
  },
];

const deliverables = [
  "Revenue Metrics Report",
  "Written Findings (10–15 pages)",
  "One-Page Scorecard",
  "Prioritised Action Plan",
  "60-Min Executive Presentation",
  "30-Day Q&A Access",
];

const credentials = [
  ["Mechatronic Engineer", "Engineering background"],
  ["Industrial Automation", "Factory systems"],
  ["B2B Sales Systems", "Since 2023"],
  ["Cape Town, SA", "Working nationally"],
];

const clients = [
  {
    src: "/images/clients/absolute-ablutions.png",
    alt: "Absolute Ablutions",
    width: 349,
    height: 80,
  },
  {
    src: "/images/clients/converge.png",
    alt: "Converge",
    width: 220,
    height: 80,
  },
  {
    src: "/images/clients/gcx.svg",
    alt: "GCX",
    width: 160,
    height: 80,
  },
  {
    src: "/images/clients/wimmy.svg",
    alt: "Wimmy",
    width: 160,
    height: 80,
  },
  {
    src: "/images/clients/zwt.svg",
    alt: "ZWT",
    width: 160,
    height: 80,
  },
];

export function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          It’s not the leads.
          <br />
          It’s what happens
          <br />
          <span className="text-muted">(or doesn’t)</span> once
          <br />
          they’re in your pipeline.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          Some months are strong. Others are inexplicably flat.
          <br />
          <strong className="font-semibold text-ink">
            Every month, deals die in the same, specific places.
          </strong>
          <br />
          Knowing what they are, and how to fix them, is the difference between
          guessing next month’s revenue and predicting it.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <BookingLink href="#book" placement="hero" className={primary}>
            Book a 20-min call →
          </BookingLink>
          <a href="#audit" className={secondary}>
            See how the audit works ↓
          </a>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            You’re losing more deals to your own process{" "}
            <em className="font-medium text-muted">than to competitors.</em>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            The leads come in. Some close. Most don’t. When you ask why, nobody
            has a clear answer — because the process was never written down, the
            data was never tracked, and follow-up was always someone else’s job.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {problems.map((problem) => (
              <article
                key={problem.number}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <p className="text-xs font-medium tracking-[0.16em] text-muted">
                  {problem.number}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {problem.title}
                </h3>
                <p className="mt-4 font-medium leading-7">{problem.highlight}</p>
                <p className="mt-3 leading-7 text-muted">{problem.body}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-3xl border-t border-line pt-10 text-center text-2xl font-medium leading-snug tracking-tight">
            “Fix the pipe before you turn the tap on harder.”
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-subtle">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Case Study
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Same leads. Fixed process.{" "}
            <em className="font-medium">
              4 weeks later, they closed{" "}
              <span className="underline decoration-1 underline-offset-4">
                R1.2M
              </span>{" "}
              in deals they would have lost.
            </em>
          </h2>
          <div className="mt-10 grid gap-6 rounded-2xl border border-line bg-surface p-6 lg:grid-cols-2 lg:p-10">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/clients/absolute-ablutions-profile.jpg"
                  alt="Absolute Ablutions"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Absolute Ablutions</p>
                  <p className="text-sm text-muted">
                    B2B Manufacturing · Cape Town, South Africa
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-3 border-t border-line pt-6 text-sm leading-7 text-muted">
                <p>
                  They were getting consistent enquiry volume from their
                  website. Every rep had their own way of handling leads —
                  nothing was tracked, nothing was written down, and nobody had
                  any idea what was actually closing. Their instinct was to push
                  for more leads. It wasn’t the problem.
                </p>
                <p>
                  The audit identified the exact failure points in their funnel
                  — response times, follow-up gaps, and a quoting process that
                  was leaking deals at every stage.
                </p>
              </div>
              <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <dt className="text-2xl font-semibold tracking-tight">4 Wks</dt>
                  <dd className="mt-1 text-sm text-muted">
                    From audit to implementation
                  </dd>
                </div>
                <div>
                  <dt className="text-2xl font-semibold tracking-tight">R1.2M</dt>
                  <dd className="mt-1 text-sm text-muted">
                    In deals closed they say they would have lost
                  </dd>
                </div>
                <div>
                  <dt className="text-2xl font-semibold tracking-tight">0</dt>
                  <dd className="mt-1 text-sm text-muted">New leads required</dd>
                </div>
              </dl>
            </div>
            <blockquote className="rounded-2xl bg-subtle p-6 text-lg leading-8 lg:p-8">
              <p>
                “Skipper & Co has changed the way we work at Absolute Ablutions
                for the better for ever. The changes were simple, yet incredibly
                effective with results in real monetary value.
              </p>
              <p className="mt-4">
                Gerhard’s energy and passion for the work, combined with stellar
                work ethic, inspires staff to approach their work with new
                enthusiasm. He teaches with respect and gentleness, ensuring buy
                in from even the most senior staff.”
              </p>
              <footer className="mt-6 text-sm text-muted">
                — Alet Byers, Sales Manager, Absolute Ablutions
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-y border-ink bg-ink text-accent-foreground">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground/70">
            Who we’ve worked with
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clients.map((client) => (
              <li key={client.alt}>
                {/* SVGs and wide wordmarks stay as img so they are not forced through the image optimizer. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.src}
                  alt={client.alt}
                  width={client.width}
                  height={client.height}
                  className="h-10 w-auto max-w-[180px] object-contain brightness-0 invert"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="services" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Services
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Skipper & Co provides B2B sales-funnel audits, CRM and
            sales-automation consulting (including HubSpot, GoHighLevel and
            Make), conversion-rate optimisation, analytics and tracking setup,
            and Google Ads management. The scope, deliverables, fees and
            timelines of each engagement are set out in the Proposal.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-muted">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="audit" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            How It Works
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            One question drives the whole audit: “Where is your business losing
            revenue it should be keeping?”
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            A structured process across six areas of your sales operation.
            Designed to produce <span className="underline underline-offset-4">evidence</span> you
            can act on. You walk away knowing exactly where you are losing
            deals, and what you need to fix to win them.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-line p-6">
                <p className="text-xs font-medium tracking-[0.14em] text-muted">
                  {step.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-subtle p-6 sm:p-8">
            <h3 className="text-sm font-semibold tracking-tight">
              What you receive at the end
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {deliverables.map((item) => (
                <li key={item} className="leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start">
          <figure>
            <Image
              src="/images/gerhard-scheepers-profile.jpg"
              alt="Gerhard Scheepers — Skipper & Co."
              width={900}
              height={900}
              className="aspect-[3/4] w-full rounded-2xl object-cover object-top"
            />
            <figcaption className="mt-3 text-center text-sm font-medium">
              Gerhard Scheepers
            </figcaption>
          </figure>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Meet the Skipper
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Every audit is run by the same person.
            </h2>
            <div className="mt-6 space-y-4 leading-7 text-muted">
              <p>
                I spent years as a mechatronic engineer designing automated
                systems for industry. Every system has the same architecture:
                inputs come in, they move through a defined process, and an
                output comes out. When the output is wrong, you don’t run the
                faulty process harder — you find the exact point where the
                process is failing and fix it.
              </p>
              <p>
                Sales funnels work the same way. Leads come in, move through a
                process, and produce revenue — more or less, consistently or
                not. The biggest difference to industry: a leaking funnel rarely
                shows up as a crisis. It shows up as months that are inexplicably
                flat, deals that went quiet, close rates that nobody can
                explain. The gaps are real. They’re just invisible without the
                data.
              </p>
              <p>
                When a factory line stops, everyone in the building knows that
                every stationary minute comes with a cost. That environment
                teaches you to trace failures precisely, measure them accurately,
                and fix them with systems that don’t break in the same way
                twice. That’s the standard I bring to every audit. I find where
                your pipeline breaks, quantify what each gap is costing you, and
                hand you a specific plan to close it.
              </p>
              <p>
                Every audit is run personally by me — no team, no handoffs, the
                same rigour every time.
              </p>
            </div>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {credentials.map(([title, detail]) => (
                <div key={title} className="rounded-xl border border-line p-4">
                  <dt className="font-semibold">{title}</dt>
                  <dd className="text-sm text-muted">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-subtle">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Our Guarantees
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Find R100,000 in revenue gaps — or pay nothing.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Most consultants ask you to trust their judgement before you’ve seen
            their work. We don’t. There are two guarantees. Both apply to every
            engagement.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-line bg-surface p-6">
              <p className="text-sm font-semibold">Revenue Guarantee</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                If we don’t find fixable gaps that cost you R100,000 in revenue
                in the last year, you pay nothing.
              </h3>
              <p className="mt-4 leading-7 text-muted">
                Every B2B business generating leads from a website at your
                revenue level has gaps. This guarantee reflects that certainty.
                If the audit doesn’t identify at least R100,000 in annual
                revenue that you’re losing to addressable problems, we refund
                you in full.
              </p>
            </article>
            <article className="rounded-2xl border border-line bg-surface p-6">
              <p className="text-sm font-semibold">Satisfaction Guarantee</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                If you’re not satisfied with our findings or report, you get a
                full refund.
              </h3>
              <p className="mt-4 leading-7 text-muted">
                If the quality, thoroughness, or usefulness of the findings and
                the presentation don’t meet your expectations, we refund you in
                full. <strong className="text-ink">No conditions. No questions asked.</strong>
              </p>
            </article>
          </div>
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center">
            <p className="text-5xl font-semibold tracking-tight">2</p>
            <div>
              <h3 className="text-lg font-semibold">Maximum two audits per month</h3>
              <p className="mt-1 leading-7 text-muted">
                Each engagement gets the full two weeks it requires. If you’re
                interested, availability is specific to the calendar month in
                which we begin.{" "}
                <BookingLink
                  href="#book"
                  placement="guarantee"
                  className="font-medium text-ink underline underline-offset-4"
                >
                  Check availability →
                </BookingLink>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="google-data" className="border-t border-line">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            How we use Google data
          </h2>
          <p className="mt-4 leading-7 text-muted">
            To audit your funnel, we pull data from your Google Analytics,
            Google Ads, Google Tag Manager and Search Console accounts. With
            your permission, the <strong className="text-ink">Skipper & Co</strong>{" "}
            app connects to those accounts through Google sign-in, so we can
            read your reports and, only when you approve it, fix tracking and
            campaigns. We only access the accounts you choose, never sell your
            data or use it for advertising, and you can revoke access at any
            time.{" "}
            <a className="text-ink underline underline-offset-4" href="/privacy-policy/">
              Read our Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>

      <section id="book" className="border-t border-line">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            The lost deals are there.
            <br />
            <em className="font-medium">Want to find out for certain?</em>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Book a 20-minute call. We’ll walk through your sales process — where
            leads come from, what happens after they arrive, and where the gaps
            are most likely to be.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-muted">
            20 MINUTES · NO OBLIGATION · 2 AUDITS / MONTH MAX
          </p>
          <div className="mt-8">
            <MeetingsEmbed />
          </div>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                Email
              </dt>
              <dd className="mt-1">
                <a className="underline underline-offset-4" href={`mailto:${brand.email}`}>
                  {brand.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                Web
              </dt>
              <dd className="mt-1">{brand.domain}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                Based in
              </dt>
              <dd className="mt-1">{brand.location}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
