export default function ReviewsSection() {
  const reviews = [
    {
      name: "xX_DeathbringerKing_Xx",
      hours: "79 years played",
      rating: 5,
      review: "can't log out. tried everything. 10/10",
      platform: "Steam",
      verified: true,
    },
    {
      name: "GrandmaRose74",
      hours: "74 years played",
      rating: 5,
      review: "I didn't choose this game but I suppose I've grown fond of it. The grandchildren DLC was unexpected but delightful.",
      platform: "GOG",
      verified: true,
    },
    {
      name: "PhilosphyMajor2006",
      hours: "21 years played",
      rating: 1,
      review: "The tutorial never ended. I am still in the tutorial. Someone please help.",
      platform: "Epic Games",
      verified: true,
    },
    {
      name: "TaxAccountant9000",
      hours: "52 years played",
      rating: 3,
      review: "The annual Tax Event is deeply unfun and inexplicably mandatory. The devs have been \"aware of this issue\" since 1913.",
      platform: "Steam",
      verified: true,
    },
    {
      name: "ChadSportsFan",
      hours: "34 years played",
      rating: 5,
      review: "bro the pvp is INSANE. haven't lost my job yet but close. really immersive",
      platform: "Steam",
      verified: true,
    },
    {
      name: "ExistentialDreadFan",
      hours: "45 years played",
      rating: 4,
      review: "Pros: Immersive. Beautiful. Unique. Cons: No pause button. Permadeath. The final boss appears to be unavoidable.",
      platform: "GOG",
      verified: true,
    },
    {
      name: "NightOwlGamer",
      hours: "29 years played",
      rating: 2,
      review: "The sleep mechanic is a mandatory 8-hour debuff that occurs EVERY 24 hours. This is exploitative game design.",
      platform: "Epic Games",
      verified: true,
    },
    {
      name: "RetiredElectrician_Bob",
      hours: "67 years played",
      rating: 5,
      review: "Best game I've ever played. Also only game I've ever played. Actually come to think of it I don't think I had a choice.",
      platform: "Steam",
      verified: true,
    },
    {
      name: "MemeMaster9999",
      hours: "17 years played",
      rating: 4,
      review: "developers dropped a patch that made my character anxious and I cannot find it in any notes. no rollback option",
      platform: "Steam",
      verified: true,
    },
  ];

  return (
    <section id="reviews" className="relative py-24 section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="divider-ornament justify-center">
            <span className="font-cinzel-decorative text-amber-600/60 text-sm tracking-widest">✦ PLAYER REVIEWS ✦</span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold mt-4 mb-2">
            <span className="gold-gradient">What Players Are Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <span className="star-rating text-2xl">★★★★★</span>
              <span className="font-cinzel text-xl font-bold text-amber-300">4.2 / 5</span>
            </div>
            <span className="text-amber-700/40">|</span>
            <span className="font-cinzel text-sm text-amber-600/60 tracking-widest">8,280,000,000 REVIEWS</span>
          </div>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="tag-pill">OVERWHELMINGLY MIXED</span>
            <span className="font-garamond text-amber-600/50 text-sm italic">But everyone keeps playing anyway</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <div key={i} className="review-card flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-cinzel text-amber-200 font-bold text-sm">{review.name}</div>
                  <div className="font-cinzel text-[10px] tracking-widest text-amber-700/60 uppercase mt-0.5">{review.hours}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="star-rating text-sm">
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </div>
                  <div className="tag-pill text-[9px]">{review.platform}</div>
                </div>
              </div>
              <p className="font-garamond text-amber-100/65 text-base leading-relaxed flex-1">
                "{review.review}"
              </p>
              {review.verified && (
                <div className="flex items-center gap-1.5 pt-2 border-t border-amber-800/20">
                  <span className="text-green-500 text-xs">✓</span>
                  <span className="font-cinzel text-[10px] tracking-widest text-green-700/60 uppercase">Verified Player</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-garamond text-amber-700/50 italic text-sm">
            * All 8,280,000,000 reviews are verified purchases. None of the purchasers remember agreeing to these terms.
          </p>
        </div>
      </div>
    </section>
  );
}
