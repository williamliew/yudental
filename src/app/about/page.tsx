import { FamilyArchiveGallery } from "@/components/about/FamilyArchiveGallery";
import { PageBanner } from "@/components/layout/PageBanner";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Our story",
  description:
    "How Yu Dental Laboratory began as a Wellington family workshop and grew into a combined denture clinic and dental lab.",
  path: "/about/",
});

const TIMELINE = [
  {
    title: "Where It All Began",
    era: "1998",
    copy:
      "The idea for Yu Dental began at our family home in Wellington, with a vision of building an independent dental laboratory focused on quality craftsmanship and personal service.",
  },
  {
    title: "Officially a Family Endeavour",
    era: "2000",
    copy: "The laboratory was officially registered as a Limited Liability Company, marking a commitment to serve their community and support local families.",
  },
  {
    title: "The Home Workshop Years",
    era: "2000–2006",
    copy: "Operating from their garage, the family spent nearly a decade perfecting their craft. Those years were filled with hard work, laughter, and deepening family bonds.",
  },
  {
    title: "A Foundation in the Basement",
    era: "2006–2021",
    copy: "As demand grew, they moved their operations to the basement of a new home. This shift represented their resilience, allowing them to serve their community even better.",
  },
  {
    title: "A New Chapter Unfolds",
    era: "2021",
    copy: "The family's dedication led to a new facility that combined a denture clinic and lab, symbolising their growth and commitment to quality service.",
  },
  {
    title: "Clinic and Lab, Te Aro",
    era: "Today",
    copy: "We welcome patients for denture care at 12 College Street and continue to serve referring dentists nationwide. Same family, same bench — now with a purpose-built space for consultations and manufacturing.",
  },
] as const;

const PEOPLE = [
  {
    name: "Steven Yu",
    role: "Director",
    ariaLabel: "Portrait placeholder for Steven Yu",
    copy: "Steven Yu, Director, founded the laboratory in 2000 after decades of experience in New Zealand. He holds a Diploma in Dental Technology (C.I.T Wellington, 1999) and is actively involved in case planning and quality assurance for all appliances produced.",
  },
  {
    name: "Leanne Yu",
    role: "Co-owner and coordinator",
    ariaLabel: "Portrait placeholder for Leanne Yu",
    copy: "Leanne Yu is the Co-owner and Coordinator. She started with Steven when the lab opened, learned how to make dental products, and now handles case coordination and daily clinic operations.",
  },
  {
    name: "Allan Yu",
    role: "Dental Prosthetist & Dental Technologist",
    ariaLabel: "Portrait placeholder for Allan Yu",
    copy:
      "Allan joined the family business after training in dental technology and dental prosthetics in Australia and completing his Master's in Dental Technology in the UK. He provides clinical denture care alongside complex technical and laboratory work, bringing the clinical and laboratory sides of Yu Dental together.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="Our Story"
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
          Yu Dental began as a small family-run dental laboratory in Wellington in 2000. What
          started from our home has grown into the combined denture clinic and dental laboratory we
          operate today in Te Aro.
        </p>
        <p>
          Although our surroundings have changed, the way we work has not. We remain family-run,
          our dental appliances are made locally in our own laboratory, and we continue to value
          personal relationships with the patients and dentists who place their trust in us.
        </p>
        <p>
          Today, two generations of the Yu family work together at 12 College Street, combining
          decades of dental laboratory experience with modern clinical and digital techniques.
        </p>
        <p>
          Through every stage of our growth, one thing has remained the same: we&apos;re a family
          business that believes good dental work starts with craftsmanship, communication and care.
        </p>
      </div>
      <section
        className="bg-surface-muted px-4 py-12 md:px-6 md:py-16"
        aria-labelledby="journey-heading"
      >
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <h2
            id="journey-heading"
            className="text-center font-sans text-2xl font-bold text-navy md:text-3xl"
          >
            Our Journey
          </h2>
          <p className="mt-2 text-center text-grey-mid">Key dates in our history</p>
          <ol className="mt-8 space-y-8">
            {TIMELINE.map((item) => (
              <li key={item.title} className="border-l-2 border-teal pl-6">
                <h3 className="font-sans text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-teal">{item.era}</p>
                <p className="mt-2 text-grey-mid">{item.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="people-heading">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <h2
            id="people-heading"
            className="text-center font-sans text-2xl font-bold text-navy md:text-3xl"
          >
            The Family Behind the Bench
          </h2>
          <p className="mt-3 text-center text-grey-mid">
            Yu Dental Laboratory remains a family-run business, with each member of our family
            bringing different experience and skills to the clinic and laboratory.
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
                <h3 className="font-sans text-lg font-bold text-navy">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold text-teal">{person.role}</p>
                <p className="mt-3 text-sm text-grey-mid leading-relaxed">{person.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FamilyArchiveGallery />
    </>
  );
}
