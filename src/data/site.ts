export type Locale = "en" | "tr";

type SocialLink = {
  label: string;
  href: string;
};

type BentoCard = {
  title: string;
  description: string;
  href?: string;
  icon: "folder" | "pen" | "mail" | "music" | "spark" | "heart";
  span?: string;
  eyebrow?: string;
};

type Content = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    cv: string;
    blog: string;
    soon: string;
  };
  profile: {
    name: string;
    role: string;
    tagline: string;
    summary: string;
    location: string;
    imageUrl: string;
    imageAlt: string;
  };
  social: SocialLink[];
  home: {
    label: string;
    heroTitle: string;
    heroDescription: string;
    focusTitle: string;
    focusItems: string[];
    cards: BentoCard[];
    contact: BentoCard;
  };
  footer: {
    rights: string;
  };
};

const content: Record<Locale, Content> = {
  en: {
    meta: {
      title: "Burak Yoruk — Home",
      description: "A modern personal homepage for Burak Yoruk with selected work, writing, music, NGO work, and contact."
    },
    nav: {
      home: "Home",
      cv: "CV",
      blog: "Blog",
      soon: "Soon"
    },
    profile: {
      name: "Burak Yoruk",
      role: "Entrepreneur & Engineer",
      tagline: "Working on autonomous systems, R&D, and venture building.",
      summary: "Co-Founder at Meshine. Background in avionics, computer vision, embedded systems, and UAV platforms.",
      location: "Izmir, Turkiye",
      imageUrl: "/profile.jpg",
      imageAlt: "Portrait of Burak Yoruk"
    },
    social: [
      { label: "X", href: "https://twitter.com/BurakYoruk35" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/byoruk/" },
      { label: "GitHub", href: "https://github.com/Shubuo" },
      { label: "Instagram", href: "https://www.instagram.com/b.yorukk/" }
    ],
    home: {
      label: "Homepage",
      heroTitle: "Autonomous systems, applied R&D, and venture building.",
      heroDescription: "Focused on UAV platforms, computer vision, embedded systems, and product strategy.",
      focusTitle: "Current Focus",
      focusItems: [
        "Connected autonomous systems",
        "Computer vision",
        "Business development"
      ],
      cards: [
        {
          title: "Personal",
          description: "Writing, music, and technical curiosity.",
          href: "#",
          icon: "music",
          eyebrow: "Personal"
        },
        {
          title: "Professional",
          description: "Meshine, R&D, and engineering-led product work.",
          href: "#",
          icon: "folder",
          eyebrow: "Professional"
        },
        {
          title: "Social Impact",
          description: "Mentoring, volunteering, and community work.",
          href: "#",
          icon: "heart",
          eyebrow: "Social"
        }
      ],
      contact: {
        title: "Reach Out",
        description: "For R&D, product, and collaboration inquiries, email is the best starting point.",
        href: "mailto:burak@meshine.tech",
        icon: "mail",
        eyebrow: "Contact",
        span: "md:col-span-3"
      }
    },
    footer: {
      rights: "© 2026 Burak Yoruk. All rights reserved."
    }
  },
  tr: {
    meta: {
      title: "Burak Yörük — Ana Sayfa",
      description: "Burak Yörük için seçili işler, yazılar, müzik, STK çalışmaları ve iletişimi öne çıkaran modern kişisel ana sayfa."
    },
    nav: {
      home: "Ana Sayfa",
      cv: "CV",
      blog: "Blog",
      soon: "Yakında"
    },
    profile: {
      name: "Burak Yörük",
      role: "Entrepreneur & Engineer",
      tagline: "Otonom sistemler, Ar-Ge ve girişim geliştirme üzerinde çalışıyorum.",
      summary: "Meshine kurucu ortağıyım. Aviyonik, bilgisayarlı görü, gömülü sistemler ve İHA platformları geçmişim var.",
      location: "Izmir, Turkiye",
      imageUrl: "/profile.jpg",
      imageAlt: "Burak Yörük portresi"
    },
    social: [
      { label: "X", href: "https://twitter.com/BurakYoruk35" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/byoruk/" },
      { label: "GitHub", href: "https://github.com/Shubuo" },
      { label: "Instagram", href: "https://www.instagram.com/b.yorukk/" }
    ],
    home: {
      label: "Ana Sayfa",
      heroTitle: "Otonom sistemler, uygulamalı Ar-Ge ve girişim geliştirme.",
      heroDescription: "İHA platformları, bilgisayarlı görü, gömülü sistemler ve ürün stratejisi odağında çalışıyorum.",
      focusTitle: "Güncel Odak",
      focusItems: [
        "Bağlantılı otonom sistemler",
        "Bilgisayarlı görü",
        "İş geliştirme"
      ],
      cards: [
        {
          title: "Bireysel",
          description: "Yazı, müzik ve teknik merak.",
          href: "#",
          icon: "music",
          eyebrow: "Bireysel"
        },
        {
          title: "Profesyonel",
          description: "Meshine, Ar-Ge ve mühendislik odaklı ürün çalışmaları.",
          href: "#",
          icon: "folder",
          eyebrow: "Profesyonel"
        },
        {
          title: "Sosyal Çalışmalar",
          description: "Mentorluk, gönüllülük ve topluluk katkıları.",
          href: "#",
          icon: "heart",
          eyebrow: "Sosyal"
        }
      ],
      contact: {
        title: "Bana Ulaşın",
        description: "Ar-Ge, ürün ve iş birliği konuları için en doğru başlangıç noktası e-posta.",
        href: "mailto:burak@meshine.tech",
        icon: "mail",
        eyebrow: "İletişim",
        span: "md:col-span-3"
      }
    },
    footer: {
      rights: "© 2026 Burak Yörük. Tüm hakları saklıdır."
    }
  }
};

export function getContent(locale: Locale) {
  return content[locale];
}
