// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.124 6.127H1.956a.5.5 0 0 0-.24.062l-.249.136a.5.5 0 0 0-.26.45l.091 3.807a.5.5 0 0 0 .052.21l1.216 2.447a.5.5 0 0 0 .178.198l1.097.702a.5.5 0 0 0 .217.076l3.657.388a.5.5 0 0 1 .36.216l.387.568a.5.5 0 0 0 .487.214l.398-.059a.5.5 0 0 1 .432.147l.944.975a.5.5 0 0 0 .84-.212l.105-.367a.5.5 0 0 1 .236-.3l.422-.237a.5.5 0 0 1 .164-.058l2.087-.344a.5.5 0 0 1 .18.003l.912.182a.5.5 0 0 1 .358.284l.811 1.792a.5.5 0 0 0 .672.245l.354-.17a.5.5 0 0 0 .255-.62l-.69-1.92a.5.5 0 0 1 .134-.54l1.65-1.5a.5.5 0 0 0 .148-.244l.453-1.731a.5.5 0 0 1 .282-.331l1.182-.52a.5.5 0 0 0 .153-.106l1.127-1.133a.5.5 0 0 0 .102-.556l-.428-.96a.25.25 0 0 0-.382-.096l-.945.737a.5.5 0 0 1-.19.092l-1.138.277a.5.5 0 0 0-.193.095l-2.043 1.623a.25.25 0 0 1-.395-.127l-.634-2.2a.5.5 0 0 0-.41-.357l-1.266-.18a.5.5 0 0 1-.134-.04l-2.174-.974a.5.5 0 0 0-.204-.044Z"/></svg>`,
})
export class Us {
  protected readonly b = inject(GeoIconBase);
}
