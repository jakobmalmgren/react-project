const products = [
  {
    id: 1,
    image: ["/newBalance1.avif", "/newBalanceBrand.avif"],
    item: "SHOES",
    description: "New Balance Hero",
    price: 90,
    category: "men",
    discount: true,
    discountValue: 30,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 2,
    image: ["/adidas1.jpg", "/adidas1pic2.jpg"],
    item: "SHOES",
    description: "Adidas 102L",
    price: 80,
    category: "men",
    discount: true,
    discountValue: 30,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 3,
    image: ["/reebok1.webp", "/reebok1pic2.webp"],
    item: "SHOES",
    description: "Reebok Original",
    price: 65,
    category: "women",
    discount: true,
    discountValue: 20,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 4,
    image: ["/adidas2.webp", "/adidas2pic2.webp"],
    item: "SHOES",
    description: "Adidas Superstar",
    price: 165,
    category: "men",
    discount: false,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 5,
    image: ["/RL1.jpg", "/RL1pic2.jpg"],
    item: "SHOES",
    description: "Ralph Lauren Retro",
    price: 135,
    category: "women",
    discount: false,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 6,
    image: ["/gant1.jpg", "/gant1pic2.jpg"],
    item: "SHOES",
    description: "Gant Mojo",
    price: 115,
    category: "women",
    discount: false,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 7,
    image: ["/gant2.jpg", "/gant2pic2.jpg"],
    item: "SHOES",
    description: "Gant Sweeper",
    price: 75,
    category: "women",
    discount: false,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 8,
    image: ["/fila1.jpg", "/fila1pic2.jpg"],

    item: "SHOES",
    description: "Fila Retro",
    price: 125,
    category: "women",
    discount: false,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 9,
    image: ["vagabond1.jpg", "/vagabond1pic2.jpg"],

    item: "SHOES",
    description: "Vagabond Trial",
    price: 65,
    category: "men",
    discount: false,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 10,
    image: ["/tommy1.jpg", "/tommy1pic2.jpg"],

    item: "SHOES",
    description: "Tommy Hilfiger H23",
    price: 95,
    category: "men",
    discount: true,
    discountValue: 20,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 11,
    image: ["/lacoste1.jpg", "/lacoste1pic2.jpg"],

    item: "SHOES",
    description: "Lacoste H76",
    price: 55,
    category: "men",
    discount: true,
    discountValue: 30,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 12,
    image: ["/vans1.jpg", "/vans1pic2.jpg"],

    item: "SHOES",
    description: "Vans Concrete 105",
    price: 95,
    category: "women",
    discount: true,
    discountValue: 20,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 13,
    image: ["/converse1.jpg", "/converse1pic2.jpg"],

    item: "SHOES",
    description: "Converse 203",
    price: 105,
    category: "women",
    discount: false,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 14,
    image: ["/RL2.jpg", "/RL2pic2.jpg"],

    item: "SHOES",
    description: "Ralph Lauren Classic",
    price: 75,
    category: "women",
    discount: true,
    discountValue: 30,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 15,
    image: ["/CK1.jpg", "/CK1pic2.jpg"],

    item: "SHOES",
    description: "Calvin Klein Solo",
    price: 105,
    category: "women",
    discount: true,
    discountValue: 20,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 16,
    image: ["/RL3.jpg", "/RL3pic2.jpg"],

    item: "SHOES",
    description: "Ralph Lauren Vessle",
    price: 85,
    category: "men",
    discount: false,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 17,
    image: ["/gant3.jpg", "/gant3pic2.jpg"],

    item: "SHOES",
    description: "Gant Clean Edition",
    price: 145,
    category: "men",
    discount: false,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 18,
    image: ["/hugo1.webp", "/hugo1pic2.webp"],

    item: "SHOES",
    description: "Hugo Boss Flame",
    price: 105,
    category: "men",
    discount: false,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 19,
    image: ["/sneakySteve1.jpg", "/sneakySteve1pic2.jpg"],

    item: "SHOES",
    description: "Sneaky Steve Conquer",
    price: 75,
    category: "women",
    discount: true,
    discountValue: 30,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 20,
    image: ["/vans2.webp", "/vans2pic2.webp"],

    item: "SHOES",
    description: "Vans Boost",
    price: 135,
    category: "women",
    discount: true,
    discountValue: 30,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },

  {
    id: 21,
    image: ["tshirtNB.webp", "tshirtNBpic2.webp"],

    item: "T-SHIRT",
    description: "New Balance",
    price: 60,
    category: "women",
    discount: false,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 22,
    image: ["/tiger1.webp", "/tiger1pic2.webp"],

    item: "T-SHIRT",
    description: "Tiger of sweden",
    price: 80,
    category: "men",
    discount: true,
    discountValue: 20,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 23,
    image: ["/reebok2.webp", "/reebok2pic2.webp"],

    item: "T-SHIRT",
    description: "Rebook",
    price: 65,
    category: "women",
    discount: false,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 24,
    image: ["/LV1.webp", "LV1pic2.webp"],

    item: "T-SHIRT",
    description: "louisVuitton",
    price: 85,
    category: "men",
    discount: false,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 25,
    image: ["/HB1.webp", "/HBpic2.webp"],

    item: "T-SHIRT",
    description: "Hugo Boss",
    price: 135,
    category: "men",
    discount: false,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 26,
    image: ["/gant4.webp", "/gant4pic2.webp"],

    item: "T-SHIRT",
    description: "Gant",
    price: 115,
    category: "men",
    discount: false,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },

  {
    id: 27,
    image: ["/gant5.webp", "/gant5pic2.webp"],

    item: "T-SHIRT",
    description: "Gant",
    price: 75,
    category: "men",
    discount: false,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 28,
    image: ["/gant6.webp", "/gant6pic2.webp"],

    item: "T-SHIRT",
    description: "Gant",
    price: 55,
    category: "men",
    discount: true,
    discountValue: 30,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 29,
    image: ["/gant7.jpg", "/gant7pic2.jpg"],

    item: "T-SHIRT",
    description: "Gant",
    price: 35,
    category: "women",
    discount: true,
    discountValue: 30,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 30,
    image: ["/morris1.webp", "/morris1pic2.webp"],

    item: "T-SHIRT",
    description: "Morris",
    price: 95,
    category: "men",
    discount: true,
    discountValue: 20,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 31,
    image: ["/LesDeux1.webp", "/LesDeux1pic2.webp"],

    item: "T-SHIRT",
    description: "Les Deux",
    price: 55,
    category: "women",
    discount: true,
    discountValue: 10,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 32,
    image: ["/RL4.webp", "/RL4pic2.webp"],

    item: "T-SHIRT",
    description: "Ralph Lauren",
    price: 45,
    category: "women",
    discount: false,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 33,
    image: ["/RL5.webp", "/RL5pic2.webp"],

    item: "T-SHIRT",
    description: "Ralph Lauren",
    price: 45,
    category: "men",
    discount: true,
    discountValue: 10,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 34,
    image: ["/CK2.jpg", "/Ck2pic2.jpg"],

    item: "T-SHIRT",
    description: "Calvin Klein",
    price: 55,
    category: "men",
    discount: false,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 35,
    image: ["/RL6.webp", "/RL6pic2.webp"],

    item: "T-SHIRT",
    description: "Ralph Lauren",
    price: 105,
    category: "women",
    discount: false,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 36,
    image: ["/gant8.webp", "/gant8pic2.webp"],

    item: "T-SHIRT",
    description: "Gant",
    price: 85,
    category: "women",
    discount: true,
    discountValue: 10,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 37,
    image: ["/nike1.webp", "/nike1pic2.webp"],

    item: "T-SHIRT",
    description: "Nike",
    price: 45,
    category: "women",
    discount: true,
    discountValue: 30,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 38,
    image: ["/nike2.webp", "/nike2pic2.webp"],

    item: "T-SHIRT",
    description: "Nike",
    price: 35,
    category: "women",
    discount: true,
    discountValue: 20,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 39,
    image: ["/hugo2.webp", "/hugo2pic2.webp"],

    item: "T-SHIRT",
    description: "Hugo Boss",
    price: 35,
    category: "women",
    discount: false,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 40,
    image: ["/gant9.jpg", "/gant9pic2.jpg"],

    item: "T-SHIRT",
    description: "Gant",
    price: 85,
    category: "men",
    discount: false,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },

  {
    id: 41,
    image: ["/pants1.webp", "/pants1pic2.webp"],

    item: "PANTS",
    description: "Resteröds",
    price: 115,
    category: "women",
    discount: false,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 42,
    image: ["/pants2.webp", "/pants2pic2.webp"],

    item: "PANTS",
    description: "Wrangler",
    price: 95,
    category: "women",
    discount: false,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },
  {
    id: 43,
    image: ["/pants3.jpg", "/pants3pic2.jpg"],

    item: "PANTS",
    description: "Fila",
    price: 85,
    category: "men",
    discount: false,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 44,
    image: ["/pants4.webp", "/pants4pic2.webp"],

    item: "PANTS",
    description: "Hugo Boss ",
    price: 75,
    category: "men",
    discount: true,
    discountValue: 30,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },
  {
    id: 45,
    image: ["/pants5.webp", "/pants5pic2.webp"],

    item: "PANTS",
    description: "Converse",
    price: 65,
    category: "women",
    discount: true,
    discountValue: 30,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 46,
    image: ["/pants16.jpg", "/pants16pic2.jpg"],

    item: "PANTS",
    description: "Tommy Jeans",
    price: 95,
    category: "men",
    discount: true,
    discountValue: 20,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },
  {
    id: 47,
    image: ["/pants6.jpg", "/pants6pic2.jpg"],

    item: "PANTS",
    description: "Jack & Jones",
    price: 155,
    category: "women",
    discount: false,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 48,
    image: ["pants7.webp", "/pants7pic2.webp"],

    item: "PANTS",
    description: "Adidas",
    price: 75,
    category: "women",
    discount: false,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },
  {
    id: 49,
    image: ["/pants8.webp", "//pants8pic2.webp"],

    item: "PANTS",
    description: "Gant",
    price: 115,
    category: "women",
    discount: false,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 50,
    image: ["/pants9.webp", "/pants9pic2.webp"],

    item: "PANTS",
    description: "Vans",
    price: 95,
    category: "men",
    discount: false,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },
  {
    id: 51,
    image: ["/pants10.webp", "/pants10pic2.webp"],

    item: "PANTS",
    description: "Hugo Boss",
    price: 225,
    category: "women",
    discount: false,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 52,
    image: ["/pants11.webp", "/pants11pic2.webp"],

    item: "PANTS",
    description: "Lee",
    price: 135,
    category: "women",
    discount: false,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },
  {
    id: 53,
    image: ["/pants12.jpg", "/pants12pic2.jpg"],

    item: "PANTS",
    description: "Jack & jones",
    price: 85,
    category: "women",
    discount: true,
    discountValue: 20,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 54,
    image: ["/pants13.webp", "pants13pic2.webp"],

    item: "PANTS",
    description: "Lee",
    price: 75,
    category: "men",
    discount: true,
    discountValue: 10,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },
  {
    id: 55,
    image: ["/pants14.webp", "/pants14pic2.webp"],

    item: "PANTS",
    description: "Jack & Jones",
    price: 135,
    category: "men",
    discount: true,
    discountValue: 30,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 56,
    image: ["/pants15.jpg", "/pants15pic2.jpg"],

    item: "PANTS",
    description: "Jack & Jones",
    price: 125,
    category: "women",
    discount: false,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },

  {
    id: 57,
    image: ["/shorts1.webp", "/shorts1pic2.webp"],

    item: "SHORTS",
    description: "Name It",
    price: 25,
    category: "boys",
    discount: false,
    about:
      " Slim-fit model for boys, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 58,
    image: ["/shirt1.jpg", "/shirt1pic2.jpg"],

    item: "T-SHIRT",
    description: "Only",
    price: 45,
    category: "boys",
    discount: false,
    about:
      " A timeless T-shirt for kids. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 59,
    image: ["/jacket1.webp", "/jacket1pic2.webp"],

    item: "JACKET",
    description: "Gant",
    price: 65,
    category: "girls",
    discount: false,
    about:
      " A modern jacket for kids. Featuring signature stripes on each sleeve, this zip-up layer is crafted in soft cotton blended with wool. A logo print at the chest, a branded badge and a woven label add the finishing touches.",
  },
  {
    id: 60,
    image: ["/pants17.webp", "/pants17pic2.webp"],

    item: "PANTS",
    description: "Name It",
    price: 85,
    category: "boys",
    discount: true,
    discountValue: 30,
    about:
      " Slim-fit model for boys, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 61,
    image: ["/pants18.webp", "/pants18pic2.webp"],

    item: "PANTS",
    description: "Gant",
    price: 45,
    category: "boys",
    discount: true,
    discountValue: 20,
    about:
      " Slim-fit model for boys, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 62,
    image: ["/pants19.webp", "/pants19pic2.webp"],

    item: "PANTS",
    description: "Nike",
    price: 35,
    category: "boys",
    discount: true,
    discountValue: 30,
    about:
      " Slim-fit model for boys, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 63,
    image: ["/pants20.webp", "/pants20pic2.webp"],

    item: "PANTS",
    description: "Adidas",
    price: 25,
    category: "girls",
    discount: true,
    discountValue: 30,
    about:
      "Super-soft tracksuit bottoms for kids. Featuring an embroidered logo on the left leg and a branded woven flag on the side seam, these cuffed tracksuit bottoms are crafted in cotton-rich velvet. The elasticated waist is designed with an adjustable drawcord for total comfort.",
  },

  {
    id: 64,
    image: ["/shirt2.webp", "/shirt2pic2.webp"],

    item: "T-SHIRT",
    description: "Vans",
    price: 55,
    category: "boys",
    discount: true,
    discountValue: 20,
    about:
      " A timeless T-shirt for kids. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 65,
    image: ["/sweater1.webp", "/sweater1pic2.jpg"],

    item: "SWEATSHIRT",
    description: "Gant",
    price: 75,
    category: "boys",
    discount: false,
    about:
      " A timeless sweatshirt for kids. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 66,
    image: ["/sweater2.webp", "/sweater2pic2.jpg"],

    item: "SWEATSHIRT",
    description: "Gant",
    price: 85,
    category: "boys",
    discount: false,
    about:
      " A timeless T-shirt for kids. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 67,
    image: ["/shoes1.webp", "/shoes1pic2.webp"],

    item: "SHOES",
    description: "Adidas",
    price: 45,
    category: "girls",
    discount: false,
    about:
      " Kids trainers , designed in mixed materials including leather and suede and featuring a monogram detail and an antibacterial insole.",
  },
  {
    id: 68,
    image: ["/shirt3.webp", "/shirt3pic2.webp"],

    item: "T-SHIRT",
    description: "Ralph Lauren",
    price: 15,
    category: "boys",
    discount: false,
    about:
      " A timeless T-shirt for kids. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 69,
    image: ["/jacket2.jpg", "/jacket2pic2.jpg"],

    item: "JACKET",
    description: "Tommy Hilfiger",
    price: 95,
    category: "women",
    discount: false,
    about:
      " A modern jacket for women. Featuring signature stripes on each sleeve, this zip-up layer is crafted in soft cotton blended with wool. A logo print at the chest, a branded badge and a woven label add the finishing touches.",
  },
  {
    id: 70,
    image: ["/jacket3.webp", "/jacket3pic2.webp"],

    item: "JACKET",
    description: "Gant",
    price: 145,
    category: "women",
    discount: false,
    about:
      " A modern jacket for women. Featuring signature stripes on each sleeve, this zip-up layer is crafted in soft cotton blended with wool. A logo print at the chest, a branded badge and a woven label add the finishing touches.",
  },
  {
    id: 71,
    image: ["/jacket4.jpg", "/jacket4pic2.jpg"],

    item: "JACKET",
    description: "Gant",
    price: 115,
    category: "women",
    discount: false,
    about:
      " A modern jacket for women. Featuring signature stripes on each sleeve, this zip-up layer is crafted in soft cotton blended with wool. A logo print at the chest, a branded badge and a woven label add the finishing touches.",
  },
  {
    id: 72,
    image: ["/jacket5.webp", "/jacket5pic2.webp"],

    item: "JACKET",
    description: "Hugo Boss",
    price: 185,
    category: "women",
    discount: false,
    about:
      " A modern jacket for women. Featuring signature stripes on each sleeve, this zip-up layer is crafted in soft cotton blended with wool. A logo print at the chest, a branded badge and a woven label add the finishing touches.",
  },
  {
    id: 73,
    image: ["/shorts2.webp", "/shorts2pic2.webp"],

    item: "SHORTS",
    description: "Odd Molly",
    price: 75,
    category: "women",
    discount: false,
    about:
      " Slim-fit model for women, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 74,
    image: ["/shorts3.webp", "/shorts3pic2.webp"],

    item: "SHORTS",
    description: "Adidas",
    price: 45,
    category: "women",
    discount: false,
    about:
      " Slim-fit model for women, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 75,
    image: ["/shorts4.webp", "/shorts4pic2.webp"],

    item: "SHORTS",
    description: "Hugo Boss",
    price: 75,
    category: "women",
    discount: false,
    about:
      " Slim-fit model for women, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 76,
    image: ["/shorts5.webp", "/shorts5pic2.webp"],

    item: "SHORTS",
    description: "Rebook",
    price: 45,
    category: "women",
    discount: false,
    about:
      " Slim-fit model for women, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 77,
    image: ["/shorts6.webp", "/shorts6pic2.webp"],

    item: "SHORTS",
    description: "Tiger Of Sweden",
    price: 65,
    category: "women",
    discount: false,
    about:
      " Slim-fit model for women, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 78,
    image: ["/sweater3.webp", "/sweater3pic2.webp"],

    item: "SWEATSHIRT",
    description: "Ralph Lauren",
    price: 65,
    category: "women",
    discount: false,
    about:
      " A timeless sweatshirt for women. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 79,
    image: ["/sweater4.webp", "/sweater4pic2.webp"],

    item: "SWEATSHIRT",
    description: "Gant",
    price: 95,
    category: "women",
    discount: false,
    about:
      " A timeless sweatshirt for women. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 80,
    image: ["/sweater5.webp", "/sweater5pic2.webp"],

    item: "SWEATSHIRT",
    description: "Lexington",
    price: 75,
    category: "women",
    discount: true,
    discountValue: 20,
    about:
      " A timeless sweatshirt for women. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 81,
    image: ["/sweater6.webp", "/sweater6pic2.webp"],

    item: "SWEATSHIRT",
    description: "Gant",
    price: 105,
    category: "women",
    discount: true,
    discountValue: 30,
    about:
      " A timeless sweatshirt for women. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 82,
    image: ["/jacket6.webp", "/jacket6pic2.webp"],

    item: "JACKET",
    description: "Gant",
    price: 134,
    category: "men",
    discount: true,
    discountValue: 40,
    about:
      " A modern jacket for men. Featuring signature stripes on each sleeve, this zip-up layer is crafted in soft cotton blended with wool. A logo print at the chest, a branded badge and a woven label add the finishing touches.",
  },
  {
    id: 83,
    image: ["/jacket7.jpg", "/jacket7pic2.jpg"],

    item: "JACKET",
    description: "Gant",
    price: 185,
    category: "men",
    discount: true,
    discountValue: 20,
    about:
      " A modern jacket for men. Featuring signature stripes on each sleeve, this zip-up layer is crafted in soft cotton blended with wool. A logo print at the chest, a branded badge and a woven label add the finishing touches.",
  },
  {
    id: 84,
    image: ["/jacket8.webp", "/jacket8pic2.webp"],

    item: "JACKET",
    description: "Calvin Klein",
    price: 215,
    category: "men",
    discount: false,
    about:
      " A modern jacket for men. Featuring signature stripes on each sleeve, this zip-up layer is crafted in soft cotton blended with wool. A logo print at the chest, a branded badge and a woven label add the finishing touches.",
  },
  {
    id: 85,
    image: ["/jacket9.jpg", "/jacket9pic2.jpg"],

    item: "JACKET",
    description: "Ralph Lauren",
    price: 115,
    category: "men",
    discount: false,
    about:
      " A modern jacket for men. Featuring signature stripes on each sleeve, this zip-up layer is crafted in soft cotton blended with wool. A logo print at the chest, a branded badge and a woven label add the finishing touches.",
  },
  {
    id: 86,
    image: ["/shorts7.webp", "/shorts7pic2.webp"],

    item: "SHORTS",
    description: "Ralph Lauren",
    price: 65,
    category: "men",
    discount: false,
    about:
      " Slim-fit model for men, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 87,
    image: ["/shorts8.webp", "/shorts8pic2.webp"],

    item: "SHORTS",
    description: "Les Deux",
    price: 85,
    category: "men",
    discount: true,
    discountValue: 20,
    about:
      " Slim-fit model for men, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 88,
    image: ["/shorts9.webp", "/shorts9pic2.webp"],

    item: "SHORTS",
    description: "Hugo Boss",
    price: 45,
    category: "men",
    discount: true,
    discountValue: 70,
    about:
      " Slim-fit model for men, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 89,
    image: ["/sweater7.jpg", "/sweater7pic2.jpg"],

    item: "SWEATSHIRT",
    description: "Tommy Hilfiger",
    price: 85,
    category: "men",
    discount: true,
    discountValue: 60,
    about:
      " A timeless sweatshirt for men. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 90,
    image: ["/sweater8.webp", "/sweater8pic2.webp"],

    item: "SWEATSHIRT",
    description: "Gant",
    price: 145,
    category: "men",
    discount: false,
    about:
      " A timeless sweatshirt for men. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 91,
    image: ["/sweater9.jpg", "/sweater9pic2.jpg"],

    item: "SWEATSHIRT",
    description: "Reebok",
    price: 45,
    category: "men",
    discount: true,
    discountValue: 70,
    about:
      " A timeless sweatshirt for men. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
];
export default products;
