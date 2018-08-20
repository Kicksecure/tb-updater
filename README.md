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

Integrates well with tb-starter, tb-default-browser and
open-link-confirmation package as well as with Qubes.

Without the curl-scripts package installed, the GUI will not move the progress
bar.

If you have the curl-scripts package installed, it will show a nicer progress
bar when run in terminal and more meaningful curl exit code messages, when
curl failed.

When having the anon-shared-helper-scripts package installed (recommended for
Anonymity Distributions), Tor Browser Downloader will check, that Tor is
enabled,  that no package manager is currently running and that Tor finished
bootstrapping before download attempts.

This package is produced independently of, and carries no guarantee from,
The Tor Project.

[1] https://www.whonix.org/wiki/Tor_Browser#Download_Confirmation_Screen
[2] https://www.whonix.org/wiki/Tor_Browser#Installation_Confirmation_Screen
## How to install `tb-updater` using apt-get ##

1\. Add [Whonix's Signing Key](https://www.whonix.org/wiki/Whonix_Signing_Key).

```
sudo apt-key --keyring /etc/apt/trusted.gpg.d/whonix.gpg adv --keyserver hkp://ipv4.pool.sks-keyservers.net:80 --recv-keys 916B8D99C38EAF5E8ADC7A2A8D66066A2EEACCDA
```

3\. Add Whonix's APT repository.

```
echo "deb http://deb.whonix.org stretch main" | sudo tee /etc/apt/sources.list.d/whonix.list
```

4\. Update your package lists.

```
sudo apt-get update
```

5\. Install `tb-updater`.

```
sudo apt-get install tb-updater
```

## How to Build deb Package ##

Replace `apparmor-profile-torbrowser` with the actual name of this package with `tb-updater` and see [instructions](https://www.whonix.org/wiki/Dev/Build_Documentation/apparmor-profile-torbrowser).

## Contact ##

* [Free Forum Support](https://forums.whonix.org)
* [Professional Support](https://www.whonix.org/wiki/Professional_Support)

## Payments ##

`tb-updater` requires [payments](https://www.whonix.org/wiki/Payments) to stay alive!
