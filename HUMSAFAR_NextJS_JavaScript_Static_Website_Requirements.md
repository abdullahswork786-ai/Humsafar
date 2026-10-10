# HUMSAFAR — Next.js Website Development Requirements

## 1. Project Overview
**Project:** HUMSAFAR  
**Website:** Visa, Immigration & Study Abroad Consultancy  
**Current Phase:** Static frontend website  
**Goal:** Build a modern, trustworthy, responsive and SEO-friendly website using **Next.js + JavaScript**.

The design must use the HUMSAFAR logo/brand id
entity and the visual design screenshots that the user will provide in chat. Treat those screenshots as visual references for layout, spacing, typography, cards, buttons, imagery and section hierarchy. Do not copy another company's branding, logo or proprietary content.

## 2. Current Technology Stack
- Next.js
- JavaScript (NOT TypeScript)
- React
- Tailwind CSS
- Responsive HTML/CSS
- Component-based architecture

### Current project type
The first version is a **static website**.

Do **not** build now:
- Node.js backend
- Express.js API
- MongoDB
- Authentication
- Admin dashboard
- User accounts
- Application tracking

These are future-phase possibilities.

## 3. Future Backend Plan
The project should be structured so backend functionality can be added later without rebuilding the frontend.

Possible future stack:
- Node.js
- Express.js
- MongoDB
- REST APIs
- Authentication
- Admin dashboard
- Lead/application management

For now, keep content/data organized in reusable JavaScript data files/components so static data can later be replaced by API/database data.

## 4. Brand & Color System
Based on the HUMSAFAR logo:

| Role | Color | Hex | Usage |
|---|---|---|---|
| Primary | Deep Navy | `#101C2A` | Header, headings, footer, dark sections |
| Secondary / CTA | Red | `#E31B23` | Main CTA buttons, highlights, active states |
| Accent | Green | `#008A4B` | Small highlights, positive/supporting UI |
| White | White | `#FFFFFF` | Backgrounds/cards/light sections |
| Light Background | Light Gray | `#F5F7F9` | Alternate sections |
| Dark Text | Charcoal | `#1F2933` | Body text |
| Border | Light Gray | `#D9DEE3` | Borders/forms/dividers |

Do not introduce unrelated brand colors without approval.

## 5. Approved Sitemap
```text
HUMSAFAR
│
├── Home
├── About
├── Gallery
├── Services
│   ├── Tourist & Visit Visa
│   ├── Business Visa
│   ├── Work Visa
│   ├── Immigration
│   └── Study Abroad & Student Visa
├── Testimonials
├── Blog
│   ├── Visa Guides
│   ├── Immigration
│   ├── Study Abroad
│   ├── Student Visa
│   ├── Travel Tips
│   └── Visa Updates
├── Career
├── Contact
├── Free Assessment
├── Countries
│   ├── Canada
│   ├── UK
│   ├── Australia
│   ├── USA
│   ├── Germany
│   ├── Italy
│   └── UAE
└── Study Abroad
    ├── Canada
    ├── UK
    ├── Australia
    ├── USA
    ├── Germany
    └── Italy
```

## 6. Header / Navigation
Desktop header:
- HUMSAFAR logo
- Home
- About
- Gallery
- Services dropdown
- Testimonials
- Blog
- Career
- Contact
- Countries dropdown
- Study Abroad dropdown
- **Get Free Assessment** CTA

Services dropdown:
- Tourist & Visit Visa
- Business Visa
- Work Visa
- Immigration
- Study Abroad & Student Visa

Countries dropdown:
- Canada
- UK
- Australia
- USA
- Germany
- Italy
- UAE

Study Abroad dropdown:
- Canada
- UK
- Australia
- USA
- Germany
- Italy

Mobile: hamburger menu with expandable dropdown/accordion sections. Keep Free Assessment prominent.

## 7. Home Page
### Hero
Label: **VISA, IMMIGRATION & STUDY ABROAD CONSULTANCY**

H1: **Your Trusted Partner for Visa, Immigration & Study Abroad Services**

Description:
> Planning to travel, study, work, do business or settle abroad? Our experienced team provides professional guidance to help you understand your options, prepare your documents and navigate the application process with confidence.

Buttons:
- Get Free Assessment
- Explore Our Services

