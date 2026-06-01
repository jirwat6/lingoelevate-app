// LingoElevate Curriculum Database - Global Browser Version
window.LingoPlacementTest = [
  {
    id: "p1",
    skill: "listening",
    text: "Hello, my name is John. I am a software developer from New York.",
    question: "Where is John from?",
    options: ["London", "New York", "Chicago", "Los Angeles"],
    answer: "New York"
  },
  {
    id: "p2",
    skill: "reading",
    passage: "The sun rises in the east and sets in the west. It provides light and warmth, which are essential for living things on Earth. Plants use sunlight to create food through a process called photosynthesis.",
    question: "What process do plants use sunlight for?",
    options: ["Respiration", "Photosynthesis", "Digestion", "Combustion"],
    answer: "Photosynthesis"
  },
  {
    id: "p3",
    skill: "grammar",
    question: "Choose the correct sentence:",
    options: [
      "She don't like apples.",
      "She doesn't likes apples.",
      "She doesn't like apples.",
      "She not like apples."
    ],
    answer: "She doesn't like apples."
  },
  {
    id: "p4",
    skill: "grammar",
    question: "If I _____ rich, I would travel around the world.",
    options: ["am", "was", "were", "be"],
    answer: "were"
  },
  {
    id: "p5",
    skill: "vocabulary",
    question: "What is the synonym of 'METICULOUS'?",
    options: ["Careless", "Detailed/Precise", "Fast", "Humble"],
    answer: "Detailed/Precise"
  },
  {
    id: "p6",
    skill: "writing",
    question: "Write a short sentence describing your favorite food.",
    type: "writing-check",
    keywords: ["food", "delicious", "love", "like", "eat", "favorite", "because"],
    minLength: 15
  }
];

window.LingoLevelExams = {
  basic: [
    {
      id: "eb1",
      skill: "listening",
      text: "The cat is sleeping under the blue table.",
      question: "Where is the cat sleeping?",
      options: ["On the table", "Under the table", "Next to the door", "In the box"],
      answer: "Under the table"
    },
    {
      id: "eb2",
      skill: "grammar",
      question: "Which of the following is correct?",
      options: ["I has two sisters.", "I have two sisters.", "I having two sisters.", "I is having two sisters."],
      answer: "I have two sisters."
    },
    {
      id: "eb3",
      skill: "reading",
      passage: "Mary has a little dog. Its name is Max. Max is white and very playful. He loves to eat bones and run in the park.",
      question: "What color is Max?",
      options: ["Black", "Brown", "White", "Grey"],
      answer: "White"
    }
  ],
  intermediate: [
    {
      id: "ei1",
      skill: "listening",
      text: "Although it was raining heavily, the football match was not canceled. They played until the final whistle.",
      question: "What happened to the football match?",
      options: ["It was canceled.", "It was postponed.", "It went on despite the rain.", "It was moved indoors."],
      answer: "It went on despite the rain."
    },
    {
      id: "ei2",
      skill: "grammar",
      question: "By the time we arrived at the station, the train _____ already left.",
      options: ["has", "had", "will have", "was"],
      answer: "had"
    },
    {
      id: "ei3",
      skill: "reading",
      passage: "Renewable energy sources such as solar power, wind energy, and hydroelectricity are gaining popularity worldwide. They emit fewer greenhouse gases compared to fossil fuels, helping to combat global climate change.",
      question: "Why are renewable energy sources gaining popularity?",
      options: [
        "They are cheaper to install.",
        "They generate more electricity.",
        "They emit fewer greenhouse gases.",
        "They are unlimited in all regions."
      ],
      answer: "They emit fewer greenhouse gases."
    }
  ],
  advanced: [
    {
      id: "ea1",
      skill: "listening",
      text: "Given the unprecedented economic challenges, the board has reluctantly decided to downsize the research division to preserve capital.",
      question: "Why is the research division being downsized?",
      options: [
        "To hire new engineers.",
        "Due to unprecedented economic challenges.",
        "Because the research was unsuccessful.",
        "To expand the marketing team."
      ],
      answer: "Due to unprecedented economic challenges."
    },
    {
      id: "ea2",
      skill: "grammar",
      question: "Hardly _____ entered the room when the lights went out.",
      options: ["had he", "he had", "has he", "did he"],
      answer: "had he"
    },
    {
      id: "ea3",
      skill: "reading",
      passage: "Artificial Intelligence (AI) has progressed from simple rule-based automation to sophisticated deep learning neural networks. While this advancement drives efficiency across industries, it simultaneously spawns intense ethical dilemmas surrounding algorithmic bias, data privacy, and labor displacement.",
      question: "Which of the following is NOT mentioned as an ethical dilemma of AI?",
      options: [
        "Algorithmic bias",
        "Data privacy",
        "Labor displacement",
        "Energy consumption of servers"
      ],
      answer: "Energy consumption of servers"
    }
  ],
  master: [
    {
      id: "em1",
      skill: "listening",
      text: "The paradigm shift in quantum mechanics, albeit met with initial skepticism, fundamentally restructured our apprehension of particle-wave duality and local realism.",
      question: "What was the initial reaction to the paradigm shift in quantum mechanics?",
      options: ["Immediate acceptance", "Complete ignorance", "Skepticism", "Enthusiasm"],
      answer: "Skepticism"
    },
    {
      id: "em2",
      skill: "grammar",
      question: "Were it not for your timely intervention, the company _____ bankrupted.",
      options: [
        "would have been",
        "will be",
        "had been",
        "would be"
      ],
      answer: "would have been"
    },
    {
      id: "em3",
      skill: "reading",
      passage: "Epistemology, the philosophical study of the nature, origin, and limits of human knowledge, struggles with the tripartite definition of knowledge as 'justified true belief.' Edmund Gettier famously challenged this by presenting scenarios where individuals held justified true beliefs that occurred purely by coincidence, demonstrating that justification alone is insufficient for true knowledge.",
      question: "What did Edmund Gettier's counterexamples seek to demonstrate?",
      options: [
        "Knowledge is completely unobtainable.",
        "Justification, truth, and belief are fully independent concepts.",
        "Justified true belief can still fail to constitute knowledge if it relies on coincidence.",
        "Epistemology is obsolete in modern philosophy."
      ],
      answer: "Justified true belief can still fail to constitute knowledge if it relies on coincidence."
    }
  ]
};

