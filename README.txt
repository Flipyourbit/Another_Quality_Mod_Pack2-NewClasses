//////////////////////////////////////////////////////
// Another Quality Modpack 2 -- Server Instructions //
//////////////////////////////////////////////////////

New set up for launching servers to make uploading server packs much easier as curseforge takes forever to approve the normal way.

NOTE: Back up your /world, always before updating.

Recommended Difficulty: HARD

Sections
	i. Creating New World (How to change Terralith Seed)
	ii. Setting Up Server Locally
	iii. Setting Up Server for Server Host/Dedicated
	IV. Setting up Ram
	V. How to Change Seed (GO here https://discord.gg/6MdUmwPXgE)

Discord (AQM2 Support)
https://discord.gg/k88uKwNe6h - Support Chat
https://discord.gg/5295A6ZMjq - Create Ticket

Note: If you ever receive an error on first launch or update about "request to cursemeta.dries007.net", just rerun serverstart.bat


///////////////////////////
// i. Creating New World //
///////////////////////////

If you are creating a new world, and you want to use a different seed (I picked a pretty good one for default)

Read the below sections, and then after launching serverstart, exit it when it starts to show typical minecraft server console stuff

1. Browse to newly placed kubejs\data\minecraft\dimension\overworld.json
2. open in text editor like Notepad++ or Sublime
3. Scroll to the bottom, change the "Seed" numbers to what you want
4. Save
5. Run Serverstart again



/////////////////////////////////////////////
// ii. How To Setup Server and Run locally //
/////////////////////////////////////////////

1. If you don't have it, INSTALL Java 17 (Need to install, not unzip)
WINDOWS: https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.1%2B12/OpenJDK17U-jdk_x64_windows_hotspot_17.0.1_12.msi
LINUX/MAC: https://adoptium.net/releases.html (Make sure 17 is toggled, and download and install it for your linux distro or mac that you use )

2a. Run startserver.bat (for windows)

2b. Run startserver.sh (for linux/mac)

3. Everything will download and initialize by itself. the EULA agreement will appear, you must type TRUE to continue once it does

4. Success. Server started. You will run Step 2 any time you want to launch your server


For future updates; Make sure you continue deleting the mods folder, and kubejs folder before launching serverstart to receive the latest updates. 



///////////////////////////////////////////////////////////////////
// iii. How to Setup and Launch Server from dedicated/vps server //
///////////////////////////////////////////////////////////////////

1. Follow steps 1-3 above

2. Move everything that was downloaded into your server like how you normally would

3. Thar jar file to launch your server is fabric-server-launch.jar, set your server to use this to launch it.

4. Success.


For future updates; Make sure you continue deleting the mods folder, and kubejs folder before migrating everything serverstart downloaded into your server root folder.




Need help? Visit our discord https://discord.gg/k88uKwNe6h


///////////////////////////////////////////////////////////////////
// iv. Allocating Ram to your Server //
///////////////////////////////////////////////////////////////////

1. Open server-starter-config.yaml

2. Scroll to the bottom until you see maxRam and minRam

3. change the # to how many gigabytes you want to allocate to your server. 

4. If you want 8 gb of ram it should look like this

			maxRam: 8G

			minRam: 8G

5. Save, Launch. 