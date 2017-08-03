import $ from 'jquery';

var labelForInc = 0;
var labelForIDPrefix = 'labelfor___'
var labelForID = '';

if(!$.fn.labelFor) {
    var setLabel = function () {
        var $input, $this, direction, find;
        $this = $(this);
        find = $this.attr('for');
        if (find) {
            find = find.split(' ');
            direction = find.shift();
            find = find.join(' ');
            switch (direction) {
                case '_next' :
                    $input = $this.next();
                    break;
                case '_prev' :
                    $input = $this.prev();
                    break;
                default :
                    $input = {length: 0};
            }
            if ($input.length) {
                if (find) {
                    $input = $input.find(find)
                }
                if (!$input.attr('id')) {
                    labelForInc++;
                    labelForID = labelForIDPrefix + labelForInc;
                    $input.attr('id', labelForID);
                } else {
                    labelForID = $input.attr('id');
                }
                $this.attr('for', labelForID);
            }
            labelForID = '';
        }
    };

    $.fn.labelFor = function () {

        if (this[0].tagName.toLowerCase() == 'label') {
            setLabel.apply(this);
        } else {
            this.find('label').each(function () {
                setLabel.apply(this);
            });
        }
    }
}

export default function(cssExpr) {
    $(cssExpr).labelFor()
}
