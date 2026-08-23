// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ag-saint-paul',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M18.807 3.81a.3.3 0 0 0-.49-.185l-1.274 1.077a1.5 1.5 0 0 1-.653.321l-.666.144a1.5 1.5 0 0 1-1.073-.172l-1.112-.65a1.5 1.5 0 0 0-.633-.2l-6.747-.557a1 1 0 0 0-.8.301L3.833 5.463a3 3 0 0 1-.755.566l-1.607.848a.3.3 0 0 0-.122.412l1.613 2.877a.97.97 0 0 1 .044.862 5.8 5.8 0 0 0-.481 2.248l-.004.33a5.6 5.6 0 0 0 .345 2.007l.191.52a.6.6 0 0 0 .639.388l.968-.122A3.39 3.39 0 0 1 8 18.028l.226.38a.67.67 0 0 0 1.235-.452l-.228-1.372a1 1 0 0 1 .187-.764l.797-1.061a1 1 0 0 1 .906-.394l1.216.13a1 1 0 0 1 .88 1.157l-.08.483a1 1 0 0 1-.755.81l-.546.13a1 1 0 0 0-.587.398l-.053.075a1 1 0 0 0 .23 1.382l.858.626a1 1 0 0 0 1.047.081l.611-.314a1 1 0 0 1 1.062.092l1.423 1.078a1 1 0 0 0 .682.2l1.377-.108a1 1 0 0 0 .71-.38l.312-.4a1 1 0 0 1 .802-.384l.544.008a.808.808 0 0 0 .613-1.349l-.803-.894a.667.667 0 0 1 .808-1.034l.064.034c.32.17.714.082.932-.206l.083-.11a.9.9 0 0 0 .163-.726l-.047-.223a1 1 0 0 0-.336-.56l-.646-.542a5 5 0 0 1-1.381-1.856l-.185-.43a5 5 0 0 1-.353-1.242z"/></svg>`,
})
export class AgSaintPaul {
  protected readonly b = inject(GeoIconBase);
}
