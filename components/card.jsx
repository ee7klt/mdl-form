<div id ="mycard">
  <div>
    <!-- card -->
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Contact details</h2>
      </div>


      <div class="mdl-card__supporting-text">
        First, tell us how to get in touch with you!
        <form action="#"  id="contactform">

          <div id="name">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="first" required>
              <label class="mdl-textfield__label" for="sample3">First Name</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="last" required>
              <label class="mdl-textfield__label" for="sample3">Last Name</label>
            </div>
          </div>

          <div id ="contact">
            <div id="phone">
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="mobile" required>
                <label class="mdl-textfield__label" for="sample2">Mobile Phone</label>
                <span class="mdl-textfield__error">Mobile must be a number!</span>
              </div>
            </div>

            <div id="email">
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="email" id="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required >
                <label class="mdl-textfield__label" for="sample2">E-mail</label>
                <span class="mdl-textfield__error">Enter a valid email!</span>
              </div>
            </div>
          </div>
        </form>
      </div>





    </div>
    <!-- FAB button with ripple -->
    <div>


      <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored next"  id="next" disabled>
        <i class="material-icons">arrow_forward</i>
      </button>

    </div>
  </div>
</div>
