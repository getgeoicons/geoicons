// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ag',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.77 19.164c.094.672.228 1.672.283 2.205a.63.63 0 0 0 .342.5l1.191.563a.5.5 0 0 0 .148.044l2.239.296a.5.5 0 0 0 .379-.106l1.697-1.368a.5.5 0 0 0 .184-.442l-.15-1.412a.5.5 0 0 0-.206-.353L11.39 16.58a.5.5 0 0 0-.67.078l-1.831 2.108a.5.5 0 0 0-.118.398Zm4.058-11.708-2.4-.657a.5.5 0 0 1-.34-.646l.495-1.43a.5.5 0 0 0-.101-.499l-1.13-1.253a.5.5 0 0 1 .047-.714l.836-.716a.5.5 0 0 1 .72.074l2.601 3.362a.5.5 0 0 1 .102.365l-.201 1.691a.5.5 0 0 1-.629.423Z"/></svg>`,
})
export class Ag {
  protected readonly b = inject(GeoIconBase);
}
