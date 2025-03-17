---
title: Passport Training and Events
description: The Accessibility, Accommodation and Adaptive Computer Technology (AAACT) is partnering with the Office of Public Service Accessibility (OPSA) to equip GC organizations and employees to make the most out of the Passport.
otherLanguageTitle: Formation et événements liés au passeport
tags: passport
---

Bookmark this page and visit often as it will feature dates, descriptions, and registration details for Passport information sessions, workshops, and training programs.

{# List all learning events related to passport here #}
{%- set learninglist = collections.learning
  | localeMatch(locale)
  | filterByField("passportSection", true)
-%}

{%- if learninglist and learninglist.length > 0 -%}
  {%- include "partials/learninglist.njk" -%}
{%- else -%}
  <p>There are no accessibility passport learning events scheduled at the moment.</p>
{%- endif -%}

<p>Check out our <a href="/learning/">accessibility learning events</a> page for other events provided by the folks at Accessibility, Accommodation and Adaptive Computer Technology (<abbr>AAACT</abbr>).</p>
