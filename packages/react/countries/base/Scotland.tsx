// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Scotland = ({
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
      <path strokeLinejoin="round" d="m14.533 21.89-2.236.73a1 1 0 0 1-.978-.205l-.197-.176a.75.75 0 0 1-.076-1.038l.197-.238a.68.68 0 0 0-.263-1.061l-.079-.033a.57.57 0 0 0-.691.206.765.765 0 0 1-1.071.192l-.2-.141a1 1 0 0 1-.303-1.295l.023-.041a1 1 0 0 0-.277-1.277l-.1-.076a.75.75 0 0 1 .025-1.217l.151-.104a1 1 0 0 0 .14-1.53l-.308-.308a.808.808 0 0 1 .316-1.338l1.33-.443a1 1 0 0 0 .628-.618l.467-1.33a1 1 0 0 1 .923-.669l1.9-.038c.41-.008.727.36.657.765a.87.87 0 0 1-.278.502l-.857.766a.758.758 0 0 0 .607 1.316l1.856-.25a.857.857 0 0 1 .882 1.23l-1.518 3.049a.75.75 0 0 0 .334 1.004l.391.197a1 1 0 0 1 .531 1.09l-.066.331a1 1 0 0 1-.245.481l-1.19 1.294a1 1 0 0 1-.425.273Zm-9.449-9.548-.126 1.708a.443.443 0 0 0 .834.24l1.523-2.894a1 1 0 0 0 .092-.255L7.653 10a.5.5 0 0 0-.768-.52l-.855.576a1 1 0 0 0-.39.514l-.508 1.528a1 1 0 0 0-.048.242Zm13.82-10.175-.847 1.913a.745.745 0 1 1-1.286-.736l1.22-1.7a.529.529 0 0 1 .913.523Zm-4.108 4.446-.384.774a.85.85 0 1 0 1.59.563l.189-.844a.745.745 0 0 0-1.395-.493Z"/>
    </svg>
  );
};
