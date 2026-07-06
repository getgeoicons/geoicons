// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-east-european-plain',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.002 11.853-2.866 1.03a.6.6 0 0 0-.397.565v2.908a.6.6 0 0 0 .159.406l5.074 5.505a.6.6 0 0 0 .923-.049l.464-.626a.6.6 0 0 1 .823-.136l.64.444a.6.6 0 0 0 .601.048l3.37-1.614a.6.6 0 0 1 .316-.056l2.184.208a.6.6 0 0 0 .598-.855l-.414-.873a.6.6 0 0 1 .066-.623l3.264-4.248a.6.6 0 0 0-.221-.908l-2.672-1.255a.6.6 0 0 1-.304-.325l-1.12-2.871a.6.6 0 0 0-.098-.168L12.36 3.554a.6.6 0 0 1-.137-.322L12.08 1.87a.6.6 0 0 0-.565-.536L9.3 1.215a.6.6 0 0 0-.49.212L7.142 3.395a.6.6 0 0 0-.089.635l.688 1.52a.6.6 0 0 1-.147.695l-.868.776a.6.6 0 0 0-.157.672l.752 1.86a.6.6 0 0 1-.05.548l-.966 1.51a.6.6 0 0 1-.303.242Z"/></svg>`,
})
export class EastEuropeanPlain {
  protected readonly b = inject(GeoIconBase);
}
