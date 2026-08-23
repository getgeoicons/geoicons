// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-lc-canaries',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.97 1.35a.6.6 0 0 0-.462-.1l-.713.138a.6.6 0 0 0-.485.566l-.117 3.071a1 1 0 0 1-.44.79l-1.22.824a1 1 0 0 0-.43.68l-.266 1.764a.6.6 0 0 0 .337.632l2.344 1.11c.297.14.616.232.943.27l2.338.266a1 1 0 0 1 .81.61l.546 1.314a2 2 0 0 0 1.992 1.227l1.237-.09a1 1 0 0 1 1.026.699l.267.85a2 2 0 0 1 .026 1.107l-.28 1.063a1 1 0 0 0 .13.8l1.877 2.879c.39.598 1.09.918 1.798.821a2.77 2.77 0 0 0 1.557-.759l.13-.126c.331-.322.584-.716.737-1.152l.161-.455a2 2 0 0 0 .013-1.295l-.537-1.62a5 5 0 0 0-.82-1.524L17.41 13.1a2 2 0 0 1-.366-.74l-.717-2.785a2 2 0 0 0-1.134-1.334l-1.37-.6a2 2 0 0 1-.82-.661l-1.79-2.48a2 2 0 0 0-.462-.46z"/></svg>`,
})
export class LcCanaries {
  protected readonly b = inject(GeoIconBase);
}
