import { Product, QuizQuestion, Review } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "savon-noir",
    name: "Savon noir africain",
    nameEn: "Authentic African Black Soap",
    volume: "200 g",
    tagline: "Nettoyage enzymatique doux sans décapage du film hydrolipidique",
    taglineEn: "Gentle enzymatic cleansing without stripping skin's lipid barrier",
    originalPrice: 3500,
    salePrice: 2200,
    discountPercent: 37,
    stockLeft: 18,
    initialStock: 45,
    image: "/images/savon-noir.jpg",
    textureImage: "/images/savon-noir.jpg",
    description: "Saponifié à froid à partir de cendres de gousses de cacao torréfiées et d'huile de palme rouge durable. Une texture fondante qui purifie les pores en douceur sans aucune sensation de tiraillement.",
    descriptionEn: "Cold-saponified with roasted cocoa pod ash and sustainable red palm oil. Creamy texture that clears pores without tightness.",
    benefits: [
      { icon: "sparkles", label: "Désincruste les pores sans assécher" },
      { icon: "heart", label: "Apaise rougeurs et petites imperfections" },
      { icon: "soap", label: "Mousse onctueuse 100% végétale" }
    ],
    benefitsEn: [
      { icon: "sparkles", label: "Clears pores without dehydrating" },
      { icon: "heart", label: "Soothes redness and blemishes" },
      { icon: "soap", label: "100% plant-based velvety lather" }
    ],
    origin: "Abomey-Calavi, Bénin",
    usageTip: "Faire mousser délicatement dans les mains humides, masser le visage en mouvements circulaires 45 secondes, rincer à l'eau fraîche.",
    usageTipEn: "Lather in wet hands, massage face in circular motions for 45 seconds, rinse with cool water."
  },
  {
    id: "masque-argile",
    name: "Masque à l'argile verte",
    nameEn: "Green Montmorillonite Clay Mask",
    volume: "150 g",
    tagline: "Reminéralisant volcanique & régulateur sébacé",
    taglineEn: "Volcanic remineralizing & sebum balancing",
    originalPrice: 7000,
    salePrice: 4500,
    discountPercent: 36,
    stockLeft: 22,
    initialStock: 50,
    image: "/images/argile.jpg",
    textureImage: "/images/argile.jpg",
    description: "Argile montmorillonite ultra-ventilée séchée au soleil tropical. Gorgée d'oligo-éléments purifiants, elle clarifie le grain de peau et resserre visiblement les pores sans craqueler.",
    descriptionEn: "Ultra-ventilated sun-dried montmorillonite clay packed with minerals. Tightens pores and refines skin texture without cracking.",
    benefits: [
      { icon: "fire", label: "Absorbe les toxines & excès de sébum" },
      { icon: "wand-magic-sparkles", label: "Affine le grain de peau dès la 1ère pose" },
      { icon: "shield", label: "Minéraux biodisponibles régénérants" }
    ],
    benefitsEn: [
      { icon: "fire", label: "Absorbs toxins & excess oil" },
      { icon: "wand-magic-sparkles", label: "Refines texture on 1st use" },
      { icon: "shield", label: "Bioavailable restorative minerals" }
    ],
    origin: "Plateaux de Dassa, Bénin",
    usageTip: "Mélanger une cuillère d'argile avec de l'eau tiède ou une infusion florale. Laisser poser 8 à 10 minutes sans laisser sécher totalement.",
    usageTipEn: "Mix with warm water or herbal infusion. Leave on for 8-10 minutes before drying completely."
  },
  {
    id: "huile-coco",
    name: "Huile de coco vierge",
    nameEn: "Pure Virgin Coconut Oil",
    volume: "250 ml",
    tagline: "Émollient soyeux pour cheveux soyeux et peau satinée",
    taglineEn: "Silky emollient for radiant skin and lustrous hair",
    originalPrice: 5500,
    salePrice: 3500,
    discountPercent: 36,
    stockLeft: 15,
    initialStock: 40,
    image: "/images/huile-coco.jpg",
    textureImage: "/images/huile-coco.jpg",
    description: "Pressée à froid à partir de noix de coco fraîches du littoral atlantique. Arôme délicat de chair fraîche, sans solvant ni additif de synthèse. Pénètre rapidement pour un fini satiné naturel.",
    descriptionEn: "Cold-pressed from fresh coastal coconuts. Delicate natural aroma, solvent-free. Absorbs swiftly with a silky finish.",
    benefits: [
      { icon: "sun", label: "Assouplit instantanément la fibre" },
      { icon: "droplet", label: "Acide laurique pur antibactérien" },
      { icon: "feather", label: "Toucher glissant et soyeux" }
    ],
    benefitsEn: [
      { icon: "sun", label: "Instantly softens hair & skin" },
      { icon: "droplet", label: "Natural antibacterial lauric acid" },
      { icon: "feather", label: "Smooth lightweight silky feel" }
    ],
    origin: "Grand-Popo, Bénin",
    usageTip: "En bain d'huile pré-shampoing sur pointes sèches, ou en huile de massage corporelle après la douche sur peau encore humide.",
    usageTipEn: "Apply as pre-shampoo hair oil or smooth over damp body skin after showering."
  },
  {
    id: "karite-pur",
    name: "Beurre de karité pur",
    nameEn: "Pure Raw Wild Shea Butter",
    volume: "250 g",
    tagline: "Nutrition cellulaire profonde & réparation barrière cutanée",
    taglineEn: "Deep cellular nourishment & skin barrier recovery",
    originalPrice: 6000,
    salePrice: 3900,
    discountPercent: 35,
    stockLeft: 12,
    initialStock: 35,
    image: "/images/karite.jpg",
    textureImage: "/images/karite.jpg",
    description: "Issu des amandes sauvages récoltées à la main dans l'Atacora (Bénin). Non raffiné, non désodorisé, baratté à l'eau selon la méthode ancestrale pour conserver intacts les phytostérols et vitamines A et E.",
    descriptionEn: "Hand-harvested wild shea nuts from the Atacora mountains. Unrefined, cold-churned to preserve vitamins A and E.",
    benefits: [
      { icon: "shield-halved", label: "Répare les gerçures & zones sèches" },
      { icon: "droplet", label: "Scelle l'hydratation sans film gras" },
      { icon: "leaf", label: "100% amandes sauvages non traitées" }
    ],
    benefitsEn: [
      { icon: "shield-halved", label: "Repairs dry patches & chapped skin" },
      { icon: "droplet", label: "Seals moisture without greasy residue" },
      { icon: "leaf", label: "100% wild untreated nuts" }
    ],
    origin: "Natitingou, Bénin",
    usageTip: "Chauffer une noisette entre les paumes jusqu'à fusion complète avant d'appliquer sur peau propre ou lèvres.",
    usageTipEn: "Warm a small pea-sized amount between palms until melted, press into clean skin."
  },
  {
    id: "huile-moringa",
    name: "Huile de moringa d'exception",
    nameEn: "Organic Golden Moringa Oil",
    volume: "100 ml",
    tagline: "Sérum protecteur antioxydant & éclat du teint",
    taglineEn: "Antioxidant shield serum & natural complexion radiance",
    originalPrice: 8000,
    salePrice: 5200,
    discountPercent: 35,
    stockLeft: 9,
    initialStock: 25,
    image: "/images/moringa.jpg",
    textureImage: "/images/moringa.jpg",
    description: "Surnommée « l'or vert du Sahel », extraite des graines de moringa cultivées en agroforesterie. Riche en acide béhénique et en vitamines antioxydantes pour protéger la peau des agressions urbaines.",
    descriptionEn: "Known as the Sahel's liquid gold, cold-pressed from organic moringa seeds. High in behenic acid to shield against urban stress.",
    benefits: [
      { icon: "gem", label: "Bouclier anti-pollution & radicaux libres" },
      { icon: "sun", label: "Ravive l'éclat terne sans brillance grasse" },
      { icon: "check-double", label: "Texture sérum ultra-fine à absorption rapide" }
    ],
    benefitsEn: [
      { icon: "gem", label: "Anti-pollution environmental shield" },
      { icon: "sun", label: "Revives dull tone without oily shine" },
      { icon: "check-double", label: "Featherlight fast-absorbing serum" }
    ],
    origin: "Parakou, Bénin",
    usageTip: "3 gouttes matin et soir en dernière étape du rituel visage, en pressant doucement avec les paumes sur le front, joues et cou.",
    usageTipEn: "Press 3 drops gently over face and neck morning and evening as final step."
  },
  {
    id: "baume-levres",
    name: "Baume à lèvres karité-vanille",
    nameEn: "Vanilla Shea Repair Lip Balm",
    volume: "15 g",
    tagline: "Cocon réparateur gourmand pour lèvres sensibles",
    taglineEn: "Comforting restorative cocoon for delicate lips",
    originalPrice: 2500,
    salePrice: 1500,
    discountPercent: 40,
    stockLeft: 27,
    initialStock: 60,
    image: "/images/baume.jpg",
    textureImage: "/images/baume.jpg",
    description: "Une synergie fondante de beurre de karité cru, cire d'abeille d'apiculture locale et gousse de vanille Bourbon macérée. Forme un film protecteur souple contre le vent, la climatisation et la sécheresse.",
    descriptionEn: "Raw shea butter, natural local beeswax and macerated Bourbon vanilla pod. Creates a resilient protective shield on lips.",
    benefits: [
      { icon: "heart", label: "Soulage immédiatement les tiraillements" },
      { icon: "sparkles", label: "Arôme subtil 100% naturel sans sucre ajouté" },
      { icon: "shield-halved", label: "Tenue longue durée et fini satiné non collant" }
    ],
    benefitsEn: [
      { icon: "heart", label: "Immediate relief from dryness" },
      { icon: "sparkles", label: "100% natural subtle vanilla aroma" },
      { icon: "shield-halved", label: "Long-lasting non-sticky satin finish" }
    ],
    origin: "Cotonou, Bénin",
    usageTip: "À appliquer généreusement tout au long de la journée ou en couche épaisse le soir comme masque de nuit pour les lèvres.",
    usageTipEn: "Apply throughout the day or smooth a rich layer at bedtime as an overnight lip mask."
  }
];

