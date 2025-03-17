---
title: "L'infolettre du Passeport"
description: Bienvenue sur la page du bulletin d'information du Passeport pour l'accessibilité du lieu de travail du gouvernement du Canada ! Vous y trouverez les dernières éditions de la lettre d'information. Restez informé grâce à des mises à jour passionnantes sur le Passeport, des entrevues exclusives avec des chefs de file en matière d'accessibilité et de précieux renseignements sur les bonnes pratiques en matière d'adaptation du milieu de travail. Nous sommes là pour partager des conseils d'experts et des stratégies réalisables pour vous aider à favoriser un environnement de travail plus inclusif et plus accessible dans la fonction publique fédérale.
otherLanguageTitle: The Passport Newsletter
tags: passport
internalLinks: true
---

Abonnez-vous à la lettre d'information du Passeport pour recevoir un lien direct dès que de nouvelles éditions sont publiées.

(Create subscription form in html)

{# List all newsletters related to passport here #}
{%- set newsletterslist = collections.newsletters
  | localeMatch(locale)
  | filterByField("passportSection", true)
-%}

{%- if newsletterslist and newsletterslist.length > 0 -%}
  {%- include "partials/newsletterslist.njk" -%}
{%- else -%}
  <p>Il n'y a pas de bulletin d'information sur le passeport d'accessibilité pour le moment.</p>
{%- endif -%}

<p><a href="#">Éditions précédentes sur GCpedia<i class="fas fa-user-lock ml-1" aria-hidden="true"></i><span class="wb-inv"> lien interne</span></a></p>

Contactez la boîte courriel <a href="mailto:">AATIA Passport</a> si vous avez des questions, des commentaires ou si vous souhaitez contribuer au contenu de la lettre d'information.
