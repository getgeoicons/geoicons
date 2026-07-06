// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-kalahari-desert',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m14.796 20.796-1.198.12a.6.6 0 0 1-.425-.121l-2.036-1.562a1 1 0 0 0-.412-.187l-.503-.1a1 1 0 0 0-.985.366l-.61.784a1 1 0 0 1-.677.38l-2.492.279.706-1.76a1 1 0 0 0 .037-.634l-.057-.21a1 1 0 0 0-.373-.543l-.874-.642a1 1 0 0 1-.383-.584l-.23-1.012a1 1 0 0 0-.32-.532l-.85-.738a1 1 0 0 1-.33-.589l-.346-2.06a1 1 0 0 1 .028-.453l.178-.596a1 1 0 0 0-.355-1.085l-.438-.332a1 1 0 0 1-.391-.687l-.231-2.074a1 1 0 0 1 .072-.5l.506-1.2a1 1 0 0 1 .376-.451l1.291-.839a1 1 0 0 1 .585-.16l1.674.066a1 1 0 0 1 .509.163l1.045.685a1 1 0 0 0 .549.164h3.627a1 1 0 0 0 .336-.058l1.541-.549a1 1 0 0 1 .878.101l3.24 2.089a1 1 0 0 1 .439.644l.315 1.576a1 1 0 0 0 .396.615l4.192 3.022-4.03 4.887a1 1 0 0 1-.6.35l-1.144.198a1 1 0 0 0-.773.655l-.95 2.715a.6.6 0 0 1-.507.399Z"/></svg>`,
})
export class KalahariDesert {
  protected readonly b = inject(GeoIconBase);
}
