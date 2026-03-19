export type Locale = "en" | "tr";

type SocialLink = {
  label: string;
  url: string;
};

type DownloadLink = {
  title: string;
  note?: string;
  url?: string;
  disabled?: boolean;
};

type SectionItem = {
  title: string;
  meta?: string;
  description?: string;
  url?: string;
  badge?: string;
};

type Section = {
  id: string;
  title: string;
  lead?: string;
  items: SectionItem[];
  enabled?: boolean;
};

type Content = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    overview: string;
    highlights: string;
    ventures: string;
    community: string;
    writing: string;
    speaking: string;
    contact: string;
  };
  hero: {
    name: string;
    role: string;
    tagline: string;
    summary: string;
    location: string;
    imageAlt: string;
    initials: string;
    focus: string[];
  };
  cta: {
    emailLabel: string;
    emailUrl: string;
    calendlyLabel: string;
    calendlyUrl: string;
  };
  social: SocialLink[];
  downloads: {
    title: string;
    items: DownloadLink[];
    enabled?: boolean;
  };
  highlights: {
    title: string;
    lead: string;
    items: Array<{ title: string; description: string }>;
  };
  sections: Section[];
  footer: {
    note: string;
    copyright: string;
  };
};

const content: Record<Locale, Content> = {
  en: {
    meta: {
      title: "Burak Yoruk — Signature Profile",
      description:
        "Technology entrepreneur focused on venture building, community systems, and thoughtful writing."
    },
    nav: {
      overview: "Overview",
      highlights: "Focus",
      ventures: "Ventures",
      community: "Community",
      writing: "Writing",
      speaking: "Speaking & Press",
      contact: "Contact"
    },
    hero: {
      name: "Burak Yoruk",
      role: "Technology Entrepreneur",
      tagline: "Building ventures at the edge of community, systems, and narrative.",
      summary:
        "This is a signature profile that blends a digital business card with a living archive. It is designed to grow into a multi‑page presence while staying fast and clear.",
      location: "Based in Istanbul · Working globally",
      imageAlt: "Profile placeholder",
      initials: "BY",
      focus: [
        "Venture building and product strategy",
        "Community infrastructure and knowledge networks",
        "Editorial writing with a technological lens"
      ]
    },
    cta: {
      emailLabel: "Email",
      emailUrl: "mailto:hello@yourdomain.com",
      calendlyLabel: "Book a call",
      calendlyUrl: "https://calendly.com/your-handle/intro"
    },
    social: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
      { label: "X", url: "https://x.com/your-handle" },
      { label: "Instagram", url: "https://instagram.com/your-handle" },
      { label: "GitHub", url: "https://github.com/your-handle" }
    ],
    downloads: {
      title: "Downloads",
      enabled: true,
      items: [
        {
          title: "Download vCard",
          note: "Add to your contacts",
          disabled: true
        },
        {
          title: "Company overview",
          note: "One‑pager or deck",
          disabled: true
        }
      ]
    },
    highlights: {
      title: "Focus",
      lead: "The recurring themes across ventures, community work, and writing.",
      items: [
        {
          title: "Technology entrepreneurship",
          description: "Building systems-first companies that scale with culture."
        },
        {
          title: "Community architecture",
          description: "Designing networks that turn knowledge into momentum."
        },
        {
          title: "Editorial practice",
          description: "Long‑form reflections at the intersection of tech and society."
        }
      ]
    },
    sections: [
      {
        id: "ventures",
        title: "Ventures",
        lead: "Selected companies and initiatives. Replace the placeholders with real milestones.",
        items: [
          {
            title: "Venture Name",
            meta: "Founder · 2023 — Present",
            description:
              "One‑sentence mission statement describing the venture and its focus."
          },
          {
            title: "Venture Name",
            meta: "Product Lead · 2020 — 2023",
            description:
              "Brief outcome, market, or signature achievement to anchor credibility."
          }
        ]
      },
      {
        id: "community",
        title: "Community",
        lead: "Programs, collectives, or knowledge networks you cultivate.",
        items: [
          {
            title: "Community Initiative",
            meta: "Organizer",
            description:
              "What the community is about, who it serves, and the impact it creates."
          },
          {
            title: "Community Initiative",
            meta: "Advisor",
            description:
              "A concise summary of the format, cadence, or scale."
          }
        ]
      },
      {
        id: "writing",
        title: "Writing",
        lead: "External writing hubs and selected essays.",
        items: [
          {
            title: "Essay or series title",
            meta: "Medium · 2026",
            description: "Short synopsis of the piece and why it matters.",
            url: "https://medium.com/@your-handle"
          },
          {
            title: "Newsletter piece",
            meta: "Substack · 2026",
            description:
              "Highlight the editorial angle and the intended audience.",
            url: "https://your-handle.substack.com"
          }
        ]
      },
      {
        id: "speaking",
        title: "Speaking & Press",
        lead: "Talks, panels, interviews, or media coverage.",
        items: [
          {
            title: "Conference Talk",
            meta: "Event Name · 2025",
            description: "Topic and key takeaway in one clean sentence."
          },
          {
            title: "Interview or podcast",
            meta: "Publication · 2024",
            description: "Short description with a link when available."
          }
        ]
      }
    ],
    footer: {
      note: "Signature profile for founders, operators, and community builders.",
      copyright: "All rights reserved. © 2026"
    }
  },
  tr: {
    meta: {
      title: "Burak Yörük — Signature Profil",
      description:
        "Girişim, topluluk ve düşünsel üretimin kesişiminde çalışan teknoloji girişimcisi."
    },
    nav: {
      overview: "Genel",
      highlights: "Odak",
      ventures: "Girişimler",
      community: "Topluluk",
      writing: "Yazılar",
      speaking: "Konuşmalar & Basın",
      contact: "İletişim"
    },
    hero: {
      name: "Burak Yörük",
      role: "Teknoloji Girişimcisi",
      tagline:
        "Topluluk, sistemler ve anlatı arasında ölçeklenen girişimler inşa ediyorum.",
      summary:
        "Bu imza profil; dijital kartviziti yaşayan bir arşivle birleştirir. Basit başlar, çok sayfalı bir kimliğe sorunsuz evrilir.",
      location: "İstanbul merkezli · Küresel çalışma",
      imageAlt: "Profil yer tutucusu",
      initials: "BY",
      focus: [
        "Girişim kurma ve ürün stratejisi",
        "Topluluk altyapıları ve bilgi ağları",
        "Teknoloji merceğinden editöryel yazı"
      ]
    },
    cta: {
      emailLabel: "E‑posta",
      emailUrl: "mailto:hello@yourdomain.com",
      calendlyLabel: "Görüşme ayarla",
      calendlyUrl: "https://calendly.com/your-handle/intro"
    },
    social: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
      { label: "X", url: "https://x.com/your-handle" },
      { label: "Instagram", url: "https://instagram.com/your-handle" },
      { label: "GitHub", url: "https://github.com/your-handle" }
    ],
    downloads: {
      title: "İndirilebilirler",
      enabled: true,
      items: [
        {
          title: "vCard indir",
          note: "Kişilere ekle",
          disabled: true
        },
        {
          title: "Şirket özeti",
          note: "Tek sayfa / sunum",
          disabled: true
        }
      ]
    },
    highlights: {
      title: "Odak",
      lead: "Girişimler, topluluk çalışmaları ve yazı üretimindeki ortak temalar.",
      items: [
        {
          title: "Teknoloji girişimciliği",
          description:
            "Kültürle birlikte ölçeklenen sistem‑odaklı şirketler."
        },
        {
          title: "Topluluk mimarisi",
          description: "Bilgiyi ivmeye dönüştüren ağ tasarımı."
        },
        {
          title: "Editöryel üretim",
          description: "Teknoloji ve toplum kesişiminde uzun anlatılar."
        }
      ]
    },
    sections: [
      {
        id: "ventures",
        title: "Girişimler",
        lead: "Seçili şirketler ve inisiyatifler. Yer tutucuları gerçek verilerle değiştirin.",
        items: [
          {
            title: "Girişim Adı",
            meta: "Kurucu · 2023 — Günümüz",
            description:
              "Girişimin ne yaptığına dair tek cümlelik bir misyon ifadesi."
          },
          {
            title: "Girişim Adı",
            meta: "Ürün Lideri · 2020 — 2023",
            description:
              "Kısa bir çıktı, pazar ya da somut başarı vurgusu."
          }
        ]
      },
      {
        id: "community",
        title: "Topluluk",
        lead: "Kurduğunuz programlar, kolektifler veya bilgi ağları.",
        items: [
          {
            title: "Topluluk İnisiyatifi",
            meta: "Organizatör",
            description:
              "Topluluğun amacı, kimlere hizmet ettiği ve etkisi."
          },
          {
            title: "Topluluk İnisiyatifi",
            meta: "Danışman",
            description:
              "Format, periyot veya ölçek hakkında kısa özet."
          }
        ]
      },
      {
        id: "writing",
        title: "Yazılar",
        lead: "Harici yayınlar ve seçilmiş denemeler.",
        items: [
          {
            title: "Deneme ya da seri başlığı",
            meta: "Medium · 2026",
            description: "Metnin odağını anlatan kısa bir özet.",
            url: "https://medium.com/@your-handle"
          },
          {
            title: "Bülten yazısı",
            meta: "Substack · 2026",
            description: "Editöryel açı ve hedef kitle vurgusu.",
            url: "https://your-handle.substack.com"
          }
        ]
      },
      {
        id: "speaking",
        title: "Konuşmalar & Basın",
        lead: "Sunumlar, paneller, röportajlar ve medya görünürlüğü.",
        items: [
          {
            title: "Konferans konuşması",
            meta: "Etkinlik Adı · 2025",
            description: "Konu ve ana çıkarımı tek cümlede anlatın."
          },
          {
            title: "Röportaj veya podcast",
            meta: "Yayın · 2024",
            description: "Uygunsa bağlantı ekleyin."
          }
        ]
      }
    ],
    footer: {
      note: "Kurucular, operatörler ve topluluk liderleri için imza profil.",
      copyright: "Tüm hakları saklıdır. © 2026"
    }
  }
};

export function getContent(locale: Locale) {
  return content[locale];
}
