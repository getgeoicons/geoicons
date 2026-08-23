// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-vc-saint-david',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M18.158 2.52a1 1 0 0 0-1.41-.758l-3.31 1.535a1 1 0 0 0-.507.534l-2.781 6.908a3 3 0 0 1-.532.862l-1.06 1.203a1 1 0 0 0-.248.694l.047 1.417a1 1 0 0 1-.749 1.002l-2.97.769a1 1 0 0 0-.748.902l-.068 1.03a1 1 0 0 0 .471.916l4.69 2.902a1 1 0 0 0 .821.105l4.258-1.312a1 1 0 0 1 1.017.265l.801.837a1 1 0 0 0 1.06.25l1.325-.476a1 1 0 0 0 .583-1.33l-.803-1.906a1 1 0 0 1 .22-1.101l.39-.386a2 2 0 0 0 .543-1.887L17.453 8.15a.6.6 0 0 1 .692-.729l1.3.24a.6.6 0 0 0 .706-.533l.041-.428a.6.6 0 0 0-.15-.46l-1.39-1.544a1 1 0 0 1-.246-.52z"/></svg>`,
})
export class VcSaintDavid {
  protected readonly b = inject(GeoIconBase);
}
