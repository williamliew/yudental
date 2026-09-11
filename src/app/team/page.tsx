import { PageBanner } from "@/components/layout/PageBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { createPageMetadata } from "@/lib/metadata";

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
  award?: {
    title: string;
    copy: string;
  };
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  quals: Qualification[];
  accreditationsLabel?: string;
  accreditations?: string[];
  bio: string[];
};

const TEAM: TeamMember[] = [
  {
    id: "steven-yu",
    name: "Steven Yu",
    role: "Director",
    quals: [
      {
        title: "Diploma of Dental Technology",
        institution: "C.I.T Wellington, 1999",
      },
    ],
    bio: [
      "Steven Yu comes from a family with a long tradition in dental technology. His father was a dental technician, as were his brothers, and it was his father who first taught him the tools of the trade and introduced him to the craft.",
      "Steven went on to train in dental technology in China and Hong Kong before moving to New Zealand in 1983. He worked in Wellington dental laboratories for 13 years before completing his Diploma of Dental Technology at C.I.T. Wellington in 1999, at the age of 50.",
      "Together with Leanne, Steven founded Yu Dental Laboratory, carrying forward the skills and craftsmanship passed down through his family. He continues as Director, overseeing case quality and maintaining the standards every appliance must meet before it leaves the bench.",
      "Today, that tradition continues through the next generation, with Steven having passed his knowledge and experience on to his son, Allan.",
    ],
  },
  {
    id: "leanne-yu",
    name: "Leanne Yu",
    role: "Co-owner and coordinator",
    quals: [],
    bio: [
      "Leanne has been part of Yu Dental since the laboratory was established, working alongside Steven as the business grew from the family home into today's Wellington clinic and laboratory.",
      "With extensive hands-on experience in dental manufacturing, she now coordinates cases, manages laboratory workflows and helps ensure each case progresses smoothly from arrival through to delivery.",
      "Beyond her role in the laboratory, Leanne is the pillar of the Yu family. Her calm and steady presence has helped hold both the family and the business together over the years, maintaining perspective and keeping the peace during the inevitable pressures and stressful moments of running a family business.",
      "Her contribution to Yu Dental extends well beyond the day-to-day running of the laboratory; she has been a constant presence throughout its journey and an important part of the family values on which the business was built.",
    ],
  },
  {
    id: "allan-yu",
    name: "Allan Yu",
    role: "Dental Prosthetist & Dental Technologist",
    quals: [
      {
        title: "Master of Science (MSc) in Dental Technology — Distinction",
        institution: "Cardiff Metropolitan University, Cardiff, Wales, UK",
        award: {
          title: "Programme Award",
          copy: "Highest Postgraduate Academic Performance – MSc Dental Technology",
        },
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
    accreditationsLabel: "Professional Registration",
    accreditations: [
      "Registered Clinical Dental Technician – Dental Council of New Zealand",
      "Registered Dental Technician – Dental Council of New Zealand",
      "Formerly registered Dental Prosthetist (Australia) – AHPRA",
    ],
    bio: [
      "Allan combines clinical denture care with dental laboratory expertise, working directly with patients while also collaborating with dentists on complex prosthetic cases.",
      "His introduction to dental technology began while studying for his Bachelor of Commerce and Administration at Victoria University of Wellington, when his father, Steven, taught him the tools of the trade and gave him his first hands-on experience in the dental laboratory.",
      "Allan later moved to Melbourne to formally train in dental technology and dental prosthetics at RMIT University, including clinical training at the Royal Melbourne Dental Hospital. During his time in Melbourne, he also gained practical experience working across various dental laboratories, developing his technical skills and understanding of different laboratory workflows.",
      "He subsequently completed an MSc in Dental Technology with Distinction at Cardiff Metropolitan University in Wales, receiving the Programme Award for the highest postgraduate academic performance in the programme.",
      "At Yu Dental, Allan brings these different areas of experience together, working across both the clinic and laboratory. His particular interests include removable prosthodontics, complex denture treatment, implant-retained prostheses and digital dental workflows.",
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title="Our Team"
        tagline="Meet the Yu Dental Team. Two generations. One family. Decades of dental laboratory experience."
      />
      <section className="px-4 py-12 md:px-6 md:py-16" aria-label="Our team">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <p className="max-w-3xl text-grey-mid leading-relaxed">
            Our family works together at our Wellington denture clinic and dental laboratory,
            combining traditional craftsmanship with clinical experience and modern digital
            techniques.
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
                  <h2 className="font-sans text-2xl font-bold text-navy">{member.name}</h2>
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
                            {qual.award && (
                              <div className="mt-3">
                                <span className="block font-bold text-navy">{qual.award.title}</span>
                                <span className="mt-0.5 block italic">{qual.award.copy}</span>
                              </div>
                            )}
                            {qual.note && <span className="mt-0.5 block">{qual.note}</span>}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {member.accreditations && member.accreditations.length > 0 && (
                    <>
                      <h3 className="mt-4 text-sm font-bold text-navy">
                        {member.accreditationsLabel ?? "Accreditations"}
                      </h3>
                      <ul className="mt-2 space-y-2 text-sm text-grey-mid">
                        {member.accreditations.map((item) => (
                          <li key={item}>{item}</li>
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
          <div className="mt-12 rounded-lg border border-surface-muted bg-white p-6 text-center shadow-sm md:p-8">
            <h2 className="font-sans text-xl font-bold text-navy md:text-2xl">
              One Team. Clinic &amp; Laboratory Under One Roof.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl italic text-grey-mid leading-relaxed">
              Our team works together from consultation through to laboratory construction and
              follow-up care, helping maintain direct communication and continuity throughout your
              treatment.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/book/" className="uppercase tracking-wide">
                Book a consultation
              </ButtonLink>
              <ButtonLink href="/about/" variant="outline" className="uppercase tracking-wide">
                Our story
              </ButtonLink>
              <ButtonLink
                href="/dental-lab-services/"
                variant="outline"
                className="uppercase tracking-wide"
              >
                Work with our lab
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
