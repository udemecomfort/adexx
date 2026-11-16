import React from "react";
import imgbig1 from "../assets/womaninfo.png";
import imgbig2 from "../assets/maninfo.png";
import firstellipse from "../assets/ellipseInfo1.png";
import secondellipse from "../assets/ellipseinfo2.png";

// To change an image, swap the import above (or the `image` / `badge` value here).
const cards = [
  {
    image: imgbig2,
    imageAlt: "Driving instructor guiding a student before a road test",
    badge: secondellipse,
    items: [
      {
        title: "Expert Guidance",
        text: "Benefit from proven teaching techniques tailored to your needs, whether you're a beginner or brushing up on your skills for the next road test.",
      },
      {
        title: "Prepare for Road Tests",
        text: "Master the skills needed to excel in ICBC's Class 7 (\u201CN\u201D license) and Class 5 (full license) road tests. Our lessons are structured to build confidence and ensure you're test-ready.",
      },
      {
        title: "Convenient Pick-Up and Drop-Off",
        text: "Save time with pick-up and drop-off from your home, school, or work. We work around your schedule, with lesson times to fit your busy life, including evenings and weekends.",
      },
    ],
  },
  {
    image: imgbig1,
    imageAlt: "Student driver learning in a dual-controlled training vehicle",
    badge: firstellipse,
    items: [
      {
        title: "Defensive Driving Techniques",
        text: "Learn to drive safely and confidently with a focus on defensive driving techniques that keep you and others safe on the road.",
      },
      {
        title: "Modern Training Vehicles",
        text: "Practice in clean, well-maintained, dual-controlled vehicles for a safe and comfortable learning experience.",
      },
    ],
  },
];

const InfoDS = () => {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-14 lg:grid-cols-2 lg:gap-10">
        {cards.map((card, i) => (
          <article
            key={i}
            className="mx-auto flex w-full max-w-[560px] flex-col"
          >
            {/* Photo: same ratio on both cards so they line up */}
            <img
              src={card.image}
              alt={card.imageAlt}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-t-2xl object-cover"
            />

            {/* Red panel overlaps the bottom of the photo, no absolute positioning */}
            <div className="relative -mt-10 mx-4 flex flex-1 flex-col rounded-2xl bg-[#FA1D04] px-6 pb-6 pt-14 text-white shadow-xl sm:-mt-14 sm:mx-6 sm:px-8">
              <img
                src={card.badge}
                alt=""
                aria-hidden="true"
                className="absolute -top-10 left-6 w-20 sm:-top-12 sm:w-24"
              />

              <div className="divide-y divide-white/25">
                {card.items.map((item) => (
                  <div key={item.title} className="py-5 first:pt-0 last:pb-0">
                    <h3 className="mb-2 text-xl font-semibold sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/95 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InfoDS;