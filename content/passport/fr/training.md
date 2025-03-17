---
title: Formation et événements liés au passeport
description: Le Bureau de l'accessibilité, des aménagements et des technologies informatiques adaptées (AATIA) s'associe au Bureau de l'accessibilité de la fonction publique pour permettre aux organisations et aux employés du GC de tirer le meilleur parti du passeport.
otherLanguageTitle: Passport Training and Events
tags: passport
---

<p>Marquez cette page d'un signet et visitez-la souvent, car vous y trouverez les dates, les descriptions et les modalités d'inscription aux séances d'information, aux ateliers et aux programmes de formation du Passeport.</p>

{# List all learning events related to passport here #}
{%- set learninglist = collections.learning
  | localeMatch(locale)
  | filterByField("passportSection", true)
-%}

{%- if learninglist and learninglist.length > 0 -%}
  {%- include "partials/learninglist.njk" -%}
{%- else -%}
  <p>Il n'y a pas d'événements d'apprentissage du passeport d'accessibilité prévus pour le moment.</p>
{%- endif -%}

<p>Consultez notre page d'<a href="/formation/">événements d'apprentissage sur l'accessibilité</a> pour découvrir d'autres événements organisés par les gens de l'Accessibilité, adaptation et technologie informatique adaptée (AATIA).</p>
