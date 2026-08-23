// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-san-jose-de-ocoa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M13.343 22.57a.6.6 0 0 0 .789-.417l.265-1.06a1 1 0 0 1 .653-.707l3.81-1.27a2 2 0 0 0 .673-.382l.595-.513a1 1 0 0 0 .128-1.382l-1.001-1.252a1 1 0 0 1-.17-.937l.73-2.227a2 2 0 0 0-.032-1.339l-.312-.812a2 2 0 0 1 .034-1.514l1.207-2.774a.6.6 0 0 0-.27-.77l-1.889-1.002a3 3 0 0 0-.767-.28l-4.538-.989a1 1 0 0 1-.656-.483l-.467-.822a.6.6 0 0 0-.461-.301l-.755-.076a.6.6 0 0 0-.657.538l-.035.346a.6.6 0 0 0 .08.362l.294.503a1 1 0 0 1-.26 1.302L8.29 5.855a.6.6 0 0 0-.232.566l.087.59a.6.6 0 0 1-.406.657l-.576.19a1 1 0 0 1-.713-.034l-.976-.426a1 1 0 0 0-.616-.06l-1.022.226a.6.6 0 0 0-.4.867l.399.752a2 2 0 0 1 .182 1.39l-.379 1.629a1 1 0 0 0 .262.927l2.803 2.849a2 2 0 0 0 .61.423l4.364 1.949a1 1 0 0 1 .586.794l.336 2.805a.6.6 0 0 0 .39.492z"/></svg>`,
})
export class DoSanJoseDeOcoa {
  protected readonly b = inject(GeoIconBase);
}
