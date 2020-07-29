import * as React from "react";
import { useRouter } from "next/router";
import { UILink } from "./ui";

interface DelayLinkProps {
  delay?: number;
  href: string;
  as: string;
  replace?: boolean;
  prefetch?: boolean;
  shallow?: boolean;
  onDelayStart?: (href: string, url: string) => void;
  onDelayEnd?: (href: string, url: string) => void;
  children: React.ReactNode;
}

export default function DelayLink({
  delay = 0,
  href,
  as,
  prefetch = true,
  shallow = false,
  replace = false,
  onDelayEnd,
  onDelayStart,
  ...props
}: DelayLinkProps) {
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

  return <a href={as} {...props} onClick={handleClick} />;
}
