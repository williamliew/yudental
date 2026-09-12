export type TeamMemberBase = {
  id: string;
  name: string;
  role: string;
  ariaLabel: string;
  shortBio: string;
};

export const TEAM_MEMBERS: TeamMemberBase[] = [
  {
    id: "steven-yu",
    name: "Steven Yu",
    role: "Director",
    ariaLabel: "Portrait placeholder for Steven Yu",
    shortBio:
      "Steven Yu, Director, founded the laboratory in 2000 after decades of experience in New Zealand. He holds a Diploma in Dental Technology (C.I.T. Wellington, 1999) and is actively involved in case planning and quality assurance for all appliances produced.",
  },
  {
    id: "leanne-yu",
    name: "Leanne Yu",
    role: "Co-owner and coordinator",
    ariaLabel: "Portrait placeholder for Leanne Yu",
    shortBio:
      "Leanne Yu is the co-owner and coordinator. She started with Steven when the lab opened, learned how to make dental products, and now handles case coordination and daily clinic operations.",
  },
  {
    id: "allan-yu",
    name: "Allan Yu",
    role: "Dental Prosthetist & Dental Technologist",
    ariaLabel: "Portrait placeholder for Allan Yu",
    shortBio:
      "Allan joined the family business after training in dental technology and dental prosthetics in Australia and completing his Master's in Dental Technology in the UK. He provides clinical denture care alongside complex technical and laboratory work, bringing the clinical and laboratory sides of Yu Dental Laboratory together.",
  },
];

export function getTeamMember(id: string): TeamMemberBase | undefined {
  return TEAM_MEMBERS.find((member) => member.id === id);
}
