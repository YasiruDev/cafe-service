const constant = require('./constant');

exports.res = (status,msg,data,code) =>{
    return {
        status: status,
        ...(code && {code}),
        message: status?constant.MSG.SUCCESS:constant.MSG.FAIL,
        friendly_message: msg,
        ...(data && { data })
    }
}
