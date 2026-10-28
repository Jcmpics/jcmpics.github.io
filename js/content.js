/* ==========================================================================
   ✏️  EDIT YOUR SITE HERE
   --------------------------------------------------------------------------
   Every word and photo on the site comes from this one file.
   - Text marked  [VERIFY]       = I inferred it from your Pixieset page; check it.
   - Text marked  [PLACEHOLDER]  = I made it up; replace it with your own.
   Once you've fixed a line, delete its [VERIFY]/[PLACEHOLDER] comment.
   ========================================================================== */

window.SITE = {
  brand: "JCM Pics",
  tagline: "Game-day sports photography from the sideline to senior night.", // [PLACEHOLDER]
  location: "Lansdale & the Philadelphia area, PA", // [VERIFY] guessed from your 445 area code + Lansdale Catholic galleries

  // Photo shown full-screen at the top (file name in /photos)
  heroPhoto: "selects/46-pclsn-photos-1.jpg",

  about: {
    photo: "selects/42-la-salle-vs-easton.jpg",
    // [VERIFY] Your name comes from your Pixieset contact email.
    // [PLACEHOLDER] The rest of the bio is written from the galleries on your page. Rewrite it in your own voice.
    paragraphs: [
      "I'm Jackson Miller, the photographer behind JCM Pics. I shoot sports around Philadelphia: Friday night football, PCL championships, wrestling, volleyball, and summer pro-am runs like the Jab Classic at the Palestra and the Rumph Classic.",
      "I chase the peak moment: the dunk, the catch, the takedown. I also look for what happens around it: the tunnel walk, the student section, the celebration after the final whistle.",
      "Every game gets a full online gallery so players, parents and teams can find and download their shots.",
    ],
    // Facts below come from your Pixieset account (as of Oct 2026).
    stats: [
      { value: "125", label: "Galleries delivered" },
      { value: "42,000+", label: "Photos delivered" },
      { value: "10+", label: "Sports covered" },
    ],
  },

  // Gallery filter buttons, in order. "id" must match the photo categories below.
  categories: [
    { id: "football", label: "Football" },
    { id: "basketball", label: "Basketball" },
    { id: "volleyball", label: "Volleyball" },
    { id: "wrestling", label: "Wrestling" },
    { id: "soccer", label: "Soccer" },
    { id: "field", label: "Lacrosse, Baseball & Hockey" },
    { id: "endurance", label: "Ironman & Triathlon" },
    { id: "portraits", label: "Portraits" },
  ],

  // Gallery photos: 75 selects picked from all 124 of your Pixieset collections (42,073 photos).
  // "file" is the path inside /photos. "link" opens that game's full Pixieset gallery.
  // [VERIFY] Titles come from your collection names; categories are my calls from looking at each photo.
  // To add a photo: drop it in /photos, run  sh tools/make-web-images.sh,  then add a line here.
  photos: [
    { file: "selects/59-jab-classic.jpg", title: "Jab Classic", category: "basketball", date: "Aug 16, 2026", link: "https://jcmpics.pixieset.com/jabclassic/" },
    { file: "selects/46-pclsn-photos-1.jpg", title: "PCL Semifinal", category: "football", date: "Feb 16, 2026", link: "https://jcmpics.pixieset.com/pclsnphotos1/" },
    { file: "selects/11-la-salle-wrestling-vs-father-judge.jpg", title: "La Salle Wrestling vs Father Judge", category: "wrestling", date: "Jan 22, 2025", link: "https://jcmpics.pixieset.com/lasallewrestlingvsfatherjudge/" },
    { file: "selects/66-loyola-vs-tcu-volleyball.jpg", title: "Loyola vs TCU Volleyball", category: "volleyball", date: "Sep 27, 2026", link: "https://jcmpics.pixieset.com/loyolavstcuvolleyball/" },
    { file: "selects/52-pcl-championship-boys.jpg", title: "PCL Championship Boys", category: "basketball", date: "Feb 22, 2026", link: "https://jcmpics.pixieset.com/pclchampionshipboys/" },
    { file: "selects/42-la-salle-vs-easton.jpg", title: "La Salle vs Easton", category: "football", date: "Nov 21, 2025", link: "https://jcmpics.pixieset.com/lasallevseaston/" },
    { file: "selects/24-united-philly-soccer-game.jpg", title: "United Philly Soccer Game", category: "soccer", date: "Mar 29, 2025", link: "https://jcmpics.pixieset.com/unitedphillysoccergame/" },
    { file: "selects/36-lake-placid-2025.jpg", title: "Ironman Lake Placid", category: "endurance", date: "Jul 22, 2025", link: "https://jcmpics.pixieset.com/lakeplacid2025/" },
    { file: "selects/01-la-salle-vs-haverford-24.jpg", title: "La Salle vs Haverford", category: "football", date: "Sep 14, 2024", link: "https://jcmpics.pixieset.com/lasallevshaverford24/" },
    { file: "selects/10-la-salle-basketball-vs-lansdale-catholic.jpg", title: "La Salle Basketball vs Lansdale Catholic", category: "basketball", date: "Jan 17, 2025", link: "https://jcmpics.pixieset.com/lasallebasketballvslansdalecatholic/" },
    { file: "selects/09-la-salle-jv-hockey-vs-prep.jpg", title: "La Salle JV Hockey vs Prep", category: "field", date: "Nov 14, 2024", link: "https://jcmpics.pixieset.com/lasallejvhockeyvsprep/" },
    { file: "selects/15-lifetime-tri.jpg", title: "Lifetime Tri", category: "endurance", date: "Feb 2, 2025", link: "https://jcmpics.pixieset.com/lifetimetri/" },
    { file: "selects/65-loyola-vs-tcu-volleyball.jpg", title: "Loyola vs TCU Volleyball", category: "volleyball", date: "Sep 27, 2026", link: "https://jcmpics.pixieset.com/loyolavstcuvolleyball/" },
    { file: "selects/12-la-salle-wrestling-vs-father-judge.jpg", title: "La Salle Wrestling vs Father Judge", category: "wrestling", date: "Jan 22, 2025", link: "https://jcmpics.pixieset.com/lasallewrestlingvsfatherjudge/" },
    { file: "selects/31-sofia-s-prom.jpg", title: "Sofia's Prom", category: "portraits", date: "May 10, 2025", link: "https://jcmpics.pixieset.com/sofiasprom/" },
    { file: "selects/70-la-salle-soccer-vs-lc.jpg", title: "La Salle Soccer vs LC", category: "soccer", date: "Oct 16, 2026", link: "https://jcmpics.pixieset.com/lasallesoccervslc/" },
    { file: "selects/02-lschs-varsity-football-vs-episcopal.jpg", title: "LSCHS Varsity Football vs Episcopal", category: "football", date: "Sep 20, 2024", link: "https://jcmpics.pixieset.com/lschsvarsityfootballvsepiscopal/" },
    { file: "selects/13-la-salle-basketball-vs-prep.jpg", title: "La Salle Basketball vs Prep", category: "basketball", date: "Jan 17, 2025", link: "https://jcmpics.pixieset.com/lasallebasketballvsprep/" },
    { file: "selects/14-la-salle-jv-hockey-vs-malvern-prep.jpg", title: "La Salle JV Hockey vs Malvern Prep", category: "field", date: "Jan 29, 2025", link: "https://jcmpics.pixieset.com/lasallejvhockeryvsmalvernprep/" },
    { file: "selects/33-lake-placid-camp-2025.jpg", title: "Lake Placid Camp 2025", category: "endurance", link: "https://jcmpics.pixieset.com/lakeplacidcamp2025/" },
    { file: "selects/67-lansdale-catholic-volleyball.jpg", title: "Lansdale Catholic Volleyball", category: "volleyball", date: "Oct 1, 2026", link: "https://jcmpics.pixieset.com/lansdalecatholicvolleyball/" },
    { file: "selects/49-la-salle-varsity-wrestling.jpg", title: "La Salle Varsity Wrestling", category: "wrestling", date: "Jan 16, 2026", link: "https://jcmpics.pixieset.com/lasallevarsitywrestling/" },
    { file: "selects/53-prom.jpg", title: "Prom", category: "portraits", date: "May 9, 2026", link: "https://jcmpics.pixieset.com/prom/" },
    { file: "selects/71-colonial-soccer-10-17.jpg", title: "Colonial Soccer", category: "soccer", date: "Oct 17, 2026", link: "https://jcmpics.pixieset.com/colonialsoccer1017/" },
    { file: "selects/03-la-salle-vs-bonner-fb.jpg", title: "La Salle vs Bonner FB", category: "football", date: "Oct 11, 2024", link: "https://jcmpics.pixieset.com/lasallevsbonnerfb/" },
    { file: "selects/17-la-salle-silent-night.jpg", title: "La Salle Silent Night", category: "basketball", date: "Feb 6, 2025", link: "https://jcmpics.pixieset.com/lasallesilentnight/" },
    { file: "selects/20-jv-la-salle-lacrosse-vs-haverford.jpg", title: "JV La Salle Lacrosse vs Haverford", category: "field", date: "Mar 12, 2025", link: "https://jcmpics.pixieset.com/jvlasallelacrossevshaverford/" },
    { file: "selects/35-musselman.jpg", title: "Musselman 70.3", category: "endurance", date: "Jul 13, 2025", link: "https://jcmpics.pixieset.com/muscleman/" },
    { file: "selects/73-sch-vs-ga-volleyball.jpg", title: "SCH vs GA Volleyball", category: "volleyball", link: "https://jcmpics.pixieset.com/mycollection/" },
    { file: "selects/04-la-salle-vs-bonner-fb.jpg", title: "La Salle vs Bonner FB", category: "football", date: "Oct 11, 2024", link: "https://jcmpics.pixieset.com/lasallevsbonnerfb/" },
    { file: "selects/18-la-salle-silent-night.jpg", title: "La Salle Silent Night", category: "basketball", date: "Feb 6, 2025", link: "https://jcmpics.pixieset.com/lasallesilentnight/" },
    { file: "selects/21-la-salle-freshmen-baseball-vs-malvern-prep.jpg", title: "La Salle Freshmen Baseball vs Malvern Prep", category: "field", date: "Mar 20, 2025", link: "https://jcmpics.pixieset.com/lasallefreshmenbaseballvsmalvernprep/" },
    { file: "selects/05-la-salle-vs-roman-catholic.jpg", title: "La Salle vs Roman Catholic", category: "football", date: "Oct 26, 2024", link: "https://jcmpics.pixieset.com/lasallevsromancatholic/" },
    { file: "selects/19-la-salle-silent-night.jpg", title: "La Salle Silent Night", category: "basketball", date: "Feb 6, 2025", link: "https://jcmpics.pixieset.com/lasallesilentnight/" },
    { file: "selects/22-la-salle-varsity-baseball-vs-central.jpg", title: "La Salle Varsity Baseball vs Central", category: "field", date: "Mar 22, 2025", link: "https://jcmpics.pixieset.com/lasallevarsitybaseballvscentral/" },
    { file: "selects/06-la-salle-vs-prep.jpg", title: "La Salle vs Prep", category: "football", link: "https://jcmpics.pixieset.com/lasallevsprep/" },
    { file: "selects/27-next-play-basketball-aau.jpg", title: "Next Play Basketball AAU", category: "basketball", date: "Apr 12, 2025", link: "https://jcmpics.pixieset.com/nextplaybasketballaau/" },
    { file: "selects/23-la-salle-varsity-lacrosse-vs-malvern-prep.jpg", title: "La Salle Varsity Lacrosse vs Malvern Prep", category: "field", date: "Mar 22, 2025", link: "https://jcmpics.pixieset.com/lasallevarsitylacrossevsmalvernprep/" },
    { file: "selects/07-la-salle-vs-prep.jpg", title: "La Salle vs Prep", category: "football", link: "https://jcmpics.pixieset.com/lasallevsprep/" },
    { file: "selects/28-next-play-15u-hgal.jpg", title: "Next Play 15U", category: "basketball", date: "Apr 27, 2025", link: "https://jcmpics.pixieset.com/nextplay15uhgal/" },
    { file: "selects/32-true-philly-2028.jpg", title: "True Philly 2028", category: "field", date: "Jun 7, 2025", link: "https://jcmpics.pixieset.com/truephilly2028/" },
    { file: "selects/08-la-salle-vs-prep.jpg", title: "La Salle vs Prep", category: "football", link: "https://jcmpics.pixieset.com/lasallevsprep/" },
    { file: "selects/29-next-play-15u-hgal.jpg", title: "Next Play 15U", category: "basketball", date: "Apr 27, 2025", link: "https://jcmpics.pixieset.com/nextplay15uhgal/" },
    { file: "selects/16-la-salle-7-on-7-practice.jpg", title: "La Salle 7 on 7 Practice", category: "football", date: "Feb 2, 2025", link: "https://jcmpics.pixieset.com/lasalle7on7practice/" },
    { file: "selects/47-la-salle-basketball-vs-fels.jpg", title: "La Salle Basketball vs Fels", category: "basketball", date: "Dec 13, 2025", link: "https://jcmpics.pixieset.com/lasallebasketballvsfels-1/" },
    { file: "selects/25-play-makers-15u-7-on-7.jpg", title: "Play Makers 15u 7 on 7", category: "football", date: "Mar 30, 2025", link: "https://jcmpics.pixieset.com/playmakers15u7on7/" },
    { file: "selects/48-la-salle-basketball-vs-fels.jpg", title: "La Salle Basketball vs Fels", category: "basketball", date: "Dec 13, 2025", link: "https://jcmpics.pixieset.com/lasallebasketballvsfels-1/" },
    { file: "selects/26-la-salle-7-on-7-15u.jpg", title: "La Salle 7 on 7 15u", category: "football", date: "Apr 5, 2025", link: "https://jcmpics.pixieset.com/lasalle7on715u/" },
    { file: "selects/50-pcl-championship-girls.jpg", title: "PCL Championship Girls", category: "basketball", date: "Feb 23, 2026", link: "https://jcmpics.pixieset.com/pclchampionshipgirls/" },
    { file: "selects/30-la-salle-football-showcase.jpg", title: "La Salle Football Showcase", category: "football", date: "May 8, 2025", link: "https://jcmpics.pixieset.com/lasallefootballshowcase/" },
    { file: "selects/51-pcl-championship-boys.jpg", title: "PCL Championship Boys", category: "basketball", date: "Feb 22, 2026", link: "https://jcmpics.pixieset.com/pclchampionshipboys/" },
    { file: "selects/34-la-salle-wide-receivers-workout.jpg", title: "La Salle Wide Receivers Workout", category: "football", date: "Jul 11, 2025", link: "https://jcmpics.pixieset.com/lasallewidereceiversworkout/" },
    { file: "selects/55-rumph-day-1.jpg", title: "Rumph Classic", category: "basketball", date: "Aug 6, 2026", link: "https://jcmpics.pixieset.com/rumphday1/" },
    { file: "selects/37-la-salle-vs-pittsburg-central-catholic.jpg", title: "La Salle vs Pittsburg Central Catholic", category: "football", date: "Aug 22, 2025", link: "https://jcmpics.pixieset.com/lasallevspittsburgcentralcatholic/" },
    { file: "selects/56-rumph-day-1.jpg", title: "Rumph Classic", category: "basketball", date: "Aug 6, 2026", link: "https://jcmpics.pixieset.com/rumphday1/" },
    { file: "selects/38-la-salle-vs-calvert-hall.jpg", title: "La Salle vs Calvert Hall", category: "football", date: "Sep 13, 2025", link: "https://jcmpics.pixieset.com/lasallevscalverthall/" },
    { file: "selects/57-rumph-day-1.jpg", title: "Rumph Classic", category: "basketball", date: "Aug 6, 2026", link: "https://jcmpics.pixieset.com/rumphday1/" },
    { file: "selects/39-la-salle-vs-calvert-hall.jpg", title: "La Salle vs Calvert Hall", category: "football", date: "Sep 13, 2025", link: "https://jcmpics.pixieset.com/lasallevscalverthall/" },
    { file: "selects/60-jab-classic.jpg", title: "Jab Classic", category: "basketball", date: "Aug 16, 2026", link: "https://jcmpics.pixieset.com/jabclassic/" },
    { file: "selects/40-la-salle-vs-calvert-hall.jpg", title: "La Salle vs Calvert Hall", category: "football", date: "Sep 13, 2025", link: "https://jcmpics.pixieset.com/lasallevscalverthall/" },
    { file: "selects/61-jab-classic.jpg", title: "Jab Classic", category: "basketball", date: "Aug 16, 2026", link: "https://jcmpics.pixieset.com/jabclassic/" },
    { file: "selects/41-ursinus-homecoming-football.jpg", title: "Ursinus Homecoming Football", category: "football", date: "Oct 25, 2025", link: "https://jcmpics.pixieset.com/ursinushomecomingfootball/" },
    { file: "selects/62-jab-classic.jpg", title: "Jab Classic", category: "basketball", date: "Aug 16, 2026", link: "https://jcmpics.pixieset.com/jabclassic/" },
    { file: "selects/43-la-salle-vs-easton.jpg", title: "La Salle vs Easton", category: "football", date: "Nov 21, 2025", link: "https://jcmpics.pixieset.com/lasallevseaston/" },
    { file: "selects/44-la-salle-vs-easton.jpg", title: "La Salle vs Easton", category: "football", date: "Nov 21, 2025", link: "https://jcmpics.pixieset.com/lasallevseaston/" },
    { file: "selects/45-la-salle-vs-easton.jpg", title: "La Salle vs Easton", category: "football", date: "Nov 21, 2025", link: "https://jcmpics.pixieset.com/lasallevseaston/" },
    { file: "selects/54-wr-db-workout.jpg", title: "WR/DB Workout", category: "football", date: "Jul 26, 2026", link: "https://jcmpics.pixieset.com/wrdbworkout/" },
    { file: "selects/58-zykee-x-kenny.jpg", title: "Zykee x Kenny Workout", category: "football", date: "Aug 7, 2026", link: "https://jcmpics.pixieset.com/zykeexkenny/" },
    { file: "selects/63-carroll-football.jpg", title: "Carroll Football", category: "football", date: "Sep 10, 2026", link: "https://jcmpics.pixieset.com/carrollfootball/" },
    { file: "selects/64-ursinus-football.jpg", title: "Ursinus Football", category: "football", date: "Sep 19, 2026", link: "https://jcmpics.pixieset.com/ursinusfootball/" },
    { file: "selects/68-ursinus-football.jpg", title: "Ursinus Football", category: "football", date: "Oct 2, 2026", link: "https://jcmpics.pixieset.com/ursinusfootball-1/" },
    { file: "selects/69-la-salle-vs-prep-freshmen.jpg", title: "La Salle vs Prep Freshmen", category: "football", date: "Oct 8, 2026", link: "https://jcmpics.pixieset.com/lasallevsprepfreshmen/" },
    { file: "selects/72-ursinus-football-vs-johnhopkins.jpg", title: "Ursinus vs Johns Hopkins", category: "football", date: "Oct 17, 2026", link: "https://jcmpics.pixieset.com/ursinusfootballvsjohnhopkins/" },
    { file: "selects/74-lc-football.jpg", title: "Lansdale Catholic Football", category: "football", date: "Oct 23, 2026", link: "https://jcmpics.pixieset.com/lcfootball/" },
    { file: "selects/75-lc-football.jpg", title: "Lansdale Catholic Football", category: "football", date: "Oct 23, 2026", link: "https://jcmpics.pixieset.com/lcfootball/" },
  ],

  // [PLACEHOLDER] Services and prices are made up. Set your own, or use "Contact for pricing".
  services: [
    {
      name: "Game Day",
      price: "Contact for pricing",
      description: "Full-game coverage for a team, a player or a family. Action, sideline and crowd shots, delivered in an online gallery.",
      includes: ["Full game or meet", "Edited online gallery", "Fast turnaround"],
    },
    {
      name: "Senior & Athlete Portraits",
      price: "Contact for pricing",
      description: "Senior night, signing day or a solo shoot in uniform: portraits made for announcements, banners and recruiting.",
      includes: ["Location of your choice", "Uniform + casual looks", "High-res downloads"],
    },
    {
      name: "Events & Brands",
      price: "Contact for pricing",
      description: "Happy hours, gym and team promos, community events. Photos ready for social media and your website.",
      includes: ["Event or brand coverage", "Social-ready edits", "Commercial use"],
    },
  ],

  booking: {
    heading: "Book a shoot",
    text: "Tell me the date, the sport or event, and where it is. I'll get back to you with availability.",
    buttonLabel: "Book a shoot",
    emailSubject: "Photo shoot request: JCM Pics",
  },

  contact: {
    // From your Pixieset page. This is a school address; you may want a personal one on a public site.
    email: "JacksonMiller2028@lschs.org",
    instagram: "jcm_pics", // handle without the @
    clientGalleries: "https://jcmpics.pixieset.com/",
    // phone: "",  // Left off on purpose. Add your number here if you want it public.
  },
};