### Trust strip
- Professional Guidance
- Clear Process
- Document Support
- Destination-Focused Advice

### Services
**Tourist & Visit Visa:** Planning a holiday, family visit or short international trip? Get guidance on visitor visa requirements and application preparation.

**Business Visa:** Get professional support for eligible business travel, meetings, conferences and commercial activities.

**Work Visa:** Understand work visa requirements and prepare the documentation relevant to your destination and employment situation.

**Immigration:** Explore immigration and permanent residence pathways based on your profile, destination and long-term goals.

**Study Abroad & Student Visa:** Get guidance on choosing a study destination, institution and program, preparing documents and navigating the student visa process.

### Why Choose HUMSAFAR
- Personalized Guidance
- Clear Documentation Support
- Destination-Focused Advice
- Step-by-Step Process
- Multiple Services Under One Roof

### How It Works
1. Initial Assessment
2. Profile Review
3. Document Preparation
4. Application Support
5. Follow-Up Guidance

### Study Abroad highlight
> Thinking about studying abroad? From destination and course selection to application preparation and student visa guidance, our team helps you understand the journey before you make your next move.

CTA: **Explore Study Abroad**

Destinations:
Canada, UK, Australia, USA, Germany, Italy.

### Popular Countries
Canada, UK, Australia, USA, Germany, Italy, UAE.

### Testimonials
Use genuine testimonials only.

### FAQ preview
- Which visa service is right for me?
- What documents will I need?
- Can you help with student visa applications?
- How does the assessment work?
- Can I get help for more than one destination?

### Latest Insights
Show 3–6 recent blog posts.

### Final CTA
**Ready to Plan Your Next Step Abroad?**

> Tell us where you want to go and what you want to achieve. We’ll help you understand the available options and the next steps.

CTA: **Get Free Assessment**

## 8. About Page
H1: **About HUMSAFAR**

> HUMSAFAR is a professional visa, immigration and study abroad consultancy helping individuals and families understand international travel, study, work and immigration pathways.

Sections:
- Our Story
- Our Mission
- Our Vision
- Our Approach

Use professional, transparent and client-focused messaging.

## 9. Gallery Page
H1: **HUMSAFAR Gallery**

Categories:
- Office & Workspace
- Team
- Seminars & Education Sessions
- University/Partner Events
- Company Activities
- Approved Client/Student Events

Use real images supplied by HUMSAFAR.

## 10. Services Page
H1: **Visa, Immigration & Study Abroad Services**

Intro:
> Whether you are planning a short visit, business trip, overseas employment, long-term immigration or international study, HUMSAFAR provides structured guidance around your destination and goals.

Show all five services with cards and links.

## 11. Service Detail Pages
Create separate pages for:
1. Tourist & Visit Visa
2. Business Visa
3. Work Visa
4. Immigration
5. Study Abroad & Student Visa

Each page:
- Hero
- Introduction
- Who the service is for
- What HUMSAFAR helps with
- Typical documents/information
- Process
- FAQs
- Related countries
- Related blog articles
- Free Assessment CTA

Avoid universal claims; requirements vary by destination and individual circumstances.

## 12. Tourist & Visit Visa
Intro:
> Planning a holiday, visiting family or taking a short international trip? HUMSAFAR can help you understand the visitor visa process, organize supporting documents and prepare your application information.

Support:
- Profile/travel-purpose discussion
- Destination-specific document guidance
- Application/document preparation
- Supporting-document checklist
- Submission and next-step guidance

## 13. Business Visa
Intro:
> If you are travelling for meetings, conferences, commercial activities or other eligible business purposes, our team can help you understand the applicable visa route and prepare the relevant information.

Support:
- Business travel profile review
- Destination and visa-category guidance
- Document checklist
- Invitation/business-supporting document guidance
- Application preparation

## 14. Work Visa
Intro:
> Working abroad often involves destination-specific eligibility rules, employment documentation and visa requirements. HUMSAFAR helps clients understand the process and organize the information relevant to their situation.

Support:
- Profile/employment review
- Destination-specific pathway guidance
- Employment/document checklist
- Application preparation
- Next-step guidance

## 15. Immigration
Intro:
> Long-term immigration decisions require careful review of the available pathway, eligibility factors and documentation. Our team helps clients understand the relevant options for their destination and personal goals.

