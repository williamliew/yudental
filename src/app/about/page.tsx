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
    title: "Opening hearts and doors",
    era: "Today",
    copy: "Now welcoming the public for denture services, Yu Dental Laboratory continues to weave compassion into their work, crafting smiles while strengthening community ties. Each denture reflects the love and dedication that the family pours into their mission.",
  },
] as const;

const PEOPLE = [
  {
    name: "Steven Yu",
    role: "Director, owner operator",
    ariaLabel: "Portrait placeholder for Steven Yu",
    copy: "Steven Yu is a passionate dental technician and the visionary founder behind his successful practice. With a commitment to quality and patient care, he has dedicated his career to creating beautiful smiles and enhancing the dental experience for his clients. His journey began with a simple idea, but through hard work and determination, he has built a thriving business that reflects his love for the dental profession. Steven's understanding and empathy for his patients' needs set him apart, making him a trusted figure in the community.",
  },
  {
    name: "Leanne Yu",
    role: "Dental manufacturer, co-ordinator, co-founder",
    ariaLabel: "Portrait placeholder for Leanne Yu",
    copy: "Leanne Yu is the heartbeat of our dental manufacturing company and a dedicated co-founder. With her expertise and passion for quality, she ensures our products meet the highest standards while genuinely serving our customers' needs. Beyond her manufacturing skills, Leanne's ability to connect with the team keeps us motivated and united. Her organisational talents create a flourishing environment for creativity, and her commitment to making a positive impact in the community empowers others. In every aspect, Leanne leads with heart and purpose, making her an invaluable asset and inspiration to us all.",
  },
  {
    name: "Allan Yu",
    role: "Dental prosthetist, technician, second in charge",
    ariaLabel: "Portrait placeholder for Allan Yu",
    copy: "Allan Yu is a skilled Dental Prosthetist and Dental Technician with expertise in creating and fitting dental appliances. With a keen eye for detail and a commitment to patient satisfaction, he combines technical precision with a strong understanding of dental aesthetics to restore smiles and enhance oral health. Allan's dedication to his craft ensures that his patients receive high-quality, customised solutions tailored to their needs.",
  },
] as const;

const ARCHIVE_IMAGES = [
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop",
] as const;

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="Our story"
        lead="How we began as a family workshop, and how we work together today; add your own dates and memories below when you are ready."
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
          Our father&apos;s route into dental technology began with formal training and long years
          at the bench: learning how materials behave, how a case should feel in the mouth, and how
          to work honestly with dentists who were trusting you with their patients. That foundation
          still sets the tone when we plan shade, function and delivery today.
        </p>
        <p>
          In 2000 the family opened Yu Dental Laboratory from the basement of our home in
          Wellington&apos;s eastern suburbs. It was a modest workshop in the truest sense; work
          travelled between bench and courier, and referrers soon learned they could reach someone
          who actually knew the case. From that beginning we grew into the Wellington site patients
          and practices rely on now, without losing the habit of making appliances on site and
          talking plainly about timelines and materials.
        </p>
        <p>
          Along the way we have stayed focused on the craft itself: aesthetics, function and
          phonetics, using products and materials from reputable manufacturers and keeping
          documentation aligned with New Zealand and European expectations. We still take on a wide
          range of complexity, and we still care most about relationships with clients and patients
          who want confidence in both the appliance and the people behind it.
        </p>
        <p>
          The story above stays as our overview. Below is a simple timeline from past to present,
          and a little room for each of us in our own words once you have gathered dates and
          memories with mum and dad. Many laboratories never put faces to the work; we hope this
          adds warmth for patients and for dentists who value working with people, not only with
          case numbers.
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
          <p className="mt-2 text-grey-mid">Yu Dental Laboratory: A Heartfelt Family Journey</p>
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
            We will replace these placeholders with your own photographs of the original lab.
            Black-and-white prints often scan with grain or softness; we can treat that as part of
            the look so the archive feels genuinely of its era.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
            {ARCHIVE_IMAGES.map((src) => (
              <div
                key={src}
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
