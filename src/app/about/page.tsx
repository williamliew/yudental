import { PageBanner } from "@/components/layout/PageBanner";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Our story",
  description:
    "How Yu Dental Laboratory began as a Wellington family workshop and grew into a combined denture clinic and dental lab.",
  path: "/about/",
});

const TIMELINE = [
  {
    title: "The beginning of a dream",
    era: "1998",
    copy: "In a small family home, Yu Dental Laboratory was founded with a vision to provide quality dental services. Driven by passion, the family worked tirelessly to turn their dream into reality.",
  },
  {
    title: "Officially a family endeavour",
    era: "2000",
    copy: "The laboratory was officially registered as a Limited Liability Company, marking a commitment to serve their community and support local families.",
  },
  {
    title: "The home workshop years",
    era: "2000–2006",
    copy: "Operating from their garage, the family spent nearly a decade perfecting their craft. Those years were filled with hard work, laughter, and deepening family bonds.",
  },
  {
    title: "A foundation in the basement",
    era: "2006–2021",
    copy: "As demand grew, they moved their operations to the basement of a new home. This shift represented their resilience, allowing them to serve their community even better.",
  },
  {
    title: "A new chapter unfolds",
    era: "2021",
    copy: "The family's dedication led to a new facility that combined a denture clinic and lab, symbolising their growth and commitment to quality service.",
  },
  {
    title: "Clinic and lab, Te Aro",
    era: "Today",
    copy: "We welcome patients for denture care at 12 College Street and continue to serve referring dentists nationwide. Same family, same bench — now with a purpose-built space for consultations and manufacturing.",
  },
] as const;

const PEOPLE = [
  {
    name: "Steven Yu",
    role: "Director, owner operator",
    ariaLabel: "Portrait placeholder for Steven Yu",
    copy: "Steven Yu, Director. Founded the laboratory in 2000 after decades at the bench in New Zealand. Diploma in Dental Technology (C.I.T Wellington, 1999). Still involved in case planning and quality on every appliance we make.",
  },
  {
    name: "Leanne Yu",
    role: "Dental manufacturer, co-ordinator, co-founder",
    ariaLabel: "Portrait placeholder for Leanne Yu",
    copy: "Leanne Yu, Co-owner and co-ordinator. She joined the business when Steven started the laboratory, learned dental manufacturing on the bench, and now coordinates cases, appointments, and day-to-day clinic operations.",
  },
  {
    name: "Allan Yu",
    role: "Dental prosthetist, technician, second in charge",
    ariaLabel: "Portrait placeholder for Allan Yu",
    copy: "Allan Yu, Dental Prosthetist and Technician. BCA (Victoria University), diplomas from RMIT Melbourne, and MSc Dental Technology with Distinction from Cardiff Metropolitan University. He sees patients for assessments, impressions, and fittings, and leads technical work on complex cases.",
  },
] as const;

const ARCHIVE_IMAGES = [
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=400&fit=crop",
] as const;

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="Our story"
        lead="From a home workshop in Wellington to a combined denture clinic and laboratory in Te Aro."
      />
      <div
        className="mx-auto max-w-[var(--max-width-content)] px-4 py-8 md:px-6"
        role="img"
        aria-label="Family or laboratory portrait placeholder: replace with your chosen photograph"
      >
        <div
          className="h-64 rounded-lg bg-cover bg-center md:h-80"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=600&fit=crop)",
          }}
        />
      </div>
      <div className="mx-auto max-w-[var(--max-width-content)] space-y-4 px-4 pb-12 text-grey-mid leading-relaxed md:px-6">
        <p>
          Our journey into dental technology began with formal training and many years of hands-on
          experience. We learned how materials behave, how dental appliances should feel in the
          mouth, and the importance of working honestly with dentists who trusted us with their
          patients. This foundational knowledge continues to guide our planning, fabrication, and
          delivery processes today.
        </p>
        <p>
          In 2000, our family opened Yu Dental Laboratory from the basement of our home in
          Wellington&apos;s eastern suburbs. It was a modest workshop in every sense; work moved
          between the bench and the courier, and our referrers soon discovered they could connect
          with someone who genuinely understood the case. From that humble beginning, we grew into
          the trusted Wellington site that patients and practices rely on today, all while
          maintaining our commitment to crafting dental appliances on-site and communicating clearly
          about timelines and materials.
        </p>
        <p>
          Throughout the years, we have remained focused on the art of dental technology:
          aesthetics, function, and phonetics. We use products and materials from reputable
          manufacturers and ensure our documentation aligns with New Zealand and European standards.
          We continue to take on a wide range of complexities, prioritising our relationships with
          clients and patients who seek confidence in both the appliances and the people behind
          them.
        </p>
        <p>
          This story serves as our overview. Below, you&apos;ll find a simple timeline from our past
          to the present. We hope this initiative adds warmth for both patients and dentists who
          appreciate collaborating with real people, not just case numbers.
        </p>
      </div>
      <section
        className="bg-surface-muted px-4 py-12 md:px-6 md:py-16"
        aria-labelledby="journey-heading"
      >
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <h2
            id="journey-heading"
            className="font-display text-2xl font-bold text-navy md:text-3xl"
          >
            Our journey
          </h2>
          <p className="mt-2 text-grey-mid">Key dates in our history</p>
          <ol className="mt-8 space-y-8">
            {TIMELINE.map((item) => (
              <li key={item.title} className="border-l-2 border-teal pl-6">
                <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-teal">{item.era}</p>
                <p className="mt-2 text-grey-mid">{item.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="people-heading">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <h2 id="people-heading" className="font-display text-2xl font-bold text-navy md:text-3xl">
            The family behind the bench
          </h2>
          <p className="mt-3 text-grey-mid">
            A few heartfelt lines each beats a long CV on this page. Formal qualifications sit on{" "}
            <Link href="/team/">our team</Link> page.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {PEOPLE.map((person) => (
              <article
                key={person.name}
                className="rounded-lg border border-surface-muted bg-white p-6 shadow-sm"
              >
                <div
                  className="mb-4 h-40 rounded bg-surface-muted bg-cover bg-center"
                  role="img"
                  aria-label={person.ariaLabel}
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop)",
                  }}
                />
                <h3 className="font-display text-lg font-bold text-navy">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold text-teal">{person.role}</p>
                <p className="mt-3 text-sm text-grey-mid leading-relaxed">{person.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="bg-surface-muted px-4 py-12 md:px-6 md:py-16"
        aria-label="Historical laboratory photographs"
      >
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
            From the family archive
          </h2>
          <p className="mt-3 max-w-3xl text-grey-mid">
            Photographs from our early workshop years — garage, basement bench, and the move to our
            current clinic.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
            {ARCHIVE_IMAGES.map((src, index) => (
              <div
                key={`archive-${index}`}
                className="aspect-square rounded-lg bg-cover bg-center grayscale"
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