Sections:
- Initial profile assessment
- Pathway and destination discussion
- Eligibility/document review
- Application preparation guidance
- Next-step support

## 16. Study Abroad & Student Visa
Intro:
> Planning to study abroad? HUMSAFAR can guide you through destination selection, course and institution research, application preparation and the student visa process.

Process:
1. Profile Assessment
2. Destination Selection
3. Course & Institution Guidance
4. Application Preparation
5. Offer & Next Steps
6. Student Visa Guidance

## 17. Countries
Create pages:
- Canada
- UK
- Australia
- USA
- Germany
- Italy
- UAE

Country page structure:
- Hero
- Introduction
- Available HUMSAFAR services
- Relevant visa options
- Study Abroad section where applicable
- General requirements
- Application process
- FAQs
- Related blog posts
- Free Assessment CTA

Do not invent visa rules or guarantee outcomes.

## 18. Study Abroad Country Pages
Create:
- Study in Canada
- Study in UK
- Study in Australia
- Study in USA
- Study in Germany
- Study in Italy

Each:
- Hero
- Why study there
- Study options
- Course/institution guidance
- Application process
- Student visa guidance
- General document checklist
- FAQs
- CTA

## 19. Testimonials
H1: **What Our Clients Say**

Use genuine reviews only. Each can include:
- Display name
- Service
- Destination
- Review
- Optional photo
- Date

No fake testimonials or success percentages.

## 20. Blog
H1: **Visa, Immigration & Study Abroad Insights**

Categories:
- Visa Guides
- Immigration
- Study Abroad
- Student Visa
- Travel Tips
- Visa Updates

Suggested articles:
- Tourist Visa Document Checklist: What to Prepare Before You Apply
- How to Prepare for a Student Visa Application
- Study Abroad: How to Compare Countries and Courses
- Business Visa vs Tourist Visa: Understanding the Purpose of Each
- What Documents Should You Organize Before Starting a Visa Application?
- Common Mistakes Applicants Should Avoid When Preparing Documents
- Study in Canada: Planning Your Application Journey
- Study in the UK: A Practical Student Visa Preparation Guide

## 21. Career
H1: **Build Your Career with HUMSAFAR**

> We are interested in hearing from motivated professionals who want to work in visa consultancy, student counselling, customer support, sales, operations or related areas.

Form:
- Name
- Email
- Phone
- Position
- CV upload
- Cover message

## 22. Contact
H1: **Contact HUMSAFAR**

> Have a question about a visa, immigration pathway or study abroad plan? Contact our team or request a free assessment.

Placeholders:
- Office Address: `[INSERT FINAL OFFICE ADDRESS]`
- Phone: `[INSERT PHONE NUMBER]`
- WhatsApp: `[INSERT WHATSAPP NUMBER]`
- Email: `[INSERT BUSINESS EMAIL]`
- Business Hours: `[INSERT BUSINESS HOURS]`

Form:
- Name
- Phone/WhatsApp
- Email
- Service
- Destination
- Message

## 23. Free Assessment
H1: **Get Your Free Assessment**

> Tell us about your travel, study, work or immigration goal. Our team will review the information and explain the next steps that may be relevant.

Fields:
- Full Name
- Phone / WhatsApp
- Email
- Current Country
- Preferred Destination
- Service Required
- Purpose of Travel / Study / Work / Immigration
- Preferred Contact Method
- Additional Message
- Privacy Consent

Button: **REQUEST MY FREE ASSESSMENT**

## 24. FAQ
Questions:
- What does HUMSAFAR help with?
- Can you guarantee visa approval?
- What documents do I need?
- Can you help with study abroad applications?
- How do I start?
- Do requirements change?

Never promise visa approval.

## 25. Footer
Include:
- HUMSAFAR logo
- Short description
- Quick Links
- Services
- Countries
- Study Abroad
- Contact details
- Social links
- Privacy Policy
- Terms & Conditions
- Copyright

## 26. SEO
Every important page should have:
- Unique title
- Meta description
- One H1
- Logical H2/H3 hierarchy
- SEO-friendly URL
- Internal links
- Optimized images and alt text
- Open Graph metadata where appropriate
- XML sitemap
- robots.txt
- Canonical handling where required

Use semantic HTML.

