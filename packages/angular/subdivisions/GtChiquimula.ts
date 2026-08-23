// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gt-chiquimula',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.276 8.778a.6.6 0 0 0 .407.661l1.07.35a.6.6 0 0 1 .396.421l.557 2.181a1 1 0 0 1-.044.628L2.27 16.401a1 1 0 0 0-.06.55l.072.421a.6.6 0 0 0 .818.454l1.063-.434a.6.6 0 0 1 .802.384l.377 1.268a.6.6 0 0 0 .878.347l1.311-.768a.6.6 0 0 1 .623.01l.885.558a1 1 0 0 1 .416 1.162l-.344 1.031a.6.6 0 0 0 .733.767l2.455-.693a1 1 0 0 1 .742.08l1.248.664a.6.6 0 0 0 .879-.462l.18-1.572a1 1 0 0 1 .262-.57l3.02-3.227a1 1 0 0 1 .806-.314l1.768.136a1 1 0 0 0 1.07-.878l.483-4.038a1 1 0 0 0-.151-.659L19.97 6.516a1 1 0 0 1-.155-.455l-.075-.886a1 1 0 0 1 .359-.855l.965-.8a1 1 0 0 0 .242-1.245l-.137-.254a1 1 0 0 0-.754-.517l-.329-.041a1 1 0 0 0-.965.45l-.863 1.334a1 1 0 0 1-.852.458l-6.257-.076a1 1 0 0 0-.59.184L9.098 4.849a1 1 0 0 1-.632.182l-4.784-.26a1 1 0 0 0-.707.241l-1.016.877a1 1 0 0 0-.336.607z"/></svg>`,
})
export class GtChiquimula {
  protected readonly b = inject(GeoIconBase);
}
