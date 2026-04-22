const BOOK_URL = "https://book.amishcountrylodging.com/all-listings?category=16008";
const BASE = "https://book.amishcountrylodging.com/listings/";

const heroImages = {
  main: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/red-fern-exterior-slide.jpg",
  secondary: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/red-fern-overview.jpg"
};

const pageHeroImages = {
  "gallery.html": "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/blue-jays-overview.jpg",
  "location.html": "https://www.amishcountrylodging.com/wp-content/uploads/2020/03/coblentz-country-cabins-google-map-scaled.jpg",
  "attractions.html": "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/horse-and-green-buggy.jpg",
  "collection.html": "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/red-fern-exterior-slide.jpg",
  "faq.html": "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/dogwood-interior-overview.jpg",
  "contact.html": "https://www.amishcountrylodging.com/wp-content/uploads/2020/03/briarwood-cabin-overview-1296x916.jpg"
};

const galleryItems = [
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/red-fern-exterior-slide.jpg",
    title: "Red Fern Log Cabin",
    copy: "Our largest cabin sleeps up to 10 on a quiet hillside with pond views and a private porch."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/07/hummingbird-haven-overview.jpg",
    title: "Hummingbird Haven",
    copy: "A spacious log cabin for up to 8 guests with a stone fireplace and jetted tub."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/blue-jays-overview.jpg",
    title: "Blue Jay's Nest",
    copy: "Authentic log construction with warm interiors and everything your group needs."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/water-lily-living-overview.jpg",
    title: "Water Lily Cabin",
    copy: "Overlooking the pond, this six-guest cabin brings the outdoors right to your living room."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/07/sugar-maple-overview-2.jpg",
    title: "Sugar Maple Cabin",
    copy: "A cozy retreat for four with a full kitchen, hot tub, and private porch."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/dogwood-interior-overview.jpg",
    title: "Dogwood Cabin",
    copy: "A romantic one-king cabin for two — warm, quiet, and steps from downtown Berlin."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2020/03/briarwood-cabin-overview-1296x916.jpg",
    title: "Briarwood Cabin",
    copy: "A pet-friendly cabin for couples with a king bed, fireplace, and private porch."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/07/rabbits-nest-overview.jpg",
    title: "Rabbit's Nest Lodge Suite",
    copy: "A cozy pet-friendly lodge suite with a king bed and fireplace."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/foxs-den-bed-overview.jpg",
    title: "Fox's Den Lodge Suite",
    copy: "Rustic comfort for two with warm wood finishes and a stone fireplace."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/owls-perch-overview.jpg",
    title: "Owl's Perch Lodge Suite",
    copy: "A lodge suite for four with a jetted tub, fireplace, and full kitchen."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/hawks-nest-interior-overview.jpg",
    title: "Hawk's Nest Lodge Suite",
    copy: "Comfortable lodge living for four with a jetted tub and cozy fireplace."
  },
  {
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/red-fern-overview.jpg",
    title: "Hillside Pond Views",
    copy: "Wake up to serene pond views and the sound of horses and buggies on the road below."
  }
];