## 27. Performance
- Use Next.js image optimization
- Optimize image sizes/formats
- Lazy-load below-the-fold images
- Avoid unnecessary JavaScript
- Avoid heavy animations
- Minimize third-party scripts
- Reuse components
- Test mobile performance
- Aim for strong Core Web Vitals

## 28. Responsive Design
Support:
- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop

No horizontal scrolling. Forms and buttons must be easy to use on mobile.

## 29. Accessibility
Implement:
- Semantic HTML
- Proper heading hierarchy
- Useful alt text
- Keyboard-accessible navigation
- Visible focus states
- Good contrast
- Accessible form labels
- Clear button labels

## 30. Component Architecture
Suggested components:
```text
components/
├── Header
├── MobileMenu
├── Footer
├── Hero
├── SectionHeading
├── ServiceCard
├── CountryCard
├── StudyDestinationCard
├── TestimonialCard
├── BlogCard
├── FAQAccordion
├── CTASection
├── ContactForm
├── AssessmentForm
├── Breadcrumbs
└── Button
```

Suggested data:
```text
data/
├── services.js
├── countries.js
├── studyDestinations.js
├── testimonials.js
└── blog.js
```

## 31. Suggested Routes
```text
/
 /about
 /gallery
 /services
 /services/tourist-visit-visa
 /services/business-visa
 /services/work-visa
 /services/immigration
 /services/study-abroad-student-visa
 /testimonials
 /blog
 /blog/[slug]
 /career
 /contact
 /free-assessment
 /countries
 /countries/canada
 /countries/uk
 /countries/australia
 /countries/usa
 /countries/germany
 /countries/italy
 /countries/uae
 /study-abroad
 /study-abroad/canada
 /study-abroad/uk
 /study-abroad/australia
 /study-abroad/usa
 /study-abroad/germany
 /study-abroad/italy
```

## 32. Design Reference Images
The user will provide design screenshots/images directly in chat.

When a screenshot is provided:
1. Analyze layout.
2. Identify header/navigation.
3. Identify spacing and section hierarchy.
4. Identify typography.
5. Identify cards/buttons.
6. Identify image treatment.
7. Identify responsive behavior where visible.
8. Recreate the design using HUMSAFAR branding.
9. Keep the approved sitemap/content.
10. Do not copy unrelated branding or proprietary assets.

## 33. Content Rules
Do not use:
- Fake testimonials
- Fake client numbers
- Fake success rates
- Fake approval guarantees
- Fake partnerships
- Fake awards
- Fake office locations
- Unsupported visa claims

Use clearly marked placeholders when final company information is not supplied.

## 34. Future Backend Compatibility
Current:
```text
JavaScript data → React/Next.js components
```

Future:
```text
MongoDB → Express API → Next.js frontend
```

The frontend components should not require major redesign when data becomes dynamic.

## 35. Definition of Done
- All approved pages implemented
- All routes working
- Header navigation working
- Dropdowns working
- Mobile menu working
- CTA buttons linked correctly
- Forms implemented
- Responsive layouts complete
- Images optimized
- SEO metadata implemented
- Sitemap implemented
- robots.txt implemented
- No broken links
- No unintended placeholder text
- No console errors
- Modern browsers supported
- Mobile and desktop QA completed

## 36. Important AI Coding Assistant Instruction
This file is the project requirements source of truth.

The user will provide visual design references as images in chat.

Before writing large amounts of code:
1. Read this requirements file.
2. Inspect the provided design reference.
3. Identify the page/section being requested.
4. Build reusable components.
5. Follow HUMSAFAR branding.
6. Use **JavaScript, not TypeScript**.
7. Use **Next.js**.
8. Use **Tailwind CSS** if included in the project setup.
9. Keep the current phase **static**.
10. Do not introduce Node/Express/MongoDB unless explicitly requested.
11. Do not add unnecessary dependencies.
12. Keep code clean and production-ready.
13. Make the implementation responsive.
14. Preserve SEO best practices.
15. If a visual reference conflicts with the approved sitemap or technology stack, ask for clarification rather than silently changing it.

## 37. Final Technology Decision

### CURRENT
**Next.js + JavaScript + React + Tailwind CSS**

**Static website**

### FUTURE
**Next.js frontend + Node.js + Express.js + MongoDB**

Backend will only be introduced when dynamic functionality is required.

---

**END OF HUMSAFAR REQUIREMENTS**
