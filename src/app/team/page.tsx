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
      "Steven Yu trained in dental technology in China and Hong Kong before moving to New Zealand in 1983. He worked in Wellington laboratories for 13 years, then completed his Diploma of Dental Technology at C.I.T Wellington in 1999 at age 50. He founded Yu Dental Laboratory with Leanne and continues as Director, overseeing case quality and the standards every appliance must meet before it leaves the bench.",
    ],
  },
  {
    id: "leanne-yu",
    name: "Leanne Yu",
    role: "Co-Owner / Dental Manufacturer / Co-Ordinator",
    quals: [],
    bio: [
      "Leanne Yu is the co-owner and coordinator of Yu Dental Laboratory. She started when Steven launched the business, gained hands-on experience in dental manufacturing, and now manages case coordination and daily operations, ensuring timelines are met and cases are delivered on time.",
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
        note: "Programme Award — Highest Postgraduate Academic Performance in the MSc Dental Technology programme",
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
      "Allan Yu is a Dental Prosthetist and Technician with a Bachelor of Commerce from Victoria University, diplomas from RMIT Melbourne, and an MSc in Dental Technology from Cardiff Metropolitan University. He trained at the Royal Melbourne Dental Hospital and has worked with various laboratories in Melbourne. Allan assesses patients and provides denture treatments, while handling complex cases as well. He collaborates with dentists across New Zealand on prosthetic planning and digital workflows.",
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <PageBanner title="Our Team" tagline="Qualifications and experience you can see." />
      <section className="px-4 py-12 md:px-6 md:py-16" aria-label="Our team">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <p className="max-w-3xl text-grey-mid leading-relaxed">
            Registered dental prosthetists and technicians. Qualifications, roles, and how we work
            together at the Wellington clinic and laboratory.
          </p>
          <div
            className="mt-8 h-56 rounded-lg bg-cover bg-center md:h-72"
            role="img"
            aria-label="Yu Dental Laboratory team"
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
