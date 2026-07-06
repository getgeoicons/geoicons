// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-southern-south-america',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.087 4.018-.595-1.95a.595.595 0 0 0-1.163.225l.304 3.567a1 1 0 0 1-.015.272l-.377 1.976a1 1 0 0 0-.016.251l.113 1.79a1 1 0 0 1-.027.306l-.49 1.96a1 1 0 0 0-.03.255l.064 5.066.217 1.423a1 1 0 0 0 .043.176l.54 1.566a1 1 0 0 0 .157.287l.644.828a1 1 0 0 0 .442.324l.975.36a1 1 0 0 0 .552.041l1.158-.242a.58.58 0 0 0 .015-1.134l-.617-.146a1 1 0 0 1-.717-.658l-.185-.556a.6.6 0 0 1 .068-.52l.477-.723a.6.6 0 0 0-.037-.71l-.187-.229a.6.6 0 0 1-.135-.35l-.02-.387a.6.6 0 0 1 .37-.584l.323-.135a.6.6 0 0 0 .33-.343l.88-2.34a.6.6 0 0 1 .51-.386l.784-.067a1 1 0 0 0 .647-.315l.06-.064a.6.6 0 0 0 .144-.55l-.133-.55a.627.627 0 0 1 .819-.738l.338.12a.6.6 0 0 0 .618-.135l.272-.263a.6.6 0 0 0-.032-.892l-.99-.827a.6.6 0 0 1 .02-.938l1.7-1.296a.6.6 0 0 0 .222-.608l-.063-.282a.6.6 0 0 0-.56-.468l-2.805-.117a1 1 0 0 1-.52-.172l-1.161-.79a1 1 0 0 0-.722-.16l-1.539.249a.6.6 0 0 1-.67-.417Z"/></svg>`,
})
export class SouthernSouthAmerica {
  protected readonly b = inject(GeoIconBase);
}
