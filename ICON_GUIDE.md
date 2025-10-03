# Panduan Mengganti Icon

## Cara Menggunakan React Icons

Saya sudah menginstall library `react-icons` yang berisi ribuan icon dari berbagai platform.

## Icon Yang Sudah Digunakan

Saat ini, icon sosial media menggunakan icon dari **Font Awesome** (`react-icons/fa`):
- `FaGithub` - Icon GitHub
- `FaLinkedin` - Icon LinkedIn  
- `FaInstagram` - Icon Instagram
- `FaEnvelope` - Icon Email

## Library Icon Yang Tersedia

React Icons menyediakan icon dari berbagai sumber:

1. **Font Awesome** (`react-icons/fa`) - Icon umum dan populer
2. **Material Design** (`react-icons/md`) - Icon dari Google Material Design
3. **Bootstrap Icons** (`react-icons/bs`) - Icon dari Bootstrap
4. **Ant Design** (`react-icons/ai`) - Icon dari Ant Design
5. **Heroicons** (`react-icons/hi` atau `react-icons/hi2`) - Icon modern dari Tailwind
6. **Feather Icons** (`react-icons/fi`) - Icon minimalis
7. **Simple Icons** (`react-icons/si`) - Icon brand/logo aplikasi
8. **Dan masih banyak lagi!**

## Cara Mengganti Icon

### Langkah 1: Cari Icon Yang Diinginkan

Kunjungi: https://react-icons.github.io/react-icons/

Di website tersebut kamu bisa:
- Search icon yang kamu inginkan
- Lihat preview icon
- Tahu nama icon dan dari library mana

### Langkah 2: Update Import

Buka file yang ingin kamu edit (contoh: `ContactSection.tsx` atau `ProfileModal.tsx`).

**Contoh sekarang:**
```tsx
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
```

**Jika ingin ganti ke icon lain, ubah import nya:**
```tsx
// Menggunakan icon dari Simple Icons (logo brand)
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaEnvelope } from 'react-icons/fa';

// Atau menggunakan Heroicons (modern minimalis)
import { HiMail } from 'react-icons/hi2';
```

### Langkah 3: Ganti Icon di Array socialLinks

**Di ContactSection.tsx**, cari array `socialLinks`:

```tsx
const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,  // ← Ganti nama icon nya di sini
    url: 'https://github.com/AldiPutraNugraha',
    color: 'hover:text-gray-400'
  },
  // ... dst
];
```

### Langkah 4: Ganti Penggunaan Icon di JSX

**Di ProfileModal.tsx**, cari bagian social links:

```tsx
<FaGithub className="text-xl" />  {/* ← Ganti nama component nya */}
```

## Contoh Lengkap: Mengganti ke Simple Icons

### 1. Update Import di ContactSection.tsx:
```tsx
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaEnvelope } from 'react-icons/fa';
```

### 2. Update socialLinks array:
```tsx
const socialLinks = [
  {
    name: 'GitHub',
    icon: SiGithub,  // ← Ganti dari FaGithub ke SiGithub
    url: 'https://github.com/AldiPutraNugraha',
    color: 'hover:text-gray-400'
  },
  // ... ubah yang lain juga
];
```

### 3. Update ProfileModal.tsx:
```tsx
<SiGithub className="text-xl" />  {/* ← Ganti dari FaGithub */}
<SiLinkedin className="text-xl" />
<SiInstagram className="text-xl" />
<FaEnvelope className="text-xl" />
```

## Tips

1. **Konsistensi**: Gunakan icon dari library yang sama untuk tampilan yang konsisten
2. **Size**: Ukuran icon bisa diatur dengan className seperti `text-xl`, `text-2xl`, `text-3xl`
3. **Color**: Icon akan mengikuti warna text, bisa diatur dengan `text-blue-500`, `text-purple-400`, dll
4. **Hover Effects**: Icon sudah ada hover effect, tidak perlu tambahan khusus

## Rekomendasi Icon Library

- **Simple Icons (`si`)**: Bagus untuk logo brand/aplikasi (GitHub, LinkedIn, dll)
- **Heroicons (`hi2`)**: Bagus untuk icon UI modern dan minimalis
- **Font Awesome (`fa`)**: All-around bagus, paling banyak pilihan
- **Bootstrap Icons (`bs`)**: Clean dan professional

## File Yang Perlu Diubah

Jika ingin ganti icon sosial media:
1. `src/components/sections/ContactSection.tsx` (section kontak di halaman utama)
2. `src/components/ui/ProfileModal.tsx` (modal profile yang muncul saat klik foto)

---

**Selamat mencoba! 🚀**

Jika ada pertanyaan, bisa tanya saja!
