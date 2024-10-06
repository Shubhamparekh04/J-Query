$(document).ready(function(){
    $("#counter").counter({
        autoStart: true,           // true/false, default: true
        duration: 5000,             // milliseconds, default: 1500
        countFrom: 10,              // start counting at this number, default: 0
        countTo: 5000,                // count to this number, default: 0
        runOnce: true,              // only run the counter once, default: false
        placeholder: "?",           // replace the number with this before counting,
                                    // most useful with autoStart: false. default: undefined
        easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing
                                    // for all available effects, see visual examples:
                                    // http://easings.net
                                    // default: "easeOutQuad"
        onStart: function() {},     // callback on start of the counting
        onComplete: function() {},  // callback on completion of the counting
        numberFormatter:            // function used to format the displayed numbers.
          function(number) {
            return "" + ~~number;
          }
      });
});