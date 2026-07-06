// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sr',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.152 6.05.796-4.216a.5.5 0 0 1 .534-.406l4.998.431a.5.5 0 0 0 .093 0l6.497-.65a.5.5 0 0 1 .174.013l3.683.94a.5.5 0 0 1 .292.762l-2.18 3.271a.5.5 0 0 0-.085.266l-.087 3.576a.5.5 0 0 0 .089.297l2.299 3.32a.5.5 0 0 1 .039.504l-2.749 5.663a.5.5 0 0 1-.727.198l-1.645-1.097a.5.5 0 0 0-.333-.08l-4.606.512a.5.5 0 0 0-.423.642l.595 1.96a.5.5 0 0 1-.6.63l-3.449-.862a.5.5 0 0 1-.339-.29L5.295 15.02a.5.5 0 0 0-.412-.302l-1.436-.137a.5.5 0 0 1-.386-.248l-1.578-2.74a.5.5 0 0 1-.058-.346l.807-4.15a.5.5 0 0 1 .433-.402l2.055-.242a.5.5 0 0 0 .432-.404Z"/></svg>`,
})
export class Sr {
  protected readonly b = inject(GeoIconBase);
}
