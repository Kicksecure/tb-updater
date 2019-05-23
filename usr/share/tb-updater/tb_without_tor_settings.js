// This file is part of Whonix
// Copyright (C) 2012 - 2019 ENCRYPTED SUPPORT LP <adrelanos@riseup.net>
// See the file COPYING for copying conditions.

// Warning! These settings disable Tor. You will not be anonymous!

// Configure Tor Browser without Tor settings for an everyday use
// security hardened browser. Take advantage of its excellent
// enhancements for reducing linkability, that is, "the ability
// for a user's activity on one site to be linked with their
// activity on another site without their knowledge or explicit
// consent."
// - See https://whonix.org/wiki/Tor_Browser_without_Tor

// Disable Torbutton and Torlauncher extensions
user_pref("extensions.torbutton.startup", false);
user_pref("extensions.torlauncher.start_tor", false);
user_pref("network.proxy.socks_remote_dns", false);

// Normalize Tor Browser behavior
user_pref("extensions.torbutton.noscript_persist", true);
user_pref("browser.privatebrowsing.autostart", false);
