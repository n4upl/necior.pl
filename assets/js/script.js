	$(function () {
		$("form").validate();
	  });

	$( "form" ).on( "submit", function(e) {
 
		var dataString = $(this).serialize();
		 
		// alert(dataString); return false;
	 
		$.ajax({
		  type: "POST",
		  url: "form-handler.php",
		  data: dataString,
		  success: function () {
			$("#contact_form").html("<div id='mess' class='send'></div>");
			$("#mess")
			  .html("<h2>Wiadomość została wysłana, dziękujemy!</h2>")
			  .hide()
			  .fadeIn(1500, function () {
				
			  });
		  }
		});
	 
		e.preventDefault();
	  });
	
	
/*	
	var grecaptchaWidgetID;
	
	$("form:not(.SFG)").submit(function(event){
		
		event.preventDefault();
	 
		var form = $(this);
		var grecaptchaContainer = document.getElementById("g-recaptcha");
		if($(grecaptchaContainer).length>0){
			$(".grecaptcha-overlay").fadeIn(150,function(){
				$(".grecaptcha-popup").fadeIn(200,function(){
					if(typeof(grecaptchaWidgetID)=="undefined"){
						grecaptchaWidgetID = grecaptcha.render(grecaptchaContainer, {
							"sitekey": $(grecaptchaContainer).attr("data-sitekey"),
							"callback": function (grecaptchaResponse) {
								if(grecaptchaResponse){
									var grecaptchaInput = form.find('input[name=g-recaptcha-response]');
									if(grecaptchaInput.length>0){
										grecaptchaInput.val(grecaptchaResponse);
									}else{
										form.append('<input name="g-recaptcha-response" value="'+grecaptchaResponse+'" type="hidden" />');						
									}
									submitForm(form);					
								}else{
									grecaptcha.reset(grecaptchaWidgetID);
								}
							},
							"expired-callback": function(){
								grecaptcha.reset(grecaptchaWidgetID);
							},
							"error-callback": function(){
								$(".alert-form-error .message").html("Error: Please, check your internet connection and try again");
								$(".alert-form-error").fadeIn(200).delay(10000).fadeOut(200);
								grecaptcha.reset(grecaptchaWidgetID);
							},
						});						
					}else{
						grecaptcha.reset(grecaptchaWidgetID);
					}
				});
			});
		}else{
			submitForm(form);
		}
		function submitForm(form){
		    var	term = form.serialize(),
				url = form.attr("action"),
				required_fields_filled = true;
				
			form.find("input, textarea, select").each(function(){
				if($(this).prop("required") && $(this).val()==""){
					required_fields_filled = false;
				}
			});

			if(required_fields_filled){
				var posting = $.post(url, term);
				posting
				.done(function(data){
					if(data=="ok"){
						$(".alert-form-success").fadeIn(200).delay(5000).fadeOut(200);
					}else{
						$(".alert-form-error .message").html(data);
						$(".alert-form-error").fadeIn(200).delay(10000).fadeOut(200);
					}
					hidegRecaptchaPopup();
				})
				.fail(function(){
					$(".alert-form-error").fadeIn(200).delay(10000).fadeOut(200);
					hidegRecaptchaPopup();
				});
			}else{
				$(".alert-form-check-fields").fadeIn(200).delay(5000).fadeOut(200);
				hidegRecaptchaPopup();
			}
		}
	});
	
	// Close gReCaptcha popup
	
	$(".grecaptcha-overlay").click(function(){
		hidegRecaptchaPopup();
	});
	
	function hidegRecaptchaPopup(){
		if($(".grecaptcha-popup").is(":visible")){
			$(".grecaptcha-popup").fadeOut(200, function(){
				$(".grecaptcha-overlay").fadeOut(100);
			});
		}
	}

	// Function to add style to form, when user clicks to input inside it

	function focusForm(formID){
		var form = $("#"+formID);
		if(form.hasClass("focused")){
			form.removeClass("focused");
		}else{
			form.addClass("focused");
		}
	}



	
	
	// Opening tabs

	function openTab(tab){
		if(tab.hasClass("opened")){
			$(".tab_text").animate({height:0},300);
			tab.removeClass("opened");
		}else{
			var nextTabHeight = tab.next().find("div").outerHeight(true);
			$(".tab_text").not(tab.next()).animate({height:0},300);
			tab.next().animate({height:nextTabHeight},300);
			$(".tab_opener").removeClass("opened");
			tab.addClass("opened");
		}
	}

	$(".tab_opener").click(function(){
		openTab($(this));
	});

	if($(".opening_tabs").length > 0){
		$(".tab_opener").each(function(){
			if($(this).hasClass("opened")){
				$(this).removeClass("opened").trigger("click");
			}
		});
	}



	// Add mask to inputs in Forms

	if($(".js-card-mask").length > 0){
		$(".js-card-mask").mask("9999 9999 9999 9999");
	}
	if($(".js-expiration-mask").length > 0){
		$(".js-expiration-mask").mask("99 / 9999");
	}
	if($(".js-expiration-short-mask").length > 0){
		$(".js-expiration-short-mask").mask("99 / 99");
	}
	if($(".js-cvv-mask").length > 0){
		$(".js-cvv-mask").mask("999");
	}
	
	
	
	
	
	
	
	

	

}; // SF_scripts end */
