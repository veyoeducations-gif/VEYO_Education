import type { MetadataRoute } from "next";
import { COUNTRIES } from "@/components/ulkeler/countries-data";
import { LANGUAGE_SCHOOL_DESTINATIONS } from "@/components/dil-okullari/language-school-destinations";
import { BLOG_POSTS } from "@/components/blog/posts-data";

const BASE_URL = "https://veyoeducation.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/hakkimizda`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/iletisim`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/hizmetlerimiz`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/surecimiz`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/erken-basvuru`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/basvuru`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/lisans`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/yuksek-lisans`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/vize-danismanligi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ielts`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/burslar`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ulkeler`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/dil-okullari`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/dil-okullari/destinasyonlar`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: "daily", priority: 0.9 },
  ];

  const countryRoutes: MetadataRoute.Sitemap = COUNTRIES.map((country) => ({
    url: `${BASE_URL}/ulkeler/${country.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const languageSchoolRoutes: MetadataRoute.Sitemap = LANGUAGE_SCHOOL_DESTINATIONS.map(
    (destination) => ({
      url: `${BASE_URL}/dil-okullari/${destination.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...countryRoutes, ...languageSchoolRoutes, ...blogRoutes];
}
