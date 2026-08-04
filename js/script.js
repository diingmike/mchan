// JS for mobile nav
	(function () 
	{
	    document.addEventListener("DOMContentLoaded", () => {
	        const check = document.getElementById("check");
	        const header = document.querySelector("header");

	        if (!check || !header) return;

	        check.addEventListener("change", () => 
	        {
	            document.body.classList.toggle("menu-open", check.checked);
	        });

	        document.addEventListener("click", (e) => 
	        {
	            if (check.checked && !header.contains(e.target)) 
	            {
	                check.checked = false;
	                document.body.classList.remove("menu-open");
	            }
	        });

	        document.addEventListener("keydown", (e) => 
	        {
	            if (e.key === "Escape" && check.checked) 
	            {
	                check.checked = false;
	                document.body.classList.remove("menu-open");
	            }
	        });
	    });
	})();

// JS for footer year and back to top
	(function () 
	{
	    document.addEventListener("DOMContentLoaded", () => 
	    {
	        // auto-fill copyright year
	        const yearEl = document.getElementById("year");
	        if (yearEl) yearEl.textContent = new Date().getFullYear();

	        const backToTop = document.getElementById("backToTop");
	        if (!backToTop) return;

	        const ring = backToTop.querySelector(".back-to-top-ring circle");
	        const circumference = 125.6; // matches stroke-dasharray in CSS

	        const updateButton = () => 
	        {
	            const scrollTop = window.scrollY;
	            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
	            const progress = docHeight > 0 ? scrollTop / docHeight : 0;

	            // show button after scrolling down a bit
	            backToTop.classList.toggle("is-visible", scrollTop > 400);

	            // update ring progress
	            if (ring) 
	            {
	                const offset = circumference - (progress * circumference);
	                ring.style.strokeDashoffset = offset;
	            }
	        };

	        window.addEventListener("scroll", updateButton, { passive: true });
	        updateButton(); // set initial state on load

	        backToTop.addEventListener("click", () => 
	        {
	            window.scrollTo({ top: 0, behavior: "smooth" });
	        });
	    });
	})();

// JS for FAQs in contact page
	(function () 
	{
	    document.addEventListener("DOMContentLoaded", () => 
	    {
	        const faqItems = document.querySelectorAll(".faq-item");
	        if (!faqItems.length) return;

	        faqItems.forEach((item) => 
	        {
	            const question = item.querySelector(".faq-question");
	            const answer = item.querySelector(".faq-answer");
	            if (!question || !answer) return;

	            question.addEventListener("click", () => 
	            {
	                const isOpen = question.getAttribute("aria-expanded") === "true";

	                // close all other open items (single-open accordion)
	                faqItems.forEach((other) => 
	                {
	                    if (other === item) return;
	                    const otherQuestion = other.querySelector(".faq-question");
	                    const otherAnswer = other.querySelector(".faq-answer");
	                    if (!otherQuestion || !otherAnswer) return;
	                    otherQuestion.setAttribute("aria-expanded", "false");
	                    otherAnswer.style.maxHeight = null;
	                });

	                // toggle this item
	                question.setAttribute("aria-expanded", String(!isOpen));
	                answer.style.maxHeight = isOpen ? null : answer.scrollHeight + "px";
	            });
	        });
	    });
	})();