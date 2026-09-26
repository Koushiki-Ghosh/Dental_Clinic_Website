export const clinic = {
  name: 'Lumina Dental',
  brandLabel: 'LUMINA',
  brandDescriptor: 'DENTAL CLINIC',
  tagline: 'Thoughtful Dental Care, Close to Home.',
  address: '2nd Floor, City Centre, Bidhannagar, Durgapur, West Bengal 713216, India',
  phone: '+91 90000 00000',
  email: 'hello.durgapur@luminadental.example',
  hours: [
    { day: 'Monday – Saturday', time: '10:00 AM – 7:00 PM IST' },
    { day: 'Sunday', time: 'By appointment' },
  ],
  mapUrl: 'https://maps.google.com/?q=City+Centre+Bidhannagar+Durgapur+West+Bengal+India',
  whatsapp: 'https://wa.me/919000000000',
}

export const appointmentSlots = ['10:00 AM IST', '10:30 AM IST', '11:30 AM IST', '2:00 PM IST', '3:30 PM IST', '4:30 PM IST']

export const services = [
  {
    id: 'preventive-care', title: 'Preventive Care', category: 'Preventive', icon: 'shield', duration: '30–60 min', price: 'From ₹1,200 (demo)',
    shortDescription: 'Routine dental check-ups and cleaning, with time to discuss your day-to-day oral care.',
    description: 'Routine visits give you and your dentist a chance to review your oral health, have your teeth professionally cleaned and discuss any questions. The right interval for visits can vary from person to person.',
    benefits: ['Professional cleaning and oral health review', 'Time to discuss your daily care routine', 'Clear notes on suggested follow-up'],
    procedure: ['A conversation about your health history and questions', 'A dental examination, with imaging if your dentist considers it appropriate', 'Cleaning and a summary of any suggested next steps'],
    preparation: 'Bring a list of current medicines and any questions you would like to discuss. Please tell the clinic team if you feel nervous about dental visits.',
    aftercare: 'Your dentist will share any advice specific to your visit. You can ask the clinic if you have questions afterwards.',
    faqs: [['How often should I have a check-up?', 'The suggested interval depends on your oral health and will be discussed with your dentist.'], ['Will I need an X-ray?', 'X-rays are not required at every visit. Your dentist will explain whether imaging is useful for your examination.']],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'cosmetic-dentistry', title: 'Cosmetic Dentistry', category: 'Cosmetic', icon: 'sparkles', duration: '45–90 min', price: 'Please enquire for pricing',
    shortDescription: 'Discuss options for the appearance of your smile in a one-to-one consultation.',
    description: 'Cosmetic dental care may address the colour, shape or spacing of teeth. Your dentist can explain suitable options, their limitations and what each may involve after an examination.',
    benefits: ['Treatment discussion shaped around your questions', 'Options explained in clear language', 'Time to consider costs, care and maintenance'],
    procedure: ['Talk through the changes you have in mind', 'Review suitable options and estimated timelines', 'Discuss a proposed plan before deciding on treatment'],
    preparation: 'No special preparation is generally needed for an initial consultation. You are welcome to bring reference photos if they help explain your preferences.',
    aftercare: 'Aftercare depends on the treatment. Your dentist will discuss instructions and ongoing maintenance before care begins.',
    faqs: [['Can I discuss what a treatment may look like?', 'Ask your dentist about any suitable preview options during a consultation. These are illustrative and cannot guarantee a final result.'], ['Is cosmetic treatment suitable for everyone?', 'Suitability depends on your oral health and goals. A dental examination is needed before recommendations can be made.']],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'orthodontics', title: 'Orthodontics', category: 'Orthodontics', icon: 'smile', duration: '30–60 min', price: 'Please enquire for pricing',
    shortDescription: 'An orthodontic consultation to discuss braces and clear aligner options.',
    description: 'Orthodontic treatment can help address the position of teeth and bite. Your dentist or orthodontist can assess your needs and explain suitable options, which may include braces or clear aligners.',
    benefits: ['Discussion of options for different needs', 'A proposed schedule of review visits', 'Treatment timing explained after assessment'],
    procedure: ['Initial orthodontic consultation', 'Assessment and records where appropriate', 'Review visits if you decide to proceed with treatment'],
    preparation: 'Bring any previous orthodontic records if available. An initial appointment is an assessment and discussion, not a commitment to treatment.',
    aftercare: 'Follow your dentist’s instructions for wearing and cleaning any appliance. Retention and follow-up will be discussed as treatment progresses.',
    faqs: [['How long does orthodontic treatment take?', 'Timing varies depending on the individual assessment and treatment plan. Your orthodontist can discuss an estimate with you.'], ['Are clear aligners suitable for every case?', 'They may not be suitable for all needs. An orthodontic assessment can help explain the options.']],
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'root-canal-treatment', title: 'Root Canal Treatment', category: 'Restorative', icon: 'heart', duration: '60–90 min', price: 'Please enquire for pricing',
    shortDescription: 'Assessment and treatment options for a tooth with affected inner tissue.',
    description: 'Root canal treatment may be discussed when the inner tissue of a tooth is affected. A dental examination is needed to understand your symptoms and explain appropriate options.',
    benefits: ['Treatment options explained before care begins', 'A focus on preserving the natural tooth where appropriate', 'Comfort measures discussed with your dentist'],
    procedure: ['Dental assessment and imaging if appropriate', 'Treatment of the affected inner tissue where indicated', 'A discussion about restoration and follow-up'],
    preparation: 'Please share your symptoms, current medicines and relevant health history. Contact the clinic if your symptoms change before your visit.',
    aftercare: 'Some temporary sensitivity may occur. Follow the advice provided and contact the clinic if you have concerns or symptoms worsen.',
    faqs: [['Will root canal treatment be uncomfortable?', 'Your dentist will discuss comfort measures beforehand. Experiences vary, so ask what to expect in your situation.'], ['Will I need another restoration afterwards?', 'A further restoration may be suggested depending on the tooth. Your dentist will explain the options.']],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'dental-implants', title: 'Dental Implants', category: 'Surgical', icon: 'anchor', duration: 'Consultation required', price: 'Please enquire for pricing',
    shortDescription: 'A consultation to discuss options for replacing a missing tooth.',
    description: 'Dental implants may be one option for replacing a missing tooth. A detailed assessment helps your dentist discuss suitability, the stages involved and any preparatory care that may be needed.',
    benefits: ['A plan based on an individual assessment', 'A clear explanation of treatment stages', 'Time to discuss alternatives and ongoing care'],
    procedure: ['Consultation and assessment, with imaging if appropriate', 'Discussion of a proposed treatment plan', 'Placement and restoration visits if implants are suitable'],
    preparation: 'Bring relevant dental records and a list of current medicines. The consultation is a chance to discuss your questions and options.',
    aftercare: 'Advice depends on the treatment stage. Your dentist will discuss cleaning and review visits as part of your care plan.',
    faqs: [['Could an implant be suitable for me?', 'Only a dental assessment can help determine suitability. Your health history and oral examination are considered.'], ['How long does the process take?', 'The timeline varies. Your dentist can outline an estimate after assessing your needs.']],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'pediatric-dentistry', title: 'Paediatric Dentistry', category: 'Paediatric', icon: 'baby', duration: '30–45 min', price: 'From ₹900 (demo)',
    shortDescription: 'Friendly dental visits for children, with parents and caregivers welcome.',
    description: 'Children’s appointments can be paced to suit the child, with time for parents or caregivers to ask questions and discuss oral care at each stage of development.',
    benefits: ['A welcoming, age-aware approach', 'Preventive care and practical guidance', 'Parents and caregivers included in the conversation'],
    procedure: ['Meet the dentist and settle into the visit', 'A gentle examination suited to the child', 'A conversation with the caregiver about next steps'],
    preparation: 'A favourite toy or comfort item is welcome. Please let the clinic know in advance if you have concerns about the visit or your child’s needs.',
    aftercare: 'The dentist will explain any home-care advice and when to consider a follow-up visit.',
    faqs: [['When should a child first visit a dentist?', 'The right time can depend on the child. Ask your family dentist or contact the clinic to discuss a first visit.'], ['Can a parent stay during the appointment?', 'A parent or caregiver is welcome to support the child during the visit.']],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85',
  },
]

