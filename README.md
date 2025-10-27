# Tor Browser Downloader by Whonix developers #

Automates download and verification of Tor Browser from The Tor Project's
website. Useful for initial installation of Tor Browser, clean
re-installations of Tor Browser and keeping newly created Qubes AppVMs
inherited from updated Qubes TemplateVMs can ship up to date versions of
Tor Browsers.

Incapable of preserving of updating and preserving user data. Use
Tor Browser's internal updater for that purpose. Notifies about already
exiting installations of Tor Browser. Renamed rather than deletes old versions
of Tor Browsers to avoid user data loss.

Has a cli and a gui mode. Can auto detect latest version numbers or use user
configured version numbers. Comes with a download confirmation screen that
lets users choose which version to download. [1] Has a installation
confirmation screen [2] that enables users to detect indefinite freeze and
rollback attacks.

Integrates well with tb-starter and open-link-confirmation package as well as
with Qubes.

Without the helper-scripts package installed, the GUI will not move the
progress bar.

If you have the helper-scripts package installed, it will show a nicer
progress bar when run in terminal and more meaningful curl exit code
messages, when curl failed.

When having the helper-scripts package installed (recommended for
Anonymity Distributions), Tor Browser Downloader will check, that Tor is
enabled, that no package manager is currently running and that Tor finished
bootstrapping before download attempts.

Supports being run inside chroot and from Debian maintainer postinst script.

Qubes integration:

- Up-to-date browser versions made available to freshly created AppVMs and
DispVMs.
- In DispVM mounts browser folder which resides in root image to user home
folder rather than copying for faster browser startup.

This package is produced independently of, and carries no guarantee from,
The Tor Project.

[1] https://www.whonix.org/wiki/Tor_Browser#Download_Confirmation_Screen
[2] https://www.whonix.org/wiki/Tor_Browser#Installation_Confirmation_Screen

## How to install `tb-updater` using apt-get ##

1\. Download the APT Signing Key.

```
wget https://www.kicksecure.com/keys/derivative.asc
```

Users can [check the Signing Key](https://www.kicksecure.com/wiki/Signing_Key) for better security.

2\. Add the APT Signing Key.

```
sudo cp ~/derivative.asc /usr/share/keyrings/derivative.asc
```

3\. Add the derivative repository.

```
echo "deb [signed-by=/usr/share/keyrings/derivative.asc] https://deb.kicksecure.com trixie main contrib non-free" | sudo tee /etc/apt/sources.list.d/derivative.list
```

4\. Update your package lists.

```
sudo apt-get update
```

5\. Install `tb-updater`.

```
sudo apt-get install tb-updater
```

## How to Build deb Package from Source Code ##

Can be build using standard Debian package build tools such as:

```
dpkg-buildpackage -b
```

See instructions.

NOTE: Replace `generic-package` with the actual name of this package `tb-updater`.

* **A)** [easy](https://www.kicksecure.com/wiki/Dev/Build_Documentation/generic-package/easy), _OR_
* **B)** [including verifying software signatures](https://www.kicksecure.com/wiki/Dev/Build_Documentation/generic-package)

## Contact ##

* [Free Forum Support](https://forums.kicksecure.com)
* [Premium Support](https://www.kicksecure.com/wiki/Premium_Support)

## Donate ##

`tb-updater` requires [donations](https://www.kicksecure.com/wiki/Donate) to stay alive!
