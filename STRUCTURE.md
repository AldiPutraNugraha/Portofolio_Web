# 📁 Struktur Folder Portfolio Web

Struktur folder yang terorganisir untuk portfolio web modern dengan Next.js dan Tailwind CSS.

## 📂 Struktur Direktori

```
portofolio_web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── favicon.ico
│   │   ├── globals.css         # Global styles & animations
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Halaman utama
│   │
│   └── components/             # Komponen React
│       ├── sections/           # Section-based components
│       │   ├── HeroSection.tsx      # Hero dengan gradient animated
│       │   ├── AboutSection.tsx     # About dengan skills progress
│       │   ├── ProjectsSection.tsx  # Portfolio projects grid
│       │   └── ContactSection.tsx   # Contact form & social links
│       │
│       └── ui/                 # UI components
│           ├── Navbar.tsx      # Navigation dengan scroll effect
│           └── Footer.tsx      # Footer dengan newsletter
│
├── public/                     # Static assets
│   └── [svg files]
│
└── [config files]              # Next.js, TypeScript, Tailwind configs
```

## 🎨 Komponen yang Tersedia

### Sections (src/components/sections/)

1. **HeroSection.tsx**
   - Animated gradient background
   - Hero title dengan gradient text
   - Call-to-action buttons
   - Scroll indicator

2. **AboutSection.tsx**
   - Deskripsi pribadi
   - Skills progress bars dengan animasi
   - Statistics cards (Projects, Experience, Technologies)

3. **ProjectsSection.tsx**
   - Grid layout untuk project cards
   - Hover effects & transitions
   - Tech stack tags
   - Action buttons (Demo & Source)

4. **ContactSection.tsx**
   - Contact form
   - Informasi kontak
   - Social media links
   - Interactive UI elements

### UI Components (src/components/ui/)

1. **Navbar.tsx**
   - Sticky navigation dengan scroll effect
   - Responsive mobile menu
   - Smooth scrolling ke sections
   - Backdrop blur effect

2. **Footer.tsx**
   - Brand information
   - Quick links
   - Newsletter subscription
   - Copyright & legal links

## 🎯 Fitur Utama

- ✅ **Struktur Terorganisir**: Separation of concerns dengan folder yang jelas
- ✅ **Modern Design**: Gradient backgrounds, glassmorphism effects
- ✅ **Animasi Smooth**: Custom animations untuk better UX
- ✅ **Responsive**: Mobile-first design approach
- ✅ **Type-Safe**: Full TypeScript support
- ✅ **Customizable**: Mudah disesuaikan dengan kebutuhan

## 🚀 Cara Menggunakan

1. Setiap section dapat di-customize di folder `src/components/sections/`
2. Edit data project, skills, dan contact info langsung di komponen
3. Styling global ada di `src/app/globals.css`
4. Warna dan tema dapat disesuaikan di masing-masing komponen

## 🎨 Color Scheme

- **Primary**: Purple (`#a855f7` - `#9333ea`)
- **Secondary**: Pink (`#ec4899` - `#db2777`)
- **Accent**: Yellow (`#eab308`)
- **Background**: Slate (`#0f172a` - `#1e293b`)
- **Text**: Light gray (`#f1f5f9`)

## 📝 Customization Tips

### Mengganti Informasi Pribadi
- Edit nama di `HeroSection.tsx`
- Update skills di `AboutSection.tsx`
- Ganti project data di `ProjectsSection.tsx`
- Ubah contact info di `ContactSection.tsx`

### Menambah Section Baru
1. Buat file baru di `src/components/sections/`
2. Import di `src/app/page.tsx`
3. Tambahkan ke komponen `<main>`

### Styling
- Global animations: `src/app/globals.css`
- Component-specific: Tailwind classes di masing-masing file

Enjoy coding! 🎉
