// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Pt = ({
  size = 24,
  strokeWidth = 1,
  'aria-label': ariaLabel,
  role,
  ...props
}: Props) => {
  const uid = useId();
  // Compliance nudge: warns once if icons render without a licensed <IconProvider>.
  // noteIconRender is a plain guarded fn (no client-only React API), so it does NOT
  // taint this as a Client Component — it no-ops on the server (window guard) and
  // only schedules a deferred client-side check. Do NOT wrap in useEffect (that would
  // force "use client" and break RSC/SSG consumers like the site).
  noteIconRender();
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      fill="none"
      role={ariaLabel ? (role ?? 'img') : role}
      aria-labelledby={ariaLabel ? `${uid}-title` : undefined}
      aria-hidden={ariaLabel ? undefined : true}
      {...props}
    >
      {ariaLabel && <title id={`${uid}-title`}>{ariaLabel}</title>}
      <path strokeLinejoin="round" d="m13.14 20.365.184 1.116a.5.5 0 0 1-.21.493l-.981.675a.5.5 0 0 1-.467.053l-1.412-.558a.5.5 0 0 0-.317-.017l-2.034.561.94-2.667a.5.5 0 0 0 .027-.137l.147-2.526a.5.5 0 0 0-.48-.529l-.696-.027a.5.5 0 0 1-.32-.133l-.802-.744a.5.5 0 0 1-.157-.42l.248-2.313a.5.5 0 0 1 .125-.282l1.218-1.352a.5.5 0 0 0 .115-.221l1.139-4.872a.5.5 0 0 0 .002-.219L8.614 2.55l2.413-1.35.133 1.196a.5.5 0 0 0 .59.436l3.602-.688a.5.5 0 0 1 .588.42l.073.501a.5.5 0 0 0 .283.382l.473.22a.5.5 0 0 1 .118.83l-1.598 1.398a.5.5 0 0 0-.17.351l-.236 4.726a.5.5 0 0 1-.386.462l-1.78.414 1.908 2.313a.5.5 0 0 1 .048.568l-.737 1.281a.5.5 0 0 0 .024.536l.847 1.213a.5.5 0 0 1 .077.403l-.013.053a.5.5 0 0 1-.318.355l-.691.247a.5.5 0 0 0-.297.286l-.396.996a.5.5 0 0 0-.029.266Z"/>
    </svg>
  );
};
