export const SITE = {
  name: 'SKIA MGF',
  fullName: 'SKIA MGF LADIES GYM',
  tagline: 'Strong Women. Healthy Lives. Confident Futures.',
  phone: '+91 98957 08600',
  phoneRaw: '919895708600',
  whatsapp: '919895708600',
  email: 'Skiafitnesstirur@gmail.com',
  address: 'Near Tirur Bus Stand, Opposite Petrol Pump, Tirur, Kerala',
  hours: [
    { day: 'Mon — Sat', time: '6:30 AM — 7:30 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ],
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Classes', path: '/classes' },
  { label: 'Trainers', path: '/trainers' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const CLASSES = [
  {
    name: 'Strength Training',
    slug: 'strength-training',
    duration: '60 min',
    intensity: 'High',
    level: 'All Levels',
    description: 'Build real strength with compound lifts — squats, deadlifts, presses. Our experienced trainers guide you through proper form so you lift with confidence and see results fast.',
    image: 'https://images.pexels.com/photos/4944006/pexels-photo-4944006.jpeg?auto=compress&cs=tinysrgb&w=800',
    schedule: ['Mon 7:00 AM', 'Wed 5:00 PM', 'Fri 7:00 AM'],
  },
  {
    name: 'Cardio Blast',
    slug: 'cardio-blast',
    duration: '45 min',
    intensity: 'Very High',
    level: 'All Levels',
    description: 'High-energy cardio intervals that torch calories and build endurance. A mix of HIIT, step aerobics, and circuit training that keeps your heart pumping from start to finish.',
    image: 'https://images.pexels.com/photos/4754001/pexels-photo-4754001.jpeg?auto=compress&cs=tinysrgb&w=800',
    schedule: ['Tue 6:30 AM', 'Thu 6:00 PM', 'Sat 8:00 AM'],
  },
  {
    name: 'Boxing Fit',
    slug: 'boxing-fit',
    duration: '45 min',
    intensity: 'High',
    level: 'All Levels',
    description: 'Boxing-inspired conditioning. Pad work, footwork drills, and explosive combinations chained into rounds. Build power, agility, and confidence while burning serious calories.',
    image: 'https://images.pexels.com/photos/1608099/pexels-photo-1608099.jpeg?auto=compress&cs=tinysrgb&w=800',
    schedule: ['Mon 5:00 PM', 'Wed 6:30 AM', 'Sat 9:30 AM'],
  },
  {
    name: 'Yoga & Flexibility',
    slug: 'yoga-flexibility',
    duration: '60 min',
    intensity: 'Low',
    level: 'All Levels',
    description: 'Improve flexibility, balance, and mindfulness. A blend of yoga flow and targeted stretching that helps you recover, de-stress, and move better in everything you do.',
    image: 'https://images.pexels.com/photos/4057069/pexels-photo-4057069.jpeg?auto=compress&cs=tinysrgb&w=800',
    schedule: ['Tue 5:00 PM', 'Thu 7:00 AM', 'Sat 7:00 AM'],
  },
  {
    name: 'Weight Loss Program',
    slug: 'weight-loss',
    duration: '55 min',
    intensity: 'High',
    level: 'All Levels',
    description: 'A structured program combining strength training, cardio, and nutrition guidance designed specifically for sustainable weight loss. Our trainers track your progress every step of the way.',
    image: 'https://images.pexels.com/photos/4753996/pexels-photo-4753996.jpeg?auto=compress&cs=tinysrgb&w=800',
    schedule: ['Mon 6:30 AM', 'Wed 7:00 AM', 'Fri 5:00 PM'],
  },
  {
    name: 'Personal Training',
    slug: 'personal-training',
    duration: '60 min',
    intensity: 'Custom',
    level: 'All Levels',
    description: 'One-on-one coaching tailored to your goals. Whether you want to lose weight, build strength, or recover from an injury, your trainer builds a program that fits your body and your schedule.',
    image: 'https://images.pexels.com/photos/4587348/pexels-photo-4587348.jpeg?auto=compress&cs=tinysrgb&w=800',
    schedule: ['By appointment'],
  },
];

export const TRAINERS = [
  {
    name: 'Aishwarya Nair',
    specialty: 'Strength & Weight Training',
    cert: 'Certified Personal Trainer, 8+ years experience',
    bio: 'Aishwarya specializes in helping women build functional strength. She believes every woman deserves to feel strong and confident in her body. Her sessions are challenging but always supportive.',
    image: 'https://images.pexels.com/photos/6739128/pexels-photo-6739128.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Fathima Rishana',
    specialty: 'Cardio & Weight Loss',
    cert: 'ACE-Certified, Nutrition Coach',
    bio: 'Fathima brings energy to every session. She designs programs that make cardio fun and effective, helping members lose weight sustainably without crash diets or boring routines.',
    image: 'https://images.pexels.com/photos/28250752/pexels-photo-28250752.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Reshma Krishnan',
    specialty: 'Yoga & Flexibility',
    cert: 'RYT-300, Mobility Specialist',
    bio: 'Reshma blends traditional yoga with modern mobility science. Her classes help you recover faster, move better, and find calm. She is the reason our members stay injury-free.',
    image: 'https://images.pexels.com/photos/31245340/pexels-photo-31245340.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Sneha Mohammed',
    specialty: 'Boxing & HIIT',
    cert: 'Boxing Fitness Certified, 5+ years experience',
    bio: 'Sneha teaches you to punch with power and move with purpose. Her boxing-inspired classes are the most popular at SKIA — fast, fun, and incredibly effective for fitness.',
    image: 'https://images.pexels.com/photos/4587354/pexels-photo-4587354.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const PRICING = [
  {
    name: 'Monthly',
    monthly: 1500,
    annual: 1200,
    tagline: 'Flexible month-to-month.',
    features: [
      'Full gym access',
      'All group classes',
      'Air-conditioned facility',
      'Locker & changing room',
      '1 fitness assessment',
    ],
    popular: false,
  },
  {
    name: 'Quarterly',
    monthly: 1200,
    annual: 1000,
    tagline: 'Best value for committed members.',
    features: [
      'Everything in Monthly',
      'Unlimited classes',
      'Personalized workout plan',
      'Monthly progress tracking',
      'Nutrition guidance',
      '1 guest pass per month',
    ],
    popular: true,
  },
  {
    name: 'Personal Training',
    monthly: 4000,
    annual: 3500,
    tagline: 'One-on-one coaching.',
    features: [
      '12 private sessions per month',
      'Custom training program',
      'Nutrition consultation',
      'Weekly progress reviews',
      'Direct access to your trainer',
      'Priority class booking',
    ],
    popular: false,
  },
];

export const FAQS = [
  {
    q: 'Is SKIA MGF only for women?',
    a: 'Yes. SKIA MGF is a ladies-only gym. We provide a safe, comfortable, and private environment where women can train with confidence. All our trainers are experienced ladies trainers.',
  },
  {
    q: 'What are the timings?',
    a: 'We are open Monday to Saturday from 6:30 AM to 7:30 PM. Sunday is our rest day — the gym is closed.',
  },
  {
    q: 'Do I need experience to join?',
    a: 'Absolutely not. Whether you are a complete beginner or have been training for years, our trainers will guide you based on your fitness level. Your first session includes a fitness assessment.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. Your first session is free. Just WhatsApp us or call to book your trial. No advance payment, no pressure to join.',
  },
  {
    q: 'What should I bring?',
    a: 'Comfortable workout clothes, a water bottle, and indoor training shoes. We provide a fully air-conditioned facility with lockers and changing rooms.',
  },
  {
    q: 'Where is the gym located?',
    a: 'We are located near Tirur Bus Stand, opposite the petrol pump. It is easy to find and convenient to reach from anywhere in Tirur.',
  },
];

export const BLOG_POSTS = [
  {
    title: 'Why Women Should Lift Weights',
    excerpt: 'The myth of "bulking up" and what actually happens to your body when you start strength training.',
    date: 'Aug 12, 2026',
    readTime: '5 min read',
    category: 'Strength',
    image: 'https://images.pexels.com/photos/4944312/pexels-photo-4944312.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: [
      'One of the biggest myths in fitness is that lifting weights makes women bulky. This is simply not true. Women do not have the testosterone levels to build large muscles by accident.',
      'What weight training does do: it builds lean muscle, increases your metabolism, strengthens your bones, and changes how your body looks and feels. You become toned, not bulky.',
      'At SKIA MGF, we start every member with basic movements — squats, presses, rows — using light weights. As your form improves, the weight increases. The result is a stronger, more confident you.',
    ],
  },
  {
    title: '5 Tips for Starting Your Fitness Journey',
    excerpt: 'Simple, practical advice for women who want to get fit but do not know where to begin.',
    date: 'Aug 5, 2026',
    readTime: '4 min read',
    category: 'Beginners',
    image: 'https://images.pexels.com/photos/4753996/pexels-photo-4753996.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: [
      'Starting is the hardest part. Here are five things we tell every new member at SKIA MGF.',
      'One: Start small. You do not need to train for an hour. Twenty minutes of consistent exercise beats an hour you never do.',
      'Two: Focus on form, not weight. Good technique keeps you safe and makes every exercise more effective.',
      'Three: Eat protein. Your body needs it to recover and build muscle. Eggs, dal, chicken, paneer — pick what works for you.',
      'Four: Sleep seven hours. Your body recovers and rebuilds while you rest. Training without sleep is like building a house without cement.',
      'Five: Be patient. Real change takes 8-12 weeks. Show up consistently and the results will come.',
    ],
  },
  {
    title: 'The Importance of a Women-Only Gym',
    excerpt: 'Why a safe, private training environment matters more than you think.',
    date: 'Jul 28, 2026',
    readTime: '3 min read',
    category: 'Stories',
    image: 'https://images.pexels.com/photos/4587344/pexels-photo-4587344.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: [
      'Many women feel uncomfortable in mixed gyms. The staring, the unsolicited advice, the feeling of being watched — it is real, and it stops women from training consistently.',
      'A women-only gym removes all of that. You can focus on your workout, not on who is watching. You can ask questions without feeling judged. You can sweat, struggle, and grow in a space that feels safe.',
      'That is why we built SKIA MGF. A place where women support women, where every trainer understands your body and your goals, and where you never have to feel self-conscious about showing up.',
    ],
  },
  {
    title: 'Cardio vs. Strength: Which Is Better for Weight Loss?',
    excerpt: 'The answer is not what you think. Here is what actually works for sustainable fat loss.',
    date: 'Jul 15, 2026',
    readTime: '5 min read',
    category: 'Conditioning',
    image: 'https://images.pexels.com/photos/4754001/pexels-photo-4754001.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: [
      'Cardio burns more calories during the workout. Strength training burns more calories after the workout — for up to 48 hours. This is called the afterburn effect.',
      'More importantly, strength training builds muscle. Muscle is metabolically active tissue, meaning it burns calories even at rest. The more muscle you have, the more calories you burn every day.',
      'The best approach? Do both. Our Weight Loss Program at SKIA MGF combines strength training and cardio in every session. You get the calorie burn of cardio and the metabolism boost of strength training.',
    ],
  },
  {
    title: 'Eating Right: A Simple Guide for Active Women',
    excerpt: 'No fad diets. No starvation. Just practical nutrition advice that works.',
    date: 'Jul 3, 2026',
    readTime: '6 min read',
    category: 'Nutrition',
    image: 'https://images.pexels.com/photos/4753994/pexels-photo-4753994.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: [
      'You cannot out-train a bad diet. But eating right does not mean starving yourself or cutting out every food you love.',
      'Eat three balanced meals a day. Each meal should have protein (dal, eggs, chicken, fish, paneer), carbohydrates (rice, roti, oats), and vegetables.',
      'Drink 2-3 liters of water daily. Dehydration kills energy and performance.',
      'Limit sugar and fried foods. You do not have to eliminate them completely — just be mindful of how often you eat them.',
      'If you train hard, you need to eat enough. Under-eating is the most common mistake we see. Food is fuel, not the enemy.',
    ],
  },
  {
    title: 'How to Stay Motivated When You Want to Quit',
    excerpt: 'Motivation gets you started. Discipline keeps you going. Here is how to build both.',
    date: 'Jun 20, 2026',
    readTime: '4 min read',
    category: 'Beginners',
    image: 'https://images.pexels.com/photos/7674500/pexels-photo-7674500.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: [
      'Everyone starts motivated. The ones who succeed are the ones who keep showing up when motivation fades.',
      'Set a schedule, not a mood. If you train on Mondays, Wednesdays, and Fridays at 7 AM, you do it whether you feel like it or not. Feelings follow action, not the other way around.',
      'Find a community. Training with other women who share your goals keeps you accountable. At SKIA MGF, our members push each other and celebrate every win together.',
      'Track your progress. When you can see how far you have come, you are less likely to go back. Take photos, note your weights, celebrate the small victories.',
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sajna K.',
    role: 'Member since 2025',
    quote: 'I was nervous to join a gym for the first time. The trainers at SKIA made me feel comfortable from day one. Six months later, I have lost 8 kg and I feel stronger than ever.',
    image: 'https://images.pexels.com/photos/8374589/pexels-photo-8374589.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Divya R.',
    role: 'Quarterly member',
    quote: 'A ladies-only gym was exactly what I needed. I can focus on my workout without feeling self-conscious. The air-conditioning is a blessing in Tirur heat.',
    image: 'https://images.pexels.com/photos/4662345/pexels-photo-4662345.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Haseena F.',
    role: 'Personal training client',
    quote: 'The one-on-one sessions changed everything. My trainer understood my goals and built a plan that actually works. I have never felt this fit in my life.',
    image: 'https://images.pexels.com/photos/3822190/pexels-photo-3822190.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Lakshmi P.',
    role: 'Member since 2024',
    quote: 'SKIA MGF is the best decision I made for my health. The trainers are supportive, the environment is safe, and the results are real. I tell every woman I know to join.',
    image: 'https://images.pexels.com/photos/3822719/pexels-photo-3822719.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const STATS = [
  { value: 500, label: 'Women Trained', suffix: '+' },
  { value: 6, label: 'Class Types', suffix: '' },
  { value: 4, label: 'Expert Trainers', suffix: '' },
  { value: 100, label: 'Ladies Only', suffix: '%' },
];

export const FEATURES = [
  {
    title: 'Experienced Ladies Trainers',
    description: 'Every trainer at SKIA MGF is a qualified woman who understands your body and your goals. You get expert guidance in a comfortable environment.',
    icon: 'eye',
  },
  {
    title: 'Fully Air-Conditioned',
    description: 'Train in comfort no matter the weather. Our entire facility is fully air-conditioned so you can focus on your workout, not the heat.',
    icon: 'flame',
  },
  {
    title: 'Safe & Private Environment',
    description: 'A ladies-only space where you can train with confidence. No staring, no judgment — just women supporting women on their fitness journey.',
    icon: 'shield',
  },
  {
    title: 'Convenient Location',
    description: 'Located near Tirur Bus Stand, opposite the petrol pump. Easy to reach from anywhere in Tirur, before or after work.',
    icon: 'heart',
  },
];

export const SCHEDULE_TIMES = [
  '6:30 AM', '7:00 AM', '8:00 AM', '5:00 PM', '6:00 PM', '7:00 PM',
];

export const WEEKLY_SCHEDULE = [
  {
    day: 'Monday',
    slots: [
      { time: '6:30 AM', class: 'Strength Training', coach: 'Aishwarya' },
      { time: '8:00 AM', class: 'Cardio Blast', coach: 'Fathima' },
      { time: '5:00 PM', class: 'Boxing Fit', coach: 'Sneha' },
      { time: '6:30 PM', class: 'Weight Loss Program', coach: 'Aishwarya' },
    ],
  },
  {
    day: 'Tuesday',
    slots: [
      { time: '6:30 AM', class: 'Cardio Blast', coach: 'Fathima' },
      { time: '5:00 PM', class: 'Yoga & Flexibility', coach: 'Reshma' },
      { time: '6:30 PM', class: 'Strength Training', coach: 'Aishwarya' },
    ],
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '6:30 AM', class: 'Boxing Fit', coach: 'Sneha' },
      { time: '7:00 AM', class: 'Weight Loss Program', coach: 'Aishwarya' },
      { time: '5:00 PM', class: 'Strength Training', coach: 'Aishwarya' },
      { time: '6:30 PM', class: 'Cardio Blast', coach: 'Fathima' },
    ],
  },
  {
    day: 'Thursday',
    slots: [
      { time: '7:00 AM', class: 'Yoga & Flexibility', coach: 'Reshma' },
      { time: '6:00 PM', class: 'Boxing Fit', coach: 'Sneha' },
      { time: '7:00 PM', class: 'Strength Training', coach: 'Aishwarya' },
    ],
  },
  {
    day: 'Friday',
    slots: [
      { time: '7:00 AM', class: 'Strength Training', coach: 'Aishwarya' },
      { time: '5:00 PM', class: 'Weight Loss Program', coach: 'Aishwarya' },
      { time: '6:30 PM', class: 'Cardio Blast', coach: 'Fathima' },
    ],
  },
  {
    day: 'Saturday',
    slots: [
      { time: '7:00 AM', class: 'Yoga & Flexibility', coach: 'Reshma' },
      { time: '8:00 AM', class: 'Cardio Blast', coach: 'Fathima' },
      { time: '9:30 AM', class: 'Boxing Fit', coach: 'Sneha' },
    ],
  },
  {
    day: 'Sunday',
    slots: [],
  },
];
