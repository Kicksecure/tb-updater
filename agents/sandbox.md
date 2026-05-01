sandbox-update-torbrowser runs under torsocks'd apt during postinst.
torsocks breaks sudo. Use setpriv-tb-updater instead for privilege
changes inside this script.

Do not use inotifywait or other inotify-based file watchers. The
kernel's fs.inotify.max_user_watches pool is limited and easily
exhausted on desktop systems (IDEs, file managers, etc.). Use polling
with light_sleep instead.

Multi-browser architecture: the sandbox script is shared by Tor
Browser, Mullvad Browser, and I2P Browser. Browser-specific paths
come from variables set by the /usr/bin wrapper (tb_install_folder,
tb_install_folder_dot, tb_browser_name, tb_global_binary_dir,
SCRIPTNAME). Do not hardcode Tor Browser paths.