const faqs = [
  {
    question: "How do I book a stay at Coblentz Country Cabins?",
    answer: "Every page links directly to the Amish Country Lodging booking engine where you can choose your cabin and book in a few clicks. You can also call (330) 893-8007 for assistance."
  },
  {
    question: "How close are the cabins to downtown Berlin?",
    answer: "The property sits less than 1/4 mile from downtown Berlin — close enough to walk to shops, restaurants, and bakeries, yet set back on a serene hillside where you can hear horses and buggies from your porch."
  },
  {
    question: "Which cabins are pet-friendly?",
    answer: "Briarwood Cabin, Rabbit's Nest, and Fox's Den are pet-friendly. Please review the individual listing details at booking or call (330) 893-8007 to confirm pet policies before your stay."
  },
  {
    question: "What amenities are included with each cabin?",
    answer: "Amenities vary by unit. Most cabins include full kitchens, stone fireplaces, ROKU Smart TVs, charcoal grills, and private porches. Select cabins feature two-person jetted tubs, private outdoor hot tubs, in-ground stone soaking tubs, and a pool table. Linens and towels are provided."
  },
  {
    question: "What is the difference between the log cabins and lodge suites?",
    answer: "The log cabins are freestanding structures with rustic log exteriors, full kitchens, and private porches on the hillside. The lodge suites are located in the lodge building, offering a more inn-style experience with cozy interiors, fireplaces, and easy access to all amenities."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellation terms are displayed at the time of booking and may vary by stay and season. For specific details or to modify a reservation, please call (330) 893-8007."
  },
  {
    question: "Is there WiFi at Coblentz Country Cabins?",
    answer: "Yes. All stays include complimentary WiFi. Most major carriers have good cell coverage in the Berlin area, though signal can vary slightly by unit."
  },
  {
    question: "Are the cabins good for families, couples, or both?",
    answer: "Both. The Dogwood, Briarwood, and lodge suites are perfect for romantic couples' getaways. The Sugar Maple, Water Lily, and Blue Jay's Nest work well for families, while Red Fern and Hummingbird Haven are ideal for large families or group retreats."
  },
  {
    question: "How far is Coblentz Country Cabins from Cleveland or Columbus?",
    answer: "The property is roughly 90 minutes from Cleveland and about two hours from Columbus — an easy weekend drive from most of Ohio and surrounding states."
  },
  {
    question: "Is the property accessible for guests with mobility limitations?",
    answer: "Some lodge suites may be more accessible than the hillside cabins. Please call (330) 893-8007 to discuss your needs and find the best fit across the Amish Country Lodging family of properties."
  },
  {
    question: "What is the best time of year to visit?",
    answer: "Coblentz is beautiful in every season. Fall brings stunning foliage and Amish Country's busiest season. Summer is ideal for outdoor living and pond views, spring offers lush green hillsides, and winter evenings beside the fireplace are especially cozy."
  },
  {
    question: "Are there outdoor spaces for grilling and gathering?",
    answer: "Yes. Most cabins include private porches and charcoal grills. Select stays have hot tubs or soaking tubs for outdoor relaxation. Details for each unit are available at booking or by calling (330) 893-8007."
  }
];

const featuredUnitNames = [
  "Red Fern Log Cabin",
  "Hummingbird Haven Cabin",
  "Blue Jay's Nest Log Cabin",
  "Water Lily Log Cabin",
  "Sugar Maple Cabin",
  "Dogwood Cabin",
  "Briarwood Cabin",
  "Rabbit's Nest Lodge Suite",
  "Fox's Den Lodge Suite",
  "Owl's Perch Lodge Suite",
  "Hawk's Nest Lodge Suite"
];

