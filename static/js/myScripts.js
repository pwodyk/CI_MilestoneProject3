$('#btn-add-ingredient').click(function() {
    let counter = $('#ingredient-counter').attr('value');

    counter++;

    var html_newIngredient = `
        <div class="form-row mb-1" id="ingredient${counter}">
          <div class="col-12 col-sm-6 form-group">
            <label for="ingredient${counter}_name">Ingredient<span class="d-none d-sm-inline">'s Name</span></label>
            <input type="text" class="form-control" id="ingredient${counter}_name" name="ingredient${counter}_name" placeholder="" required>
          </div>
          <div class="col-12 col-sm-6 form-group">
            <label class="d-none d-sm-block" for="ingredient${counter}_amount">Amount</label>
            <div class="input-group">
              <input type="number" class="form-control" aria-label="Text input with dropdown button" id="ingredient${counter}_amount" name="ingredient${counter}_amount" placeholder="" required>
              <div class="input-group-append">
                <select class="custom-select btn" name="ingredient${counter}_unit" id="ingredient${counter}_unit">
                  <option>g</option>
                  <option>mg</option>
                  <option>kg</option>
                  <option>ml</option>
                  <option>l</option>
                  <option>t. spoon</option>
                  <option>tb. spoon</option>
                  <option>glass</option>
                </select>
              </div>
            </div>
          </div>
        </div>`;


    $(html_newIngredient).insertAfter(`#ingredient${counter - 1}`);

    $('#ingredient-counter').attr('value', `${counter}`);
    //alert($('#ingredient-counter').attr('value'));
})

$('#btn-add-step').click(function() {
    let counter = $('#steps-counter').attr('value');

    counter++;

    var html_newStep = `
        <div class="form-row" id="step${counter}">
          <div class="col-12 mb-2">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <label for="recipe_step_${counter}" class="input-group-text">Step ${counter}</label>
              </div>
              <textarea class="form-control" id="recipe_step_${counter}" name="recipe_step_${counter}" rows="1" required></textarea>
            </div>
          </div>
        </div>`;


    $(html_newStep).insertAfter(`#step${counter - 1}`);

    $('#steps-counter').attr('value', `${counter}`);
    //alert($('#ingredient-counter').attr('value'));

})

$('#btn-rm-ingredient').click(function() {
    let counter = $('#ingredient-counter').attr('value');
    if (counter > 1) {
        $(`#ingredient${counter}`).remove();

        counter--;
        $('#ingredient-counter').attr('value', `${counter}`);
    }
})

$('#btn-rm-step').click(function() {
    let counter = $('#steps-counter').attr('value');
    if (counter > 1) {
        $(`#step${counter}`).remove();

        counter--;
        $('#steps-counter').attr('value', `${counter}`);
    }
})
