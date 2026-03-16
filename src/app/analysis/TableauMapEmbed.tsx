"use client";

import { useEffect } from "react";

const EMBED_HTML = `
  <div class="tableauPlaceholder" id="viz1773690996135" style="position: relative">
    <noscript>
      <a href="#"><img alt="Global Film Production by Country" src="https://public.tableau.com/static/images/Fi/FilmProductionbyCountry/Dashboard1/1_rss.png" style="border: none" /></a>
    </noscript>
    <object class="tableauViz" style="display:none;">
      <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
      <param name="embed_code_version" value="3" />
      <param name="site_root" value="" />
      <param name="name" value="FilmProductionbyCountry/Dashboard1" />
      <param name="tabs" value="no" />
      <param name="toolbar" value="yes" />
      <param name="static_image" value="https://public.tableau.com/static/images/Fi/FilmProductionbyCountry/Dashboard1/1.png" />
      <param name="animate_transition" value="yes" />
      <param name="display_static_image" value="yes" />
      <param name="display_spinner" value="yes" />
      <param name="display_overlay" value="yes" />
      <param name="display_count" value="yes" />
      <param name="language" value="en-US" />
      <param name="filter" value="publish=yes" />
    </object>
  </div>
`;

export default function TableauMapEmbed() {
  useEffect(() => {
    const divElement = document.getElementById("viz1773690996135");
    if (!divElement) return;

    const vizElement = divElement.getElementsByTagName("object")[0];
    if (!vizElement) return;

    if (divElement.offsetWidth > 800) {
      vizElement.style.width = "1000px";
      vizElement.style.height = "827px";
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = "1000px";
      vizElement.style.height = "827px";
    } else {
      vizElement.style.width = "100%";
      vizElement.style.height = "727px";
    }

    const existingScript = document.querySelector(
      'script[src="https://public.tableau.com/javascripts/api/viz_v1.js"]',
    );

    if (!existingScript) {
      const scriptElement = document.createElement("script");
      scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
      vizElement.parentNode?.insertBefore(scriptElement, vizElement);
    }
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: EMBED_HTML }} />;
}
