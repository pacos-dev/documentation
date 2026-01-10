---
sidebar_position: 3
title: System Background
description: Learn how to configure the PacOS system background using preinstalled wallpapers, external URLs, or Bing integration.
keywords: [pacos, background, wallpaper, bing, personalization, configuration]
---

# System Background

The **System Background** module allows you to personalize the visual appearance of the PacOS interface by changing the desktop wallpaper. Users can choose from three main configuration methods, allowing for a balance between performance and aesthetics.

![background.jpg](/img/docs/settings/background.jpg)

---

## Configuration Methods

Within the system settings, you can choose one of the following options:

### 1. Preinstalled Wallpapers
The system provides a set of carefully selected, optimized high-resolution graphics (FullHD and 2.5K).
* **Advantage:** Fastest loading times, no dependency on an internet connection.
* **Usage:** Simply select a thumbnail from the gallery available in the settings panel.

### 2. Custom URL
If you have your own graphic hosted online, you can paste the direct link to the image file (e.g., `.jpg` or `.png`).
* **Advantage:** Complete freedom in choosing your imagery.
* **Note:** Ensure the external host allows image embedding (CORS) and that the link remains stable.

### 3. Bing Daily Wallpaper
Integration with the Bing service enables an automatic wallpaper change every day. The system fetches the latest "Photo of the Day" from Microsoft daily.
* **Advantage:** A fresh look for your system every day without manual intervention.
* **Requirement:** An active internet connection is required during the session start to fetch the new image.

---

## How to Change the Background

1. Navigate to **System Settings**.
2. Select the **System** -> **System Background** tab.
3. Choose your preferred method (click a thumbnail, paste a URL, or activate Bing mode).
4. The system automatically saves the changes to the registry and notifies all active modules of the background update.

> ### Technical Information
> The background change is broadcast to the interface via the `ModuleEvent.BACKGROUND_CHANGED` event. The wallpaper URL is stored in the system registry under the key `BACKGROUND`.

---

## Troubleshooting

| Issue | Solution |
| :--- | :--- |
| **URL background not displaying** | Verify the URL is correct and the image is publicly accessible. |
| **Bing wallpaper not refreshing** | Ensure the server has access to the `bing.biturl.top` domain. |
| **Low image quality** | Check the resolution of the source file. A minimum of 1920x1080 px is recommended. |