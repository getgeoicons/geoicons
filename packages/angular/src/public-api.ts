// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
// Root entry — the licensing API + the shared icon base directive.
// Icons are imported from subpaths (tree-shakeable): '@geoicons/angular/countries', '/areas'.
export {
  provideGeoiconsLicense,
  GeoiconsLicenseService,
  verifyLicenseKey,
  GPL_DECLARATION,
  type LicenseStatus,
} from './_license';
export { GeoIconBase } from './_base.directive';