window.LingoCurriculum = {
  basic: {
    title: "Basic (พื้นฐาน)",
    description: "เน้นการสื่อสารในชีวิตประจำวัน ประโยคทักทาย และคำศัพท์พื้นฐาน",
    skills: {
      listening: [
        {
          id: "bl1",
          title: "Daily Greetings",
          prompt: "ฟังแล้วจับประเด็นการทักทาย",
          speechText: "Good morning! How are you doing today?",
          question: "ประโยคนี้เป็นการทักทายในช่วงเวลาใด?",
          options: ["ตอนบ่าย", "ตอนเช้า", "ตอนเย็น", "ตอนกลางคืน"],
          answer: "ตอนเช้า"
        },
        {
          id: "bl2",
          title: "Telling the Time",
          prompt: "ฟังแล้ววิเคราะห์เวลา",
          speechText: "The train leaves at a quarter past five.",
          question: "รถไฟออกเดินทางเวลาใด?",
          options: ["05:15", "05:45", "05:30", "15:00"],
          answer: "05:15"
        }
      ],
      speaking: [
        {
          id: "bs1",
          title: "Introduction",
          prompt: "แนะนำตัวเองง่ายๆ (ออกเสียงประโยคด้านล่าง)",
          phrase: "Hello, nice to meet you.",
          phonetic: "เฮล-โล, ไนซ์ ทู มีท ยู"
        },
        {
          id: "bs2",
          title: "Asking for Help",
          prompt: "ถามหาทางไปยังสถานี",
          phrase: "Excuse me, where is the station?",
          phonetic: "เอ็กซ์-คิวส์ มี, แวร์ อิส เดอะ สเต-ชัน"
        }
      ],
      reading: [
        {
          id: "br1",
          title: "The Cute Puppy",
          passage: "Bobby is a small brown puppy. He has long ears and a short tail. Bobby lives in a warm house with the Smith family. Every afternoon, he plays in the garden with a small red ball.",
          question: "What color is Bobby's puppy?",
          options: ["White", "Brown", "Black", "Red"],
          answer: "Brown"
        },
        {
          id: "br2",
          title: "Healthy Fruits",
          passage: "Apples are delicious fruits. They can be red, green, or yellow. Eating an apple every day is good for your health because they have vitamins and fiber.",
          question: "Why is eating an apple good for your health?",
          options: ["Because they are green", "Because they have vitamins and fiber", "Because they are sweet", "Because they grow on trees"],
          answer: "Because they have vitamins and fiber"
        }
      ],
      writing: [
        {
          id: "bw1",
          title: "Introduce Yourself",
          prompt: "เขียนแนะนำชื่อของคุณและบอกว่าคุณมาจากที่ไหน (อย่างน้อย 15 ตัวอักษร)",
          keywords: ["name", "is", "from", "live", "am"],
          minLength: 15,
          placeholder: "My name is Somchai and I am from Thailand."
        },
        {
          id: "bw2",
          title: "My Pet",
          prompt: "เขียนอธิบายเกี่ยวกับสัตว์เลี้ยงที่คุณชอบ หรือสัตว์ที่คุณอยากเลี้ยง (อย่างน้อย 15 ตัวอักษร)",
          keywords: ["dog", "cat", "pet", "like", "love", "cute", "animal"],
          minLength: 15,
          placeholder: "I like dogs because they are friendly and smart."
        }
      ]
    }
  },
  intermediate: {
    title: "Intermediate (ระดับกลาง)",
    description: "เพิ่มทักษะบทสนทนา การใช้ Tense และความรู้ศัพท์ด้านการทำงานทั่วไป",
    skills: {
      listening: [
        {
          id: "il1",
          title: "Making an Appointment",
          prompt: "ฟังการนัดหมายคลินิกทันตกรรม",
          speechText: "I'd like to schedule a dental checkup for next Tuesday at three PM, please.",
          question: "ผู้พูดต้องการนัดหมายในวันและเวลาใด?",
          options: ["วันอังคารหน้า บ่ายสามโมง", "วันจันทร์หน้า บ่ายสามโมง", "วันพุธนี้ บ่ายสองโมง", "วันอังคารหน้า สี่โมงเย็น"],
          answer: "วันอังคารหน้า บ่ายสามโมง"
        },
        {
          id: "il2",
          title: "Airport Announcement",
          prompt: "ฟังประกาศการเปลี่ยนประตูขึ้นเครื่อง",
          speechText: "Attention passengers of flight TG415 to Bangkok, the departure gate has been changed to Gate 22A.",
          question: "เที่ยวบิน TG415 มีการเปลี่ยนแปลงอะไร?",
          options: ["เลื่อนเวลาเดินทาง", "เปลี่ยนประตูทางออกขึ้นเครื่อง", "ยกเลิกเที่ยวบิน", "สัมภาระสูญหาย"],
          answer: "เปลี่ยนประตูทางออกขึ้นเครื่อง"
        }
      ],
      speaking: [
        {
          id: "is1",
          title: "Expressing Opinion",
          prompt: "ฝึกพูดเพื่อแสดงความคิดเห็นในที่ทำงาน",
          phrase: "In my opinion, we should focus on marketing.",
          phonetic: "อิน มาย โอ-พิน-ยัน, วี ชูด โฟ-คัส ออน มาร์-เก็ต-ติง"
        },
        {
          id: "is2",
          title: "Apologizing",
          prompt: "กล่าวคำขอโทษเนื่องจากการส่งรายงานล่าช้า",
          phrase: "I sincerely apologize for the delay in sending the report.",
          phonetic: "ไอ ซิน-เซีย-ลี อะ-พอ-โล-ไจส์ ฟอร์ เดอะ ดี-เลย์ อิน เซน-ดิง เดอะ รี-พอร์ต"
        }
      ],
      reading: [
        {
          id: "ir1",
          title: "The Rise of E-commerce",
          passage: "In recent years, e-commerce has grown exponentially. More consumers prefer shopping online due to its convenience, variety, and competitive pricing. High-speed internet and mobile payment technologies have further accelerated this trend, forcing traditional brick-and-mortar stores to adapt by developing their own digital storefronts.",
          question: "What is a primary reason consumers prefer online shopping according to the text?",
          options: ["Better quality goods", "Convenience and competitive pricing", "Immediate delivery", "No taxes"],
          answer: "Convenience and competitive pricing"
        },
        {
          id: "ir2",
          title: "Importance of Water",
          passage: "Staying hydrated is crucial for maintaining physical performance and cognitive function. Water regulates body temperature, lubricates joints, and aids in digestion. Health professionals generally recommend drinking at least eight glasses of water per day, though individual needs may vary based on activity levels and climate.",
          question: "Which bodily function is NOT listed as being aided by water?",
          options: ["Regulating temperature", "Lubricating joints", "Aiding digestion", "Pumping blood"],
          answer: "Pumping blood"
        }
      ],
      writing: [
        {
          id: "iw1",
          title: "Email Request",
          prompt: "เขียนอีเมลขอเลื่อนเดดไลน์งานกับผู้จัดการของคุณ (อย่างน้อย 30 ตัวอักษร)",
          keywords: ["deadline", "delay", "postpone", "project", "apologize", "request", "due"],
          minLength: 30,
          placeholder: "Dear Manager, I am writing to request a deadline extension for our project..."
        },
        {
          id: "iw2",
          title: "Healthy Lifestyle",
          prompt: "เขียนอธิบายว่าคุณรักษาและใส่ใจสุขภาพอย่างไรในชีวิตประจำวัน (อย่างน้อย 30 ตัวอักษร)",
          keywords: ["exercise", "eat", "healthy", "sleep", "water", "fruit", "avoid", "gym"],
          minLength: 30,
          placeholder: "To stay healthy, I try to exercise daily and eat nutritious foods..."
        }
      ]
    }
  },
  advanced: {
    title: "Advanced (ระดับสูง)",
    description: "ฝึกฝนการวิเคราะห์ประเด็นที่ซับซ้อน การใช้สำนวนระดับสูง และโครงสร้างประโยคเฉพาะ",
    skills: {
      listening: [
        {
          id: "al1",
          title: "Corporate Restructuring",
          prompt: "ฟังทิศทางนโยบายเพื่อลดการขาดทุนขององค์กร",
          speechText: "To mitigate our Q3 deficits, we are implementing a comprehensive restructuring strategy that prioritizes digital transition over brick-and-mortar operations.",
          question: "กลยุทธ์หลักเพื่อแก้ปัญหายอดขาดทุนในไตรมาส 3 คืออะไร?",
          options: [
            "ลดจำนวนพนักงานทั้งหมดลงครึ่งหนึ่ง",
            "เน้นการเปลี่ยนผ่านสู่ดิจิทัลและลดหน้าร้านปกติลง",
            "เพิ่มราคาสินค้าขึ้น 10 เปอร์เซ็นต์",
            "ขยายสาขาหน้าร้านเพิ่มขึ้น"
          ],
          answer: "เน้นการเปลี่ยนผ่านสู่ดิจิทัลและลดหน้าร้านปกติลง"
        },
        {
          id: "al2",
          title: "Climate Change and Biodiversity",
          prompt: "ฟังผลกระทบจากอุณหภูมิโลกที่เพิ่มขึ้นต่อระบบนิเวศน์ทางทะเล",
          speechText: "Global temperature anomalies have induced massive coral bleaching events, severely threatening marine biodiversity and coastal economies.",
          question: "เหตุใดความหลากหลายทางชีวภาพทางทะเลจึงเผชิญความเสี่ยง?",
          options: ["ขยะพลาสติกในทะเล", "การทำประมงเกินขนาด", "ปรากฏการณ์ปะการังฟอกขาวจากอุณหภูมิโลกสูงขึ้น", "น้ำมันรั่วไหล"],
          answer: "ปรากฏการณ์ปะการังฟอกขาวจากอุณหภูมิโลกสูงขึ้น"
        }
      ],
      speaking: [
        {
          id: "as1",
          title: "Negotiating Deals",
          prompt: "ฝึกพูดเจรจาขอเงื่อนไขการเงินที่ดีขึ้นในการทำธุรกิจ",
          phrase: "We appreciate your offer, but we need to negotiate a more competitive interest rate.",
          phonetic: "วี แอพ-พรี-ชี-เอท ยัวร์ ออฟ-เฟอร์, บัท วี นีด ทู เน-โก-ชี-เอท อะ มอร์ คอม-เพท-ทิ-ทิฟ อิน-เทรส เรท"
        },
        {
          id: "as2",
          title: "Abstract Concepts",
          prompt: "ฝึกพูดประโยคแสดงแนวคิดการพัฒนาที่ยั่งยืน",
          phrase: "Sustainable development necessitates balancing ecological preservation with robust economic growth.",
          phonetic: "ซัส-เทน-นะ-เบิล ดี-เวล-ลอป-เมินต์ เน-เซส-ซิ-เทตส์ บาล-ลัน-ซิง อี-โค-โล-จิ-คัล เปร-เซอร์-เว-ชัน วิธ โร-บัสต์ อี-โค-โน-มิก โกรว์ธ"
        }
      ],
      reading: [
        {
          id: "ar1",
          title: "The Psychological Cost of Social Media",
          passage: "Recent psychological studies highlight a direct correlation between excessive screen time on social media and increased rates of anxiety and loneliness in young adults. The idealized representations of lives curated by online influencers foster a culture of perpetual comparison, leading to what psychologists label 'relative deprivation.' Consequently, experts advocate for digital detoxes and structural algorithmic interventions to prioritize organic human interactions over engagement metrics.",
          question: "According to the passage, what contributes directly to the 'relative deprivation' experienced by social media users?",
          options: [
            "High subscription costs of platforms",
            "Comparing oneself to the curated, idealized lives of influencers",
            "Inadequate security of personal data",
            "Lack of user-friendly interfaces"
          ],
          answer: "Comparing oneself to the curated, idealized lives of influencers"
        },
        {
          id: "ar2",
          title: "The Concept of Circular Economy",
          passage: "A circular economy represents an alternative to the traditional linear 'take-make-dispose' industrial model. It prioritizes the design of durable, repairable products, reliance on renewable energy, and the systemic recycling of waste back into the production cycle. By decoupling economic growth from finite resource consumption, the circular model addresses both environmental degradation and supply chain vulnerabilities.",
          question: "Which action aligns with a circular economy model?",
          options: [
            "Manufacturing low-cost disposable items",
            "Designing products that are durable and easily repaired",
            "Relying solely on fossil fuels",
            "Expanding landfill capacity for trash storage"
          ],
          answer: "Designing products that are durable and easily repaired"
        }
      ],
      writing: [
        {
          id: "aw1",
          title: "Technology Debate",
          prompt: "เขียนวิพากษ์ในประเด็น: 'ปัญญาประดิษฐ์ (AI) จะเข้ามาแทนที่ตำแหน่งงานของมนุษย์ทั้งหมดหรือไม่?' (อย่างน้อย 60 ตัวอักษร)",
          keywords: ["opinion", "artificial intelligence", "jobs", "replace", "human", "technology", "because", "skills", "creativity"],
          minLength: 60,
          placeholder: "In my opinion, technology like artificial intelligence will transform roles, but human creativity and emotional intelligence remain irreplaceable..."
        },
        {
          id: "aw2",
          title: "Global Warming Solutions",
          prompt: "วิเคราะห์และเสนอแนวทางแก้ไขปัญหาโลกร้อนอย่างยั่งยืนที่สุด (อย่างน้อย 60 ตัวอักษร)",
          keywords: ["global warming", "renewable energy", "carbon", "reduce", "government", "action", "environment", "solution", "sustainable"],
          minLength: 60,
          placeholder: "To solve global warming, we need to transition rapidly from fossil fuels to renewable energy sources like wind and solar..."
        }
      ]
    }
  },
  master: {
    title: "Master (ระดับเชี่ยวชาญ)",
    description: "ทักษะภาษาอังกฤษขั้นสูงสุด เสมือนวิเคราะห์นโยบายต่างประเทศ นักการทูต หรือนักวิชาการ",
    skills: {
      listening: [
        {
          id: "ml1",
          title: "Geopolitical Implications",
          prompt: "ฟังการประเมินความมั่นคงในเวทีนโยบายต่างประเทศแบบวิชาการ",
          speechText: "The expansionist policies of neighboring hegemonies, coupled with bilateral tariff impasses, have effectively destabilized the regional security architecture.",
          question: "อะไรคือปัจจัยที่สั่นคลอนความมั่นคงในภูมิภาคตามที่ผู้พูดวิเคราะห์?",
          options: [
            "การแข่งขันทางกีฬาและการท่องเที่ยว",
            "นโยบายการขยายอำนาจของประเทศเพื่อนบ้านและทางตันของภาษีศุลกากรแบบทวิภาคี",
            "ข้อพิพาททางวัฒนธรรมในชุมชน",
            "การเปลี่ยนแปลงสภาพภูมิอากาศเพียงอย่างเดียว"
          ],
          answer: "นโยบายการขยายอำนาจของประเทศเพื่อนบ้านและทางตัน of ภาษีศุลกากรแบบทวิภาคี"
        },
        {
          id: "ml2",
          title: "Epistemological Discourse",
          prompt: "ฟังการบรรยายเชิงปรัชญาความรู้",
          speechText: "Empiricism posits that knowledge is derived primarily from sensory experiences, whereas rationalism asserts that intellectual intuition constitutes the cornerstone of epistemic justification.",
          question: "ตามหลักประจักษ์นิยม (Empiricism) ความรู้เกิดจากสิ่งใดเป็นหลัก?",
          options: [
            "การคิดทบทวนด้วยปัญญาบริสุทธิ์",
            "ความฝันและจิตใต้สำนึก",
            "ประสบการณ์ทางประสาทสัมผัส",
            "การยอมรับตามความเชื่อเดิม"
          ],
          answer: "ประสบการณ์ทางประสาทสัมผัส"
        }
      ],
      speaking: [
        {
          id: "ms1",
          title: "Diplomatic Responses",
          prompt: "ฝึกการเจรจาทางการทูตในประเด็นสิทธิมนุษยชนอย่างนุ่มนวลแต่หนักแน่น",
          phrase: "While we respect domestic sovereignty, we unequivocally condemn any systemic violations of fundamental human rights.",
          phonetic: "ไวลฺ วี รี-สเปกต์ โด-เมส-ติก ซอฟ-เรน-ตี, วี อัน-อี-ควิฟ-โว-คะ-ลี คอน-เดมน์ เอน-นี ซิส-เต-มิก ไว-โอ-เล-ชันส์ ออฟ ฟัน-ดา-เมน-ทัล ฮิว-แมน ไรท์ส"
        },
        {
          id: "ms2",
          title: "Legal Nuances",
          prompt: "ฝึกพูดเงื่อนไขโมฆะกรรมในสัญญาทางกฎหมายเชิงวิชาชีพ",
          phrase: "This contract shall be deemed null and void in the event of a force majeure or a material breach of the confidentiality clause.",
          phonetic: "ดิส คอน-แทร็กต์ ชาล บี ดีมด์ นัล แอนด์ วอยด์ อิน ดิ อี-เวนต์ ออฟ อะ ฟอร์ส มา-เจอร์ ออร์ อะ มา-ที-เรียล บรีช ออฟ เดอะ คอน-ฟิ-เดน-เชียล-ลิ-ตี คลอส"
        }
      ],
      reading: [
        {
          id: "mr1",
          title: "The Neurobiological Basis of Consciousness",
          passage: "The quest to delineate the neural correlates of consciousness (NCC) constitutes one of the most formidable frontiers in cognitive neuroscience. Materialist reductionism postulates that subjective experiences—or 'qualia'—emerge exclusively from complex, synchronized patterns of neuronal firing within the cerebral cortex. However, critics of this paradigm argue that reductionist models fail to bridge the 'explanatory gap,' leaving the hard problem of consciousness unresolved as to why neural activities should culminate in subjective interiority at all.",
          question: "What is the core argument of the critics of materialist reductionism mentioned in the passage?",
          options: [
            "Consciousness is a simple biological process easily explained by modern technology.",
            "Subjective experiences (qualia) are irrelevant to cognitive neuroscience.",
            "Reductionist models fail to explain *why* physical neuronal firing results in subjective, felt experiences.",
            "Neurons in the cerebral cortex do not fire in synchronized patterns."
          ],
          answer: "Reductionist models fail to explain *why* physical neuronal firing results in subjective, felt experiences."
        },
        {
          id: "mr2",
          title: "Modernism and the Fragmentation of Narrative",
          passage: "Literary modernism in the early twentieth century represented a radical departure from the structured realism of the Victorian era. Spurred by the psychological upheavals of World War I and the industrial acceleration, authors like Virginia Woolf and James Joyce pioneered the stream-of-consciousness technique. This narrative method deliberately fractured temporal progression and linear syntax, reflecting the fragmented, subjective reality of modern human existence and emphasizing that absolute truth is an illusion.",
          question: "What did the stream-of-consciousness technique seek to reflect?",
          options: [
            "The organized, peaceful life of the Victorian era",
            "The fragmented, highly subjective experience of modern human existence",
            "The necessity of traditional grammar and chronological storytelling",
            "The rise of visual photography and cinema"
          ],
          answer: "The fragmented, highly subjective experience of modern human existence"
        }
      ],
      writing: [
        {
          id: "mw1",
          title: "Macroeconomic Policy",
          prompt: "เขียนบทวิเคราะห์เชิงวิชาการ: ผลกระทบของการปรับขึ้นอัตราดอกเบี้ยนโยบายต่อการว่างงานและการเติบโตทางเศรษฐกิจ (อย่างน้อย 80 ตัวอักษร)",
          keywords: ["inflation", "interest rates", "monetary policy", "unemployment", "economic growth", "central bank", "recession", "long-term", "impact"],
          minLength: 80,
          placeholder: "Adjusting monetary policy via interest rate hikes aims to curb high inflation, but it concurrently risks slowing down economic growth..."
        },
        {
          id: "mw2",
          title: "Ethics of Genetic Engineering",
          prompt: "วิจารณ์ด้านศีลธรรมและจริยธรรมวิทยาศาสตร์ของการดัดแปลงพันธุกรรมมนุษย์ (อย่างน้อย 80 ตัวอักษร)",
          keywords: ["genetic engineering", "ethics", "CRISPR", "humanity", "diseases", "inequality", "modification", "future", "morality"],
          minLength: 80,
          placeholder: "Although genetic engineering offers unprecedented opportunities to eradicate hereditary diseases, it poses massive ethical dilemmas regarding..."
        }
      ]
    }
  }
};

