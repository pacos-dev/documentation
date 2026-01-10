---
sidebar_position: 5
title: Guest & Registration
description: Learn how to configure guest login and registration panel in PacOS.
keywords: [pacos, system access, guest account, registration, permissions]
---

# System Access

The **Guest & Registration** tab allows administrators to configure how users can access PacOS.  
It provides options for enabling guest login and managing the registration panel.

![system-access.png](/img/docs/settings/system-access.png)

---

## Guest Account

PacOS supports login via a **guest account**.

- **Limitations**
    - The guest account cannot be personalized.
    - Window layouts, variables, and open tabs are not saved.
- **Permissions**
    - Guest permissions are fully configurable in the **Users & Permissions** tab.
    - The account can be restricted to *read-only* access or granted full control.
- **Authentication**
    - The guest account does not require authentication.

This makes the guest account useful for temporary access or quick demonstrations without creating a dedicated user profile.

---

## Registration Panel

Administrators can enable a **registration panel** for new users.

- **Closed network environments**
    - If PacOS runs in a private or closed network, the registration panel can be made available to all users.
- **Default permissions**
    - Newly created accounts automatically inherit the permissions defined in the **Default Permissions** tab.

This feature simplifies onboarding by allowing users to self-register while ensuring consistent access control.

---

## Summary

The **System Access** tab provides flexible options for managing how users enter the system:

- Guest login for quick, non-persistent access.
- Registration panel for streamlined account creation in controlled environments.

Together, these options give administrators control over accessibility while maintaining security and consistency.
