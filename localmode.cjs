const log = {
    info: function(varInfo) {
        console.log('Info ' + varInfo);
    },
    warning: function(varWarning) {
        console.log('Warning ' + varWarning);
    },
    error: function(varError) {
        console.log('Error ' + varError);
    }

};
module.exports = log;