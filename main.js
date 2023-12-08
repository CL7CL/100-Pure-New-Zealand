
/* search-icon */

$(document).ready(function() {
  var searchIcon = $('#searchIcon');
  var searchBox = $('.search-box');

  searchIcon.click(function() {
    if (searchBox.css('opacity') === '1') {      
      searchBox.css('opacity', '0');
      searchBox.css('pointer-events', 'none');     
      searchIcon.removeClass('bx-x').addClass('bx-search-alt');
    } else {      
      searchBox.css('opacity', '1');
      searchBox.css('pointer-events', 'auto');      
      searchIcon.removeClass('bx-search-alt').addClass('bx-x');
    }
  });
});


//accommodations-cards//

$(document).ready(function() {
  $(".cta-btn").click(function(e) {
    e.preventDefault();
    showAccommodations(true);
  });

  $("#accommodationType").change(function() {
    showAccommodations(false);
  });

  function showAccommodations(buttonClicked) {
    var selectedType = $("#accommodationType").val().trim();

    console.log("Selected Type:", selectedType);

    if (buttonClicked) {
      console.log("Button Clicked");

      $(".hotels, .hostels, .motels, .houses").removeClass("visible");

      if (selectedType === "Hotel") {
        $(".hotels").addClass("visible");
      } else if (selectedType === "Hostel") {
        $(".hostels").addClass("visible");
      } else if (selectedType === "Motel") {
        $(".motels").addClass("visible");
      } else if (selectedType === "House") {
        $(".houses").addClass("visible");
      } else {
        $(".hotels, .hostels, .motels, .houses").removeClass("visible");
      }

      $(".visible")[0].scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      
      $(".hotels, .hostels, .motels, .houses").removeClass("visible");
    }
  }
});


// // Open popup//

$(document).ready(function () {
  function initializePopup(popupId, pricePerNight, minNights, maxNights) {
    var popup = $('#' + popupId);
    var numberElement = popup.find('.number');
    var totalPriceElement = popup.find('.total .Price');
    var numberOfNights = minNights; 

    function updateDisplay() {
      numberElement.text(numberOfNights);
      totalPriceElement.text('NZD$ ' + (pricePerNight * numberOfNights));
    }

    popup.find('.minus').on('click', function () {
      if (numberOfNights > minNights) {
        numberOfNights--;
        updateDisplay();
      }
    });

    popup.find('.plus').on('click', function () {
      if (numberOfNights < maxNights) {
        numberOfNights++;
        updateDisplay();
      }
    });

    popup.find('.cta-btn').on('click', function () {
    
      closePopup(popup);
    });

    popup.find('.close-btn').on('click', function () {
      closePopup(popup);
    });

    function closePopup(popup) {
      popup.fadeOut();
    }

    updateDisplay();
  }

  function bookNowAndClosePopup() {
    $('.popup:visible').fadeOut();
  }

 
  initializePopup('popup1', 157, 1, 5); 
  initializePopup('popup2', 165, 2, 5); 
  initializePopup('popup3', 160, 1, 3); 
  initializePopup('popup4', 30, 1, 10); 
  initializePopup('popup5', 34, 1, 5); 
  initializePopup('popup6', 35, 1, 7); 
  initializePopup('popup7', 90, 3, 10); 
  initializePopup('popup8', 110, 2, 8); 
  initializePopup('popup9', 110, 3, 8); 
  initializePopup('popup10', 240, 2, 15); 
  initializePopup('popup11', 220, 1, 10); 
  initializePopup('popup12', 275, 1, 3); 

  
  $('.cta-booking').on('click', function () {
    var popupId = $(this).data('popup-id');
    $('#' + popupId).fadeIn();
  });

  $('.booking-btn').on('click', function () {
    bookNowAndClosePopup();
  });
});







































