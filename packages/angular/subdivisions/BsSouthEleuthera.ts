// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-south-eleuthera',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M16.533 1.218a.6.6 0 0 0-.452.16l-2.176 2.033a1 1 0 0 0-.307.585l-.558 3.787a1 1 0 0 0 .215.777l1.127 1.383a1 1 0 0 1-.019 1.285l-.262.305-.602.637a1.93 1.93 0 0 1-2.22.422l-1.51-.709a3 3 0 0 1-.775-.524l-1.32-1.236a.714.714 0 0 0-1.167.748l.668 2.003a1 1 0 0 0 .632.632l1.16.388a5 5 0 0 1 1.757 1.023l.545.49a5 5 0 0 1 1.325 1.926l.534 1.39c.145.379.336.739.569 1.071l1.79 2.563a1 1 0 0 0 .807.428l.374.005a.6.6 0 0 0 .588-.753l-.694-2.643a3 3 0 0 0-.53-1.076l-.803-1.034a2 2 0 0 1-.412-1.062l-.036-.429a2 2 0 0 1 .25-1.143l2.216-3.944c.215-.383.343-.808.376-1.246l.055-.746a3 3 0 0 0-.074-.922l-.68-2.84a2 2 0 0 1 .017-.997l.536-1.95a.6.6 0 0 0-.536-.758z"/></svg>`,
})
export class BsSouthEleuthera {
  protected readonly b = inject(GeoIconBase);
}
