// src/hooks/useSmartNavigation.ts
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function useSmartNavigation() {
  const router = useRouter();
  
  const navigate = useCallback((href: string) => {
    if (!href) return;
    
    // Clean up the href
    href = href.trim();
    
    // External URL - check for protocol or common domains
    if (
      href.startsWith('http://') || 
      href.startsWith('https://') ||
      href.startsWith('//') ||
      // Common external domains without protocol
      /^(www\.|.*\.(com|org|net|io|co|uk|de|fr|jp|cn|in|br|au|ca|ru|za))/.test(href)
    ) {
      // Add https:// if missing for common domains
      const url = href.startsWith('http') || href.startsWith('//') 
        ? href 
        : `https://${href}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Same page anchor
    if (href.startsWith('#')) {
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Element with id "${elementId}" not found`);
      }
      return;
    }
    
    // Internal page with possible anchor
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      // Check if same page
      if (path === '' || path === window.location.pathname) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to page, then scroll to anchor
        router.push(href);
      }
      return;
    }
    
    // Internal navigation
    router.push(href);
  }, [router]);
  
  return navigate;
}