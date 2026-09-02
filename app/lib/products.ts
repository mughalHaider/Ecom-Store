export interface ProductItem {
  id: number;
  title: string;
  category: "mens" | "womens";
  price: string;
  isNew?: boolean;
  isTrending?: boolean;
  images: [string, string, string];
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
    title: "HAWTHORNE SHIRT - BROWN PLAID",
    category: "mens",
    price: "£90",
    isNew: true,
    isTrending: true,
    images: ["/products/p1.jpg", "/products/p2.jpg", "/products/p3.jpg"],
    description:
      "The Hawthorne Shirt is inspired by traditional heritage check designs, modernised for contemporary layering. Cut from a midweight brushed flannel, it drapes cleanly over the body and transitions easily from the trail to the city.",
    material: "100% Brushed Flannel",
    fit: "Relaxed Fit",
    care: "Machine wash cold, tumble dry low. Do not bleach.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colour: "Brown Plaid",
    sku: "HWTH-BRN-001",
  },
  {
    id: 2,
    title: "BELLA REVERSIBLE MINI DENIM DRESS",
    category: "womens",
    price: "£95",
    isNew: true,
    isTrending: true,
    images: ["/products/p4.jpg", "/products/p5.jpg", "/products/p6.jpg"],
    description:
      "The Bella Reversible Dress is a versatile piece built for the modern wardrobe. Wear it straight or reversed for a completely different look. Crafted from heavyweight denim with a clean silhouette that sits just above the knee.",
    material: "100% Heavyweight Denim",
    fit: "Regular Fit",
    care: "Machine wash cold, hang dry. Do not bleach.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colour: "Indigo",
    sku: "BELL-DEN-002",
  },
  {
    id: 3,
    title: "P&CO OVERSIZED DOUBLE ZIP HOODIE",
    category: "mens",
    price: "£100",
    isNew: true,
    isTrending: false,
    images: ["/products/p7.jpg", "/products/p8.jpg", "/products/p9.jpg"],
    description:
      "A P&CO staple, the Oversized Double Zip Hoodie is built for comfort and utility. The double zip opening allows for versatile styling, while the heavyweight fleece back ensures warmth across the seasons.",
    material: "85% Cotton, 15% Polyester — Heavyweight Fleece",
    fit: "Oversized Fit",
    care: "Machine wash cold, tumble dry low.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colour: "Washed Slate",
    sku: "PCO-HDD-003",
  },
  {
    id: 4,
    title: "YAMA DENIM SMOCK JACKET",
    category: "womens",
    price: "£120",
    isNew: true,
    isTrending: true,
    images: ["/products/p10.jpg", "/products/p11.jpg", "/products/p12.jpg"],
    description:
      "The Yama Smock Jacket takes the classic smock silhouette and reinterprets it in rigid, unwashed denim. The boxy cut and dropped shoulders give it a distinctly contemporary feel while remaining deeply rooted in workwear heritage.",
    material: "100% Raw Denim",
    fit: "Boxy Fit",
    care: "Machine wash cold, air dry. Colour will fade with washes.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colour: "Raw Indigo",
    sku: "YAMA-SMK-004",
  },
  {
    id: 5,
    title: "VINTAGE WASH CHORE COAT",
    category: "mens",
    price: "£135",
    isNew: true,
    isTrending: false,
    images: ["/products/p13.jpg", "/products/p14.jpg", "/products/p15.jpg"],
    description:
      "The Chore Coat is a workwear icon reinvented. Garment-washed to achieve a lived-in, broken-in feel from day one. Four patch pockets, metal hardware, and a tailored body give it versatility from the workshop to the weekend.",
    material: "100% Canvas Cotton — Garment Washed",
    fit: "Regular Fit",
    care: "Machine wash cold, tumble dry low.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colour: "Vintage Stone",
    sku: "VWCC-STN-005",
  },
  {
    id: 6,
    title: "YAMA BALLOON DENIM PANT",
    category: "womens",
    price: "£95",
    isNew: true,
    isTrending: true,
    images: ["/products/p16.jpg", "/products/p17.jpg", "/products/p18.jpg"],
    description:
      "The Yama Balloon Pant is built around exaggerated proportions and utility detail. A high rise waist, balloon leg silhouette, and tapered hem make this an elevated everyday staple for the contemporary wardrobe.",
    material: "100% Heavyweight Denim",
    fit: "High-Rise Balloon Fit",
    care: "Machine wash cold, hang dry.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colour: "Mid Wash Indigo",
    sku: "YAMA-BLN-006",
  },
  {
    id: 7,
    title: "FIELD HEAVYWEIGHT CANVAS JACKET",
    category: "mens",
    price: "£145",
    isNew: false,
    isTrending: true,
    images: ["/products/p19.jpg", "/products/p20.jpg", "/products/p21.jpg"],
    description:
      "The Field Jacket is constructed from a heavyweight waxed canvas that provides genuine weather resistance without sacrificing style. Multiple utility pockets, a corduroy collar, and brass hardware make this a lifelong investment piece.",
    material: "100% Waxed Canvas — 12oz",
    fit: "Regular Fit",
    care: "Do not machine wash. Spot clean and re-wax as needed.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colour: "Olive",
    sku: "FHCJ-OLV-007",
  },
  {
    id: 8,
    title: "CLASSIC UTILITY WORKSHIRT",
    category: "womens",
    price: "£85",
    isNew: false,
    isTrending: true,
    images: ["/products/p22.jpg", "/products/p23.jpg", "/products/p24.jpg"],
    description:
      "The Utility Workshirt is a foundational layer built for practicality. Chest and side pockets add function while the relaxed cut ensures ease of movement. Cut from a midweight cotton chambray that softens with every wash.",
    material: "100% Cotton Chambray — Midweight",
    fit: "Relaxed Fit",
    care: "Machine wash warm, tumble dry low.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colour: "Stone Chambray",
    sku: "CUWK-CHM-008",
  },
];

export function getProductById(id: number): ProductItem | undefined {
  return allProducts.find((p) => p.id === id);
}
