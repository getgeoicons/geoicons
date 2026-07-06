// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-la',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m4.702 3.99-1.63 2.043a.5.5 0 0 0-.079.483l.723 1.994a.5.5 0 0 0 .49.329l1.13-.045a.5.5 0 0 1 .503.628l-1.02 3.851a.5.5 0 0 0 .215.55l.103.065a.5.5 0 0 0 .584-.033l1.734-1.408a.5.5 0 0 1 .573-.041l.767.46a.5.5 0 0 0 .636-.102l.815-.944a.5.5 0 0 1 .424-.17l1.095.1a.5.5 0 0 1 .323.16l1.88 2.056a.5.5 0 0 1 .13.344l-.023 1.78a.5.5 0 0 0 .197.404l1.462 1.113a.5.5 0 0 1 .181.275l.476 1.877a.5.5 0 0 1-.065.395l-.873 1.346a.5.5 0 0 0 .225.732l.965.41a.5.5 0 0 0 .605-.173l.62-.884a.5.5 0 0 1 .702-.12l.47.34a.5.5 0 0 0 .495.05l1.03-.458a.5.5 0 0 0 .292-.383l.205-1.37a.5.5 0 0 0-.168-.453l-.543-.468a.5.5 0 0 1-.134-.575l.187-.44a.5.5 0 0 0-.168-.6l-1.15-.83a.5.5 0 0 1-.119-.123l-3.416-4.965a.5.5 0 0 0-.176-.157l-2.572-1.376a.5.5 0 0 1-.06-.844l1.6-1.167a.5.5 0 0 0 .094-.718L13.05 5.217a.5.5 0 0 0-.696-.08l-.701.549a.5.5 0 0 1-.582.024l-1.198-.785a.5.5 0 0 1-.226-.425l.02-1.345a.5.5 0 0 0-.155-.368L8.015 1.352a.5.5 0 0 0-.378-.138l-.988.064a.5.5 0 0 0-.444.652l.817 2.547-1.757-.644a.5.5 0 0 0-.563.157Z"/></svg>`,
})
export class La {
  protected readonly b = inject(GeoIconBase);
}
