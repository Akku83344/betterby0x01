'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  const handleOpenClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSurprise(true);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-soft-pink via-white to-soft-pink">
      {/* Hero Section */}
      <section className="min-h-[140px] flex items-start justify-center relative bg-gradient-to-b from-light-pink via-soft-pink to-soft-pink px-4 sm:px-6 lg:px-8 pt-20">
        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-6xl sm:text-7xl md:text-8xl text-soft-pink/30">
          🎂
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-6xl sm:text-7xl md:text-8xl text-soft-pink/30">
          🎉
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-4 sm:mb-6 text-gray-800">
            Ashu ❣️ SUNIYEEE
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I thought a lot about what to gift you. I could think of a few things, but I wanted to give you something truly special — something that makes your day the best.
            <br /><br />
            This isn't just a website. Through this website, I want to give you a moment, a feeling wrapped in words as comforting as our cuddles, to remind you how special you are — not just to me, but to all your loved ones.
            <br /><br />
            I hope this gives you a few minutes of warmth and brings a smile to your face.
          </p>
        </motion.div>
      </section>

      {/* Message Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-soft-pink via-lavender/50 to-lavender">
        <div className="max-w-4xl mx-auto space-y-16 py-8">
          {[
            {
              image: "/humare_pic/fun.jpeg",
              message: "From a brother to a friend, and now my favorite person — you have outplayed every role. Without a shadow of a doubt, you've made my life lighter and happier. You made me believe in myself and filled my days with the happiest laughs. From sleeping on video calls to our GMeet study sessions — those were the sweetest parts of my day. 💝",
              date: ""
            },
            {
              image: "/humare_pic/alllove.jpeg",
              message: "Every person who came into your life never left empty-handed — they always walked away with a lesson. You've always been a quiet strength, focusing on what you can control and letting go of what you can't. With all the love and support you give, I know for sure — one day, I'll see you at the top. 💖",
              date: ""
            },
            {
              image: "/humare_pic/iamhere.jpeg",
              message: "Through every thick and thin, one thing about you never changed — your zeal and relentless drive to do something bigger. This new phase is just the beginning of that journey. No matter where life takes you, know that I'm always in your corner. You don't have to call me on your best days — but on your worst, you can always count on me. 💕",
              date: ""
            },
            {
              image: "/humare_pic/together.jpeg",
              message: "From making silly faces on video calls to sharing a quiet understanding, there's always been a mutual respect between us — a connection that didn't need constant words. People said a lot of things, and sometimes even had opinions. But only we two live this relationship.\n\nLong laughs, endless conversations, coding sessions, LeetCode struggles, or just sitting together in silence on a muted Google Meet — it all meant something.\n\nWe both had our low days, but somehow, just knowing the other person was there made the anxiety and chaos a little more bearable. 💘",
              date: ""
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/3">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/20 to-soft-pink/10 rounded-full blur-lg"></div>
                    <img 
                      src={item.image}
                      alt={`Memory ${index + 1}`}
                      className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl relative z-10"
                    />
                  </motion.div>
                </div>
                <div className="w-2/3">
                  <motion.div
                    initial={{ x: index % 2 === 0 ? 20 : -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                  >
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {item.message}
                    </p>
                    <p className="text-sm text-gray-500 mt-4">{item.date}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Your Journey Timeline */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-lavender via-soft-pink/50 to-soft-pink relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-800 mb-4 tracking-wide">
              Your Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-soft-pink to-lavender mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <p className="text-lg text-gray-700 leading-relaxed space-y-4">
                Your journey has always been different — not louder, not bigger — just different. From a very young age, you carried a mindset that didn't quite match the world around you. And if I'm being honest, that was the first thing that drew me to you. People often questioned your mentality, but they don't know what it took — or what it cost — to think the way you do.
                <br /><br />
                You've always had a deep sense of responsibility, especially when it comes to the people you care about. Your journey made you cautious, conscious of stability and security in ways many people your age never had to be. While most were building websites or walking the usual paths, you were diving into cybersecurity — a field with high risk, uncertain rewards, and very little recognition in the beginning.
                <br /><br />
                I haven't been there through all of it — I've only heard fragments, the stories you've chosen to share. I've seen you stay up all night preparing for CTFs, pushing yourself quietly, without ever seeking attention. It wasn't about showing off — it was about growing.
                <br /><br />
                You once told me you never wanted to be average. Just so you know — you're not. And you never will be. When your cybersecurity journey didn't go the way you had envisioned, you accepted what went wrong and moved forward with more determination. And no matter where life takes you next, I hope you never stop believing in what you're capable of — because your ability to rise after a fall will always take you further than anything else.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex flex-col justify-center items-center gap-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/20 to-soft-pink/10 rounded-2xl blur-lg"></div>
                <img 
                  src="/surprise/his_journey.png" 
                  alt="Your journey" 
                  className="h-[32rem] w-[90%] mx-auto object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white relative z-10"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center space-y-4"
              >
                <p className="text-xl md:text-2xl font-serif text-gray-700 italic leading-relaxed">
                  "This is just the start. I'm rooting for every step you take."
                </p>
                <p className="text-xl md:text-2xl font-serif text-gray-700 italic leading-relaxed">
                  —from your Akshu
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-soft-pink via-lavender/50 to-lavender relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-800 mb-4 tracking-wide">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-soft-pink to-lavender mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex justify-center items-center gap-2 overflow-x-auto py-4 px-2">
            {[1, 2, 3, 4, 5].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer flex-shrink-0 w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/20 to-soft-pink/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <motion.img
                  src={`/our_journey/${index}.png`}
                  alt={`Memory ${index}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  loading="eager"
                  onError={(e) => {
                    console.error(`Error loading image ${index}:`, e);
                    e.currentTarget.src = '/humare_pic/alllove.jpeg';
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mt-16 px-4"
          >
            <div className="backdrop-blur-sm rounded-3xl p-10">
              <div className="space-y-6">
                {[
                  "It all started back in 2021. We met as junior and senior. You helped me with coding and honestly, you've played a huge role in everything I know today. You used to sit with me on GMeet, fixing my code patiently. You made sure I stayed on track and gave me reality checks even when I didn't ask for them 😤💻.",
                  "As time passed, we had no idea what was coming. Our conversations shifted to Discord, and that's when our bond started changing. That first picture — where only my cam was on — still brings back those early vibes.",
                  "Then came Crystal Stay. That place doesn't need many words. It saw our first kiss, cuddles, from awkwardness to comfort and everything in between 😏. Room numbers like 204 and 303 — they're more than just rooms for us. They hold the kind of memories that stay with you without trying ✨🛏️.",
                  "The next picture shows our long video calls — laughing, blocking and unblocking 🙄, making kissy faces 😘, falling asleep on call, giving gyaan, studying together. Those were the days — random, funny, sometimes dramatic, but always us.",
                  "Then came those unexpected plans. Me deciding to come to Kolkata, and you putting in all that effort to come pick me up — that honestly meant so much 🥺.",
                  "And this last visit — us eating murukku munch mouth to mouth, cuddling, our hot moments under the blanket 🔥, laughing out loud, making faces, showing tongues 😛, feeding each other, your reaction to chhena poda 🤢😂, looking at each other in the washroom mirror, me wearing that brown mini dress 👗 — all those moments are just ours. Just like the end of the day in last pic, we both sleeping peacefully in the brightness of our phone. Calm of chaos day 📱🌙."
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-gray-800 leading-relaxed text-lg sm:text-xl font-serif drop-shadow-sm"
                  >
                    {paragraph}
                  </motion.p>
                ))}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="block text-center text-2xl font-serif italic text-gray-900 mt-8 drop-shadow-md"
                >
                  We both lived this story 💞
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex justify-center mt-12"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/20 to-soft-pink/10 rounded-full blur-lg"></div>
                    <img
                      src="/our_journey/6.png"
                      alt="Special memory"
                      className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl relative z-10"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Surprise Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-lavender via-soft-pink/50 to-soft-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-serif mb-4 sm:mb-6 text-gray-800">
              Now it's time for the surprise 😉
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Special effort to make your day special 💝
            </p>

            {!showSurprise && !loading && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenClick}
                className="bg-white/80 backdrop-blur-sm hover:bg-white/90 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-colors shadow-lg"
              >
                Tap to open it 😉
              </motion.button>
            )}

            {loading && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-700 text-lg font-semibold mt-4"
              >
                Unwrapping your surprise... 🎁
              </motion.p>
            )}

            {showSurprise && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mt-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/20 to-soft-pink/10 rounded-2xl blur-lg"></div>
                  <img
                    src="/surprise/we_eating_munch.jpeg"
                    alt="Our special munch memory"
                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto relative z-10"
                    onError={(e) => {
                      console.error('Error loading image:', e);
                      e.currentTarget.src = '/humare_pic/alllove.jpeg';
                    }}
                  />
                </div>
                <p className="mt-4 text-lg text-gray-700 italic">
                  Munching Together 😏🍫💘 HUH
                </p>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 pt-8 border-t border-gray-200/30"
            >
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                All messages, images, and content on this website are the heartfelt creations of Akshu 💌. They are protected by copyright and are not to be copied, reused, or reproduced without permission.
                <br /><br />
                This site was made with love and effort ❤️. Every detail holds a memory — so handle it with care.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
