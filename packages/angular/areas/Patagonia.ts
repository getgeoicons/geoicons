// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-patagonia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M9.334 4.029 8.74 2.08a.595.595 0 0 0-1.162.225L7.88 5.87a1 1 0 0 1-.014.272L7.49 8.117a1 1 0 0 0-.016.251l.114 1.789a1 1 0 0 1-.028.306l-.49 1.958a1 1 0 0 0-.03.255l.064 5.063.217 1.422a1 1 0 0 0 .043.176l.54 1.565q.056.155.157.287l.643.827a1 1 0 0 0 .443.324l1.066.394a1 1 0 0 0 .367.062l1.036-.021a.6.6 0 0 0 .239-1.146l-.775-.357a1 1 0 0 1-.53-.592l-.224-.673a.6.6 0 0 1 .069-.52l.476-.722a.6.6 0 0 0-.037-.71l-.187-.229a.6.6 0 0 1-.135-.35l-.019-.387a.6.6 0 0 1 .369-.583l.322-.135a.6.6 0 0 0 .332-.343l.878-2.338a.6.6 0 0 1 .51-.387l.783-.066a1 1 0 0 0 .647-.315l.06-.065a.6.6 0 0 0 .145-.548l-.44-1.85a.6.6 0 0 1 .015-.33l.478-1.424a.6.6 0 0 1 .25-.317l1.762-1.102a.6.6 0 0 0 .278-.44l.028-.242a.6.6 0 0 0-.373-.627l-4.344-1.74a1 1 0 0 0-.532-.059l-1.656.268a.6.6 0 0 1-.67-.417Z"/></svg>`,
})
export class Patagonia {
  protected readonly b = inject(GeoIconBase);
}
