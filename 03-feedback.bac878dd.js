const e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){const{email:t,message:a}=e.currentTarget;localStorage.setItem("feedback-form-state",JSON.stringify({email:t.value,message:a.value}))})),window.addEventListener("load",(function(){const t=JSON.parse(localStorage.getItem("feedback-form-state")),{email:a,message:r}=e;t&&(a.value=t.email,r.value=t.message)})),e.addEventListener("submit",(function(e){e.preventDefault,localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.bac878dd.js.map