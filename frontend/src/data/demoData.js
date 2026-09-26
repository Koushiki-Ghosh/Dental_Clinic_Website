export const clinic = {
  name: 'Lumina Dental',
  brandLabel: 'LUMINA',
  brandDescriptor: 'DENTAL STUDIO',
  tagline: 'Your Smile Deserves Exceptional Care.',
  address: '248 Willow Creek Road, Suite 210, Portland, OR 97205',
  phone: '+1 (503) 555-0148',
  email: 'hello@luminadental.example',
  hours: [
    { day: 'Monday – Thursday', time: '8:00 AM – 6:00 PM' },
    { day: 'Friday', time: '8:00 AM – 4:00 PM' },
    { day: 'Saturday – Sunday', time: 'Closed' },
  ],
  mapUrl: 'https://maps.google.com/?q=248+Willow+Creek+Road+Portland+OR',
  whatsapp: 'https://wa.me/15035550148',
}

export const appointmentSlots = ['10:00 AM', '10:30 AM', '11:30 AM', '2:00 PM', '3:30 PM', '4:30 PM']

export const services = [
  {
    id: 'preventive-care', title: 'Preventive Care', category: 'Preventive', icon: 'shield', duration: '30–60 min', price: 'From $95',
    shortDescription: 'Thoughtful cleanings and exams to help keep your smile healthy between visits.',
    description: 'Regular preventive visits give your care team time to check in on your oral health, remove buildup, and talk through small changes before they become bigger concerns.',
    benefits: ['A thorough professional cleaning', 'Oral health screening and review', 'Practical guidance for your daily routine'],
    procedure: ['A conversation about your health and goals', 'A gentle examination and digital imaging when appropriate', 'Cleaning, polish, and a clear summary of next steps'],
    preparation: 'Bring a list of current medications and any questions you would like to discuss. Please let the team know if you feel anxious about dental visits.',
    aftercare: 'You can usually return to your routine right away. Your clinician will share any specific guidance based on your visit.',
    faqs: [['How often should I schedule a cleaning?', 'Many patients visit every six months, though the right interval depends on your oral health and will be discussed with your clinician.'], ['Will I need X-rays?', 'Imaging is not automatic at every visit. Your clinician will explain whether it is useful for your individual examination.']],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'cosmetic-dentistry', title: 'Cosmetic Dentistry', category: 'Cosmetic', icon: 'sparkles', duration: '45–90 min', price: 'Contact for pricing',
    shortDescription: 'Explore natural-looking options designed around the smile you want to share.',
    description: 'Cosmetic care can address color, shape, or minor spacing concerns. We begin with a conversation and explain suitable options, their limitations, and what each involves.',
    benefits: ['Personalized treatment planning', 'Options explained in plain language', 'A focus on comfortable, natural-looking results'],
    procedure: ['Share the changes you have in mind', 'Review possible treatments and expected timelines', 'Agree on a plan before any treatment begins'],
    preparation: 'No special preparation is usually needed for a consultation. Bring reference photos if they help you describe your goals.',
    aftercare: 'Aftercare varies by treatment. Your clinician will provide instructions and discuss maintenance before care begins.',
    faqs: [['Can I see what a treatment may look like first?', 'Your clinician can discuss available preview options during a consultation. These are estimates, not a guarantee of a final result.'], ['Is cosmetic treatment right for everyone?', 'Suitability depends on your oral health and goals. An examination is needed before recommendations can be made.']],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'orthodontics', title: 'Orthodontics', category: 'Orthodontics', icon: 'smile', duration: '30–60 min', price: 'Contact for pricing',
    shortDescription: 'Clear aligners and orthodontic planning for teens and adults.',
    description: 'Orthodontic care gently guides teeth into a healthier alignment over time. We offer a consultation to understand your needs and explain options such as clear aligners.',
    benefits: ['Treatment options for different lifestyles', 'Progress reviewed at planned visits', 'A clear outline of timing and care'],
    procedure: ['Initial alignment consultation', 'Records and a clinician-reviewed plan', 'Scheduled progress checks during treatment'],
    preparation: 'Bring any previous orthodontic records if available. The first appointment is a conversation and assessment, not a commitment to treatment.',
    aftercare: 'Following your clinician’s wear and cleaning instructions is important. Retention planning is discussed as treatment approaches completion.',
    faqs: [['How long does orthodontic treatment take?', 'Timing varies with the complexity of each case. Your clinician can estimate a range after an examination.'], ['Are clear aligners suitable for every case?', 'Not always. An orthodontic assessment is needed to compare suitable approaches.']],
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'root-canal-treatment', title: 'Root Canal Treatment', category: 'Restorative', icon: 'heart', duration: '60–90 min', price: 'Contact for pricing',
    shortDescription: 'Specialist-led treatment focused on relieving discomfort and preserving a tooth.',
    description: 'When the inner tissue of a tooth is affected, root canal treatment may help preserve it. An examination is needed to understand the cause of symptoms and discuss appropriate care.',
    benefits: ['Care focused on preserving natural teeth', 'Clear explanations at every stage', 'Comfort measures discussed before treatment'],
    procedure: ['Assessment and imaging as appropriate', 'The affected inner tissue is treated', 'The tooth is restored and follow-up is planned'],
    preparation: 'Please share your symptoms, medications, and relevant medical history. Call the clinic if discomfort changes before your visit.',
    aftercare: 'Some temporary sensitivity can occur. Follow the instructions provided and contact the clinic with concerns or worsening symptoms.',
    faqs: [['Does root canal treatment hurt?', 'Comfort options are discussed beforehand. Experiences vary, and your clinician can explain what to expect in your case.'], ['Will I need another restoration afterward?', 'Some treated teeth need additional restoration. Your clinician will explain the options based on the tooth.']],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'dental-implants', title: 'Dental Implants', category: 'Surgical', icon: 'anchor', duration: 'Consultation required', price: 'Contact for pricing',
    shortDescription: 'A consultation to explore implant-supported tooth replacement options.',
    description: 'Dental implants may be one option for replacing a missing tooth. A detailed assessment helps determine suitability, outline the process, and identify any preparatory care that may be needed.',
    benefits: ['A plan tailored to your oral health', 'A clear explanation of each treatment stage', 'Time to discuss alternatives and maintenance'],
    procedure: ['Comprehensive consultation and imaging', 'Personalized treatment planning', 'Placement and restoration visits if suitable'],
    preparation: 'Bring any relevant dental records and a list of medications. The consultation is an opportunity to review your questions and options.',
    aftercare: 'Instructions depend on the treatment stage. Ongoing cleaning and regular reviews help support long-term oral health.',
    faqs: [['Am I a candidate for an implant?', 'Only an examination can determine suitability. Bone health, medical history, and other factors are considered.'], ['How long does the process take?', 'The timeline varies and may span several months. Your clinician will outline an estimate after assessment.']],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'pediatric-dentistry', title: 'Pediatric Dentistry', category: 'Pediatric', icon: 'baby', duration: '30–45 min', price: 'From $75',
    shortDescription: 'Friendly, age-aware dental visits that help children feel at ease.',
    description: 'Children benefit from a supportive introduction to dental care. Visits are paced to the child, with time for parents or caregivers to ask questions and learn about oral health at each stage.',
    benefits: ['A welcoming, child-friendly approach', 'Prevention and age-appropriate education', 'Caregiver involvement encouraged'],
    procedure: ['Meet the clinician and settle in', 'Gentle examination tailored to the child', 'Caregiver conversation and practical next steps'],
    preparation: 'A favorite toy or comfort item is welcome. Please share any concerns about the visit or sensory needs in advance.',
    aftercare: 'The team will explain any home-care guidance and when to schedule the next visit.',
    faqs: [['When should a child first visit?', 'Dental guidance varies. Ask your child’s healthcare professional or contact the clinic to discuss an appropriate first visit.'], ['Can a parent stay during the appointment?', 'Yes. A parent or caregiver is welcome to support the child during the visit.']],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85',
  },
]

