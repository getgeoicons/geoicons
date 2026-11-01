// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cv',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.618 3.187 1.684-.959a.5.5 0 0 1 .633.117l.756.92a.5.5 0 0 1-.145.754l-1.91 1.056a.5.5 0 0 1-.686-.207l-.528-1.016a.5.5 0 0 1 .196-.665Zm2.838 2.662.916-.477a.5.5 0 0 1 .59.096l.356.368a.5.5 0 0 1-.123.788l-1.03.553a.5.5 0 0 1-.677-.202l-.24-.444a.5.5 0 0 1 .208-.682Zm4.621 2.05.436.61a.5.5 0 0 0 .515.198l2.5-.554a.5.5 0 0 0 .373-.625l-.084-.294a.5.5 0 0 0-.523-.36l-2.852.237a.5.5 0 0 0-.365.789Zm10.206-2.23.196 1.614a.5.5 0 0 0 .52.44l.563-.028a.5.5 0 0 0 .473-.553l-.185-1.74a.5.5 0 0 0-.627-.43l-.573.154a.5.5 0 0 0-.367.544Zm.554 5.759.973-.89a.5.5 0 0 1 .695.02l.909.93a.5.5 0 0 1-.045.74l-.953.763a.5.5 0 0 1-.64-.012l-.93-.804a.5.5 0 0 1-.01-.747ZM7.795 20.939l.658.726a.5.5 0 0 0 .643.084l.623-.405a.5.5 0 0 0 .21-.55l-.253-.929a.5.5 0 0 0-.736-.3l-1.028.608a.5.5 0 0 0-.117.766Zm6.043-1.001 1.715 1.043a.5.5 0 0 0 .657-.123l.4-.523a.5.5 0 0 0 0-.606l-1.746-2.298a.5.5 0 0 0-.888.201l-.367 1.777a.5.5 0 0 0 .23.529Zm4.921-2.827.398.073a.5.5 0 0 1 .406.431l.103.846a.5.5 0 0 1-.433.557l-.549.07a.5.5 0 0 1-.563-.52l.048-.99a.5.5 0 0 1 .59-.467Z"/></svg>`,
})
export class Cv {
  protected readonly b = inject(GeoIconBase);
}
