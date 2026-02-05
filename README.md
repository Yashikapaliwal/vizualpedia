# VizualPedia

A visual encyclopedia web application built with Next.js that showcases curated collections of business insights and brand stories.

## Features

- **Categories Page** - Browse through different categories of information
- **Self-Made Billionaires** - Explore profiles of self-made entrepreneurs with search functionality
- **Company Logos** - Discover top companies with their logos, market cap, and sector information
- **Image Upload** - Upload images to Cloudinary with folder organization
- **Responsive Design** - Mobile-first design with 2 cards on mobile, 5 cards on desktop
- **Dark Theme** - Modern dark UI with glassmorphism effects

## Tech Stack

- **Framework**: Next.js 15.5.2
- **UI Library**: Material UI (MUI)
- **Styling**: Tailwind CSS + MUI sx prop
- **Image Storage**: Cloudinary
- **Icons**: MUI Icons, Remix Icons

## Project Structure

```
src/
├── app/
│   ├── categories/
│   │   ├── page.js              # Categories listing
│   │   ├── selfmade/
│   │   │   └── page.js          # Self-made billionaires
│   │   └── company-logos/
│   │       └── page.js          # Company logos
│   ├── upload-test/
│   │   └── page.js              # Image upload testing
│   ├── api/
│   │   └── upload/
│   │       └── route.js         # Cloudinary upload API
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── ImageUpload.js           # Image upload component
│   └── ...
public/
├── data/
│   ├── self-billionare.json     # Billionaires data
│   ├── logodata.json            # Company logos data
│   └── ...
└── skills/                       # Skill icons
```

## Getting Started

1. Install dependencies:
```bash
npm install --include=dev
```

2. Set up environment variables:
```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

- `/categories` - Main categories page
- `/categories/selfmade` - Self-made billionaires listing
- `/categories/company-logos` - Company logos listing
- `/upload-test` - Image upload testing page

## Cloudinary Integration

Images are uploaded to the `vizualpedia` folder in Cloudinary. The upload API returns:
- `secure_url` - The image URL
- `public_id` - The image ID for future reference

## License

MIT

