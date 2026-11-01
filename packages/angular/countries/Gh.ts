// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gh',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.967 22.61 6.058-2.857a2 2 0 0 1 .993-.186l1.534.107a1 1 0 0 0 .716-.235l.926-.784a.6.6 0 0 0 .01-.907l-1.76-1.562a1 1 0 0 1-.33-.851l.423-4.04a2 2 0 0 0-.21-1.122l-.426-.83a2 2 0 0 1-.22-.91l-.008-3.592a1 1 0 0 0-.449-.832l-.764-.505a.6.6 0 0 1-.244-.674l.18-.597a.6.6 0 0 0-.385-.743l-.612-.203a.6.6 0 0 0-.5.056l-.85.515a1 1 0 0 1-.55.144l-6.25-.21a.6.6 0 0 0-.514.258l-.356.513a.6.6 0 0 0-.1.44l1.24 7.496c.07.424 0 .857-.191 1.241a243 243 0 0 0-1.74 3.576c-.2.42-.247.899-.131 1.35l1.14 4.468a1 1 0 0 0 .586.676l1.974.82a1 1 0 0 0 .81-.02Z"/></svg>`,
})
export class Gh {
  protected readonly b = inject(GeoIconBase);
}
