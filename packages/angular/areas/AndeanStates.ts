// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-andean-states',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m14.696 14.908.184.605a1 1 0 0 0 .591.64l1.687.664a1 1 0 0 1 .585.62l.181.552a1 1 0 0 0 .315.461l.78.642a.6.6 0 0 1 .163.718l-.217.463a.6.6 0 0 1-.779.297l-.23-.098a1 1 0 0 0-.562-.065l-.3.051a1 1 0 0 0-.813.804l-.07.376a.6.6 0 0 1-.43.47l-1.957.537a.6.6 0 0 1-.733-.405l-.601-1.988a.6.6 0 0 0-.376-.392l-2.967-1.045a1 1 0 0 1-.542-.457L6.56 14.681a1 1 0 0 0-.363-.373l-1.057-.629a.6.6 0 0 1-.266-.336l-.154-.492a.6.6 0 0 1 .113-.566l.384-.456a.6.6 0 0 0 .116-.556l-.328-1.113a1 1 0 0 1 .2-.935l1.48-1.72a1 1 0 0 0 .237-.756l-.184-1.783a1 1 0 0 1 .193-.7l1.194-1.603a1 1 0 0 1 .353-.297l1.896-.952a.683.683 0 0 1 .73 1.146l-.965.765a.6.6 0 0 0-.152.763l.335.598a.6.6 0 0 0 .423.3l2.173.367a.6.6 0 0 1 .497.539l.134 1.524a.6.6 0 0 1-.515.647l-.531.073a.6.6 0 0 0-.517.595v2.202a1 1 0 0 1-.8.98l-.495.1a1 1 0 0 0-.676.5l-.245.447a1 1 0 0 0 .05 1.042l.348.513a1 1 0 0 0 .42.352l.927.414a1 1 0 0 0 .843-.013l1.503-.726a.6.6 0 0 1 .835.366Z"/></svg>`,
})
export class AndeanStates {
  protected readonly b = inject(GeoIconBase);
}
