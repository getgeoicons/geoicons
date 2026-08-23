// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-santiago-rodriguez',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.93 2.606a1 1 0 0 0-.898.388L4.282 5.29a2 2 0 0 0-.392.954l-.855 6.56a1 1 0 0 1-.455.715l-.913.582a.8.8 0 0 0-.353.84l.537 2.55a.8.8 0 0 0 .575.609l2.782.747c.314.085.613.22.885.401l4.488 2.992a1 1 0 0 0 .605.167l3.993-.203a.6.6 0 0 0 .52-.837l-1.368-3.158a2 2 0 0 1-.162-.887l.11-2.376a2 2 0 0 1 .326-1.006l.863-1.312a2 2 0 0 1 .915-.753l.437-.178a2 2 0 0 1 1.468-.017l.374.143a1 1 0 0 0 .954-.132l2.703-2.014a1 1 0 0 0 .392-.95l-.166-1.11a1 1 0 0 0-.935-.85l-3.011-.162a1 1 0 0 1-.935-.852l-.287-1.925a.6.6 0 0 0-.276-.42l-.725-.452a.6.6 0 0 0-.823.187l-.164.256a.8.8 0 0 1-1.057.273l-3.19-1.735a.8.8 0 0 0-1.061.28l-.154.247a.8.8 0 0 1-.762.373z"/></svg>`,
})
export class DoSantiagoRodriguez {
  protected readonly b = inject(GeoIconBase);
}
