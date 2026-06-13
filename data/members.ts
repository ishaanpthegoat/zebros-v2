import type { Member } from "./types";

// 10-member roster (PRD §4.4). Kate Hicks is a mentor, not a student member, so
// she is not listed here. Focus areas confirmed against the live site and the
// team's member table. Bios and the one available photo come from the team's
// "meet the team" materials; members without a bio/photo fall back to the initials
// avatar (PRD §6.3). Emails are published with member consent (org-approved).
// No formal leadership roles.
export const members: Member[] = [
  {
    id: "aarnavi-boppana",
    name: "Aarnavi Boppana",
    initials: "AB",
    focusAreas: ["Social Media", "Project Management", "Portfolio"],
    email: "aboppana2020@gmail.com",
    photo: "/team/aarnavi-boppana.jpg",
    bio: "Hi, I'm Aarnavi! I work on our social media, project management, and portfolio. My main jobs are to keep us organized on Notion and run the team's Instagram account. I also work on documentation throughout the season for our portfolio and social media. I love spending time with everyone on the team, whether it be during practices or competition!",
  },
  {
    id: "amir-islamkulov",
    name: "Amir Islamkulov",
    initials: "AI",
    focusAreas: ["Mechanical", "CAD", "Design"],
    email: "amirislamkulov16@gmail.com",
  },
  {
    id: "avani-poondota",
    name: "Avani Poondota",
    initials: "AP",
    focusAreas: ["Programming", "Social Media", "Project Management", "Script"],
    email: "avani.poondota@gmail.com",
    photo: "/team/avani-poondota.png",
    bio: "Hey! I'm Avani, and I work on programming, social media, project management, and script. This is my 5th year doing robotics, and what I love about it is the creativity and competition. I also love connecting and spending time with the team and making fun memories!",
  },
  {
    id: "hrithik-ajith",
    name: "Hrithik Ajith",
    initials: "HA",
    focusAreas: ["Project Management", "Programming", "Portfolio"],
    email: "hrithik.ajith@gmail.com",
  },
  {
    id: "ishaan-pemmaraju",
    name: "Ishaan Pemmaraju",
    initials: "IP",
    focusAreas: ["Management", "STEM Connections", "Script", "Portfolio"],
    email: "ishaan.pemmaraju.9@gmail.com",
  },
  {
    id: "peter-napoleonak",
    name: "Peter Napoleonak",
    initials: "PN",
    focusAreas: ["Mood Booster", "Helper"],
    email: "peter.katnap@gmail.com",
  },
  {
    id: "saisri-kondapaneni",
    name: "Saisri Kondapaneni",
    initials: "SK",
    focusAreas: ["Script", "CAD", "Mechanical"],
    email: "hypersai123@gmail.com",
  },
  {
    id: "sanya-patel",
    name: "Sanya Patel",
    initials: "SP",
    focusAreas: ["Bot Maintenance", "Portfolio", "Mechanical"],
    email: "sanyap0206@gmail.com",
    photo: "/team/sanya-patel.png",
    bio: "Hi, I'm Sanya! I work on the mechanical team, help maintain our robot between matches, and contribute to our team's portfolio. Keeping the robot in top condition during competitions is one of my main responsibilities, as it helps ensure everything runs smoothly when it's time to compete. I enjoy solving problems, working with my teammates, and helping our team perform at its best. More about me coming soon!",
  },
  {
    id: "virja-mehta",
    name: "Virja Mehta",
    initials: "VM",
    focusAreas: ["Bot Maintenance", "Portfolio", "Mechanical"],
    email: "virjamehta6@gmail.com",
    photo: "/team/virja-mehta.png",
    bio: "Hey, I'm Virja! On the team, my role is to build, fix, and maintain the robot throughout the season and between matches, along with documenting our progress in the team portfolio. I love robotics because it allows me to demonstrate my interests in a competitive context, and besides the hard work, I also enjoy spending time with my team and all the fun memories we create along the way.",
  },
  {
    id: "yuvika-kandel",
    name: "Yuvika Kandel",
    initials: "YK",
    focusAreas: ["Programming", "Project Management"],
    email: "yuvika.kandel@gmail.com",
  },
];

// Preserved Team-page copy (PRD §4.4, §6.3).
export const rosterNote =
  "The team operates without formal leadership roles; everyone contributes across the focus areas listed on their card.";

export const joinCta = "Interested in joining the team? Contact us.";