// -------------------------------------------------------------
// EXPANDED DATA MODULES: VOCABULARY VAULT & ROLEPLAY SCENARIOS
// -------------------------------------------------------------

window.LingoVocabulary = [
  // Basic Level
  { word: "Beautiful", type: "adjective", level: "basic", ipa: "/ˈbjuːtɪfl/", thai: "สวยงาม", example: "She lives in a beautiful house." },
  { word: "Appreciate", type: "verb", level: "basic", ipa: "/əˈpriːʃieɪt/", thai: "ซาบซึ้ง, เห็นคุณค่า", example: "I highly appreciate your help." },
  { word: "Delicious", type: "adjective", level: "basic", ipa: "/dɪˈlɪʃəs/", thai: "อร่อย", example: "This chocolate cake is delicious!" },
  
  // Intermediate Level
  { word: "Alternative", type: "noun/adjective", level: "intermediate", ipa: "/ɔːlˈtɜːnətɪv/", thai: "ทางเลือก, สลับเปลี่ยน", example: "We have a highly viable alternative plan." },
  { word: "Consequence", type: "noun", level: "intermediate", ipa: "/ˈkɒnsɪkwəns/", thai: "ผลลัพธ์ที่ตามมา", example: "Every action has a future consequence." },
  { word: "Mitigate", type: "verb", level: "intermediate", ipa: "/ˈmɪtɪɡeɪt/", thai: "บรรเทาความเสียหาย, ลดปัญหา", example: "We need to mitigate the project delays." },
  
  // Advanced Level
  { word: "Ambiguous", type: "adjective", level: "advanced", ipa: "/æmˈbɪɡjuəs/", thai: "กำกวม, คลุมเครือ", example: "His answer was ambiguous and confusing." },
  { word: "Unprecedented", type: "adjective", level: "advanced", ipa: "/ʌnˈpresɪdentɪd/", thai: "ที่ไม่เคยเกิดขึ้นมาก่อน", example: "We face unprecedented global challenges." },
  { word: "Corroborate", type: "verb", level: "advanced", ipa: "/kəˈrɒbəreɪt/", thai: "ยืนยันความถูกต้องด้วยหลักฐาน", example: "This data corroborates our initial hypothesis." },
  
  // Master Level
  { word: "Epistemology", type: "noun", level: "master", ipa: "/ɪˌpɪstəˈmɒlədʒi/", thai: "ญาณวิทยา (ทฤษฎีความรู้)", example: "Epistemology is the cornerstone of classical philosophy." },
  { word: "Paradigm", type: "noun", level: "master", ipa: "/ˈpærədaɪm/", thai: "กระบวนทัศน์, ตัวแบบสมบูรณ์", example: "This theory created a major paradigm shift in science." },
  { word: "Equivocal", type: "adjective", level: "master", ipa: "/ɪˈkwɪvəkl/", thai: "สองแง่สองง่าม, ตลบตะแลง", example: "His equivocal statement raised doubts among the diplomats." }
];