export const dentists = [
  { id: 'maya-bennett', name: 'Dr. Maya Bennett', qualification: 'DDS, MS', specialization: 'Orthodontics', role: 'Lead Orthodontist', rating: '4.9', experience: '14 years', specialties: ['Clear Aligners', 'Adult Orthodontics'], nextAvailable: 'Tomorrow at 2:00 PM', nextSlots: ['Tomorrow at 2:00 PM', 'Thursday at 10:00 AM', 'Friday at 3:30 PM'], languages: ['English', 'Spanish'], bio: 'Dr. Bennett is a fictional member of our demo team. Her profile represents the kind of thoughtful, collaborative orthodontic care patients can expect to explore at Lumina Dental.', treatments: ['Clear aligner consultation', 'Adult orthodontics', 'Retainers and follow-up'], location: 'Willow Creek Dental Studio, Suite 210', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85' },
  { id: 'james-wilson', name: 'Dr. James Wilson', qualification: 'DDS', specialization: 'General Dentistry', role: 'General Dentist', rating: '4.8', experience: '11 years', specialties: ['Preventive Care', 'Restorative Dentistry'], nextAvailable: 'Thursday at 10:30 AM', nextSlots: ['Thursday at 10:30 AM', 'Friday at 2:00 PM', 'Monday at 11:30 AM'], languages: ['English'], bio: 'Dr. Wilson is a fictional demo dentist who brings a practical, prevention-first approach to everyday dental care and restorative treatment planning.', treatments: ['Dental examinations', 'Preventive cleanings', 'Restorative consultations'], location: 'Willow Creek Dental Studio, Suite 210', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85' },
  { id: 'amelia-chen', name: 'Dr. Amelia Chen', qualification: 'DMD', specialization: 'Cosmetic Dentistry', role: 'Cosmetic Dentist', rating: '4.9', experience: '9 years', specialties: ['Smile Design', 'Restorative Aesthetics'], nextAvailable: 'Friday at 11:30 AM', nextSlots: ['Friday at 11:30 AM', 'Monday at 2:00 PM', 'Tuesday at 10:30 AM'], languages: ['English', 'Mandarin'], bio: 'Dr. Chen is a fictional demo dentist focused on listening carefully to patient goals and discussing conservative, evidence-informed cosmetic options.', treatments: ['Cosmetic consultations', 'Whitening assessment', 'Restorative aesthetics'], location: 'Willow Creek Dental Studio, Suite 210', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85' },
  { id: 'oliver-reed', name: 'Dr. Oliver Reed', qualification: 'DDS, Endodontics', specialization: 'Endodontics', role: 'Endodontist', rating: '4.8', experience: '12 years', specialties: ['Root Canal Therapy', 'Tooth Preservation'], nextAvailable: 'Monday at 3:30 PM', nextSlots: ['Monday at 3:30 PM', 'Tuesday at 10:00 AM', 'Wednesday at 4:30 PM'], languages: ['English'], bio: 'Dr. Reed is a fictional member of this demo team. His profile illustrates a specialist who focuses on explaining treatment clearly and supporting tooth preservation.', treatments: ['Endodontic assessment', 'Root canal treatment', 'Tooth preservation'], location: 'Willow Creek Dental Studio, Suite 210', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85' },
  { id: 'sofia-martinez', name: 'Dr. Sofia Martinez', qualification: 'DMD, Pediatric Dentistry', specialization: 'Pediatric Dentistry', role: 'Pediatric Dentist', rating: '4.9', experience: '8 years', specialties: ['Children’s Preventive Care', 'Dental Anxiety Support'], nextAvailable: 'Wednesday at 10:30 AM', nextSlots: ['Wednesday at 10:30 AM', 'Thursday at 2:00 PM', 'Friday at 9:30 AM'], languages: ['English', 'Spanish'], bio: 'Dr. Martinez is a fictional demo pediatric dentist who models a gentle, age-aware approach and makes room for caregivers to ask questions.', treatments: ['Children’s dental exams', 'Preventive care', 'First-visit support'], location: 'Willow Creek Dental Studio, Suite 210', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85' },
]

export const testimonials = [
  { quote: 'Very professional and comfortable experience from the moment I arrived.', name: 'Demo Patient', context: 'Preventive care visit', rating: 5 },
  { quote: 'Everything was explained clearly, and I felt included in every decision.', name: 'Demo Patient', context: 'Orthodontic consultation', rating: 5 },
  { quote: 'A calm, welcoming team that made my child feel at ease.', name: 'Demo Parent', context: 'Pediatric visit', rating: 5 },
]

export const promotion = { label: 'A demo offer', title: 'Smile Transformation Package', description: 'Receive 20% off your comprehensive cosmetic evaluation.', note: 'Illustrative promotion only. Terms and availability are not real.' }