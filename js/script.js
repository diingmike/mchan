// script for year
	document.getElementById("year").textContent = new Date().getFullYear();

//script for icon colour swap on hover, projects page
    document.querySelectorAll(".web_card").forEach(function(card) 
    {
        card.addEventListener("mouseenter", function() 
        {
            card.querySelectorAll(".icon_fill").forEach(function(el) { el.setAttribute("fill", "#f7c8ff"); });
            card.querySelectorAll(".icon_stroke").forEach(function(el) { el.setAttribute("stroke", "#f7c8ff"); });
            card.querySelectorAll(".arrow_svg").forEach(function(el) { el.setAttribute("stroke", "#f7c8ff"); });
        });

        card.addEventListener("mouseleave", function() 
        {
            card.querySelectorAll(".icon_fill").forEach(function(el) { el.setAttribute("fill", "#430a4d"); });
            card.querySelectorAll(".icon_stroke").forEach(function(el) { el.setAttribute("stroke", "#430a4d"); });
            card.querySelectorAll(".arrow_svg").forEach(function(el) { el.setAttribute("stroke", "#430a4d"); });
        });
    });

// script for icon colour swap on hover, contact page
    document.querySelectorAll(".contact_card").forEach(function(card) 
    {
        card.addEventListener("mouseenter", function() 
        {
            card.querySelectorAll(".ci").forEach(function(el) 
            {
                if (el.getAttribute("stroke") && el.getAttribute("stroke") !== "none") el.setAttribute("stroke", "#f7c8ff");
                if (el.getAttribute("fill") && el.getAttribute("fill") !== "none") el.setAttribute("fill", "#f7c8ff");
            });

            card.querySelectorAll(".ci_dot").forEach(function(el) 
            { 
                el.setAttribute("fill", "#f7c8ff"); 
            });

            card.querySelectorAll(".cv").forEach(function(el) 
            { 
                el.setAttribute("stroke", "#f7c8ff"); 
            });
        });

        card.addEventListener("mouseleave", function() 
        {
            card.querySelectorAll(".ci").forEach(function(el) 
            {
                if (el.getAttribute("stroke") && el.getAttribute("stroke") !== "none") el.setAttribute("stroke", "#430a4d");
                if (el.getAttribute("fill") && el.getAttribute("fill") !== "none") el.setAttribute("fill", "#430a4d");
            });

            card.querySelectorAll(".ci_dot").forEach(function(el) { el.setAttribute("fill", "#430a4d"); });
            card.querySelectorAll(".cv").forEach(function(el) { el.setAttribute("stroke", "#430a4d"); });
        });
    });