export const BUNDLE_HERO = {
  id: "coffret-rituel-peau-douce",
  name: "Coffret Vedette « Rituel Peau Douce »",
  nameEn: "Featured Set: 'Soft Skin Ritual'",
  subtitle: "Le trio fondamental complet pour purifier, hydrater et protéger votre peau au quotidien.",
  subtitleEn: "The essential 3-step trio to cleanse, nourish and protect your skin everyday.",
  items: ["Beurre de karité pur 250 g", "Savon noir africain 200 g", "Baume à lèvres karité-vanille 15 g"],
  itemsEn: ["Wild raw shea butter 250 g", "African black soap 200 g", "Vanilla shea lip balm 15 g"],
  itemIds: ["karite-pur", "savon-noir", "baume-levres"],
  totalValue: 7600,
  salePrice: 6500,
  savings: 1100,
  stockLeft: 14,
  initialStock: 30,
  guaranteeDays: 7,
  freeBonuses: [
    "Spatule artisanale en bois de manguier gravée SOLARA (valeur 1 500 FCFA)",
    "Guide rituel 7 jours rédigé par notre herboriste (PDF immédiat)"
  ],
  freeBonusesEn: [
    "Hand-carved engraved mango wood spatula by SOLARA (1,500 FCFA value)",
    "7-day herbalist skin ritual guide (instant PDF download)"
  ],
  image: "/images/coffret-rituel.jpg"
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    title: "Quel est votre type de peau dominant ?",
    subtitle: "Sélectionnez l'état ressenti en milieu de journée",
    options: [
      {
        label: "Sèche à très sèche",
        description: "Tiraillements fréquents, zones rugueuses, soif intense",
        icon: "droplet-slash",
        recommendProductId: "karite-pur"
      },
      {
        label: "Mixte à grasse",
        description: "Brillance sur zone T, pores visibles, besoin de netteté",
        icon: "sun",
        recommendProductId: "masque-argile"
      },
      {
        label: "Normale à réactive",
        description: "Sensible aux changements de météo, rougeurs passagères",
        icon: "heart",
        recommendProductId: "huile-moringa"
      }
    ]
  },
  {
    id: 2,
    title: "Quelle est votre priorité bienfait n°1 ?",
    subtitle: "Le résultat concret que vous attendez cette semaine",
    options: [
      {
        label: "Régénérer et nourrir en profondeur",
        description: "Retrouver une peau souple, protégée et réparée",
        icon: "shield-halved",
        recommendProductId: "karite-pur"
      },
      {
        label: "Purifier les pores en douceur",
        description: "Éliminer les impuretés sans agresser le film naturel",
        icon: "sparkles",
        recommendProductId: "savon-noir"
      },
      {
        label: "Éclat radieux & protection antioxydante",
        description: "Défatiguer le teint et protéger contre les agressions",
        icon: "gem",
        recommendProductId: "huile-moringa"
      }
    ]
  },
  {
    id: 3,
    title: "Quel format correspond le mieux à votre quotidien ?",
    subtitle: "Votre habitude de soin préférée",
    options: [
      {
        label: "Soin universel corps & visage",
        description: "Un pot généreux et multi-usages pour toute la famille",
        icon: "box-archive",
        recommendProductId: "karite-pur"
      },
      {
        label: "Sérum précieux en gouttes",
        description: "Quelques gouttes ciblées chaque matin et soir",
        icon: "droplet",
        recommendProductId: "huile-moringa"
      },
      {
        label: "Format nomade toujours dans le sac",
        description: "Un soin discret à portée de main en déplacement",
        icon: "compass",
        recommendProductId: "baume-levres"
      }
    ]
  }
];

