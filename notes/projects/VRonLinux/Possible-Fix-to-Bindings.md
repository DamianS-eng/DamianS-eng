# Advice from Copilot

> Take this with a grain of salt.

### Core issue with 3dSenVR controller bindings on Linux

You’re right: most SteamVR titles map controllers fine on Linux. 3dSenVR is an outlier because it ships (or relies on) its own binding files, and SteamVR-Linux has a long‑standing bug where titles that include their own bindings get stuck in a broken “custom” state that you can’t edit or properly apply. When that happens, controller input never reaches the app even though SteamVR shows the devices as connected.

---

### Why this breaks specifically in 3dSenVR

- **Bundled binding configs conflict on Linux:** Games that include their own `bindings_*.json` can trigger a Linux-specific SteamVR bug that forces “custom” bindings but prevents editing or applying defaults, resulting in dead inputs inside the game.  
- **SteamVR binding regression history:** SteamVR has had multiple binding regressions (notably around v1.22 and later) that break game- or driver-provided bindings; symptoms match what you see—controllers connect, but the app receives nothing.  
- **3dSenVR community reports:** Players have reported nonfunctional VR controller inputs in 3dSenVR while gamepads work, and some fixed it by swapping builds or resetting bindings, implying the app’s shipped mappings and SteamVR state are the root cause.

---

### Quick checks before you dive in

- **Confirm per-app bindings actually load:** In SteamVR → Controller → Manage bindings → select 3dSenVR, see whether it shows “Custom (from game)” and is uneditable. That’s the broken state described in the Linux bug.  
- **Verify SteamVR runtime version:** If you’re on SteamVR 2.0+ (or a recent stable), note that the bug is reported across versions; solutions below work around SteamVR rather than requiring a specific version.

---

### Fixes that target the binding bug

#### Reset and override the app’s bindings
- **Delete 3dSenVR binding files and force your own:**
  - **Action:** Remove the game’s binding JSON from SteamVR’s per‑app config, then create and save a fresh custom binding in SteamVR’s UI for your controllers.  
  - **Why:** This bypasses the broken “game-supplied bindings” path on Linux and replaces it with a user-defined set SteamVR will honor.
- **How-to steps:**
  1. **Close SteamVR and Steam.**
  2. **Delete per‑app binding cache/config** in:
     - `~/.local/share/Steam/steamapps/common/SteamVR/resources/input/` (check for app-specific binding files),
     - `~/.steam/steam/config/steamvr.vrsettings` (don’t delete; back up; you’ll reset inside UI),
     - `~/.steam/steam/steamapps/common/SteamVR/drivers/` (ensure no custom driver injected bindings).
  3. **Launch SteamVR → Controller → Manage bindings → 3dSenVR → Create new binding** for your controller (Index/Quest/Vive) and save it as your personal default.  
  4. **Select your binding, not the game’s “Custom” one.**  
  - **Reference:** The Linux bug report documenting broken behavior when games ship bindings.

#### Reinstall or roll SteamVR to refresh binding state
- **Clean reinstall SteamVR, then reapply your binding:** Several users report that a full reinstall temporarily restores editability and correct application of bindings, letting controllers work again until the bug reappears.  
- **If needed, try SteamVR beta or older stable:** Some regressions affect specific builds; swapping branches has fixed controller binding state for users in other titles and can help 3dSenVR, since the root cause is SteamVR’s binding handling.  
- **References:** Community reports of reinstall fixing per‑game binding application; binding regressions around SteamVR updates.

#### Force Steam Input to take over
- **Enable per‑game Steam Input and map to gamepad layer:**
  - **Action:** In Steam → 3dSenVR → Properties → Controller → set “Override for 3dSenVR” to “Enable Steam Input,” then use a VR controller → gamepad template.  
  - **Why:** This sidesteps SteamVR’s per‑app bindings and routes inputs through Steam Input, which is often stable on Linux even when VR bindings are stuck.  
  - **Note:** You’ll lose native VR button semantics, but inputs reach the game reliably.

---

### Proton-focused workarounds

- **Switch Proton versions (GE or Experimental):** Proton-GE includes fixes that improve SteamVR input paths; users often see controllers start registering after swapping Proton, because Unity input + SteamVR calls are translated differently.  
- **Clear Proton prefix for the app:** Removing the game’s wine prefix forces re‑detection of devices and bindings; combined with the reset above, this can break the deadlock state.

---

### If it still doesn’t recognize controllers

- **Create a fresh binding from scratch in SteamVR UI:** Pick your controller model, build a minimal map (trigger → confirm, grip → back/menu), save, and set as default for 3dSenVR. This directly addresses the “uneditable custom” problem from the game’s binding files.  
- **Avoid game-supplied bindings:** If the UI flips back to a locked “Custom (from game)” binding, repeat the deletion and reinstall steps; this is the exact behavior tracked in the Linux bug.  
- **Reinstall SteamVR to reset binding availability:** Users have seen binding editability return post-reinstall, confirming it’s SteamVR state, not headsets, at fault.

---

### Bottom line

Your observation is correct: Linux SteamVR controller bindings generally work, but titles that ship their own binding configs can break on Linux. 3dSenVR falls into that problem space. The most reliable fix is to remove the game’s binding files, create and apply your own SteamVR binding for the app, and, if necessary, reinstall or branch-switch SteamVR to restore binding editability.

If you want, tell me your headset and controller model, and I’ll give you a minimal binding map you can enter in SteamVR so 3dSenVR’s inputs register cleanly.
