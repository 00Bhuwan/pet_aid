import icons from "./icons";
import images from "./images";

// Sample Data

const product = {
  toys: [
    { id: "1", name: "Benebone Dental Dog Chew Toy", price: "Rs 800", image: images.bone },
    { id: "2", name: "Pet Qwerks Nylon Dog Bone", price: "Rs 500", image: images.haddi1 },
    { id: "3", name: "iSqueak Ball Rubber Dog Toy", price: "Rs 900", image: images.haddi2 },
    { id: "4", name: "Uitndvyte  Toy for Chewing Teeth Dogs", price: "Rs 600", image: images.haddi2 },
    { id: "5", name: "Chuckle Rope Fetch", price: "Rs 700", image: images.haddi1 },
    { id: "6", name: "KONG Puppy Chew", price: "Rs 500", image: images.haddi2 },
  ],
  grooming: [
    { id: "7", name: "Self Cleaning Slicker Brush", price: "Rs 1900", image: images.self_cleaner_brush },
    { id: "8", name: "STAN PET Deshedding Tool", price: "Rs 1800", image: images.self_cleaner_brush },
    { id: "9", name: "Paw Brothers Slicker Brush", price: "Rs 1200", image: images.self_cleaner_brush },
    { id: "10", name: "Crude Nail Clipper", price: "Rs 300", image: images.nail_cutter1 },
    { id: "11", name: "Pet Grooming Glove", price: "Rs 400", image: images.self_cleaner_brush },
    { id: "12", name: "Electric Dog Clipper", price: "Rs 1500", image: images.self_cleaner_brush },
    { id: "13", name: "Pet Nail Grinder", price: "Rs 1900", image: images.nail_cutter1 },
  ],
  safety: [
    { id: "14", name: "HALTI Training Lead", price: "Rs 2500", image: images.collar1 },
    { id: "15", name: "Adjustable No-Pull Harness", price: "Rs 3000", image: images.vest1 },
    { id: "16", name: "Nylon Half Pull Dog Collar", price: "Rs 2500", image: images.collar1 },
    { id: "17", name: "Dog Nylon Safety Collar", price: "Rs 3000", image: images.collar1 },
    { id: "18", name: "Sewage Adjustable Dog Leash", price: "Rs 4000", image: images.collar1 },
  ],
  bedding: [
    { id: "19", name: "MidWest Homes for Pets", price: "Rs 4000", image: images.mat1 },
    { id: "20", name: "Downtown Fleece Dog Bed", price: "Rs 3500", image: images.mat2 },
    { id: "21", name: "Orthopedic Pet Bed", price: "Rs 3600", image: images.mat3 },
  ],
  medicine: [
    { id: "22", name: "Vanguard Vaccine", price: "Rs 6000", image: images.gloves1 },
  ],
  clothes: [
    { id: "23", name: "Vanguard Adjustable Jacket", price: "Rs 6000", image: images.gloves1 },
    { id: "24", name: "Dog Sweater", price: "Rs 6000", image: images.grass1 },
  ],
  bowls: [
    { id: "25", name: "Pet Double Bowl", price: "Rs 400", image: images.pet_bowl1 },
    { id: "26", name: "Pet Double Bowl Large", price: "Rs 800", image: images.pet_bowl2 },
  ],
};
export default product;

export const doctorsData = [
  {
    id: "1",
    name: "Dr. Aman Singh",
    degree: "MBBS, MD, DM",
    specialties: "Sleep Medicine",
    image:images.aman , 
  },
  {
    id: "2",
    name: "Dr.Ikku",
    degree: "MD, MBBS, ABC",
    specialties: "General Physician",
    image:images.ikku,
  },
  {
    id: "3",
    name: "Dr. Chilley",
    degree: "MBBS, FRCS",
    specialties: "Cardiology",
    image:images.chilley,
  },
  {
    id: "4",
    name: "Dr.Motey",
    degree: "MD, PhD",
    specialties: "Neurology",
    image:images.motey,
  },
  {
    id: "5",
    name: "Dr. Specticals",
    degree: "MBBS, MRCP",
    specialties: "Pediatrics",
    image:images.suraj,
  },
  {
    id: "6",
    name: "Dr. Haddi",
    degree: "MD, FRACP",
    specialties: "Gastroenterology",
    image:images.avash,
  },
];

