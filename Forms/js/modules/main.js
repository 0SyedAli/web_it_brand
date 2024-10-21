import "./../form-submission.js";
import "./../form-validation.js";
import "/lib/jquery-validation/dist/jquery.validate.js";
import "/js/recaptcha.js";


var types = ['amount', 'date', 'dropdown', 'hidden', 'longanswer', 'multiplechoice', 'number', 'phone', 'rating', 'secret', 'shortanswer', 'time', 'upload'];

types.forEach(function (t) {
    if ($('[data-gjs-type="webit-' + t + '-component"]').length) {
        import('./' + t + '.js')
    }
});