const units = [
  {
    name: "Red Fern Log Cabin",
    guests: "Up to 10 guests",
    beds: "1 king, 3 queens, 1 queen sleeper",
    type: "Large log cabin",
    highlight: "Our biggest cabin sleeps 10 — perfect for large families or group getaways, with a fireplace, full kitchen, and hillside pond views.",
    amenities: ["Sleeps 10", "Full kitchen", "Fireplace", "Private porch", "Pond views", "Smart TV"],
    bookingUrl: BASE + "214124",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/red-fern-overview.jpg"
  },
  {
    name: "Hummingbird Haven Cabin",
    guests: "Up to 8 guests",
    beds: "2 kings, 2 queens",
    type: "Log cabin",
    highlight: "A spacious log cabin for eight with a stone fireplace, two-person jetted tub, and full kitchen.",
    amenities: ["Sleeps 8", "Jetted tub", "Full kitchen", "Fireplace", "Private porch", "Smart TV"],
    bookingUrl: BASE + "214128",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/07/hummingbird-haven-overview.jpg"
  },
  {
    name: "Blue Jay's Nest Log Cabin",
    guests: "Up to 8 guests",
    beds: "4 queens",
    type: "Log cabin",
    highlight: "A generously sized log cabin for eight with a jetted tub, full kitchen, and warm log interiors.",
    amenities: ["Sleeps 8", "Jetted tub", "Full kitchen", "Fireplace", "Private porch", "Smart TV"],
    bookingUrl: BASE + "214127",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/blue-jays-overview.jpg"
  },
  {
    name: "Water Lily Log Cabin",
    guests: "Up to 6 guests",
    beds: "2 kings, 1 queen",
    type: "Log cabin",
    highlight: "Set hillside above the pond, this six-guest cabin features a hot tub, fireplace, and stunning views.",
    amenities: ["Sleeps 6", "Outdoor hot tub", "Full kitchen", "Fireplace", "Pond views", "Smart TV"],
    bookingUrl: BASE + "214126",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/water-lily-living-overview.jpg"
  },
  {
    name: "Sugar Maple Cabin",
    guests: "Up to 4 guests",
    beds: "1 king, 1 queen",
    type: "Cabin",
    highlight: "A comfortable cabin for four with a hot tub, full kitchen, fireplace, and private porch.",
    amenities: ["Sleeps 4", "Outdoor hot tub", "Full kitchen", "Fireplace", "Private porch", "Smart TV"],
    bookingUrl: BASE + "214131",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/07/sugar-maple-overview-2.jpg"
  },
  {
    name: "Dogwood Cabin",
    guests: "2 guests",
    beds: "1 king",
    type: "Couples cabin",
    highlight: "A romantic one-king cabin for two with a fireplace, full kitchen, and private porch steps from downtown Berlin.",
    amenities: ["King bed", "Full kitchen", "Fireplace", "Private porch", "Smart TV", "Charcoal grill"],
    bookingUrl: BASE + "214125",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/dogwood-interior-overview.jpg"
  },
  {
    name: "Briarwood Cabin",
    guests: "2 guests",
    beds: "1 king",
    type: "Pet-friendly cabin",
    highlight: "A cozy pet-friendly cabin for two with a king bed, fireplace, full kitchen, and private porch.",
    amenities: ["King bed", "Pet friendly", "Full kitchen", "Fireplace", "Private porch", "Smart TV"],
    bookingUrl: BASE + "214142",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2020/03/briarwood-cabin-overview-1296x916.jpg"
  },
  {
    name: "Rabbit's Nest Lodge Suite",
    guests: "2 guests",
    beds: "1 king",
    type: "Pet-friendly lodge suite",
    highlight: "A cozy pet-friendly lodge suite with a king bed, fireplace, and full kitchen.",
    amenities: ["King bed", "Pet friendly", "Full kitchen", "Fireplace", "Smart TV", "Charcoal grill"],
    bookingUrl: BASE + "214167",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/07/rabbits-nest-overview.jpg"
  },
  {
    name: "Fox's Den Lodge Suite",
    guests: "2 guests",
    beds: "1 king",
    type: "Pet-friendly lodge suite",
    highlight: "A warm pet-friendly suite for two with a king bed, fireplace, and full kitchen.",
    amenities: ["King bed", "Pet friendly", "Full kitchen", "Fireplace", "Smart TV", "Charcoal grill"],
    bookingUrl: BASE + "214163",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/foxs-den-bed-overview.jpg"
  },
  {
    name: "Owl's Perch Lodge Suite",
    guests: "Up to 4 guests",
    beds: "2 queens",
    type: "Lodge suite",
    highlight: "A comfortable lodge suite for four with a jetted tub, fireplace, and full kitchen.",
    amenities: ["Sleeps 4", "Jetted tub", "Full kitchen", "Fireplace", "Smart TV", "Charcoal grill"],
    bookingUrl: BASE + "214129",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/owls-perch-overview.jpg"
  },
  {
    name: "Hawk's Nest Lodge Suite",
    guests: "Up to 4 guests",
    beds: "2 queens",
    type: "Lodge suite",
    highlight: "A cozy lodge suite for four with a jetted tub, stone fireplace, and full kitchen.",
    amenities: ["Sleeps 4", "Jetted tub", "Full kitchen", "Fireplace", "Smart TV", "Charcoal grill"],
    bookingUrl: BASE + "214130",
    image: "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/hawks-nest-interior-overview.jpg"
  }
];
