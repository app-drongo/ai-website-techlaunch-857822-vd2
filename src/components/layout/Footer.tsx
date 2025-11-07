'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

const DEFAULT_FOOTER = {
  logoText: 'TechFlow',
  companyDescription:
    'Empowering startups and enterprises with cutting-edge technology solutions. Join thousands of innovators who trust our platform to scale their digital transformation.',
  contactEmail: 'hello@techflow.com',
  contactPhone: '+1 (555) 123-4567',
  contactAddress: '123 Innovation Drive, Tech Hub',
  newsletterTitle: 'Stay Ahead',
  newsletterPlaceholder: 'Enter your email',
  newsletterDisclaimer:
    'Get the latest tech insights and product updates. No spam, unsubscribe anytime.',
  section1Title: 'Platform',
  section2Title: 'Company',
  section3Title: 'Resources',
  section4Title: 'Legal',
  copyrightText: '© 2024 TechFlow. All rights reserved.',
  madeWithText: 'with ❤️ by TechFlow team',
  socialText: 'Connect:',
  social1Href: 'https://twitter.com/techflow',
  social2Href: 'https://facebook.com/techflow',
  social3Href: 'https://instagram.com/techflow',
  social4Href: 'https://linkedin.com/company/techflow',
  social5Href: 'https://github.com/techflow',
  // Product Links
  linkFeatures: 'Features',
  linkFeaturesHref: '#features',
  linkPricing: 'Pricing',
  linkPricingHref: '#pricing',
  linkTemplates: 'Solutions',
  linkTemplatesHref: '/solutions',
  linkIntegrations: 'Integrations',
  linkIntegrationsHref: '/integrations',
  linkApi: 'API',
  linkApiHref: '/api',
  linkDocumentation: 'Docs',
  linkDocumentationHref: '/docs',
  // Company Links
  linkAbout: 'About Us',
  linkAboutHref: '#about',
  linkBlog: 'Blog',
  linkBlogHref: '/blog',
  linkCareers: 'Careers',
  linkCareersHref: '/careers',
  linkPress: 'Press Kit',
  linkPressHref: '/press',
  linkPartners: 'Partners',
  linkPartnersHref: '/partners',
  linkContact: 'Contact',
  linkContactHref: '#contact',
  // Resources Links
  linkHelp: 'Help Center',
  linkHelpHref: '/help',
  linkCommunity: 'Community',
  linkCommunityHref: '/community',
  linkTutorials: 'Tutorials',
  linkTutorialsHref: '/tutorials',
  linkWebinars: 'Webinars',
  linkWebinarsHref: '/webinars',
  linkCaseStudies: 'Case Studies',
  linkCaseStudiesHref: '/case-studies',
  linkStatus: 'System Status',
  linkStatusHref: '/status',
  // Legal Links
  linkPrivacy: 'Privacy Policy',
  linkPrivacyHref: '/privacy',
  linkTerms: 'Terms of Service',
  linkTermsHref: '/terms',
  linkCookies: 'Cookie Policy',
  linkCookiesHref: '/cookies',
  linkGdpr: 'GDPR',
  linkGdprHref: '/gdpr',
  linkSecurity: 'Security',
  linkSecurityHref: '/security',
  linkCompliance: 'Compliance',
  linkComplianceHref: '/compliance',
  // Bottom Links
  linkSitemap: 'Sitemap',
  linkSitemapHref: '/sitemap',
  linkAccessibility: 'Accessibility',
  linkAccessibilityHref: '/accessibility',
  linkCookieSettings: 'Cookie Settings',
  linkCookieSettingsHref: '/cookies',
  linkSupport: 'Support',
  linkSupportHref: '/support',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };

  // Simplified footer sections structure
  const footerSections = [
    {
      title: config.section1Title,
      titleKey: 'section1Title',
      links: [
        {
          name: config.linkFeatures,
          href: config.linkFeaturesHref,
          nameKey: 'linkFeatures',
          hrefKey: 'linkFeaturesHref',
        },
        {
          name: config.linkPricing,
          href: config.linkPricingHref,
          nameKey: 'linkPricing',
          hrefKey: 'linkPricingHref',
        },
        {
          name: config.linkTemplates,
          href: config.linkTemplatesHref,
          nameKey: 'linkTemplates',
          hrefKey: 'linkTemplatesHref',
        },
        {
          name: config.linkIntegrations,
          href: config.linkIntegrationsHref,
          nameKey: 'linkIntegrations',
          hrefKey: 'linkIntegrationsHref',
        },
        {
          name: config.linkApi,
          href: config.linkApiHref,
          nameKey: 'linkApi',
          hrefKey: 'linkApiHref',
        },
        {
          name: config.linkDocumentation,
          href: config.linkDocumentationHref,
          nameKey: 'linkDocumentation',
          hrefKey: 'linkDocumentationHref',
        },
      ],
    },
    {
      title: config.section2Title,
      titleKey: 'section2Title',
      links: [
        {
          name: config.linkAbout,
          href: config.linkAboutHref,
          nameKey: 'linkAbout',
          hrefKey: 'linkAboutHref',
        },
        {
          name: config.linkBlog,
          href: config.linkBlogHref,
          nameKey: 'linkBlog',
          hrefKey: 'linkBlogHref',
        },
        {
          name: config.linkCareers,
          href: config.linkCareersHref,
          nameKey: 'linkCareers',
          hrefKey: 'linkCareersHref',
        },
        {
          name: config.linkPress,
          href: config.linkPressHref,
          nameKey: 'linkPress',
          hrefKey: 'linkPressHref',
        },
        {
          name: config.linkPartners,
          href: config.linkPartnersHref,
          nameKey: 'linkPartners',
          hrefKey: 'linkPartnersHref',
        },
        {
          name: config.linkContact,
          href: config.linkContactHref,
          nameKey: 'linkContact',
          hrefKey: 'linkContactHref',
        },
      ],
    },
    {
      title: config.section3Title,
      titleKey: 'section3Title',
      links: [
        {
          name: config.linkHelp,
          href: config.linkHelpHref,
          nameKey: 'linkHelp',
          hrefKey: 'linkHelpHref',
        },
        {
          name: config.linkCommunity,
          href: config.linkCommunityHref,
          nameKey: 'linkCommunity',
          hrefKey: 'linkCommunityHref',
        },
        {
          name: config.linkTutorials,
          href: config.linkTutorialsHref,
          nameKey: 'linkTutorials',
          hrefKey: 'linkTutorialsHref',
        },
        {
          name: config.linkWebinars,
          href: config.linkWebinarsHref,
          nameKey: 'linkWebinars',
          hrefKey: 'linkWebinarsHref',
        },
        {
          name: config.linkCaseStudies,
          href: config.linkCaseStudiesHref,
          nameKey: 'linkCaseStudies',
          hrefKey: 'linkCaseStudiesHref',
        },
        {
          name: config.linkStatus,
          href: config.linkStatusHref,
          nameKey: 'linkStatus',
          hrefKey: 'linkStatusHref',
        },
      ],
    },
    {
      title: config.section4Title,
      titleKey: 'section4Title',
      links: [
        {
          name: config.linkPrivacy,
          href: config.linkPrivacyHref,
          nameKey: 'linkPrivacy',
          hrefKey: 'linkPrivacyHref',
        },
        {
          name: config.linkTerms,
          href: config.linkTermsHref,
          nameKey: 'linkTerms',
          hrefKey: 'linkTermsHref',
        },
        {
          name: config.linkCookies,
          href: config.linkCookiesHref,
          nameKey: 'linkCookies',
          hrefKey: 'linkCookiesHref',
        },
        {
          name: config.linkGdpr,
          href: config.linkGdprHref,
          nameKey: 'linkGdpr',
          hrefKey: 'linkGdprHref',
        },
        {
          name: config.linkSecurity,
          href: config.linkSecurityHref,
          nameKey: 'linkSecurity',
          hrefKey: 'linkSecurityHref',
        },
        {
          name: config.linkCompliance,
          href: config.linkComplianceHref,
          nameKey: 'linkCompliance',
          hrefKey: 'linkComplianceHref',
        },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: config.social1Href, hrefKey: 'social1Href' },
    { name: 'Facebook', icon: Facebook, href: config.social2Href, hrefKey: 'social2Href' },
    { name: 'Instagram', icon: Instagram, href: config.social3Href, hrefKey: 'social3Href' },
    { name: 'LinkedIn', icon: Linkedin, href: config.social4Href, hrefKey: 'social4Href' },
    { name: 'GitHub', icon: Github, href: config.social5Href, hrefKey: 'social5Href' },
  ];

  const bottomLinks = [
    {
      name: config.linkSitemap,
      href: config.linkSitemapHref,
      nameKey: 'linkSitemap',
      hrefKey: 'linkSitemapHref',
    },
    {
      name: config.linkAccessibility,
      href: config.linkAccessibilityHref,
      nameKey: 'linkAccessibility',
      hrefKey: 'linkAccessibilityHref',
    },
    {
      name: config.linkCookieSettings,
      href: config.linkCookieSettingsHref,
      nameKey: 'linkCookieSettings',
      hrefKey: 'linkCookieSettingsHref',
    },
    {
      name: config.linkSupport,
      href: config.linkSupportHref,
      nameKey: 'linkSupport',
      hrefKey: 'linkSupportHref',
    },
  ];

  return (
    <footer id="footer" className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {config.logoText.charAt(0)}
                  </span>
                </div>
                <span className="font-bold text-xl" data-editable="logoText">
                  {config.logoText}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                <span data-editable="companyDescription">{config.companyDescription}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactEmail">
                  {config.contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactPhone">
                  {config.contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactAddress">
                  {config.contactAddress}
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm" data-editable="newsletterTitle">
                {config.newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                <span data-editable="newsletterDisclaimer">{config.newsletterDisclaimer}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm" data-editable={section.titleKey}>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        data-editable-href={link.hrefKey}
                        data-href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        <span data-editable={link.nameKey}>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-editable="copyrightText">{config.copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-red-500 fill-current" />
                <span data-editable="madeWithText">{config.madeWithText}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2" data-editable="socialText">
                {config.socialText}
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                    data-editable-href={social.hrefKey}
                    data-href={social.href}
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            {bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                data-editable-href={link.hrefKey}
                data-href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <span data-editable={link.nameKey}>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
