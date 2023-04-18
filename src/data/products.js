const products = [
  {
    id: 1,
    image: {
      img1: "/newBalance1.avif",
      img2: "/newBalanceBrand.avif",
    },
    item: "SHOES",
    description: "New Balance Hero",
    price: 90,
    category: "men",
    discount: true,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 2,
    image: {
      img1: "/nike.avif",
      img2: "/nikeBrand.avif",
    },
    item: "SHOES",
    description: "Nike 102 Max",
    price: 80,
    category: "men",
    discount: true,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 3,
    image: {
      img1: "/converse2.jpeg",
      img2: "/converseBrand.avif",
    },
    item: "SHOES",
    description: "Converse Original",
    price: 65,
    category: "women",
    discount: true,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 4,
    image: {
      img1: "/louisVuitton.avif",
      img2: "/LVBrand.avif",
    },
    item: "SHOES",
    description: "louisVuitton Supra",
    price: 165,
    category: "men",
    discount: false,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 5,
    image: {
      img1: "/nikeShoes3.avif",
      img2: "/nikeBrand.avif",
    },
    item: "SHOES",
    description: "Nike air max",
    price: 135,
    category: "women",
    discount: false,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 6,
    image: {
      img1: "/nikeShoes4.avif",
      img2: "/nikeBrand.avif",
    },
    item: "SHOES",
    description: "Nike Pro Solid",
    price: 115,
    category: "women",
    discount: false,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 7,
    image: {
      img1: "/fila.avif",
      img2: "/filaBrand.avif",
    },
    item: "SHOES",
    description: "Fila Retro",
    price: 75,
    category: "women",
    discount: false,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 8,
    image: {
      img1: "//nikeShoes5.avif",
      img2: "/nikeBrand.avif",
    },
    item: "SHOES",
    description: "Nike Air Max 905",
    price: 125,
    category: "women",
    discount: false,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 9,
    image: {
      img1: "/converse3.jpeg",
      img2: "/converseBrand.avif",
    },
    item: "SHOES",
    description: "Converse Razz",
    price: 65,
    category: "men",
    discount: false,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 10,
    image: {
      img1: "/converse4.jpeg",
      img2: "/converseBrand.avif",
    },
    item: "SHOES",
    description: "Converse Superheroes",
    price: 95,
    category: "men",
    discount: true,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 11,
    image: {
      img1: "/drMartens.jpg",
      img2: "/drMartensBrand.avif",
    },
    item: "SHOES",
    description: "Dr Martens Original",
    price: 55,
    category: "men",
    discount: true,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 12,
    image: {
      img1: "/adidasShoes.avif",
      img2: "/adidasBrand.avif",
    },
    item: "SHOES",
    description: "Adidas Concrete 105",
    price: 95,
    category: "women",
    discount: true,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 13,
    image: {
      img1: "/nikeShoes6.avif",
      img2: "/nikeBrand.avif",
    },
    item: "SHOES",
    description: "Nike Sprinter 203",
    price: 105,
    category: "women",
    discount: false,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 14,
    image: {
      img1: "/vans.avif",
      img2: "/vansBrand.avif",
    },
    item: "SHOES",
    description: "Vans Classic",
    price: 75,
    category: "women",
    discount: true,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 15,
    image: {
      img1: "nikeShoes7.avif",
      img2: "/nikeBrand.avif",
    },
    item: "SHOES",
    description: "Nike Solo",
    price: 105,
    category: "women",
    discount: true,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 16,
    image: {
      img1: "/nikeAirJordan.avif",
      img2: "/nikeBrand.avif",
    },
    item: "SHOES",
    description: "Nike Air Jordan 666",
    price: 85,
    category: "men",
    discount: false,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 17,
    image: {
      img1: "/pumashoes.avif",
      img2: "/pumaBrand.avif",
    },
    item: "SHOES",
    description: "Puma Clean Edition",
    price: 145,
    category: "men",
    discount: false,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 18,
    image: {
      img1: "/nikeShoes8.avif",
      img2: "/nikeBrand.avif",
    },
    item: "SHOES",
    description: "Nike Air Supreme",
    price: 105,
    category: "men",
    discount: false,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },
  {
    id: 19,
    image: {
      img1: "/adidas2.avif",
      img2: "/adidasBrand.avif",
    },
    item: "SHOES",
    description: "Adidas Conquer",
    price: 75,
    category: "women",
    discount: true,
    about:
      "The'SL61' shoe have been made from supple leather that's perforated at the sides and toe box to enhance breathability. They're paneled with nice colors for a striking contrast and stamped with the brand's moniker on the bottom of she shoe.",
  },
  {
    id: 20,
    image: {
      img1: "/adidas3.avif",
      img2: "/adidasBrand.avif",
    },
    item: "SHOES",
    description: "Adidas Boost",
    price: 135,
    category: "women",
    discount: true,
    about:
      "The new is retro, meaning styles like these 'Medalist Low' sneakers will look even more the part once they've picked up some scuffs - don't be afraid to wear yours every day. Made from smooth leather and suede, the inners are fitted with soft cotton-terry.",
  },

  //   ---

  {
    id: 21,
    image: {
      img1: "/t-shirt1.avif",
      img2: "/gantBrand.jpg",
    },
    item: "T-SHIRT",
    description: "Gant",
    price: 60,
    category: "women",
    discount: false,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 22,
    image: {
      img1: "/t-shirt2.avif",
      img2: "/tigerBrand.png",
    },
    item: "T-SHIRT",
    description: "Tiger of sweden",
    price: 80,
    category: "men",
    discount: true,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 23,
    image: {
      img1: "/t-shirt3.avif",
      img2: "/reebokBrand.jpg",
    },
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
    image: {
      img1: "/t-shirt4.avif",
      img2: "/LVBrand.avif",
    },
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
    image: {
      img1: "/t-shirt5.avif",
      img2: "/dolceBrand.jpg",
    },
    item: "T-SHIRT",
    description: "Dolce & Gabbana",
    price: 135,
    category: "men",
    discount: false,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 26,
    image: {
      img1: "/t-shirt6.avif",
      img2: "/gantBrand.jpg",
    },
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
    image: {
      img1: "/t-shirt7.avif",
      img2: "/filaBrand.avif",
    },
    item: "T-SHIRT",
    description: "Fila",
    price: 75,
    category: "men",
    discount: false,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 28,
    image: {
      img1: "/t-shirt8.avif",
      img2: "/nikeBrand.avif",
    },
    item: "T-SHIRT",
    description: "Nike ",
    price: 55,
    category: "men",
    discount: true,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 29,
    image: {
      img1: "/t-shirt9.avif",
      img2: "/converseBrand.avif",
    },
    item: "T-SHIRT",
    description: "Converse",
    price: 35,
    category: "women",
    discount: true,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 30,
    image: {
      img1: "/t-shirt10.avif",
      img2: "/gantBrand.jpg",
    },
    item: "T-SHIRT",
    description: "Gant",
    price: 95,
    category: "men",
    discount: true,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 31,
    image: {
      img1: "/t-shirt11.avif",
      img2: "/dolceBrand.jpg",
    },
    item: "T-SHIRT",
    description: "Dolce & Gabbana",
    price: 55,
    category: "women",
    discount: true,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 32,
    image: {
      img1: "/t-shirt12.avif",
      img2: "/adidasBrand.avif",
    },
    item: "T-SHIRT",
    description: "Adidas",
    price: 45,
    category: "women",
    discount: false,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 33,
    image: {
      img1: "/t-shirt13.avif",
      img2: "/gantBrand.jpg",
    },
    item: "T-SHIRT",
    description: "Gant",
    price: 45,
    category: "men",
    discount: true,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 34,
    image: {
      img1: "/t-shirt14.avif",
      img2: "/vansBrand.avif",
    },
    item: "T-SHIRT",
    description: "Vans",
    price: 55,
    category: "men",
    discount: false,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 35,
    image: {
      img1: "/t-shirt15.avif",
      img2: "/ralphBrand.jpg",
    },
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
    image: {
      img1: "/t-shirt16.avif",
      img2: "gantBrand.jpg",
    },
    item: "T-SHIRT",
    description: "Gant",
    price: 85,
    category: "women",
    discount: true,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 37,
    image: {
      img1: "/t-shirt17.avif",
      img2: "/nikeBrand.avif",
    },
    item: "T-SHIRT",
    description: "Nike",
    price: 45,
    category: "women",
    discount: true,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 38,
    image: {
      img1: "/t-shirt18.avif",
      img2: "/adidasBrand.avif",
    },
    item: "T-SHIRT",
    description: "Adidas",
    price: 35,
    category: "women",
    discount: true,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  {
    id: 39,
    image: {
      img1: "/t-shirt19.avif",
      img2: "/adidasBrand.avif",
    },
    item: "T-SHIRT",
    description: "Adidas",
    price: 35,
    category: "women",
    discount: false,
    about:
      "This amazing T-shirt is trimmed with delicate cotton between panels of airy cotton-voile that are pintucked and gathered for delicate texture. Ruffled along the high neckline and hem, it has a slim fitsize-shape. Wear yours with high-rise jeans or tailoring.",
  },
  {
    id: 40,
    image: {
      img1: "/t-shirt20.avif",
      img2: "/gantBrand.jpg",
    },
    item: "T-SHIRT",
    description: "Gant",
    price: 85,
    category: "men",
    discount: false,
    about:
      "The elevated T-shirt has a firm place in The Row's lineup - it was one of the original seven pieces that founders Ashley and Mary-Kate Olsen designed for the label back in 2006. This 'Chiara' tee is made from especially soft, premium cotton-jersey and cut for a boxy fit. Wear yours with everything, from neutral tailoring to inky jeans.",
  },
  //   -----
  {
    id: 41,
    image: {
      img1: "/pants1.avif",
      img2: "s/dolceBrand.jpg",
    },
    item: "PANTS",
    description: "Dolce & Gabbana",
    price: 115,
    category: "women",
    discount: false,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 42,
    image: {
      img1: "/pants2.avif",
      img2: "/gantBrand.jpg",
    },
    item: "PANTS",
    description: "Gant",
    price: 95,
    category: "women",
    discount: false,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },
  {
    id: 42,
    image: {
      img1: "/pants3.avif",
      img2: "/filaBrand.avif",
    },
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
    image: {
      img1: "/pants4.avif",
      img2: "/nikeBrand.avif",
    },
    item: "PANTS",
    description: "Nike ",
    price: 75,
    category: "men",
    discount: true,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },
  {
    id: 45,
    image: {
      img1: "/pants5.avif",
      img2: "/converseBrand.avif",
    },
    item: "PANTS",
    description: "Converse",
    price: 65,
    category: "women",
    discount: true,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 46,
    image: {
      img1: "/pants6.avif",
      img2: "/gantBrand.jpg",
    },
    item: "PANTS",
    description: "Gant",
    price: 95,
    category: "men",
    discount: true,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },
  {
    id: 47,
    image: {
      img1: "/pants7.avif",
      img2: "/dolceBrand.jpg",
    },
    item: "PANTS",
    description: "Dolce & Gabbana",
    price: 155,
    category: "women",
    discount: false,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 48,
    image: {
      img1: "/pants8.avif",
      img2: "/adidasBrand.avif",
    },
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
    image: {
      img1: "/pants9.avif",
      img2: "/gantBrand.jpg",
    },
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
    image: {
      img1: "/pants10.avif",
      img2: "/vansBrand.avif",
    },
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
    image: {
      img1: "/pants11.avif",
      img2: "/ralphBrand.jpg",
    },
    item: "PANTS",
    description: "Ralph Lauren",
    price: 225,
    category: "women",
    discount: false,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 52,
    image: {
      img1: "/pants12.avif",
      img2: "/gantBrand.jpg",
    },
    item: "PANTS",
    description: "Gant",
    price: 135,
    category: "women",
    discount: false,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },
  {
    id: 53,
    image: {
      img1: "/pants13.avif",
      img2: "/nikeBrand.avif",
    },
    item: "PANTS",
    description: "Nike",
    price: 85,
    category: "women",
    discount: true,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 54,
    image: {
      img1: "/pants14.avif",
      img2: "/adidasBrand.avif",
    },
    item: "PANTS",
    description: "Adidas",
    price: 75,
    category: "men",
    discount: true,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },
  {
    id: 55,
    image: {
      img1: "/pants15.avif",
      img2: "/adidasBrand.avif",
    },
    item: "PANTS",
    description: "Adidas",
    price: 135,
    category: "men",
    discount: true,
    about:
      "The beauty of this organic '90s Pinch Waist' jeans is that they look like a prized vintage pair but have been rigorously tested to ensure a great fit. They have a high-rise waist, straight legs and a retro buttoned fly. Wear them with nearly anything in your wardrobe, from simple tees to chunky sweaters.",
  },
  {
    id: 56,
    image: {
      img1: "/pants16.avif",
      img2: "/gantBrand.jpg",
    },
    item: "PANTS",
    description: "Gant",
    price: 125,
    category: "women",
    discount: false,
    about:
      "These jeans are faded and lightly distressed at the pockets to look like an authentic '90s pair. Made from organic cotton-denim washed in a classic hue the label calls 'Black Tea', they sit high on the waist and have a straight fit through the legs. Wear yours with everything from cropped cardigans to bodysuits.",
  },

  //   ----

  {
    id: 57,
    image: {
      img1: "/kids1.avif",
      img2: "/bossBrand.webp",
    },
    item: "SHORTS",
    description: "Hugo Boss",
    price: 25,
    category: "boys",
    discount: false,
    about:
      " Slim-fit model for boys, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 58,
    image: {
      img1: "/kidsDress.avif",
      img2: "/gantBrand.jpg",
    },
    item: "SHIRT",
    description: "Gant",
    price: 45,
    category: "boys",
    discount: false,
    about:
      " A timeless T-shirt for kids. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 59,
    image: {
      img1: "/kidsJacket.avif",
      img2: "/gantBrand.jpg",
    },
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
    image: {
      img1: "/kidsPants3.avif",
      img2: "/ralphBrand.jpg",
    },
    item: "PANTS",
    description: "Ralph Lauren",
    price: 85,
    category: "boys",
    discount: true,
    about:
      " Slim-fit model for boys, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 61,
    image: {
      img1: "/kidsPants4.avif",
      img2: "/adidasBrand.avif",
    },
    item: "PANTS",
    description: "Adidas",
    price: 45,
    category: "boys",
    discount: true,
    about:
      " Slim-fit model for boys, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 62,
    image: {
      img1: "/kidsPants5.avif",
      img2: "/nikeBrand.avif",
    },
    item: "PANTS",
    description: "Nike",
    price: 35,
    category: "boys",
    discount: true,
    about:
      " Slim-fit model for boys, designed in stretch piqué fabric with multiple cargo pockets and signature detailing at the rear . Also with belt loops Crafted in stretch fabric for easy movement, these smart product feature elasticated hems for a casual touch. Sizes up to 10 years include an adjustable waist for lasting",
  },
  {
    id: 63,
    image: {
      img1: "/kidsPants6.avif",
      img2: "/adidasBrand.avif",
    },
    item: "PANTS",
    description: "Adidas",
    price: 25,
    category: "girls",
    discount: true,
    about:
      "Super-soft tracksuit bottoms for kids. Featuring an embroidered logo on the left leg and a branded woven flag on the side seam, these cuffed tracksuit bottoms are crafted in cotton-rich velvet. The elasticated waist is designed with an adjustable drawcord for total comfort.",
  },

  {
    id: 64,
    image: {
      img1: "/kidsShirt.avif",
      img2: "/bossBrand.webp",
    },
    item: "SHIRT",
    description: "Hugo Boss",
    price: 55,
    category: "boys",
    discount: true,
    about:
      " A timeless T-shirt for kids. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 65,
    image: {
      img1: "/kidsSweater.avif",
      img2: "/gantBrand.jpg",
    },
    item: "SWEATSHIRT",
    description: "Gant",
    price: 75,
    category: "boys",
    discount: false,
    about:
      " A timeless T-shirt for kids. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
  {
    id: 66,
    image: {
      img1: "/kidsSweater2.avif",
      img2: "/gantBrand.jpg",
    },
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
    image: {
      img1: "/kidsShoes.jpg",
      img2: "/adidasBrand.avif",
    },
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
    image: {
      img1: "/kidsTshirt2.avif",
      img2: "/reebokBrand.jpg",
    },
    item: "T-SHIRT",
    description: "Rebook",
    price: 15,
    category: "boys",
    discount: false,
    about:
      " A timeless T-shirt for kids. Featuring a logo print and a branded flag on the side seam, this crew-neck T-shirt is crafted in pure-cotton jersey for natural comfort. Snap fasteners at the shoulder allow for easy changing.",
  },
];
export default products;
