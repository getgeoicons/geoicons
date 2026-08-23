// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-coahuila',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M4.813 13.026a1 1 0 0 0 .404.7l.655.478a2 2 0 0 1 .798 1.915l-.5 3.31a1 1 0 0 0 .293.87l1.272 1.228a.6.6 0 0 0 .894-.068l.614-.805a.6.6 0 0 1 .703-.192l5.388 2.189a.3.3 0 0 0 .411-.245l.122-1.103a1 1 0 0 1 .778-.867l1.065-.235a.3.3 0 0 0 .173-.477l-3.173-4.083a.3.3 0 0 1 .017-.387l1.485-1.606a2 2 0 0 0 .433-.736l.766-2.343a.3.3 0 0 1 .406-.181l.713.314a.6.6 0 0 0 .81-.356l.166-.491a.6.6 0 0 0-.062-.516l-2.927-4.595a5 5 0 0 0-.484-.64l-1.736-1.95a2 2 0 0 0-1.252-.654l-1.876-.228a3 3 0 0 0-1.157.085l-.38.104a1 1 0 0 0-.672.614l-.615 1.643a1 1 0 0 1-.59.587l-.74.274a1 1 0 0 0-.548.493L4.53 8.975a1 1 0 0 0-.098.552z"/></svg>`,
})
export class MxCoahuila {
  protected readonly b = inject(GeoIconBase);
}
