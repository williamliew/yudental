import { PageBanner } from "@/components/layout/PageBanner";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Our team",
  description:
    "Meet the Yu Dental Laboratory family team: qualifications and experience in Wellington.",
  path: "/team/",
});

type Qualification = {
  title: string;
  institution?: string;
  note?: string;
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  quals: Qualification[];
  bio: string[];
};

const TEAM: TeamMember[] = [
  {
    id: "steven-yu",
    name: "Steven Yu",
    role: "Director/Owner Operator",
    quals: [
      {
        title: "Diploma of Dental Technology",
        institution: "C.I.T Wellington, 1999",
      },
    ],
    bio: [
      "Steven (Lap Wai) Yu's journey in dental technology is a remarkable testament to passion, perseverance, and family legacy. Growing up in China during the 1950s, he was surrounded by the tools of the trade, inspired by his father and brother, who both dedicated their lives to this craft. From a young age, Steven absorbed their knowledge and skills, nurturing his own growing interest.",
      "Determined to broaden his horizons, he moved to Hong Kong, where he honed his craft further before taking a bold step to New Zealand in 1983. Embracing the challenge of a new country, he spent 13 dedicated years working in a local lab, pouring his heart and soul into his work, and proving his resilience and commitment to excellence.",
      "At the age of 50, Steven returned to school, earning his Dental Technology diploma from C.I.T Wellington in 1999. This milestone was not just an academic achievement; it was a powerful statement about lifelong learning and the importance of pursuing one's dreams, no matter the age. Steven's story is one of dedication to his craft, a deep respect for family traditions, and an inspiring reminder that the journey of growth never truly ends.",
    ],
  },
  {
    id: "leanne-yu",
    name: "Leanne Yu",
    role: "Co-Owner / Dental Manufacturer / Co-Ordinator",
    quals: [],
    bio: [
      "Leanne (Shik Jing) Yu's journey to New Zealand began in the 1980s, a pivotal era that would shape her and her family's future.",
      "Meeting Steven in China was just the beginning of a beautiful partnership that bloomed anew in their adopted home.",
      "Their bond deepened after marriage, as Leanne dedicated herself to supporting Steven during his studies while juggling work at a factory.",
      "When Steven took the leap to start his own business, Leanne selflessly left her job to fuel his dreams.",
      "Despite lacking initial knowledge in dental technology, she embraced the challenge, learning and honing her skills under Steven's guidance in the intricate world of dental manufacturing.",
      "Her days are filled with hard work and dedication, but Leanne's nurturing spirit doesn't stop there.",
      "When she's not managing the business or keeping the household running smoothly, she lovingly cares for her grandchildren, bringing them joy and warmth.",
      "Gardening is another passion of hers: a peaceful respite where she can cultivate both plants and precious moments with her family.",
      "Leanne's story is one of resilience, love, and the unwavering support that has shaped their lives together.",
    ],
  },
  {
    id: "allan-yu",
    name: "Allan Yu",
    role: "Dental Prosthetist/Technician",
    quals: [
      {
        title: "Master of Science (MSc) in Dental Technology — Distinction",
        institution: "Cardiff Metropolitan University, Cardiff, Wales, UK",
        note:
          "Programme Award — Highest Postgraduate Academic Performance in the MSc Dental Technology programme",
      },
      {
        title: "Advanced Diploma of Dental Prosthetics",
        institution:
          "Royal Melbourne Institute of Technology (RMIT University), Melbourne, Australia",
      },
      {
        title: "Diploma of Dental Technology",
        institution:
          "Royal Melbourne Institute of Technology (RMIT University), Melbourne, Australia",
      },
      {
        title: "Bachelor of Commerce and Administration (BCA)",
        institution: "Victoria University of Wellington, New Zealand",
      },
    ],
    bio: [
      "Allan Yu's journey in dental technology is a testament to dedication, legacy, and passion. His path began at the tender age of 18 when his father, with a vision for the family business, offered him a part-time job.",
      "What started as a simple opportunity blossomed into a lifelong commitment to this craft.",
      "After completing his Bachelor's degree at Victoria University, Allan's father encouraged him to broaden his horizons in Melbourne, Australia.",
      "This move was pivotal; it allowed Allan to explore new perspectives in dental technology and gain invaluable insights into different teaching methodologies.",
      "In Melbourne, he pursued a Diploma in Dental Technology, followed by an advanced diploma in Dental Prosthetics.",
      "Throughout this rigorous academic journey, he honed his skills at the Royal Melbourne Dental Hospital while juggling various contract positions and a part-time role at dental labs across the city.",
      "Upon returning to New Zealand, Allan accompanied his parents to elevate the family business, merging traditional techniques with modern innovations.",
      "His commitment to growth didn't stop there: recognising that true merit comes from continuous learning, he recently completed his Master's in Dental Technology from Cardiff Metropolitan University in the UK.",
      "With years of hands-on experience and meaningful interactions with dental professionals both in New Zealand and across the Tasman, Allan has cultivated a deep wealth of knowledge and expertise.",
      "His heartfelt dedication to the field and service to his community shine through in every aspect of his work.",
      "Allan Yu is not just a dental technologist; he is a passionate steward of a family legacy, committed to improving the lives of others through his craft.",
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <PageBanner title="Our team" tagline="Qualifications and experience you can see." />
      <section className="px-4 py-12 md:px-6 md:py-16" aria-label="Our team">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <p className="max-w-3xl text-grey-mid leading-relaxed">
            We are a small, experienced family laboratory. Below are our roles, formal
            qualifications where they apply, and a little of our story in our own words. A group
            portrait can sit above the profiles when you add your photographs, or you can use
            individual headshots in each card.
          </p>
          <div
            className="mt-8 h-56 rounded-lg bg-cover bg-center md:h-72"
            role="img"
            aria-label="Optional family or group portrait: add your image here or remove this block if you use only individual headshots"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=600&fit=crop)",
            }}
          />
          <div className="mt-12 space-y-12">
            {TEAM.map((member) => (
              <article
                key={member.id}
                id={member.id}
                className="grid gap-6 rounded-lg border border-surface-muted bg-white p-6 shadow-sm md:grid-cols-[200px_1fr] md:p-8"
              >
                <div
                  className="h-48 rounded-lg bg-surface-muted bg-cover bg-center md:h-auto"
                  role="img"
                  aria-label={`Headshot placeholder for ${member.name}`}
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop)",
                  }}
                />
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy">{member.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-teal">{member.role}</p>
                  {member.quals.length > 0 && (
                    <>
                      <h3 className="mt-4 text-sm font-bold text-navy">Qualifications</h3>
                      <ul className="mt-2 space-y-3 text-sm text-grey-mid">
                        {member.quals.map((qual) => (
                          <li key={qual.title}>
                            <span className="font-medium text-grey-dark">{qual.title}</span>
                            {qual.institution && (
                              <span className="mt-0.5 block">{qual.institution}</span>
                            )}
                            {qual.note && <span className="mt-0.5 block">{qual.note}</span>}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <div className="mt-4 space-y-3 text-grey-mid leading-relaxed">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-grey-mid">
            For how we work day to day, read <Link href="/about/">our story</Link>, or{" "}
            <Link href="/contact/">contact</Link> us directly.
          </p>
        </div>
      </section>
    </>
  );
}
