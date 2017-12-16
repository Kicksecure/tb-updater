// This file is part of Whonix
// Copyright (C) 2012 - 2014 Patrick Schleizer <adrelanos@riseup.net>
// See the file COPYING for copying conditions.

// Deactivating Tor Browser's Internal Updater at least as long it does not
// support verification. See also:
// - https://www.whonix.org/blog/tor-browser-updater-warning
// - https://www.whonix.org/forum/index.php/topic,807
// Feel free to comment this out or to delete this file if you know what you
// are doing.
pref("app.update.enabled", false);
