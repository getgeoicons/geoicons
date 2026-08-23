// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-vc-saint-andrew',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.031 1.658a.6.6 0 0 0-.64-.399l-4.297.53a1 1 0 0 0-.813.638l-1.113 2.939a2 2 0 0 1-1.46 1.249l-4.376.917a1 1 0 0 0-.387.173L4.7 10.09a1 1 0 0 1-.697.189l-1.108-.118a1 1 0 0 0-.981.511l-.039.07a1 1 0 0 0-.051.86l1.404 3.469a1 1 0 0 0 .372.457l4.372 2.914a1 1 0 0 1 .444.784l.102 2.09a1.42 1.42 0 0 0 2.14 1.152l.258-.152a2 2 0 0 0 .645-.612l.777-1.166a1 1 0 0 0 .096-.182l1.593-3.973c.147-.364.363-.697.638-.979l3.265-3.343c.262-.27.573-.486.915-.64l1.684-.758a.3.3 0 0 0 .152-.392l-.756-1.753a1 1 0 0 1 .261-1.15l1.152-1.005a2 2 0 0 0 .575-2.162z"/></svg>`,
})
export class VcSaintAndrew {
  protected readonly b = inject(GeoIconBase);
}
