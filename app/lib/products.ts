export interface ProductItem {
  id: number;
  title: string;
  category: "mens" | "womens";
  price: string;
  isNew?: boolean;
  isTrending?: boolean;
  images: string[];
  // Extended fields for detail page
  description?: string;
  material?: string;
  fit?: string;
  care?: string;
  sizes?: string[];
  colour?: string;
  sku?: string;
}

export const allProducts: ProductItem[] = [
  {
    id: 1,
    title: "IMOLEAYO BOMBER JACKET – SUNSET EMBER",
    category: "mens",
    price: "£200",
    isNew: true,
    isTrending: true,
    images: [
      "http://pappyneedles.co.uk/wp-content/uploads/2026/08/Gemini_Generated_Image_1e3nxp1e3nxp1e3n.png"
    ],
    description:
      "The Imoleayo Bomber Jacket in Sunset Ember marries heritage West African artisan textiles with contemporary streetwear outerwear. Tailored with structured ribbed trims and a vibrant sunset palette, this statement piece transitions effortlessly across seasons.",
    material: "Hand-Dyed Cotton & Silk Blend with Satin Interior Lining",
    fit: "Relaxed Bomber Silhouette with Dropped Shoulders",
    care: "Specialist dry clean only. Do not tumble dry.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colour: "Sunset Ember / Multicolour",
    sku: "IMO-BMB-001",
  },
  {
    id: 2,
    title: "IMOLEAYO SUIT – BOLD STRIPE",
    category: "mens",
    price: "£200",
    isNew: true,
    isTrending: true,
    images: [
      "https://pappyneedles.co.uk/wp-content/uploads/2026/08/IMG_1889.JPG-scaled.jpeg"
    ],
    description:
      "Engineered with precision tailoring, the Imoleayo Bold Stripe Suit redefines modern African formalwear. Featuring sharp peak lapels and a striking graphic vertical stripe weave, it commands attention at galas and bespoke gatherings.",
    material: "100% Woven Cotton Canvas Blend",
    fit: "Modern Tailored Fit",
    care: "Dry clean only. Warm iron with pressing cloth.",
    sizes: ["38R", "40R", "42R", "44R", "46R"],
    colour: "Bold Stripe Indigo & Earth",
    sku: "IMO-SUT-002",
  },
  {
    id: 3,
    title: "IMOLEAYO SUIT – CLASSIC WEAVE",
    category: "mens",
    price: "£200",
    isNew: true,
    isTrending: false,
    images: [
      "http://pappyneedles.co.uk/wp-content/uploads/2026/08/IMG_1902.JPG-scaled.jpeg"
    ],
    description:
      "A timeless study in textile craftsmanship. The Imoleayo Classic Weave Suit showcases intricate artisanal geometric weave patterns, complete with horn buttons and unstructured soft shoulders for uncompromised elegance.",
    material: "Handcrafted Traditional Loomed Cotton",
    fit: "Classic European Cut with Contemporary Ease",
    care: "Dry clean only.",
    sizes: ["38R", "40R", "42R", "44R", "46R"],
    colour: "Natural Ochre & Slate",
    sku: "IMO-SUT-003",
  },
  {
    id: 4,
    title: "IMOLEAYO ADIRE SHIRT – SUN PATTERN",
    category: "mens",
    price: "£70",
    isNew: true,
    isTrending: true,
    images: [
      "https://pappyneedles.co.uk/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-22-at-10.19.42-AM.jpeg"
    ],
    description:
      "The Imoleayo Adire Shirt celebrates ancient resist-dye techniques with an illuminating sun motif. Designed with fluid drape and a convertible camp collar, it pairs effortlessly with tailored trousers or denim.",
    material: "100% Breathable Rayon & Cotton Weave",
    fit: "Relaxed Resort Fit",
    care: "Hand wash cold with gentle detergent. Line dry in shade.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colour: "Sun Ochre & Sky Adire",
    sku: "IMO-SHR-004",
  },
  {
    id: 5,
    title: "IMOLEAYO PANTS – CLASSIC WEAVE",
    category: "mens",
    price: "£70",
    isNew: true,
    isTrending: false,
    images: [
      "http://pappyneedles.co.uk/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-22-at-10.19.41-AM-1.jpeg"
    ],
    description:
      "Tailored trousers constructed from artisanal loomed fabric. Features an internal drawstring, front pleats, and a subtle taper down to the ankle for a clean, architectural silhouette.",
    material: "100% Midweight Loomed Cotton",
    fit: "Relaxed Tapered Leg",
    care: "Machine wash gentle cold or dry clean.",
    sizes: ["30", "32", "34", "36", "38"],
    colour: "Earthy Textured Weave",
    sku: "IMO-PNT-005",
  },
  {
    id: 6,
    title: "TEMIDAYO CARGO PANT",
    category: "mens",
    price: "£100",
    isNew: true,
    isTrending: true,
    images: [
      "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-9.43.13-AM.jpeg"
    ],
    description:
      "High-waisted utility meets heritage detail. The Temidayo Cargo Pant features gusseted bellow pockets, adjustable toggle ankles, and reinforced stitching throughout for a rugged yet elevated daily uniform.",
    material: "Heavyweight Cotton Drill with Adire Utility Accents",
    fit: "High-Rise Wide Leg with Taper Option",
    care: "Machine wash cold inside out. Hang dry.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colour: "Olive & Indigo Patchwork",
    sku: "TEM-CRG-006",
  },
  {
    id: 7,
    title: "TEMIDAYO JACKET",
    category: "mens",
    price: "£200",
    isNew: false,
    isTrending: true,
    images: [
      "http://pappyneedles.co.uk/wp-content/uploads/2026/08/Gemini_Generated_Image_awan4lawan4lawan.png"
    ],
    description:
      "A structured outer layer showcasing contrast panels and architectural lines. The Temidayo Jacket delivers warmth and distinct presence with a heavy metal zipper and storm flap.",
    material: "Woven Heritage Cotton & Brushed Twill",
    fit: "Boxy Workwear Cut",
    care: "Professional dry clean only.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colour: "Navy & Rust Contrast",
    sku: "TEM-JCK-007",
  },
  {
    id: 8,
    title: "ASO ALARABARA SAFARI JACKET ( MULTICOLOURED )",
    category: "mens",
    price: "£200",
    isNew: false,
    isTrending: true,
    images: [
      "https://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-9.39.51-AM.jpeg",
      "http://pappyneedles.co.uk/wp-content/uploads/2026/08/DSCF4670.jpg-scaled.jpeg"
    ],
    description:
      "Inspired by timeless expedition silhouettes, the Aso Alarabara Safari Jacket is an exquisite mosaic of multicoloured handwoven Aso-Oke textiles. Featuring four safari patch pockets and a cinched self-tie belt.",
    material: "100% Authentic Handwoven Aso-Oke Cotton",
    fit: "Relaxed Safari Cut with Adjustable Belt",
    care: "Specialist dry clean only.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colour: "Multicoloured Aso-Oke",
    sku: "ASO-SAF-008",
  },
  {
    id: 9,
    title: "4D CULTURE CO-ORD SET",
    category: "womens",
    price: "£80",
    isNew: false,
    isTrending: true,
    images: [
      "https://pappyneedles.co.uk/wp-content/uploads/2026/08/Gemini_Generated_Image_7ki52w7ki52w7ki5.png",
      "https://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-6.32.56-PM.jpeg"
    ],
    description:
      "The 4D Culture Co-ord Set delivers an effortless cohesive look with matching button-down shirt and relaxed shorts. Finished in lightweight breathable cotton with modern geometric patterns.",
    material: "100% Lightweight Summer Cotton",
    fit: "Relaxed Casual Co-ord",
    care: "Machine wash cold. Warm iron.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colour: "Monochrome & Indigo Geometric",
    sku: "4DC-CRD-009",
  },
  {
    id: 10,
    title: "Imoleayo Adire Ruffle Crop Set",
    category: "womens",
    price: "£70",
    isNew: true,
    isTrending: true,
    images: [
      "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-6.32.56-PM-2.jpeg",
      "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-7.07.12-PM-1.jpeg"
    ],
    description:
      "A celebration of vibrant movement. The Imoleayo Ruffle Crop Set pairs an asymmetrical tiered ruffle crop top with matching high-waisted shorts, handcrafted in traditional indigo-dyed Adire cotton.",
    material: "100% Artisanal Adire Cotton",
    fit: "Fitted Bodice with Flared Ruffle Sleeves",
    care: "Hand wash cold, air dry in shade.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colour: "Deep Indigo & Rust Ruffle",
    sku: "IMO-RFL-010",
  },
  {
    id: 11,
    title: "4D Culture Traveling Bag",
    category: "mens",
    price: "£100",
    isNew: false,
    isTrending: true,
    images: [
      "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-16-at-10.11.19-PM-1.jpeg"
    ],
    description:
      "Crafted for the modern wanderer. The 4D Culture Traveling Duffel features durable handwoven striped Aso-Oke textile reinforced with premium leather handles, dual-direction heavy brass zippers, and an adjustable shoulder strap.",
    material: "Heavyweight Aso-Oke Canvas & Genuine Full-Grain Leather",
    fit: "Travel Utility Duffel (50cm x 28cm x 28cm)",
    care: "Spot clean canvas with gentle sponge. Leather conditioner on trim.",
    sizes: ["ONE SIZE"],
    colour: "Terracotta & Indigo Stripe",
    sku: "4DC-BAG-011",
  },
  {
    id: 12,
    title: "4D Culture Fila",
    category: "mens",
    price: "£20",
    isNew: false,
    isTrending: true,
    images: [
      "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-16-at-10.11.31-PM.jpeg",
      "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-16-at-10.11.20-PM.jpeg"
    ],
    description:
      "The signature 4D Culture Fila (Gobi/Aso-Oke Cap) provides the crowning touch to both formal native attire and contemporary streetwear. Handwoven with diagonal stripe detailing that can be folded to either side.",
    material: "100% Handwoven Rigid Aso-Oke Cotton",
    fit: "Traditional Yoruba Fila Shape",
    care: "Dry clean or gentle spot clean only.",
    sizes: ["S", "M", "L"],
    colour: "Navy & Coral Stripe",
    sku: "4DC-FIL-012",
  },
  {
    id: 13,
    title: "Aso oke embroidery agbada",
    category: "mens",
    price: "£400",
    isNew: false,
    isTrending: true,
    images: [
      "https://pappyneedles.co.uk/wp-content/uploads/2026/08/Gemini_Generated_Image_nxqu3fnxqu3fnxqu.png",
      "https://pappyneedles.co.uk/wp-content/uploads/2026/08/Gemini_Generated_Image_vc9fhxvc9fhxvc9f.png",
      "https://pappyneedles.co.uk/wp-content/uploads/2026/08/Gemini_Generated_Image_5eo6d05eo6d05eo6.png"
    ],
    description:
      "The pinnacle of ceremonial prestige. This 3-piece Agbada ensemble is handwoven from royal-grade Aso-Oke and adorned with lavish, dense silk thread embroidery across the chest and back. Includes matching Buba and Sokoto.",
    material: "Royal-Grade Handwoven Aso-Oke with Metallic & Silk Threading",
    fit: "Majestic Flowing Agbada Cut",
    care: "Specialist ceremonial dry clean only. Store flat in garment bag.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colour: "Royal Gold & Metallic Bronze",
    sku: "ASO-AGB-013",
  },
];

export function getProductById(id: number): ProductItem | undefined {
  return allProducts.find((p) => p.id === id);
}
