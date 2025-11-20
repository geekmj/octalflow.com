export const SITE = {
  website: "https://www.octalflow.com/", // replace this with your deployed domain
  author: "M Kumar",
  profile: "https://www.mrityunjay.com/",
  desc: "Quality articles and videos on software architecture, design and engineering.",
  title: "Octal Flow",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/geekmj/octalflow.com/edit/main",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Amsterdam", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
