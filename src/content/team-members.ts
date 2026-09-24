export type TeamMemberBase = {
  id: string;
  name: string;
  role: string;
  ariaLabel: string;
  imageSrc: string;
  shortBio: string;
};

export const TEAM_MEMBERS: TeamMemberBase[] = [
  {
    id: "steven-yu",
    name: "Steven Yu",
    role: "Founder & Director | Dental Technician",
    ariaLabel: "Portrait of Steven Yu",
    imageSrc: "/images/team/steven-yu.jpg",
    shortBio:
      "Steven Yu founded the laboratory in 2000 after decades of experience in New Zealand. He holds a Diploma in Dental Technology (C.I.T. Wellington, 1999) and is actively involved in case planning and quality assurance for all appliances produced.",
  },
  {
    id: "leanne-yu",
    name: "Leanne Yu",
    role: "Co-Owner | Laboratory Coordinator",
    ariaLabel: "Portrait of Leanne Yu",
    imageSrc: "/images/team/leanne-yu.jpg",
    shortBio:
      "Leanne has been part of Yu Dental Laboratory since it was established, working alongside Steven as the business grew from the family home into today's Wellington clinic and laboratory.",
  },
  {
    id: "allan-yu",
    name: "Allan Yu",
    role: "Dental Prosthetist & Dental Technologist",
    ariaLabel: "Portrait of Allan Yu",
    imageSrc: "/images/team/allan-yu.jpg",
    shortBio:
      "Allan joined the family business after training in dental technology and dental prosthetics in Australia and completing his Master's in Dental Technology in the UK. He provides clinical denture care alongside complex technical and laboratory work, bringing the clinical and laboratory sides of Yu Dental Laboratory together.",
  },
];

export function getTeamMember(id: string): TeamMemberBase | undefined {
  return TEAM_MEMBERS.find((member) => member.id === id);
}
