# LANKA STAYZ

A responsive accommodation discovery and booking request website prototype featuring hotels, villas, apartments, resorts, guesthouses, and unique stays across Sri Lanka.

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

1. Clone or download the project.
2. Navigate to the project directory:

   ```bash
   cd lanka-stayz
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the project root:

   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=Lanka Stayz
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

- **Next.js** - React framework using the App Router.
- **TypeScript** - Static typing and improved code maintainability.
- **Tailwind CSS** - Responsive styling and custom design system.
- **Formik** - Form state management and submission handling.
- **Yup** - Form validation.
- **Lucide React** - UI icons.
- **Next.js Image** - Image optimization and responsive image handling.

## Main Features

- Responsive homepage with accommodation search.
- Explore stays with destination, property type, guest capacity, and price filters.
- Property detail pages with image galleries, descriptions, amenities, and pricing.
- Booking request form with validation and submission confirmation.
- About Us and Contact pages.
- Reusable UI components and shared navigation.
- SEO metadata and page-specific titles and descriptions.
- Loading states and custom 404 page.
- Responsive desktop, tablet, and mobile layouts.