window.LingoRoleplays = {
  coffeeShop: {
    title: "Ordering Coffee at Cafe (สั่งกาแฟและขนมหวาน)",
    description: "ลองสวมบทบาทเป็นลูกค้าคุยกับพนักงานร้านคาเฟ่ ฝึกฝนสั่งเมนูอาหาร ขนาดแก้ว และวิธีการจ่ายเงิน",
    startMessage: "Hello! Welcome to Lingo Cafe. What can I get started for you today?",
    steps: {
      1: {
        botText: "Hello! Welcome to Lingo Cafe. What can I get started for you today?",
        keywords: ["coffee", "tea", "latte", "cappuccino", "want", "like", "have", "please", "espresso"],
        nextStep: 2,
        instruction: "บอกพนักงานว่าคุณต้องการดื่มอะไร (เช่น: I would like a hot latte, please.)"
      },
      2: {
        botText: "Sure thing! What size would you like for that drink: small, medium, or large?",
        keywords: ["small", "medium", "large", "size", "please"],
        nextStep: 3,
        instruction: "เลือกขนาดแก้วที่ต้องการ (เช่น: Medium size, please.)"
      },
      3: {
        botText: "Excellent. Would you like any pastries or muffins to go with your drink?",
        keywords: ["yes", "no", "muffin", "croissant", "donut", "cookie", "nothing", "please", "sure"],
        nextStep: 4,
        instruction: "ตอบว่าต้องการขนมเพิ่มไหม (เช่น: Yes, a croissant please. หรือ No, thank you.)"
      },
      4: {
        botText: "Perfect! That will be $5.50. Will that be cash or card today?",
        keywords: ["cash", "card", "pay", "credit", "here"],
        nextStep: 5,
        instruction: "เลือกวิธีการชำระเงิน (เช่น: I will pay with card.)"
      },
      5: {
        botText: "Fantastic. Thank you so much! Your order will be ready in a minute. Have a wonderful day!",
        keywords: [],
        nextStep: null, // End of conversation
        instruction: "จบบทสนทนาสำเร็จ! กล่าวขอบคุณพนักงาน (เช่น: Thank you so much, have a nice day!)"
      }
    }
  },
  jobInterview: {
    title: "Virtual Job Interview (จำลองสัมภาษณ์งาน)",
    description: "ฝึกตอบคำถามการสัมภาษณ์งานกับผู้จัดการบริษัทฝ่ายบุคคล แสดงเป้าหมาย จุดแข็ง และผลตอบแทนเชิงวิชาชีพ",
    startMessage: "Thank you for coming in today. To start, could you please tell me a little bit about yourself?",
    steps: {
      1: {
        botText: "Thank you for coming in today. To start, could you please tell me a little bit about yourself?",
        keywords: ["name", "experience", "work", "developer", "designer", "skills", "study", "graduate"],
        nextStep: 2,
        instruction: "แนะนำตัวสั้นๆ และอภิปรายทักษะการทำงาน (เช่น: My name is Somchai, I am a web designer.)"
      },
      2: {
        botText: "That's very interesting. Why do you want to work for our company?",
        keywords: ["reputation", "grow", "learn", "best", "opportunity", "passion", "believe", "team"],
        nextStep: 3,
        instruction: "อธิบายแรงผลักดันและทำไมถึงอยากทำที่นี่ (เช่น: I believe your company offers great learning opportunities.)"
      },
      3: {
        botText: "Great. What would you consider your greatest professional strength?",
        keywords: ["strength", "problem", "solve", "learn", "fast", "teamwork", "detail", "creative", "hardworking"],
        nextStep: 4,
        instruction: "จุดแข็งที่สำคัญที่สุดของคุณคืออะไร (เช่น: My greatest strength is solving complex code issues.)"
      },
      4: {
        botText: "Excellent response. Do you have any questions for us about this position?",
        keywords: ["yes", "no", "culture", "salary", "daily", "responsibilities", "growth", "opportunities"],
        nextStep: 5,
        instruction: "ถามคำถามกลับไปยังผู้สัมภาษณ์ หรือบอกว่าไม่มี (เช่น: Yes, what is the daily work culture like?)"
      },
      5: {
        botText: "We will review your application and get back to you by next Friday. Thank you for your time today!",
        keywords: [],
        nextStep: null,
        instruction: "เสร็จสิ้นการสัมภาษณ์! ขอบคุณผู้สัมภาษณ์สุภาพ (เช่น: Thank you so much for this opportunity.)"
      }
    }
  }
};
