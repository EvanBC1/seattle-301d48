'use strict';

function startApp() {
    
    loadData();

  attachListeners();

<<<<<<< HEAD
  loadData();
=======
>>>>>>> 42b90377cab19822c6fca7a39669e733969d8c5f
}

function loadData() {

<<<<<<< HEAD
  $.get('data/snacks.json', 'json').then(response => {

    displaySnacks(response);

  }).catch(error => console.error(error));
}

function displaySnacks(snacks) {
  snacks.forEach(snack => {
    const $clone = $('.snack-template').clone();
    $clone.find('h2').html(snack.name);
    $clone.find('h3').html(snack.rank);
    $clone.find('h3').hide();
    $clone.find('p').html(snack.type);
    $clone.find('p').hide();
    $clone.attr('data-type', snack.type);
    $clone.removeClass('snack-template');
    $('.snacks').append($clone);
  });
}

function attachListeners() {
  $('input').on('change', event => {
    $choice = $(event.target);
    const type = $choice.val();

    if (type == 'all') {
      $('li').not('.snack-template').show();
    } else {
      $('li').hide();
      $(`li[data-type="${type}"]`).show();
    }
  });

  $('.snacks').on('click', '.snack', event => {
    $snack = $(event.currentTarget);
    alert('Rank: ' + $snack.find('h3').html());
  });
=======
    const success = snacks => displayPage(snacks);

    const failure = error => console.error(error);

    $.get('data/snacks.json', 'json')
        .then(success)
        .catch(failure);
}

function displayPage(snacks) {

    snacks.forEach(snack => {
        const $newSnack = $('.snack-template').clone();

        $newSnack.find('h2').text(snack.name);
        $newSnack.find('h3').text(snack.rank);
        $newSnack.find('p').text(snack.type);
        $newSnack.removeClass('snack-template');
        $newSnack.attr('data-type', snack.type);

        $('.snacks').append($newSnack);

    });

}

function attachListeners() {

    $('input').on('change', event => {
        const $choice = $(event.target);
        const type = $choice.val();

        if (type === 'all') {
        
            $('li').not('.snack-template').show();

        } else if (type === 'savory') {

            $('li').hide();

            $('li[data-type="savory"]').show();
            
        } else {
            
            $('li').hide();

            $('li[data-type="sweet"]').show();
        }

    });
>>>>>>> 42b90377cab19822c6fca7a39669e733969d8c5f
}

$(startApp);