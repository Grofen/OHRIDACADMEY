/* START Language Detector */

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

var code_segment = document.getElementById('shares');


function detect_code()
{


  hljs.initHighlighting();
    hljs.initHighlightingOnLoad();


$('.ui.padded.segment.shar').dimmer('show');

    setTimeout(function () {

      if (hasClass(code_segment, 'cs'))
      {
        language = 'Plase Select the Language';
      }

          else if (hasClass(code_segment, 'php'))
          {
              language = 'PHP';
          }

          else if (hasClass(code_segment, 'cpp'))
          {
              language = 'Cplus';
          }

          else if (hasClass(code_segment, 'sql'))
          {
              language = 'SQL';
          }

              else if (hasClass(code_segment, 'c'))
              {
                language = 'C';
              }

                  else if (hasClass(code_segment, 'css'))
                  {
                    language = 'CSS';

                  }
                  else {
                    $('.ui.padded.segment.shar').dimmer('hide');
                    $('.ui.inverted.black_b.button').popup('show');
                  }



    $('#p_lang').append($('<div class="text"></div>').attr('data-value', 0).text(language));
    $("#p_lang").show();
    $('.ui.padded.segment.shar').dimmer('hide');
    $("#text_button").hide();
    $("#code_button").show();
    $('#code_button').popup('show');



    $("#notification_code").transition('jiggle');

    setTimeout(function () {

    $("#notification_code").transition('fly up');


  }, 5900);




    }, 1000);





    }


/* END Language Detector */
