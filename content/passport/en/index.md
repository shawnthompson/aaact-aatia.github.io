---
title: Government of Canada (GC ) Workplace Accessibility Passport
description: The GC Workplace Accessibility Passport, a tool to build an accessible and inclusive federal public service. Download the Passport and access the full range of Passport resources, such as the Passport newsletter, blog articles, videos, and much more.
permalink: /accessibility-passport/
otherLanguagePermalink: /passeport-accessibilite/
eleventyExcludeFromCollections: true
---

The Government of Canada (GC) Workplace Accessibility Passport promotes easy and timely access to the tools and support measures employees with disabilities need to succeed in their job.

The Accessibility, Accommodation and Adaptive Computer Technology (AAACT) is partnering with the Office of Public Service Accessibility to support employees and organizations who adopt the Passport.

[Download the GC Workplace Accessibility Passport (Word, 73KB)](https://www.canada.ca/content/dam/tbs-sct/documents/accessibility-publi-service/gc-workplace-accessibility-passport-02-2025.docx) - This will open in a new window as an accessible .docx file.

{# List all learning events here #}

{%- set passportlist = collections.passport | localeMatch(locale) -%}

<div class="row wb-eqht mrgn-tp-lg gc-srvinfo">
	{%- for item in passportlist -%}
		<div class="col-md-6">
			<h2><a href="{{ item.page.url }}">{{ item.data.title }}</a></h2>
			<p>{{ item.data.description }}</p>
		</div>
	{%- endfor -%}
</div>

## Resources

- [Passport Guides and Videos](#) - This links directly to the Canada.ca Passport resources
- [The Passport Digital Application](#)
- [Contact the AAACT Passport Mailbox](#)
