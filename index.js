$(document).ready(function () {
  function turnOn(e) {
    console.log($(this));
    $('.right').addClass('active');
    $(this).addClass('activeBtn');
    $('#img').attr('src', 'img/02.png');

    $('.icon.activeBtn').off('click', turnOn).on('click', turnOff);
  }

  $('.icon').on('click', turnOn);

  function turnOff(e) {
    $('.right').removeClass('active');
    $(this).removeClass('activeBtn');
    $('#img').attr('src', 'img/01.png');
    $('.icon').off('click', turnOff).on('click', turnOn);
  }

  //   =====================================================================================================

  const blue = $('.blue');
  const pink = $('.pink');
  const green = $('.green');
  const orange = $('.orange');
  let gray1 = $('.slider1');
  let gray2 = $('.slider2');
  const rightBlocks = $('.right-blocks');
  const leftBlocks = $('.left-blocks');

  let curr_blue_height = blue.height();
  let curr_pink_height = pink.height();
  let curr_green_height = green.height();
  let curr_orange_height = orange.height();

  let unlock = false;
  gray1.mousedown(function (e) {
    curr_blue_height = blue.height();
    curr_pink_height = pink.height();
    unlock = true;
  });
  $(leftBlocks).mousemove(function (e) {
    let change_blue = curr_blue_height + (e.clientY - curr_blue_height);
    let change_pink = curr_pink_height - (e.clientY - curr_blue_height);

    if (unlock) {
      if (change_blue > 100 && change_pink > 100) {
        blue.css('height', change_blue);

        pink.css('height', change_pink);
      }
    }
  });

  gray2.mousedown(function (e) {
    curr_green_height = green.height();
    curr_orange_height = orange.height();
    unlock = true;
  });
  $(rightBlocks).mousemove(function (e) {
    let change_green = curr_green_height + (e.clientY - curr_green_height);
    let change_orange = curr_orange_height - (e.clientY - curr_green_height);
    console.log(e.clientY, change_green, curr_green_height);
    if (unlock) {
      if (change_green > 100 && change_orange > 100) {
        green.css('height', change_green);
        orange.css('height', change_orange);
      }
    }
  });

  $(document).mousedown(function (e) {
    if (unlock) {
      e.preventDefault();
    }
  });
  $(document).mouseup(function (e) {
    unlock = false;
  });
});
