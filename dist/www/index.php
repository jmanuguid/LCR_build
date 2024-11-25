<!DOCTYPE html><html lang="en"><head>
  <meta charset="utf-8">
  <title>LCR Binan - The Office of the Local Civil Registry</title>

  <base href="<?php echo base_url('/'); ?>">

  <meta name="color-scheme" content="light">
  <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="format-detection" content="telephone=no">
  <meta name="msapplication-tap-highlight" content="no">

  <link rel="icon" type="image/png" href="assets/favicon.png">

  <!-- add to homescreen for ios -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

	<style>
		@charset "UTF-8";
		:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:hsl(356deg, 29%, 30%);--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#1973e8;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:99, 54, 57;--bs-secondary-rgb:108, 117, 125;--bs-success-rgb:25, 135, 84;--bs-info-rgb:25, 115, 232;--bs-warning-rgb:255, 193, 7;--bs-danger-rgb:220, 53, 69;--bs-light-rgb:248, 249, 250;--bs-dark-rgb:33, 37, 41;--bs-white-rgb:255, 255, 255;--bs-black-rgb:0, 0, 0;--bs-body-color-rgb:33, 37, 41;--bs-body-bg-rgb:255, 255, 255;--bs-font-sans-serif:system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--bs-font-monospace:SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-bg:#fff;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, .175);--bs-border-radius:.375rem;--bs-border-radius-sm:.25rem;--bs-border-radius-lg:.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-2xl:2rem;--bs-border-radius-pill:50rem;--bs-link-color:hsl(356deg, 29%, 30%);--bs-link-hover-color:#4f2b2e;--bs-code-color:#d63384;--bs-highlight-bg:#fff3cd}*,*:before,*:after{box-sizing:border-box}@media (prefers-reduced-motion: no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}@font-face{font-family:Poppins;font-style:normal;font-weight:100;src:url(Poppins-Thin.605324f7af12a99a.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:normal;font-weight:200;src:url(Poppins-ExtraLight.9102fb8415d8f327.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:normal;font-weight:300;src:url(Poppins-Light.8b20023e8f811f53.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:normal;font-weight:400;src:url(Poppins-Regular.4b4ebe20759bdbf2.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:normal;font-weight:500;src:url(Poppins-Medium.a52d0bf095c248da.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:normal;font-weight:600;src:url(Poppins-SemiBold.98512bf8da1afe43.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:normal;font-weight:700;src:url(Poppins-Bold.8001a01b32b71ef5.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:normal;font-weight:800;src:url(Poppins-ExtraBold.7572a9b5289f55fe.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:normal;font-weight:900;src:url(Poppins-Black.a7317f18e35bd6ef.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:italic;font-weight:100;src:url(Poppins-ThinItalic.ef8911147e9862d8.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:italic;font-weight:200;src:url(Poppins-ExtraLightItalic.2ce504459899a1d8.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:italic;font-weight:300;src:url(Poppins-LightItalic.acd7f79f9e69ead8.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:italic;font-weight:400;src:url(Poppins-Italic.b2efb5cde74c2f1a.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:italic;font-weight:500;src:url(Poppins-MediumItalic.34a634e1e94d3514.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:italic;font-weight:600;src:url(Poppins-SemiBoldItalic.502635913515117a.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:italic;font-weight:700;src:url(Poppins-BoldItalic.1a15c5ce3e29c0a9.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:italic;font-weight:800;src:url(Poppins-ExtraBoldItalic.9656981deddb4bed.ttf) format("truetype")}@font-face{font-family:Poppins;font-style:italic;font-weight:900;src:url(Poppins-BlackItalic.0719401c96a043e7.ttf) format("truetype")}:root{--ion-font-family:"Poppins", Monospace;--ion-secondary-font-family:"Darker Grotesque", Monospace;--bs-body-font-family:"Poppins", Monospace;--ion-text-display-large:4.071428571428571rem;--ion-text-display-medium:3.214285714285714rem;--ion-text-display-small:2.571428571428571rem;--ion-text-headline-large:2.285714285714286rem;--ion-text-headline-medium:2rem;--ion-text-headline-small:1.714285714285714rem;--ion-text-title-large:1.571428571428571rem;--ion-text-title-medium:1.1875rem;--ion-text-title-small:1rem;--ion-text-label-large:1rem;--ion-text-label-medium:.857142857142857rem;--ion-text-label-small:.785714285714286rem;--ion-text-body-large:1.142857142857143rem;--ion-text-body-medium:1rem;--ion-text-body-small:.857142857142857rem}html,body{font-size:14px;color:var(--ion-text-color)}:root{--ion-color-primary:#3880ff;--ion-color-primary-rgb:56, 128, 255;--ion-color-primary-contrast:#ffffff;--ion-color-primary-contrast-rgb:255, 255, 255;--ion-color-primary-shade:#3171e0;--ion-color-primary-tint:#4c8dff;--ion-color-secondary:#3dc2ff;--ion-color-secondary-rgb:61, 194, 255;--ion-color-secondary-contrast:#ffffff;--ion-color-secondary-contrast-rgb:255, 255, 255;--ion-color-secondary-shade:#36abe0;--ion-color-secondary-tint:#50c8ff;--ion-color-tertiary:#5260ff;--ion-color-tertiary-rgb:82, 96, 255;--ion-color-tertiary-contrast:#ffffff;--ion-color-tertiary-contrast-rgb:255, 255, 255;--ion-color-tertiary-shade:#4854e0;--ion-color-tertiary-tint:#6370ff;--ion-color-rose:#dbaeba;--ion-color-rose-rgb:219,174,186;--ion-color-rose-contrast:#000000;--ion-color-rose-contrast-rgb:0,0,0;--ion-color-rose-shade:#c199a4;--ion-color-rose-tint:#dfb6c1;--ion-color-success:#2dd36f;--ion-color-success-rgb:45, 211, 111;--ion-color-success-contrast:#ffffff;--ion-color-success-contrast-rgb:255, 255, 255;--ion-color-success-shade:#28ba62;--ion-color-success-tint:#42d77d;--ion-color-warning:#ffc409;--ion-color-warning-rgb:255, 196, 9;--ion-color-warning-contrast:#000000;--ion-color-warning-contrast-rgb:0, 0, 0;--ion-color-warning-shade:#e0ac08;--ion-color-warning-tint:#ffca22;--ion-color-danger:#eb445a;--ion-color-danger-rgb:235, 68, 90;--ion-color-danger-contrast:#ffffff;--ion-color-danger-contrast-rgb:255, 255, 255;--ion-color-danger-shade:#cf3c4f;--ion-color-danger-tint:#ed576b;--ion-color-dark:#222428;--ion-color-dark-rgb:34, 36, 40;--ion-color-dark-contrast:#ffffff;--ion-color-dark-contrast-rgb:255, 255, 255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e;--ion-color-medium:#92949c;--ion-color-medium-rgb:146, 148, 156;--ion-color-medium-contrast:#ffffff;--ion-color-medium-contrast-rgb:255, 255, 255;--ion-color-medium-shade:#808289;--ion-color-medium-tint:#9d9fa6;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244, 245, 248;--ion-color-light-contrast:#000000;--ion-color-light-contrast-rgb:0, 0, 0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9}
	</style>

	<link rel="stylesheet" href="<?php echo base_url('www/styles.59cf893316a49d59.css'); ?>" media="print" onload="this.media='all'">
	<noscript>
		<link rel="stylesheet" href="<?php echo base_url('www/styles.59cf893316a49d59.css'); ?>">
	</noscript>

</head>

<body>
  <app-root></app-root>
	<script src="<?php echo base_url('www/runtime.cf51e42cdfbf643e.js'); ?>" type="module"></script>
	<script src="<?php echo base_url('www/polyfills.b4e8aa928519df4d.js'); ?>" type="module"></script>
	<script src="<?php echo base_url('www/scripts.935f18298af74eeb.js'); ?>" defer></script>
	<script src="<?php echo base_url('www/main.1409d5b4296f9548.js'); ?>" type="module"></script>


</body></html>