import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RingsService {

  constructor() { }


  getProducts () {
    return [
      new Products(
        101, 
        'https://www.zales.com/productimages/processed/V-19294396_0_800.jpg?pristine=true',
        'Diamond Accent Milgrain Band in 10K Rose Gold',
        1269,
        'Sparkling diamond accents and gleaming gold combine in a simple design she can wear every day. This slim 10K rose gold band provides a narrow frame for the shimmering round diamond accents centered in each frame and bordered with intricate milgrain detailing.',
        'Rings'
      ),
      new Products (
        102,
        'https://www.zales.com/productimages/processed/V-19989928_0_800.jpg?pristine=true',
        '1/8 CT. T.W. Diamond Braid Band in 10K White Gold',
        1549,
        'Like a tightly woven braid, the two of you are in it together; let this diamond anniversary ring be the metaphor for your love story. Created in 10K white gold, this ring pairs one polished and one diamond-lined ribbon together in an intricately knit braid that cannot be undone.',
        'Rings'
      ),
      new Products (
        103,
        'https://www.zales.com/productimages/processed/V-20285591_0_800.jpg',
        'Enchanted Disney Elsa 1-1/4 CT. T.W. Diamond Snowflake Engagement Ring in 14K White Gold',
        18799,
        'As unique as the first icy snowflake, this diamond engagement ring from the Enchanted Disney Fine Jewelry Collection inspired by Elsa is a glistening choice for your bride. Crafted in 14K white gold, this thoughtful design showcases an exquisite 1 ct. diamond center stone wrapped in a lacy six-prong snowflake setting. Sparkling graduated-size diamonds line the pinched shank.',
        'Rings'
      ),
      new Products (
        104,
        'https://www.zales.com/productimages/processed/V-20280616_0_800.jpg',
        'Enchanted Disney Aurora Oval Morganite and 3/4 CT. T.W. Diamond Scallop Frame Engagement Ring in 14K Two-Tone Gold',
        8450,
        'All of loves most precious moments shine through this romantic gemstone and diamond engagement ring from the Enchanted Disney Fine Jewelry Collection inspired by Aurora. Crafted in 14K two-toned gold, this sizzling design showcases an 8.0 x 6.0mm oval-cut soft-pink morganite in rose gold wrapped in a rose gold and diamond oval frame and an open diamond-lined scalloped frame in white gold.',
        'Rings'
      ),
      new Products(
        105,
        'https://www.zales.com/productimages/processed/V-20109060_0_800.jpg',
        'Enchanted Disney Belle 1-1/4 CT. T.W. Diamond Rose Frame Engagement Ring in 14K Two-Tone Gold',
        15444,
        'When the moment is right, confess your love with this sparkling diamond engagement ring from the Enchanted Disney Fine Jewelry Collection inspired by Belle. Crafted in 14K two-toned gold, this forever bloom in rose gold wraps around a 3/4 ct. diamond. ',
        'Rings'
      ),
      new Products(
        106,
        'https://www.zales.com/productimages/processed/V-19090059_0_800.jpg',
        '1 CT. Princess-Cut Diamond Solitaire Engagement Ring in 14K White Gold (K/I3)',
        1689,
        'Simple yet sublime, as for her hand with this exquisite diamond solitaire. Standing tall in a traditional four-prong setting, an elegant 1 ct. princess-cut diamond radiates exceptional sparkle. An amazing look for the woman you adore, this 14K white gold engagement ring is finished with a bright polished shine.',
        'Rings'
      ),
      new Products (
        107,
        'https://www.zales.com/productimages/processed/V-20312231_0_800.jpg?pristine=true',
        'Enchanted Disney Villains Maleficent Black Quartz and 1/6 CT. T.W. Diamond Ring in Sterling Silver and 10K Rose Gold',
        889,
        'With elegant opulence, this gemstone and diamond ring from the Enchanted Disney Fine jewelry Villains Collection inspired by Maleficent mystifies and amazes. Crafted in sterling silver and 10K rose gold, this enticing style showcases a 10.0 x 8.0mm oval-shaped rich black rutilated quartz set in rose gold prongs that twist into thorny vines.',
        'Rings'
      ),
      new Products (
        108,
        'https://www.zales.com/productimages/processed/V-20132578_0_800.jpg',
        'Oval Rose de France Amethyst and 1/20 Ct. T.W. Diamond Ring in 14K Rose Gold',
        1200,
        'Tasteful and oh-so-tantalizing, this glistening gemstone and diamond ring is all she could ever want. Crafted in precious 14K rose gold, this forever look captivates with a dazzling 10.0 x 8.0mm oval-shaped soft-purple Rose de France amethyst embellished beneath with a pair of smaller bezel-set round amethyst and beaded detailing.',
        'Rings'
      ),
      new Products(
        109,
        'https://www.zales.com/productimages/processed/V-20312241_0_800.jpg?pristine=true',
        'Enchanted Disney Villains Maleficent 8.0mm Morganite and 1/6 CT. TW. Diamond Engagement Ring in 14K Two-Tone Gold',
        4250,
        'As unique as your bride-to-be, this engagement ring from the Enchanted Disney Fine jewelry Villains Collection inspired by Maleficent appeases both her daring and romantic sides. Created in 14K two-toned gold, this fairy-tale choice showcases an 8.0mm cushion-cut soft-pink morganite in a white gold setting adorned with alluring enhanced black diamonds.',
        'Rings'
      ),
      new Products (
        110,
        'https://www.zales.com/productimages/processed/V-19995043_0_800.jpg?pristine=true',
        'Diamond Past Present Future® Ring in 14K White Gold',
        17899,
        'Woo her, wow her and win her with this exceptional three stone Past Present Future® diamond ring. Fashioned in 14K white gold, the eye is drawn to the three shimmering round diamonds - the largest an impressive 1/2 ct. - set in perfect alignment across the diamond-lined shank.',
        'Rings'
      ),
        //@@@@ BRACELETS

      new Products (
        201,
        'https://www.zales.com/productimages/processed/V-20140416_0_800.jpg',
        'Diamond Accent Interlocking Hearts Bolo Bracelet in Sterling Silver and 10K Rose Gold',
        789,
        'Sure to become an instant favorite, this sparkling bolo bracelet celebrates your romance. Crafted in sterling silver, this sweet double-heart design features a larger heart lined with dazzling diamond accents and a smaller polished heart - created in precious 10K rose gold - that entwine at the center.',
        'Bracelets'
      ),
      new Products(
        202,
        'https://www.zales.com/productimages/processed/V-20340929_0_800.jpg?pristine=true',
        'Diamond Accent "MOM" Bolo Bracelet in Sterling Silver',
        539,
        'Celebrate your one-of-a-kind mom with this darling bolo bracelet. Fashioned in sterling silver, this modest style showcases the word "MOM" sculpted in an uppercase font. The heart-shaped "O" shimmers with a trio of diamond accents at the center.',
        'Bracelets'
      ),
      new Products(
        203,
        'https://www.zales.com/productimages/processed/V-20307354_0_800.jpg?pristine=true',
        '2 CT. T.W. Diamond "S" Tennis Bracelet in 10K White Gold',
        5689,
        'Shimmering with anytime appeal, this diamond tennis bracelet is a look she ll turn to often. Created in cool 10K white gold, this marvelous design showcases quartets of sparkling diamonds alternating with sculpted "S"-shaped links.',
        'Bracelets'
      ),
      new Products(
        204,
        'https://www.zales.com/productimages/processed/V-20017741_0_800.jpg?pristine=true',
        '1/2 CT. T.W. Diamond Cluster "X" Bracelet in Sterling Silver',
        1369,
        'Simple sophistication makes this diamond fashion bracelet a stylish anytime choice. Created in sleek sterling silver, this fluid design marries sparkling diamond clusters with polished "X" shaped links, forming a glistening and elegant garland.',
        'Bracelets'
      ),
      new Products(
        205,
        'https://www.zales.com/productimages/processed/V-20353897_0_800.jpg?pristine=true',
        'Diamond Open Multi-Row Cuff in 10K Gold',
        43569,
        'Your most daring looks deserve this incredible diamond cuff. Fashioned in warm 10K gold, this elegant multi-row style showcases an open-worked feather motif of chevron-shaped ribbons. Diamonds line the upper half of the design in sparkle.',
        'Bracelets'
      ),
      new Products(
        206,
        'https://www.zales.com/productimages/processed/V-20047882_0_800.jpg?pristine=true',
        'Oval Ruby and 4 CT. T.W. Diamond Frame Bracelet in 14K White Gold',
        14569,
        'A spectacular present your special July birthday girl, this gemstone and diamond bracelet makes an unforgettable first impression. Crafted in cool 14K white gold, this romantic design features 6.0 x 4.0mm oval-shaped bright red rubies wrapped in frames of sparkling diamonds and alternating with marquise-shaped diamond links.',
        'Bracelets'
      ),
      new Products(
        207,
        'https://www.zales.com/productimages/processed/V-20139889_0_800.jpg',
        'Diamond Frame Bracelet in 14K White Gold',
        17459,
        'Sleek and chic, this diamond bracelet is a gift she ll adore for years to come. Crafted in 14K white gold, this station design features round diamond composites centered with sparkling 1/15 ct. diamonds and connected with long diamond-lined tapered links.',
        'Bracelets'
      ),
      new Products(
        208,
        'https://www.zales.com/productimages/processed/V-20357615_0_800.jpg?pristine=true',
        'Wonder Woman™ Collection 3 CT. T.W. Diamond Wings Bangle in 10K Gold',
        16789,
        'This 3 ct. t.w. diamond wings bangle is fashioned in 10K gold. The bangle measures 7.25 inches in circumference and secures with a tongue and groove clasp. The Wonder Woman™ Collection of fine jewelry at Zales is inspired by one of the most beloved and iconic DC™ Super Heroes of all time. Embodying strength and grace, Wonder Woman™ is a modern-day warrior.',
        'Bracelets'
      ),
      new Products(
        209,
        'https://www.zales.com/productimages/processed/V-20342759_0_800.jpg?pristine=true',
        'Diamond Alternating Hearts Line Bracelet in 10K Rose Gold ',
        9759,
        'A sweet treat just for her, this diamond heart bracelet is a dazzling look she ll want to wear with everything. Fashioned in precious 10K rose gold, this romantic design showcases an endless row of heart shapes - each sparkling with a trio of 1/20 ct. diamonds - in an alternating pattern.',
        'Bracelets'
      ),
      new Products(
        210,
        'https://www.zales.com/productimages/processed/V-20130788_0_800.jpg',
        'Composite Diamond Tilted Square Frame Link Bracelet in 14K White Gold',
        10569,
        'ring on the industrial glamour with this dazzling diamond bracelet. Crafted in cool 14K white gold, each shimmering tilted square link sparkles with a composite of round and marquise-shaped diamonds - inside a textured and diamond-adorned square frame. ',
        'Bracelets'
      ),
      //@@@@@@ WATCHES

      new Products (
        301,
        'https://www.zales.com/productimages/processed/V-20299110_0_800.jpg',
        "Men's Movado Bold® Gold-Tone Mesh Watch",
        1689,
        "This men’s Movado Bold® watch features a gold-toned dial in a 40.0mm stainless steel case. The reliable Swiss quartz movement ensures accurate time keeping. The gold-tone stainless steel mesh bracelet secures with a deployment clasp.",
        'Watches'
      ),
      new Products(
        302,
        'https://www.zales.com/productimages/processed/V-20322970_0_800.jpg?pristine=true',
        "Ladies' Citizen Eco-Drive® Villains Ursula Diamond Accent Two-Tone Watch with Black Dial",
        1459,
        "This ladies' Ursula-inspired watch from the Citizen Disney Villains Collection seals the deal in fashion. In two-toned stainless steel, this 36.0mm case design features silver-toned and purple hands and diamond-accented and silver-toned markers in a black ion-plated bezel. ",
        'Watches'
      ),
      new Products(
        303,
        'https://www.zales.com/productimages/processed/V-20070770_0_800.jpg?pristine=true',
        "Ladies' Movado Esperanza 1/4 CT. T.W. Diamond Bezel Watch with Black Dial",
        8459,
        "When night falls, the dazzling Movado Esperanza diamond timepiece dresses her wrist in dramatic style. Crafted in stainless steel, this quality watch features a 28.0mm case, black dial with raised lacquer-finish outer ring, sapphire crystal, silver-toned signature dot, silver-toned hands, and 1/4 ct. t.w. of diamonds that gleam around the bezel. ",
        'Watches'
      ),
      new Products(
        304,
        'https://www.zales.com/productimages/processed/V-20309407_0_800.jpg?pristine=true',
        "Ladies' Movado Bold® Crystal Bangle Watch with Transparent Mother-of Pearl Dial",
        1149,
        "This ladies' Movado Bold® watch features a round transparent mother-of-pearl dial with silver-toned hands and a crystal-accented Movado dot at the 12 o'clock hour in a 28.0mm stainless steel case. Swiss quartz movement ensures accurate time keeping. ",
        "Watches"
      ),
      new Products(
        305,
        'https://www.zales.com/productimages/processed/V-20353835_0_800.jpg?pristine=true',
        "Men's Movado Vizio Automatic Watch with Black Carbon Fiber Dial",
        12569,
        "From the Movado Vizio Collection, this men's watch features a black carbon fiber dial with Swiss Super-LumiNova® luminous silver-toned hands, markers and signature dot at the twelve o'clock hour, a date display at the three o'clock hour, with a polished bezel and sapphire crystal in a 44.0mm stainless steel case.",
        "Watches"
      ),
      new Products(
        306,
        "https://www.zales.com/productimages/processed/V-20352810_0_800.jpg?pristine=true",
        "Ladies' Movado SE 1/5 CT. T.W. Diamond Two-Tone PVD Watch with Mother-of-Pearl Dial",
        8450,
        "From the Movado SE Collection, this ladies' watch features a mother-of-pearl dial with Swiss Super-LumiNova® luminous gold-toned hands, markers and signature dot at the twelve o'clock hour, a date display at the three o'clock hour, with a 1/5 ct. t.w. diamond-lined bezel and sapphire crystal in a 32.0mm two-toned PVD-plated stainless steel case.",
        "Watches"
      ),
      new Products(
        307,
        "https://www.zales.com/productimages/processed/V-20283559_0_800.jpg",
        "Ladies' Bulova Precisionist Diamond Accent Strap Watch with Silver-Tone Dial",
        9879,
        "From the Bulova Precisionist collection, this ladies' watch features a silver-toned dial with date display at the three o'clock hour, rose-toned luminous hands and markers, sapphire crystal, and diamond accent bezel in a 40.0mm stainless steel case.",
        "watches"
      ),
      new Products(
        308,
        "https://www.zales.com/productimages/processed/V-20283547_0_800.jpg",
        "Ladies' Bulova Rubaiyat Diamond Accent Ceramic Watch with Mother-of-Pearl Dial",
        7400,
        "From the Bulova Rubaiyat Collection, this ladies' watch features a mother-of-pearl dial with silver-toned accents, sapphire crystal, a synthetic blue spinal, diamond accent markers and bezel, and Goddess of Time case back in a 35.0mm white ceramic and stainless steel case. The reliable Japanese quartz movement ensures accurate timekeeping. ",
        "Watches"
      ),
      new Products(
        309,
        "https://www.zales.com/productimages/processed/V-20322018_0_800.jpg?pristine=true",
        "Ladies' Bulova Rubaiyat 1/3 CT. T.W. Diamond Moon Phase Strap Watch with Mother-of-Pearl Dial",
        1239,
        "From the Bulova Rubaiyat collection, this ladies' watch features a mother-of-pearl dial with sapphire crystal, 1/3 ct. t.w. diamond markers and bezel, synthetic blue spinel cabochon crown at 12 o'clock, four-hand moon phase functionality with day/date display",
        "Watches"
      ),
      new Products(
        310,
        "https://www.zales.com/productimages/processed/V-20283549_0_800.jpg",
        "Ladies' Bulova Rubaiyat Diamond Accent Rose-Tone Strap Watch with Mother-of-Pearl Dial",
        1200,
        'From the Bulova Rubaiyat Collection, this ladies watch features a mother-of-pearl dial with rose-toned accents, sapphire crystal, a synthetic blue spinal, diamond accent markers and bezel, and Goddess of Time case back in a 35.0mm rose-toned stainless steel case. The reliable Japanese quartz movement ensures accurate timekeeping. ',
        "Watches"
      ),

      //@@@@@@ NECKLASES
      new Products(
        401,
        "https://www.jeulia.com/media/catalog/product/cache/f8d407e5a8b3027ad7f16791d835e96a/5/d/5dbcfe10bb814jpg_1.jpg",
        "1/2 CT. T.W. Certified Pear-Shaped Diamond Frame Pendant in 14K White Gold",
        4590,
        "A look she'll turn to often, this fancy-shape certified diamond pendant is a bright addition to any attire. Crafted in 14K white gold, this sparkler showcases a 3/8 ct. certified pear-cut diamond - boasting a color rank of I and clarity of SI2 - wrapped in a frame of petite diamonds.",
        "Necklace"
      ),
      new Products(
        402,
        "https://www.zales.com/productimages/processed/V-20356959_0_800.jpg?pristine=true",
        "1/2 CT. T.W. Certified Pear-Shaped Diamond Frame Pendant in 14K White Gold",
        6590,
        "Set a sophisticated tone with this diamond necklace from the Zales Private Collection. Crafted in 14K white gold, this choice showcases a 1/6 ct. certified diamond boasting a color rank of F and clarity of I2. Graduated-size diamonds shimmer on either side, each wrapped in a diamond halo.",
        "Necklace"
      ),
      new Products(
        403,
        "https://www.zales.com/productimages/processed/V-20349280_0_565.jpg?pristine=true",
        "1 CT. T.W. Diamond Five Stone Necklace in 10K White Gold",
        3500,
        "your story - all the moments big and small - with this chic journey diamond necklace. Fashioned in cool 10K white gold, this sleek style features a polished bar gleaming between ribbons of graduated-size diamonds - the largest being 1/5 ct. each.",
        "Necklace"
      ),
      new Products(
        404,
        "https://www.zales.com/productimages/processed/V-20306395_0_800.jpg?pristine=true",
        "Diamond Circle Frame with Flower Pendant in 14K White Gold",
        1289,
        "Fanciful and floral, this diamond pendant elevates any attire. Created in 14K white gold, this sweet style features an open flower shape centered with a petite diamond - artfully set to enhance size and sparkle. ",
        "Necklace"
      ),
      new Products(
        405,
        "https://www.zales.com/productimages/processed/V-20122622_0_800.jpg",
        "Diamond Circle Frame with Flower Pendant in 14K White Gold",
        1599,
        "Fanciful and floral, this diamond pendant elevates any attire. Created in 14K white gold, this sweet style features an open flower shape centered with a petite diamond - artfully set to enhance size and sparkle. ",
        "Necklace"
      ),

    ]
  }

  
}
 class Products{
   id: number;
   img: string;
   name: string;
   price: number;
   description: string;
   category: string;

  constructor(
    id: number,
   img: string,
   name: string,
   price: number,
   description: string,
   category: string,
  ) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
  }
 }