export const REVIEWS = [
  {
    id: "rev-1",
    author: "Aminata D.",
    city: "Cotonou (Haie Vive)",
    product: "Beurre de karité pur 250 g",
    verified: true,
    rating: 5,
    comment: "Je n'avais jamais touché un karité aussi fondant. Rien à voir avec les beurres granuleux ou blanchis qu'on trouve dans le commerce. Dès le 3e jour, la sécheresse de mes coudes et de mes jambes a totalement disparu.",
    commentEn: "I had never felt such a melting shea butter before. Completely different from gritty or bleached commercial butters. By day 3, the dry patches on my elbows and legs were gone.",
    timeAgo: "Il y a 3 jours",
    aspect: "portrait" as const
  },
  {
    id: "rev-2",
    author: "Fatou K.",
    city: "Abidjan (Cocody)",
    product: "Savon noir africain 200 g",
    verified: true,
    rating: 5,
    comment: "Mon dermatologue m'avait déconseillé les savons trop moussants. Celui-ci lave parfaitement mais laisse la peau douce, sans aucune sensation de masque qui tire. La livraison en 24h à Abidjan était claire et ponctuelle.",
    commentEn: "My dermatologist warned me against foaming synthetic soaps. This one cleanses deeply yet leaves skin so soft without any pulling tightness. 24h delivery in Abidjan was prompt.",
    timeAgo: "Il y a 5 jours",
    aspect: "square" as const
  },
  {
    id: "rev-3",
    author: "Kouamé B.",
    city: "Lomé",
    product: "Huile de moringa d'exception",
    verified: true,
    rating: 5,
    comment: "L'huile est fine comme une eau florale. 3 gouttes suffisent le matin avant de sortir sous le soleil. Elle pénètre tout de suite, pas de sensation de sueur ni de brillance en fin de journée. Une merveille.",
    commentEn: "The oil is as delicate as floral water. Just 3 drops in the morning before heading out into the sun. It absorbs instantly without greasy shine by evening. Truly marvelous.",
    timeAgo: "Il y a 1 semaine",
    aspect: "landscape" as const
  },
  {
    id: "rev-4",
    author: "Grace M.",
    city: "Porto-Novo",
    product: "Coffret Vedette Rituel Peau Douce",
    verified: true,
    rating: 5,
    comment: "J'ai pris le coffret pour tester l'association savon noir + karité. Le baume vanille a sauvé mes lèvres gercées par la clim du bureau. Pour 6 500 FCFA pendant le Black Friday, c'est le meilleur rituel.",
    commentEn: "I got the bundle to experience the black soap and shea combination. The vanilla balm saved my lips from the office air-conditioning. At 6,500 FCFA, this is unmatched value.",
    timeAgo: "Il y a 2 semaines",
    aspect: "portrait" as const
  },
  {
    id: "rev-5",
    author: "Marc-Aurele S.",
    city: "Cotonou (Akpakpa)",
    product: "Masque à l'argile verte",
    verified: true,
    rating: 5,
    comment: "Texture très fine, se délaye instantanément sans grumeaux. Je le fais poser 8 minutes un dimanche sur deux, mes pores sur le nez sont resserrés et le teint est clarifié sans irritation.",
    commentEn: "Very fine texture that mixes effortlessly without clumping. I apply it for 8 minutes every other Sunday, my pores are noticeably tightened and clarity is restored.",
    timeAgo: "Il y a 2 semaines",
    aspect: "square" as const
  },
  {
    id: "rev-6",
    author: "Aïcha T.",
    city: "Dakar",
    product: "Huile de coco vierge 250 ml",
    verified: true,
    rating: 5,
    comment: "L'odeur de coco fraîche est divine, subtile et naturelle. Je l'utilise sur mes cheveux après le shampoing et sur le corps. Fini satiné magnifique.",
    commentEn: "The fresh coconut scent is heavenly, subtle and pure. I smooth it over damp hair and body after showering. Gorgeous satin sheen without heaviness.",
    timeAgo: "Il y a 3 semaines",
    aspect: "square" as const
  }
];