export const dentists = [
  {
    id: 'ananya-sen', name: 'Dr. Ananya Sen', qualification: 'Fictional demo dentist', specialization: 'General Dentistry', role: 'General & Cosmetic Dentistry', rating: '4.9', experience: 'Illustrative only',
    specialties: ['General Dentistry', 'Cosmetic Dentistry'], nextAvailable: '27/09/2026, 2:00 PM IST', nextSlots: ['27/09/2026, 2:00 PM IST', '28/09/2026, 10:00 AM IST', '29/09/2026, 3:30 PM IST'],
    languages: ['English', 'Bengali', 'Hindi'], bio: 'Dr. Sen is a fictional demo dentist. This profile illustrates a general and cosmetic dentistry role; it does not represent a real dentist or professional qualification.',
    treatments: ['Dental check-up', 'Cosmetic consultation', 'Restorative care discussion'], location: 'Lumina Dental demo clinic, City Centre, Durgapur',
    image: 'https://images.pexels.com/photos/31043312/pexels-photo-31043312/free-photo-of-professional-female-dentist-in-black-scrubs.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'arjun-mehta', name: 'Dr. Arjun Mehta', qualification: 'Fictional demo dentist', specialization: 'Orthodontics', role: 'Orthodontic Dentist', rating: '4.8', experience: 'Illustrative only',
    specialties: ['Braces', 'Clear Aligner Consultation'], nextAvailable: '28/09/2026, 10:30 AM IST', nextSlots: ['28/09/2026, 10:30 AM IST', '29/09/2026, 2:00 PM IST', '30/09/2026, 11:30 AM IST'],
    languages: ['English', 'Hindi', 'Bengali'], bio: 'Dr. Mehta is a fictional demo dentist whose profile represents an orthodontic role. No real qualification, registration or clinical experience is claimed.',
    treatments: ['Orthodontic assessment', 'Braces consultation', 'Clear aligner discussion'], location: 'Lumina Dental demo clinic, City Centre, Durgapur',
    image: 'https://images.pexels.com/photos/19438563/pexels-photo-19438563/free-photo-of-doctor.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'riya-sharma', name: 'Dr. Riya Sharma', qualification: 'Fictional demo dentist', specialization: 'Paediatric Dentistry', role: 'Paediatric Dentist', rating: '4.9', experience: 'Illustrative only',
    specialties: ['Paediatric Dentistry', 'Preventive Care'], nextAvailable: '29/09/2026, 11:30 AM IST', nextSlots: ['29/09/2026, 11:30 AM IST', '30/09/2026, 2:00 PM IST', '01/10/2026, 10:30 AM IST'],
    languages: ['English', 'Hindi', 'Bengali'], bio: 'Dr. Sharma is a fictional demo dentist. This profile illustrates a paediatric dentistry role and does not represent a real dentist or professional qualification.',
    treatments: ['Children’s dental check-ups', 'Preventive care discussion', 'First-visit support'], location: 'Lumina Dental demo clinic, City Centre, Durgapur',
    image: 'https://images.pexels.com/photos/36665076/pexels-photo-36665076/free-photo-of-confident-female-doctor-in-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'kabir-das', name: 'Dr. Kabir Das', qualification: 'Fictional demo dentist', specialization: 'Endodontics', role: 'Endodontic Dentist', rating: '4.8', experience: 'Illustrative only',
    specialties: ['Root Canal Consultation', 'Tooth Restoration'], nextAvailable: '30/09/2026, 3:30 PM IST', nextSlots: ['30/09/2026, 3:30 PM IST', '01/10/2026, 10:00 AM IST', '02/10/2026, 4:30 PM IST'],
    languages: ['English', 'Bengali', 'Hindi'], bio: 'Dr. Das is a fictional demo dentist. The profile gives an example of an endodontic role and makes no claim about real credentials or clinical experience.',
    treatments: ['Endodontic assessment', 'Root canal treatment discussion', 'Tooth restoration planning'], location: 'Lumina Dental demo clinic, City Centre, Durgapur',
    image: 'https://images.pexels.com/photos/10695742/pexels-photo-10695742.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'meera-iyer', name: 'Dr. Meera Iyer', qualification: 'Fictional demo dentist', specialization: 'Cosmetic Dentistry', role: 'Cosmetic Dentist', rating: '4.8', experience: 'Illustrative only',
    specialties: ['Smile Care Consultation', 'Restorative Dentistry'], nextAvailable: '01/10/2026, 10:30 AM IST', nextSlots: ['01/10/2026, 10:30 AM IST', '02/10/2026, 2:00 PM IST', '03/10/2026, 11:30 AM IST'],
    languages: ['English', 'Hindi'], bio: 'Dr. Iyer is a fictional demo dentist. This profile illustrates a cosmetic dentistry role; all profile details are for demonstration only.',
    treatments: ['Cosmetic dentistry consultation', 'Restorative care discussion', 'Smile care planning'], location: 'Lumina Dental demo clinic, City Centre, Durgapur',
    image: 'https://images.pexels.com/photos/5738735/pexels-photo-5738735.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
]

export const testimonials = [
  { quote: 'The team explained each step clearly, and I felt comfortable asking questions.', name: 'Aarav Ghosh (fictional demo patient)', context: 'Preventive care visit', rating: 5 },
  { quote: 'I appreciated having the options and expected costs discussed before deciding.', name: 'Ishita Roy (fictional demo patient)', context: 'Orthodontic consultation', rating: 5 },
  { quote: 'The visit felt calm, and my child was given time to settle in.', name: 'Priya Mukherjee (fictional demo parent)', context: 'Paediatric visit', rating: 5 },
]

export const promotion = {
  label: 'Fictional demo offer',
  title: 'Smile Care Consultation',
  description: 'Ask about a cosmetic dentistry consultation and suitable care options.',
  note: 'Demo content only. No discount, offer, or treatment price is being advertised.',
}