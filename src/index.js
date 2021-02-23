module.exports = function check(str, bracketsConfig) {
        let config = bracketsConfig.map((x)=> x.join(''));
        console.log(config);
        for(let i=0;i<config.length;){
            if (str.includes(config[i])) {
                str = str.replace(config[i], '');
                i=0;
                continue;
            }
            i++

        }
        return str.length==0 ? true : false;
}