export const FAQS = [
  {
    q: "Ce rituel convient-il aux peaux très sensibles ou acnéiques ?",
    qEn: "Is this ritual suitable for sensitive or acne-prone skin?",
    a: "Absolument. Nos formules sont 100 % brutes et pures, sans aucun parfum synthétique, conservateur chimique, ni alcool asséchant. Le savon noir purifie les bactéries responsables des boutons sans agresser, tandis que notre karité non raffiné et l'huile de moringa régulent le sébum sans obstruer les pores.",
    aEn: "Absolutely. Our formulas are 100% raw and pure, free from synthetic fragrance, chemical preservatives and drying alcohol. Black soap purifies blemishes gently while wild shea and moringa oil balance sebum without clogging pores."
  },
  {
    q: "D'où proviennent exactement vos matières premières ?",
    qEn: "Where do your ingredients originate?",
    a: "Chaque ingrédient est tracé directement auprès de coopératives artisanales d'Afrique de l'Ouest : le karité provient des savanes de Natitingou dans l'Atacora, le moringa est cultivé en agroforesterie biologique à Parakou, et notre savon noir est cuit traditionnellement par des artisanes à Abomey-Calavi.",
    aEn: "Each ingredient is traceable directly to West African artisanal cooperatives: wild shea from the Atacora savannas in Natitingou, organic moringa from Parakou, and black soap handcrafted in Abomey-Calavi."
  },
  {
    q: "Comment se déroule la livraison et sous quel délai ?",
    qEn: "How does delivery work and how fast is it?",
    a: "Nous livrons en 24h à 48h à Cotonou, Porto-Novo, Abidjan, Lomé et environs. Dès votre commande passée, notre équipe vous contacte directement sur WhatsApp pour convenir du créneau de livraison exact qui vous convient le mieux.",
    aEn: "We deliver within 24h to 48h across Cotonou, Porto-Novo, Abidjan, Lomé and surrounding regions. Once ordered, our concierge reaches out on WhatsApp to coordinate your exact delivery slot."
  },
  {
    q: "Quels sont les moyens de paiement acceptés ?",
    qEn: "Which payment methods are accepted?",
    a: "Vous pouvez régler directement par Mobile Money (MTN Moov / Orange Money selon votre pays), par virement bancaire instantané ou directement en espèces lors de la remise de votre colis par le livreur.",
    aEn: "You can pay directly via Mobile Money (MTN, Moov, Orange Money), instant bank transfer, or cash on delivery upon package inspection."
  },
  {
    q: "En quoi consiste votre garantie satisfait ou remboursé 7 jours ?",
    qEn: "What is your 7-day money back guarantee?",
    a: "C'est très simple : utilisez les soins pendant 7 jours consécutifs. Si votre peau ne ressent pas un confort immédiat, une hydratation réelle et une douceur durable, signalez-le-nous simplement sur WhatsApp : nous vous remboursons intégralement via Mobile Money, sans questions indiscrètes.",
    aEn: "Very simple: use the care products for 7 days. If your skin does not feel soothed, hydrated and comfortable, message us on WhatsApp and we will issue an immediate 100% refund via Mobile Money."
  },
  {
    q: "Combien de temps se conservent les produits ?",
    qEn: "How long can these products be kept?",
    a: "Nos soins étant purs et dépourvus d'eau ajoutée pour les huiles et baumes, ils se conservent naturellement de 12 à 18 mois à température ambiante, à l'abri de l'humidité directe et du plein soleil.",
    aEn: "Because our botanical balms and oils are completely anhydrous (water-free), they store naturally for 12 to 18 months at room temperature away from direct humidity and sunlight."
  }
];
