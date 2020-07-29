import { useRouter } from "next/router";

interface UseDelayLinkParams {
  delay?: number;
  href: string;
  as: string;
  replace?: boolean;
  prefetch?: boolean;
  shallow?: boolean;
  onDelayStart?: (href: string, url: string) => void;
  onDelayEnd?: (href: string, url: string) => void;
}

function useDelayLink({ delay, href, as, prefetch, replace, onDelayStart, onDelayEnd }: UseDelayLinkParams) {
  const router = useRouter();

  const handleClick = (e) => {
    if (onDelayStart) {
      onDelayStart(href, as);
    }
    if (e.defaultPrevented) {
      return;
    }
    e.preventDefault();

    if (prefetch) {
      router.prefetch(href, as);
    }

    setTimeout(() => {
      if (replace) {
        router.replace(href);
      } else {
        router.push(href, as, { shallow });
      }
      if (onDelayEnd) {
        onDelayEnd(href, as);
      }
    }, delay);
  };

  return { handleClick };
}
