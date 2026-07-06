// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
// Root entry — the licensing API + the opt-in DOM-scanner helper.
// Icons are imported from subpaths (tree-shakeable): '@geoicons/vanilla/countries', '/areas'.
export { initGeoiconsLicense, verifyLicenseKey, GPL_DECLARATION, type LicenseStatus } from './_license';
export { createGeoIcons, type IconFactory, type CreateGeoIconsOptions } from './_scanner';
